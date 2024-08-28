'use client';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

import { getAllRooms, getTabsContent } from '@/api/homePageApiService';
import { setCurrentRoomName, setCurrentTabName, setMainContentState, setRoomTabsState } from '@/state/features/homePageSlice';
import { useAppDispatch, useAppSelector } from '@/state/hook';

export default function TabsComponent() {
  const dispatch = useAppDispatch();
  const useTabsState = useAppSelector(state => state.homePage.roomTabsState);
  const [value, setValue] = useState(0);
  const [currentTopicName, setCurrentTopicName] = useState('');

  const onTabClick = async (topicName: string, roomName: string) => {
    setCurrentTopicName(topicName);
    dispatch(setCurrentRoomName(roomName));
  };

  const getAllTopicData = useCallback(async () => {
    const response = await getTabsContent(currentTopicName);
    if (response) {
      dispatch(setMainContentState(response.data));
    }
  }, [currentTopicName, dispatch]);

  const getAllRoomsData = useCallback(async () => {
    const response = await getAllRooms();
    const initialTabsName = response?.data[0]?.name_en;
    const initialRoomName = response?.data[0]?.name;
    if (response) {
      dispatch(setRoomTabsState(response.data));
      dispatch(setCurrentTabName(initialTabsName));
      dispatch(setCurrentRoomName(initialRoomName));
    }
  }, [dispatch]);

  useEffect(() => {
    getAllRoomsData();
  }, [getAllRoomsData]);

  useEffect(() => {
    if (currentTopicName !== '') {
      getAllTopicData();
    }
  }, [currentTopicName, getAllTopicData]);

  return (
    <Tabs
      className=""
      value={value}
      onChange={(_: React.SyntheticEvent, value) => {
        setValue(value);
      }}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs"
      TabScrollButtonProps={{
        sx: {
          scale: '2',
          marginTop: '-14px',
        },
      }}
      TabIndicatorProps={{
        sx: {
          // 'backgroundColor': 'black',
        },
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
      textColor="inherit"
      sx={{
        '& .MuiButtonBase-root.MuiTab-root': {
          rowGap: '2px',
        },
        '& .MuiTabs-indicatorSpan': {
          maxWidth: 40,
          width: '100%',
          backgroundColor: '#6b21a8b6',
        },
        '& .MuiTouchRipple-root': {
          opacity: 0,
        },
        '& .MuiTabs-indicator': {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        },
        '& .MuiTabs-scrollButtons.Mui-disabled': {
          opacity: 0.3,
        },
        '& .MuiTabs-scrollButtons': {
          'backgroundColor': 'transparent',
          'transition': 'none',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '&:active': {
            backgroundColor: 'transparent',
          },
        },
        '& .MuiSvgIcon-root': {
          border: '1px solid grey',
          borderRadius: '50%',
          scale: '0.8',
        },
      }}
    >
      {useTabsState?.map((data: any) => (
        <Tab
          label={data?.name}
          key={data?.id}
          onClick={() => {
            onTabClick(data?.name_en, data?.name);
          }}
          sx={{
            fontFamily: 'inherit',
            backgroundColor: '#ba66ff44',
            borderRadius: '20px',
            padding: '0px',
            minWidth: '80px',
            marginRight: '16px',
          }}
          icon={(
            <Image
              alt="icon"
              src={data?.room_icon_url}
              width={32}
              height={32}
              style={{ backgroundColor: '#6b21a8b6', borderRadius: '50%' }}
            />
          )}
        />
      ))}
    </Tabs>
  );
}
