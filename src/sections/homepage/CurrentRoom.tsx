'use client';

import React from 'react';

import { useAppSelector } from '@/state/hook';

const CurrentRoom = () => {
  const useCurrentRoom = useAppSelector(state => state.homePage.currentRoomName);
  return (
    <div className="mb-4 flex flex-row items-center">
      <div className="text-2xl font-bold">ห้องที่เลือก: </div>
      <div className="ml-2 text-2xl font-bold text-[#fbc02d]">
        {' '}
        {useCurrentRoom}
      </div>
    </div>
  );
};

export default CurrentRoom;
