import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCommentIcon from '@mui/icons-material/AddComment';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

import NavbarSearchInput from './NavbarSearchInput';

export default function Navbar() {
  return (
    <nav className="size-full h-fit border-b-0 px-0 sm:h-[168px] sm:border-b sm:border-gray-200 sm:px-24">
      <div element-attb="navbar-row-1" className="hidden h-[80px] flex-row items-center justify-center gap-x-6 px-6 sm:flex sm:justify-between sm:gap-x-0 sm:px-0">
        <div element-attb="navbar-row-1-col-1" className="h-[48px] w-[96px]">
          <Image alt="logo" src="https://upload.wikimedia.org/wikipedia/th/thumb/c/c5/Pantip_Logo.png/800px-Pantip_Logo.png?20150807164208" style={{ borderRadius: '8px' }} width={100} height={100}></Image>
        </div>
        <div element-attb="navbar-row-1-col-2" className=" hidden h-[48px] w-[96px] flex-row items-center justify-center sm:flex">
          <div className="top-1/2 hidden text-nowrap text-center text-2xl font-bold text-gray-600 sm:block">กระทู้ Pantip</div>
        </div>
        <div element-attb="navbar-row-1-col-3" className="mr-14 hidden h-[48px] w-full max-w-[96px] flex-row items-center justify-center gap-x-3 md:flex">
          <div className="flex flex-row items-center">
            <AddCommentIcon />
            <div className="whitespace-nowrap pl-2 pr-3 text-sm font-bold text-gray-600">ตั้งกระทู้</div>
            <GroupsIcon />
            <div className="whitespace-nowrap pl-2 text-sm font-bold text-gray-600">คอมมิวนิตี้</div>
          </div>
          <div className="flex size-full max-w-[100px] flex-row items-center justify-center gap-x-3 rounded-3xl border border-gray-300 px-3">
            <div element-attb="navbar-row-1-col-1" className="">
              <MenuIcon />
            </div>
            <div element-attb="navbar-row-1-col-2" className="">
              <AccountCircleIcon />
            </div>
          </div>
        </div>
      </div>
      <div element-attb="navbar-row-2" className="flex h-[64px] flex-row justify-around px-3 sm:h-[88px]">
        <NavbarSearchInput />
      </div>
    </nav>
  );
}
