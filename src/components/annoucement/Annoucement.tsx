'use client';

import React, { useEffect, useState } from 'react';

import { getAnnouncement } from '@/api/homePageApiService';
import MuiTables from '@/components/mui/Table';

const Annoucement = () => {
  const [announcement, setAnnouncement] = useState<{ name: string }[]>([]);
  useEffect(() => {
    const fetchAnnouncement = async () => {
      const response = await getAnnouncement();
      const data = response.data.map((announcement: any) => ({
        name: announcement.display_message,
      }));
      setAnnouncement(data);
    };
    fetchAnnouncement();
  }, []);
  return (
    <div className="w-full">
      <MuiTables tableData={announcement} />
    </div>
  );
};

export default Annoucement;
