import React from 'react'
import { IMAGE } from "../../../public/config/index";
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
    <header className="fixed top-2 right-0 font-inter h-20 w-full flex justify-between items-center bg-transparent px-8 md:px-14 lg:px-20">
      {/* Logo JICO */}
      <div className="flex">
        <a href="#JICO">
          <Image
            src={IMAGE.NO_TAGLINE_LIGHT_BLUE}
            className="h-7 md:h-10 lg:h-11 w-auto cursor-pointer"
          />
        </a>
      </div>

      {/* Right Side */}
      <div className="flex space-x-10 justify-center">
        <Link className="font-extrabold text-primary-lightblue py-1 hover:underline" href="/auth/sign-in">
          Sign In
        </Link>
        <Link
          className="text-white font-semibold bg-primary-lightblue py-1 px-5 lg:px-10 hover:underline rounded-md"
          href="/auth/sign-up"
        >
          Sign Up
        </Link>
      </div>

      {/* 
        <div className="space-x-4">
          <Link className="text-white hover:text-gray-300 font-semibold" href="/signUpPage">
            Register
          </Link>
          <Link className="text-white hover:text-gray-300 font-semibold" href="/signInPage">
            Sign In
          </Link>
        </div> */}
      </header>
    </>
  )
}

export default Navbar;