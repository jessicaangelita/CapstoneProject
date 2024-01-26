import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import Image from "next/image";
import { IMAGE } from "../../public/config/index";
import { RxDiscordLogo } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdWorkOutline } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbMenu2 } from "react-icons/tb";

export const SideBarHome = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed top-0 left-0 font-inter">
      <div
        className={`${
          open ? "w-72 pl-3 pr-3" : "w-12 sm:w-16"
        } bg-primary-darkgrey h-screen  pt-8 relative duration-300`}
      >
        <div
          className={` ${
            open ? "justify-end" : "justify-center"
          } flex gap-x-4 items-center mb-24 w-full`}
        >
          <TbMenu2
            className="cursor-pointer duration-500 h-7 w-auto text-primary-lightgrey"
            onClick={() => setOpen(!open)}
            alt="Logo"
          />
        </div>
        <div className="flex">
          <div className={` ${open ? "" : "ml-auto mr-auto"} space-y-8`}>
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

        <div className="mt-20">
          <Image
            src={IMAGE.IMAGE_ONLY_COLOR}
            className={`cursor-pointer duration-500 h-7 w-auto ml-3 ${
              open && "rotate-[360deg]"
            }`}
            onClick={() => setOpen(!open)}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};
export default SideBarHome;
