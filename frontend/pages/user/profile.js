import React from "react";
import Image from "next/image";
import { IMAGE } from "../../public/config/index";

export const profile = () => {
  return (
    <>
      <div class="flex items-center justify-center bg-yellow-300 bg-[url('../public/assets/background/SnowyMountainFooter.jpg')]">
        <div class="bg-green-300 w-2/5 mt-10 rounded-lg h-[90vh] overflow-hidden">
          <div class="flex items-center justify-center pt-10 flex-col">
            <Image src={IMAGE.AVATAR_1} class="rounded-full w-32" />
            <h1 class="text-gray-800 font-semibold text-xl mt-5">Bae Suzy</h1>
            <h1 class="text-gray-500 text-sm">Seoul, South Korea</h1>
            <h1 class="text-gray-500 text-sm p-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
          </div>
          <div class="flex justify-between p-4">
            <div>
              <h1 class="text-xs uppercase text-gray-500">Membership</h1>
              <h1 class="text-xs text-yellow-500">Gold Member</h1>
            </div>
            <div>
              <button class="text-xs text-green-300 border-2 py-1 px-2 border-green-300">
                Renew
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center mt-3 mb-6 flex-col">
            <h1 class="text-xs text-gray-500">Get Connected</h1>
            <div class="flex mt-2">
              <img
                src="https://www.iconsdb.com/icons/preview/gray/facebook-xxl.png"
                alt=""
                class="w-6 border-2 p-1 rounded-full mr-3"
              />
              <img
                src="https://www.iconsdb.com/icons/preview/gray/twitter-xxl.png"
                alt=""
                class="w-6 border-2 p-1 rounded-full mr-3"
              />
              <img
                src="https://www.iconsdb.com/icons/preview/gray/google-plus-xxl.png"
                alt=""
                class="w-6 border-2 p-1 rounded-full mr-3"
              />
              <img
                src="https://www.iconsdb.com/icons/preview/gray/instagram-6-xxl.png"
                alt=""
                class="w-6 border-2 p-1 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <section className="relative block h-[500px]">
        <div className="w-full bg-cover absolute top-0 h-full bg-[url('../public/assets/background/SnowyMountainFooter.jpg')]">
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
      </section>

      <section className="relative py-16 bg-blueGray-200">
        <div className="bg-green-300 w-2/5 mt-10 rounded-lg h-[90vh] overflow-auto self-center items-center justify-center">
          <div className="flex items-center justify-center pt-10 flex-col">
            <Image src={IMAGE.AVATAR_1} className="rounded-full w-32" />
            <p className="text-gray-800 font-semibold text-xl mt-5">Bae Suzy</p>
            <p className="text-gray-500 text-sm">Seoul, South Korea</p>
            <p className="text-gray-500 text-sm p-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex justify-between p-4">
            <div>
              <p className="text-xs uppercase text-gray-500">Membership</p>
              <p className="text-xs text-yellow-500">Gold Member</p>
            </div>
            <div>
              <button className="text-xs text-green-300 border-2 py-1 px-2 border-green-300">
                Renew
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3 mb-6 flex-col">
            <p className="text-xs text-gray-500">Get Connected</p>
            <div className="flex mt-2">
              <img
                src="https://www.iconsdb.com/icons/preview/gray/facebook-xxl.png"
                alt=""
                className="w-6 border-2 p-1 rounded-full mr-3"
              />
              <img
                src="https://www.iconsdb.com/icons/preview/gray/twitter-xxl.png"
                alt=""
                className="w-6 border-2 p-1 rounded-full mr-3"
              />
              <img
                src="https://www.iconsdb.com/icons/preview/gray/google-plus-xxl.png"
                alt=""
                className="w-6 border-2 p-1 rounded-full mr-3"
              />
              <img
                src="https://www.iconsdb.com/icons/preview/gray/instagram-6-xxl.png"
                alt=""
                className="w-6 border-2 p-1 rounded-full"
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default profile;
