'use client';

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

import { searchTopic } from '@/api/homePageApiService';
import { setMainContentState } from '@/state/features/homePageSlice';
import { useAppDispatch } from '@/state/hook';

export default function NavbarSearchInput() {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState('');

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value?.toString());
  };

  const getAllRoomsData = async () => {
    if (value) {
      const response = await searchTopic({
        keyword: value,
        page: 1,
        rooms: [],
        timebias: true,
      });
      if (response) {
        dispatch(setMainContentState(response.data));
      }
    }
  };

  return (
    <div element-attb="navbar-row-2-col-1" className=" mt-3 flex h-[56px] w-full max-w-[850px] flex-row items-center justify-between rounded-full border border-gray-200 px-4 shadow-[0px_10px_20px_0px_#e2e8f0] sm:mt-0 sm:h-[66px]">
      <input
        className="w-full rounded-full border-none bg-gray-100 p-3 text-gray-700 placeholder:text-gray-400"
        placeholder="ค้นหาบน pantip"
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            if (value) {
              getAllRoomsData();
            }
          }
        }}
        onSubmit={getAllRoomsData}
        onChange={onSearchInputChange}
      />
      <SearchIcon className="ml-5 cursor-pointer rounded-full border border-red-600 bg-[#ff385c] px-1 hover:opacity-70" sx={{ color: 'white' }} fontSize="large" onClick={getAllRoomsData} />
    </div>
  );
}
