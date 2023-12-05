import React from "react";
import Link from "next/link";
import Image from "next/image";
import {IMAGE} from '../public/config/index';

export default function Content() {
  return (
    <>
      <div id="JICO" className="bg-[url('../public/assets/background/landing-page-1.png')] bg-cover bg-center pt-32 font-inter">

        {/* NAVBAR */}
        <header className="fixed top-2 right-0 font-inter h-20 w-full flex justify-between items-center bg-transparent px-8 md:px-14 lg:px-20">

          {/* Logo JICO */}
          <div className="flex">
            <a href="#JICO"><Image src={IMAGE.NO_TAGLINE_LIGHT_BLUE} className="h-7 md:h-10 lg:h-11 w-auto cursor-pointer"/></a>
          </div>

          {/* Right Side */}
          <div className="flex space-x-10 justify-center">
            <Link className="text-white font-semibold" href="/signInPage">Sign In
            </Link>
            <Link className="text-white font-semibold bg-primary-lightblue px-5 lg:px-10" href="/signUpPage">Sign Up
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


        {/* INTRO */}
        <div className="w-full">
          <div className="w-full px-16 mb-6 lg:px-52 md:px-32 sm:px-16">
            {/* Jico Title */}
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-5 text-center">JICO</h2>
            <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center">Jira Connector</h2>
            <div className="flex mb-4">
              <span className="flex-grow border-b border-white py-2 text-lg px-1 my-4 md:my-6 lg:my-8"></span>
            </div>
            {/* Jico Description */}
            <p className="lg:leading-10 md:leading-auto text-white text-base md:text-lg  lg:text-xl font-inter font-medium  text-center sm:px-3 md:px-8 lg:px-12 mb-5">
              JICO is an abbreviation of Jira Connector which is a platform where you can connect the projects you are working on via Jira with certain applications such as Discord. 
            </p>
            <p className="lg:leading-10 md:leading-auto text-white text-base md:text-lg  lg:text-xl font-inter font-medium mb-10 text-center sm:px-3 md:px-8 lg:px-12">JICO makes communication easier in working on a project. Apart from making communication easier and smoother, it is also very easy to use so you can use it comfortably.</p>
            {/* Get Started Button */}
            <div className="w-full flex pb-14 lg:pb-24 md:pb-24 justify-center space-x-3 md:space-x-7 lg:space-x-10 font-semibold">
              <button className="w-1/2 lg:w-1/3 text-white bg-primary-lightblue border-0 py-3 focus:outline-none rounded-md hover:bg-primary-mediumblue tracking-wider">
                <a href="/signUpPage">Get Started</a>
              </button>
              <button className="w-1/2 lg:w-1/3 text-white bg-primary-grey border-0 py-3 focus:outline-none rounded-md hover:bg-primary-darkgrey tracking-wider" >
                <a href="/signInPage">Sign In</a>
              </button>
            </div>
          </div>
        </div>
      </div> 

      {/* FEATURE */}
      <div className="bg-primary-darkblue">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Our Features</h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3">
                <div className="h-[90%] bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FEATURE 1</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Real-time Notifications and Updates</h1>
                  <p className="leading-relaxed mb-3">
                  JICO makes it possible for JIRA updates to be quickly shared with Discord, almost like sending instant messages. This helps all team members get immediate updates about what's happening with their JIRA projects. Whether it's a new problem, a change in the project's status, or someone leaving a note, people using Discord can stay in the loop without having to keep checking JIRA. This feature makes it easier for the team to talk and work together.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-[90%] bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FEATURE 2</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Customizable Alerts and Filtering</h1>
                  <p className="leading-relaxed mb-3">
                  JICO gives you the power to change how it tells you things. You can pick and choose which JIRA updates it sends to Discord. This means your team only gets the important stuff when they need it, avoiding extra notifications that might be annoying. You can set it up to tell you only about the really important updates or things related to your specific projects. This way, you can pay attention to what's most important.</p>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div className="h-[90%] bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FEATURE 3</h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Cross-Platform Collaboration</h1>
                  <p className="leading-relaxed mb-3">
                  JICO helps JIRA and Discord work together, which makes it simpler for development and project teams to cooperate. JIRA users can talk to their friends on Discord, sharing thoughts, talking about problems, and deciding things right away. This connection between the two tools makes the work environment smoother and more effective</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}