import React from "react";

export default function Content() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">JICO</h2>
          <h2 className="text-gray-900 text-3xl title-font font-medium mb-4">WELCOME TO JICO</h2>
          <div className="flex mb-4">
            <span className="flex-grow text-black border-b-2 border-black py-2 text-lg px-1">Description</span>
          </div>
          <p className="leading-relaxed mb-4">
            JICO is an abbreviation of Jira Connector which is a platform where you can connect the projects tou are working on via Jira with certain applications such as Discord.
            JICO makes communication easier in working on a project.
            Apart from making communication easier and smoother, it is also very easy to use so you can use it comfortably.
          </p>
          <div className="flex">
            <a className="flex item-center text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded" href="/signUpPage" role="button">Get Started</a>
          </div>
        </div>
        <img alt="ecommerce" className="lg:w-1/2 w-ful lg:h-auto h-64 object-cover object-center rounded" src="./assets/oranglaptop.jpeg"/>
      </div>
    </div>
  )
}