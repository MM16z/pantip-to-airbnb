import TabsComponent from '@/components/tabs/Tabs';
import MainContentSection from '@/sections/homepage/MainContentSection';

export default async function Index() {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div element-attb="tabs-container" className="max-w-full px-4 py-[12px]">
        <TabsComponent />
      </div>
      <MainContentSection />
      <div className="pb-10">
        example api = https://pantip.com/api/forum-service/forum/room_topic?room=siliconvalley&limit=50&next_id=42916592
        <br />
        query =
        {' '}
        {`{room: siliconvalley
        limit: 50
        next_id: 42916592}`}
        <br />
        ps to query other data still dont know how next_id is
        {' '}
      </div>
    </div>
  );
}
