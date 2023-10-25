import React from 'react'

export const AddProject2 = () => {
  return (
    <>
    <div className="m-9">
      <div className="flex items-center justify-center space-x-8">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14  bg-sky-300 text-white shadow-xl flex items-center justify-center">
          1
        </div>
        <p className="mt-2">Name The Project</p>
      </div>
      {/* <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-700 shadow-xl flex items-center justify-center text-white">
          2
        </div>
        <p className="mt-2">Configure Project</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-700 shadow-xl flex items-center justify-center text-white">
          3
        </div>
        <p className="mt-2">Configure Providers</p>
      </div> */}
    </div>
</div>
    <div className="space-y-4">
        <p className="justify-center w-full text-center text-slate-700 text-lg font-bold  mx-1 my-8">You have successfuly add new project!</p>
      </div>
    </>
  )
}
