// import React from 'react'
// import SideBarComp from './SideBarComp';
// import { SidebarItem } from './SideBarComp';
// import { RxDiscordLogo } from "react-icons/rx";
// import { IoHomeOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { MdWorkOutline } from "react-icons/md";
// import { RiLogoutCircleLine } from "react-icons/ri";

// export const SideBar = () => {
//   return (
//     <>
//       <SideBarComp className="fixed top-0 left-0 w-100 z-40 h-full bg-white shadow-md transform translate-x-0 transition-transform duration-300 ease-in-out">
//         <SidebarItem icon={<IoHomeOutline size={20} />} text="Home" alert />
//         <SidebarItem icon={<CgProfile size={20} />} text="Profile" alert />
//         <SidebarItem icon={<MdWorkOutline size={20} />} text="Projects" alert />
//         <SidebarItem icon={<RxDiscordLogo size={20} />} text="Provider" alert />
//         <SidebarItem
//           icon={<RiLogoutCircleLine size={20} className="text-red-400" />}
//           text="Logout"
//           alert
//         />
//       </SideBarComp>
//     </>
//   );
// }

// export default SideBar

import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import Image from "next/image";
import { IMAGE } from "../../public/config/index";
import { RxDiscordLogo } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdWorkOutline } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

export const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 font-inter">
      <div
        className={` ${
          open ? "w-auto" : "w-auto "
        } bg-primary-darkgrey h-screen p-5  pt-8 relative duration-300`}
      >
        <div className="flex gap-x-4 items-center mb-32">
          <Image
            src={IMAGE.IMAGE_ONLY_COLOR}
            className={`cursor-pointer duration-500 h-7 w-auto ${
              open && "rotate-[360deg]"
            }`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="space-y-8">
          <a href="/homePage" className="">
            <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-primary-lightgrey text-sm items-center gap-x-4 mb-8">
              <IoHomeOutline className="h-6 w-auto" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-lg`}
              >
                Home
              </span>
            </div>
          </a>
          <a href="/user/profile">
            <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-primary-lightgrey text-sm items-center gap-x-4 mb-8">
              <CgProfile className="h-6 w-auto" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-lg`}
              >
                Profile
              </span>
            </div>
          </a>
          <a href="/projects">
            <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-primary-lightgrey text-sm items-center gap-x-4 mb-8">
              <MdWorkOutline className="h-6 w-auto" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-lg`}
              >
                Projects
              </span>
            </div>
          </a>
          <a href="/providers">
            <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-primary-lightgrey text-sm items-center gap-x-4 mb-8">
              <RxDiscordLogo className="h-6 w-auto" />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-lg`}
              >
                Providers
              </span>
            </div>
          </a>
          <a href="/">
            <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-primary-lightgrey text-sm items-center gap-x-4 mb-8">
              <RiLogoutCircleLine className="h-6 w-auto text-red-400 " />
              <span
                className={`${
                  !open && "hidden"
                } origin-left duration-200 text-lg text-red-400`}
              >
                Logout
              </span>
            </div>
          </a>
        </div>
      </div>
      {/* <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div> */}
    </div>
  );
};
export default SideBar;
