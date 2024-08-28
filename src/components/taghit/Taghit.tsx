'use client';

import React, { useEffect, useState } from 'react';

import { getTagHit } from '@/api/homePageApiService';

import MuiTables from '../mui/Table';

const Taghit = ({ className }: { className: string }) => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTagHit();
      const tagHitData = data.data.map((item: any) => ({
        name: item.name,
      }));
      setTableData(tagHitData);
    };
    fetchData();
  }, []);
  return (
    <div className={className}>
      <MuiTables tableData={tableData} tableTitle="Tag Hit" width="100%" isTagHit />
    </div>
  );
};

export default Taghit;
