'use client';

import React, { useEffect, useState } from 'react';

import { getHighlight } from '@/api/homePageApiService';
import MuiCarousel from '@/components/carousel/MuiCarousel';

const Highlight = () => {
  const [highlight, setHighlight] = useState([]);

  useEffect(() => {
    const fetchHighlight = async () => {
      const response = await getHighlight();
      if (response) {
        setHighlight(response.data);
      }
    };
    fetchHighlight();
  }, []);
  return (
    <div className="rounded-lg bg-[#ddb3ff71] p-4 pb-8">
      <div className="mb-3 text-2xl font-bold text-[#fbc02d]">Highlight</div>
      <MuiCarousel data={highlight} />
    </div>
  );
};

export default Highlight;
