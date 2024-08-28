'use client';
import { Tabs } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import NoImagePng from '@/assets/images/no-image.png';

import { MuiTypography } from '../mui/Typography';

export default function MuiCarousel({ data }: any) {
  const [value, setValue] = useState(0);
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
          backgroundColor: 'transparent',
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
        '& .MuiTouchRipple-root': {
          opacity: 0,
        },
        '& .MuiSvgIcon-root': {
          border: '1px solid grey',
          borderRadius: '50%',
          scale: '0.8',
        },
      }}
    >
      <div className="flex flex-row">
        {Array.isArray(data) && data.map((item: any) => {
          const imageUrl = item.image_url[2];

          return (
            <div
              className="mr-6 h-auto w-[250px] cursor-pointer rounded-lg"
              key={item.id}
              style={{ backgroundColor: 'rgba(150, 87, 218, 0.10)' }}
              role="button"
              tabIndex={0}
              onClick={() => {
                // eslint-disable-next-line no-console
                console.log('item', item);
                window.open(item.post_url, '_blank');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  // window.open(`https://pantip.com/topic/${item.topic_id}`, '_blank');
                }
              }}
            >
              <Image
                height={250}
                style={{
                  objectFit: 'cover',
                  maxHeight: '250px',
                  minHeight: '250px',
                  borderRadius: '12px',
                }}
                alt={item.name || 'Topic image'}
                src={!item?.image_url ? NoImagePng : imageUrl}
                width={263}
              />
              <MuiTypography sx={{ wordWrap: 'break-word', whiteSpace: 'balance' }} className="mt-4 pb-4 text-center font-bold">
                {item.name}
              </MuiTypography>
            </div>
          );
        })}
      </div>
    </Tabs>
  );
}
