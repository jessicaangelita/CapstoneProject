import React from "react";

export default function Features() {
    return (
      <div className="container px-5 py-24 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">Our Features
            </h1>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FEATURE 1</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Real-time Notifications and Updates</h1>
              <p className="leading-relaxed mb-3">
              JICO makes it possible for JIRA updates to be quickly shared with Discord, almost like sending instant messages. This helps all team members get immediate updates about what's happening with their JIRA projects. Whether it's a new problem, a change in the project's status, or someone leaving a note, people using Discord can stay in the loop without having to keep checking JIRA. This feature makes it easier for the team to talk and work together.</p>
              <a className="text-blue-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FEATURE 2</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Customizable Alerts and Filtering</h1>
              <p className="leading-relaxed mb-3">
              JICO gives you the power to change how it tells you things. You can pick and choose which JIRA updates it sends to Discord. This means your team only gets the important stuff when they need it, avoiding extra notifications that might be annoying. You can set it up to tell you only about the really important updates or things related to your specific projects. This way, you can pay attention to what's most important.</p>
              <a className="text-blue-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="p-4 lg:w-1/3">
            <div className="h-full bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">FEATURE 3</h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Cross-Platform Collaboration</h1>
              <p className="leading-relaxed mb-3">
              JICO helps JIRA and Discord work together, which makes it simpler for development and project teams to cooperate. JIRA users can talk to their friends on Discord, sharing thoughts, talking about problems, and deciding things right away. This connection between the two tools makes the work environment smoother and more effective</p>
              <a className="text-blue-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}