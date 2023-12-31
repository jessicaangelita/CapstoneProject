import {useState} from 'react'

export const AddProject1 = ({ name, setname }) => {
  return (
    <>
    {/* Process Indicating Circle */}
    <div className="m-9">
      <div className="flex items-center justify-center space-x-8">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-sky-300 shadow-xl flex items-center justify-center">
          1
        </div>
        <p className="mt-2">Name The Project</p>
      </div>
    </div>
    
    {/* Input for the Form */}
      <div className="space-y-4">
        <p className="justify-center w-full text-center text-slate-700 text-lg font-bold  mx-1 my-8">What is your project's name?</p>
        <input
            type="text"
            className="block w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Project Name"
            value={name} 
            onChange={(event) => setname(event.target.value)}
          />
      </div>
    </div>
    
    </>
  )
}
