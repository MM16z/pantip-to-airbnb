import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

import { MuiTypography } from '@/components/mui/Typography';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6b21a8',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd), &:nth-of-type(even)': {
    backgroundColor: '#ddb3ff71',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const convertTextToDisplay = (text: string) => {
  const modifiedText = text
    .replace(/<strong>/g, '<strong style="color: #fbc02d;">')
    .replace(/<a /g, `<a style="font-family: '__Prompt_d0462b', '__Prompt_Fallback_d0462b';" `);
  return <div dangerouslySetInnerHTML={{ __html: modifiedText }} />;
};

export default function MuiTables({ tableData, tableTitle, width, isPantipPick, isTagHit }: any) {
  return (
    <TableContainer component={Paper} sx={{ width: width || '100%' }}>
      <Table sx={{ width: '100%' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <MuiTypography sx={{ color: '#fbc02d', fontWeight: 'bold' }} className="text-2xl">
                {tableTitle || 'Announce'}
              </MuiTypography>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row: any) => (
            <StyledTableRow
              key={row.name}
              className="cursor-pointer"
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('asdasdasd', row);
                if (isPantipPick) {
                  window.open(`https://pantip.com/topic/${row.topic_id}`, '_blank');
                } else if (isTagHit) {
                  window.open(`https://pantip.com/tag/${row.name}`, '_blank');
                } else {
                  // window.open(`https://pantip.com/topic/${row.topic_id}`, '_blank');
                }
              }}
            >
              <StyledTableCell className="flex flex-col border-b border-gray-400">
                {isPantipPick
                  ? (
                      <MuiTypography className="font-bold">{row.title}</MuiTypography>
                    )
                  : (
                      convertTextToDisplay(row.name)
                    )}
                {isPantipPick && <MuiTypography>{row.author.name}</MuiTypography>}
                {isPantipPick && (
                  <MuiTypography className="self-end">
                    {new Date(row.created_time).toLocaleDateString('th-TH', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </MuiTypography>
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
