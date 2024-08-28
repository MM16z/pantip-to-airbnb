import Announcement from '@/components/annoucement/Annoucement';
import Footer from '@/components/footer/Footer';
import Highlight from '@/components/highlight/Highlight';
import PantipPick from '@/components/pantip-pick/PantipPick';
import TabsComponent from '@/components/tabs/Tabs';
import TagHit from '@/components/taghit/Taghit';
import CurrentRoom from '@/sections/homepage/CurrentRoom';
import MainContentSection from '@/sections/homepage/MainContentSection';

export default async function Index() {
  return (
    <div className="flex flex-col px-6">
      <div element-attb="announcement-container" className="w-full self-start pt-6">
        <Announcement />
      </div>
      <div element-attb="highlight-container" className="mt-4">
        <Highlight />
      </div>
      <div element-attb="tag-hit-container" className="mt-4">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-7">
            <PantipPick />
          </div>
          <div className="col-span-3">
            <TagHit className="" />
          </div>
        </div>
      </div>
      <div
        element-attb="tabs-container"
        className="mt-4 max-w-full self-center rounded-lg border
       border-purple-200 bg-[#ddb3ff71] px-4 py-[16px] sm:my-4 sm:mr-0 sm:self-center
       sm:py-[12px]"
      >
        <div className="mb-2 text-2xl font-bold text-[#fbc02d]">
          เลือกห้อง
        </div>
        <TabsComponent />
      </div>
      <div element-attb="main-content-section" className="mt-0 self-center sm:mt-4">
        <CurrentRoom />
        <MainContentSection />
      </div>
      <Footer />
    </div>
  );
}
