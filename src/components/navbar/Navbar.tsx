import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

import NavbarSearchInput from './NavbarSearchInput';

export default function Navbar() {
  return (
    <nav className="size-full h-[168px] border-b border-gray-200">
      <div element-attb="navbar-row-1" className="flex h-2/5 flex-row items-center justify-center gap-x-6 px-6 sm:justify-between sm:gap-x-0 sm:px-20">
        <div element-attb="navbar-row-1-col-1" className="h-[48px] w-[96px]">
          <Image alt="logo" src="https://upload.wikimedia.org/wikipedia/th/thumb/c/c5/Pantip_Logo.png/800px-Pantip_Logo.png?20150807164208" style={{ borderRadius: '8px' }} width={100} height={100}></Image>
        </div>
        <div element-attb="navbar-row-1-col-2" className=" hidden h-[48px] w-[96px] flex-row items-center justify-center sm:flex">
          <div className="top-1/2 hidden text-center text-2xl font-bold text-gray-600 sm:block">กระทู้</div>
        </div>
        <div element-attb="navbar-row-1-col-3" className="h-[48px] w-[96px]">
          <div className="flex size-full flex-row items-center justify-center gap-x-3 rounded-3xl border border-gray-300">
            <div element-attb="navbar-row-1-col-1" className="">
              <MenuIcon />
            </div>
            <div element-attb="navbar-row-1-col-2" className="">
              <AccountCircleIcon />
            </div>
          </div>
        </div>
      </div>
      <div element-attb="navbar-row-2" className="flex h-3/5 flex-row justify-around">
        <NavbarSearchInput />
      </div>
    </nav>
  );
}
