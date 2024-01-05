import React from "react";
import {Slider} from "../../swiper/Slider";
import { landing } from "../../swiper/slide/landing";

export const Body = () => {
  return (
    <>
      <div
        id="JICO"
        className="bg-[url('../public/assets/background/landing-page-1.png')] bg-cover bg-center pt-32 font-inter"
      >
        {/* INTRO */}
        <div className="w-full">
          <div className="w-full px-16 mb-6 lg:px-52 md:px-32 sm:px-16">
            {/* Jico Title */}
            <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl mb-5 text-center">
              JICO
            </h2>
            <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center">
              Jira Connector
            </h2>
            <div className="flex mb-4">
              <span className="flex-grow border-b border-white py-2 text-lg px-1 my-4 md:my-6 lg:my-8"></span>
            </div>
            {/* Jico Description */}
            <p className="lg:leading-10 md:leading-auto text-white text-base md:text-lg  lg:text-xl font-inter font-medium  text-center sm:px-3 md:px-8 lg:px-12 mb-5">
              JICO is an abbreviation of Jira Connector which is a platform
              where you can connect the projects you are working on via Jira
              with certain applications such as Discord.
            </p>
            <p className="lg:leading-10 md:leading-auto text-white text-base md:text-lg  lg:text-xl font-inter font-medium mb-10 text-center sm:px-3 md:px-8 lg:px-12">
              JICO makes communication easier in working on a project. Apart
              from making communication easier and smoother, it is also very
              easy to use so you can use it comfortably.
            </p>
            {/* Get Started Button */}
            <div className="w-full flex pb-14 lg:pb-24 md:pb-24 justify-center space-x-3 md:space-x-7 lg:space-x-10 font-semibold">
              <button className="w-1/2 lg:w-1/3 text-white bg-primary-lightblue border-0 py-3 focus:outline-none rounded-md hover:bg-primary-mediumblue tracking-wider">
                <a href="/signUpPage">Get Started</a>
              </button>
              <button className="w-1/2 lg:w-1/3 text-white bg-primary-grey border-0 py-3 focus:outline-none rounded-md hover:bg-primary-darkgrey tracking-wider">
                <a href="/signInPage">Sign In</a>
              </button>
            </div>
          </div>
        </div>
        <Slider slides={landing} />
      </div>
    </>
  );
};

export default Body;
