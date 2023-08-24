import { useState } from "react";

export const AddProvider1 = () => {
  const [selectedOption, setSelectedOption] = useState('');
  return (
    <>
    <div className="m-9">
      <p className="flex justify-center text-slate-700 text-2xl font-extrabold mb-6">Create New Provider</p>
      <div className="flex items-center justify-center space-x-8">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-300 shadow-xl flex items-center justify-center">
          1
        </div>
        <p className="mt-2">Choose Provider</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-100 shadow-xl flex items-center justify-center ">
          2
        </div>
        <p className="mt-2">Configure Provider</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-100 shadow-xl flex items-center justify-center">
          3
        </div>
        <p className="mt-2">Configure Project</p>
      </div>
    </div>
    
      <div className="space-y-4">
        <p className="justify-center w-full text-center text-slate-700 text-lg font-bold  mx-1 my-8">What is your designated Message Provider?</p>

        <select 
          className="block w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500" 
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Select a message provider</option>
          <option value="discord">Discord</option>
          <option value="telegram">Telegram</option>
          <option value="microsoftteams">Microsoft Teams</option>
        </select>
      </div>
    </div>
    
    </>
  )
}
