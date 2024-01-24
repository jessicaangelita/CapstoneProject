import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

export const Completed = () => {
  return (
    <>
      <div className="mt-9">
        {/* Process Indicating Circle */}
        <div className="flex items-center justify-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="rounded-full w-14 h-14 bg-primary-mediumblue shadow-xl flex items-center justify-center text-primary-white  font-bold text-lg">
              1
            </div>
            <p className="mt-2 text-primary-mediumblue text-sm font-semibold">
              Provider Label
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full w-14 h-14 bg-primary-mediumblue shadow-xl flex items-center justify-center text-primary-white  font-bold text-lg">
              2
            </div>
            <p className="mt-2 text-primary-mediumblue text-sm font-semibold">
              Webhook Link
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full w-14 h-14 bg-primary-mediumblue shadow-xl flex items-center justify-center text-primary-white  font-bold text-lg">
              3
            </div>
            <p className="mt-2 text-primary-mediumblue text-sm font-semibold">
              Completed
            </p>
          </div>
        </div>

        {/* Input for the Form */}
        <div className="space-y-4 w-full items-center text-center mb-6">
          <div className=" flex justify-center w-full">
            <FaCheckCircle className=" text-primary-mediumblue animate-ping w-[10%] h-auto mt-14 mb-6" />
          </div>

          <div className="mt-3 text-2xl font-bold uppercase text-primary-darkblue">
            Congratulations!
          </div>
          <div className="text-base font-semibold text-primary-grey">
            Your Provider has been created.
            <br />
            Just click OK to finalize it
          </div>
        </div>
      </div>
    </>
  );
}

export default Completed;