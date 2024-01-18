import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGE } from "../public/config/index";

const HeaderHome = () => {
  return (
    <div className="relative">
      <header className="py-4 px-6 flex justify-between items-center bg-primary-darkgrey">
        {/* Sidebar */}
        <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
          <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
              <Image
                src={IMAGE.IMAGE_ONLY_COLOR}
                className="h-7 md:h-10 lg:h-11 w-auto cursor-pointer"
              />
              <h1 class="font-bold text-gray-200 text-2xl ml-3">JICO</h1>
              <i
                class="bi bi-x cursor-pointer ml-28 lg:hidden"
                onClick="openSidebar()"
              />
            </div>
            <div class="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i class="bi bi-house-door-fill"></i>
            <a
              href="/homePage"
              class="flex justify-between w-full items-center"
            >
              <span class="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
            </a>
          </div>
          <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i class="bi bi-bookmark-fill"></i>
            <a href="/profile" class="flex justify-between w-full items-center">
              <span class="text-[15px] ml-4 text-gray-200 font-bold">
                Profile
              </span>
            </a>
          </div>
          <div class="my-4 bg-gray-600 h-[1px]"></div>
          <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i class="bi bi-box-arrow-in-right"></i>
            <a
              href="/projects"
              class="flex justify-between w-full items-center"
            >
              <span class="text-[15px] ml-4 text-gray-200 font-bold">
                Projects
              </span>
            </a>
          </div>
          <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i class="bi bi-box-arrow-in-right"></i>
            <a
              href="/providers"
              class="flex justify-between w-full items-center"
            >
              <span class="text-[15px] ml-4 text-gray-200 font-bold">
                Providers
              </span>
            </a>
          </div>
          <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i class="bi bi-box-arrow-in-right"></i>
            <a href="/" class="flex justify-between w-full items-center">
              <span class="text-[15px] ml-4 text-gray-200 font-bold">
                Logout
              </span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderHome;
