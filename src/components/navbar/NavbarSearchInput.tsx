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
        window.scrollTo({
          top: (document.querySelector('.content-container') as HTMLElement)?.offsetTop || 0,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <div element-attb="navbar-row-2-col-1" className=" mt-3 flex h-[56px] w-full max-w-[850px] flex-row items-center justify-between rounded-full border border-gray-200 px-4 shadow-[0px_10px_20px_0px_#e2e8f0] sm:mt-0 sm:h-[66px]">
      <div className="flex w-full flex-row justify-center">
        <input
          className="w-full rounded-full border-none bg-gray-100 p-3 text-gray-700 outline-none transition-all duration-300 ease-in-out placeholder:text-gray-400 focus:w-[98%]"
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
      </div>
      <SearchIcon className="ml-5 cursor-pointer rounded-full border border-red-600 bg-[#ff385c] px-1 hover:opacity-70" sx={{ color: 'white' }} fontSize="large" onClick={getAllRoomsData} />
    </div>
  );
}
