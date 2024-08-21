import { configureStore } from '@reduxjs/toolkit';

import homePageSlice from './features/homePageSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      homePage: homePageSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
