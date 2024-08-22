import { createSlice } from '@reduxjs/toolkit';

export type roomTabsStateType = {
  id: number;
  name_en: string;
  name: string;
  room_icon_url: string;
};

export type mainContentStateType = {
  topic_id: number;
  title: string;
  tags: {
    name: string;
  }[];
  thumbnail_url: string;
  author: {
    name: string;
  };
  cover_img: string;
  comments_count: number;
  created_time: string;
};

// add types later
export type homePageState = {
  roomTabsState: roomTabsStateType[];
  mainContentState: mainContentStateType[];
  currentTabName: string;
};

const initialState: homePageState = {
  roomTabsState: [],
  mainContentState: [],
  currentTabName: '',
};

export const homePageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setRoomTabsState: (state: any, action) => {
      state.roomTabsState = action.payload;
    },
    setMainContentState: (state: any, action) => {
      state.mainContentState = action.payload;
    },
    setCurrentTabName: (state: any, action) => {
      state.currentTabName = action.payload;
    },
  },
});

export const { setMainContentState, setRoomTabsState, setCurrentTabName } = homePageSlice.actions;

export default homePageSlice.reducer;
