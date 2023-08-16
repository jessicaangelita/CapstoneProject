import React from "react";

export default function ContentHome() {
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex justify-center"> {/* Center aligns the cards */}
                <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Add Project</h1>
                        <p className="leading-relaxed mb-3">
                            Click here to add a new project.
                        </p>
                        <a className="text-blue-500 inline-flex items-center">Add Project
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Add Provider</h1>
                        <p className="leading-relaxed mb-3">
                            Click here to add a new provider.
                        </p>
                        <a className="text-blue-500 inline-flex items-center">Add Provider
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}