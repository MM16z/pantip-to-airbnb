'use client';

import React, { useEffect, useState } from 'react';

import { getPantipPick } from '@/api/homePageApiService';
import MuiTables from '@/components/mui/Table';

const PantipPick = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const fetchPantipPick = async () => {
      const response = await getPantipPick();
      setTableData(response.data);
    };
    fetchPantipPick();
  }, []);
  return (
    <div>
      <MuiTables tableData={tableData} tableTitle="Pantip Pick" isPantipPick width="100%" />
    </div>
  );
};

export default PantipPick;
