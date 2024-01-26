import React, {useState} from 'react'
import SideBar from '../../components/sidebar/SideBar';
import Head from 'next/head';
import Image from 'next/image';
import {IMAGE} from '../../public/config/index'
import { FaRegEnvelope, FaArrowLeft, FaTimes } from "react-icons/fa";
import { MdPermIdentity, MdLockOutline } from "react-icons/md";
import { BiHide, BiShow, BiSolidInfoCircle } from "react-icons/bi";
import ProfileFooter from '../../components/footer/ProfileFooter';

export const changePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleBack = () => {
      router.push("/user/profile");
    };
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="flex items-center justify-center bg-[url('../public/assets/background/SnowyMountainFooter.jpg')] min-h-screen">
        <div className="bg-primary-grey">
          <SideBar />
        </div>

        <div className=" bg-primary-white w-2/5 mt-10 rounded-lg h-[90vh] overflow-auto mb-10">
          <div className="flex items-center justify-center pt-10 flex-col">
            <Image
              src={IMAGE.AVATAR_1}
              className="rounded-full w-32 border-primary-lightblue border-solid border-2 mb-8 mt-5"
            />
            <p className="text-4xl font-semibold leading-normal mb-2 inline">
              Change Password
            </p>
            <FaArrowLeft
              className="cursor-pointer right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2  focus:ring-offset-2 disabled:pointer-events-none text-primary-mediumblue font-extrabold sm:w-[15%] md:w-[15%] lg:w-[11%] xl:w-[9%] 2xl:w-[7%] h-auto mr-auto ml-[4%] mb-6 text-center hover:text-primary-darkblue duration-200 px-3 inline-flex items-center justify-center whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:opacity-50py-2 text-base"
              onClick={handleBack}
            />
          </div>
          <div className=" space-y-6 mx-10">
            {/* Old Password */}
            <div className="space-y-2">
              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                Old Password
              </label>

              <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                <MdLockOutline className="m-[1%] text-slate-700" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                />

                {showPassword ? (
                  <BiHide
                    onClick={() => setShowPassword(false)}
                    className="cursor-pointer"
                  />
                ) : (
                  <BiShow
                    onClick={() => setShowPassword(true)}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
            {/* New Password */}
            <div className="space-y-2">
              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                New Password
              </label>

              <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                <MdLockOutline className="m-[1%] text-slate-700" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                />

                {showPassword ? (
                  <BiHide
                    onClick={() => setShowPassword(false)}
                    className="cursor-pointer"
                  />
                ) : (
                  <BiShow
                    onClick={() => setShowPassword(true)}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                Confirm Password
              </label>

              <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                <MdLockOutline className="m-[1%] text-slate-700" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                />

                {showPassword ? (
                  <BiHide
                    onClick={() => setShowPassword(false)}
                    className="cursor-pointer"
                  />
                ) : (
                  <BiShow
                    onClick={() => setShowPassword(true)}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>
          <ProfileFooter />
        </div>
      </div>
    </>
  );
}
export default changePassword