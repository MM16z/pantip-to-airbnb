import { createSlice } from '@reduxjs/toolkit';

// add types later
export type homePageState = {
  roomTabsState: any[];
  mainContentState: any[];
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
