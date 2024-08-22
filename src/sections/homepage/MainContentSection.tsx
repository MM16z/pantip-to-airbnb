'use client';

import { useCallback, useEffect } from 'react';

import { getTabsContent } from '@/api/homePageApiService';
import CardComponent from '@/components/card/Card';
import { setMainContentState } from '@/state/features/homePageSlice';
import { useAppDispatch, useAppSelector } from '@/state/hook';

export default function MainContentSection() {
  const dispatch = useAppDispatch();
  const useMaincontentState = useAppSelector(state => state.homePage.mainContentState);
  const useTabsState = useAppSelector(state => state.homePage.roomTabsState);
  const useCurrentTabName = useAppSelector(state => state.homePage.currentTabName);

  const getAllRoomsData = useCallback(async () => {
    if (useCurrentTabName) {
      if (useTabsState) {
        const response = await getTabsContent(useCurrentTabName);
        if (response) {
          dispatch(setMainContentState(response.data));
        }
      }
    }
  }, [useCurrentTabName, useTabsState, dispatch]);
  useEffect(() => {
    getAllRoomsData();
  }, [useCurrentTabName, getAllRoomsData]);

  return (
    <div element-attb="content-container" className="grid grid-cols-1 items-center gap-8 pb-10 pt-4 sm:grid-cols-2 sm:pt-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {/* <CardComponent /> */}
      {useMaincontentState?.map(data => (
        <CardComponent key={data?.topic_id} contentImageUrl={data?.thumbnail_url || data?.cover_img} contentTitle={data?.title} author={data?.author?.name} />
      ))}
    </div>
  );
}
