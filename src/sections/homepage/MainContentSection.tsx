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
    <div element-attb="content-container" className="content-container grid grid-cols-1 items-center gap-8 px-0 pb-10 pt-4 sm:grid-cols-2 sm:px-14 sm:pt-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
      {useMaincontentState?.map(data => (
        <CardComponent
          key={data?.topic_id}
          contentImageUrl={data?.thumbnail_url || data?.cover_img}
          contentTitle={data?.title}
          author={data?.author?.name}
          tags={data?.tags}
          commentCount={data?.comments_count || data?.total_comment}
          createdTime={data?.created_time}
          id={data?.topic_id}
        />
      ))}
    </div>
  );
}
