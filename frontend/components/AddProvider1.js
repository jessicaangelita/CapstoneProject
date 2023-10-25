import { useState } from "react";

export const AddProvider1 = ({provider_type, setprovider_type, provider_label, setprovider_label }) => {
  return (
    <>
    <div className="m-9 text-center">
      <div className="flex items-center justify-center space-x-8">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-sky-300 shadow-xl flex items-center justify-center">
          1
        </div>
        <p className="mt-2">Choose Provider</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-sky-100 shadow-xl flex items-center justify-center ">
          2
        </div>
        <p className="mt-2">Configure Provider</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-sky-100 shadow-xl flex items-center justify-center">
          3
        </div>
        <p className="mt-2">Configure Project</p>
      </div>
    </div>
    
      <div className="space-y-4">
        <p className="justify-center w-full text-center text-slate-700 text-lg font-bold  mx-1 my-8">What is your designated Message Provider?</p>

        <select 
          className="block w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500"
          value={provider_type} 
          onChange={(e) => setprovider_type(e.target.value)} >
          <option value="">Select a message provider</option>
          <option value="discord">Discord</option>
          <option value="telegram">Telegram</option>
          <option value="microsoftteams">Microsoft Teams</option>
        </select>

        <p className="justify-center w-full text-center text-slate-700 text-lg font-bold  mx-1 my-8">Enter your custom name for the message provider!</p>
        <input
            type="text"
            className="block w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Project Name"
            value={provider_label} 
            onChange={(event) => setprovider_label(event.target.value)}
          />
      </div>
    </div>
    
    </>
  )
}
