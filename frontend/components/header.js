import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IMAGE} from '../public/config/index';

export default function Header() {
  return (
    <header className="fixed top-4 right-0 font-inter h-20 w-full flex justify-between items-center bg-transparent px-5 md:px-8 lg:px-10">
      <div className="flex">
        <a><Image src={IMAGE.NO_TAGLINE_LIGHT_BLUE} className="h-7 md:h-10 lg:h-11 w-auto cursor-pointer"/></a>
      </div>
      <div className="flex">
        <Link className="text-white font-semibold" href="/signInPage">Sign In
        </Link>
        <Link href="/signUpPage">Sign Up
        </Link>
      </div>


      {/* <nav className="flex justify-center items-center space-x-8">
        <Link className="text-white hover:text-gray-300 font-semibold" href="/homePage">
          Home
        </Link>
        <Link className="text-white hover:text-gray-300 font-semibold" href="/">
          Features
        </Link>
      </nav>
      <div className="space-x-4">
        <Link className="text-white hover:text-gray-300 font-semibold" href="/signUpPage">
          Sign Up
        </Link>
        <Link className="text-white hover:text-gray-300 font-semibold" href="/signInPage">
          Sign In
        </Link>
      </div> */}
    </header>
  );
};


