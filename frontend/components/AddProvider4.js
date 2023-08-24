import React from 'react'

export const AddProvider4 = () => {
  return (
    <>
    <div className="m-9">
      <p className="flex justify-center text-slate-700 text-2xl font-extrabold mb-6">New Provider Created!</p>
      <div className="flex items-center justify-center space-x-8">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-700 text-white shadow-xl flex items-center justify-center">
          1
        </div>
        <p className="mt-2">Choose Provider</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-700 shadow-xl flex items-center justify-center text-white">
          2
        </div>
        <p className="mt-2">Configure Provider</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-700 shadow-xl flex items-center justify-center text-white">
          3
        </div>
        <p className="mt-2">Configure Project</p>
      </div>
    </div>
</div>
    
    </>
  )
}
