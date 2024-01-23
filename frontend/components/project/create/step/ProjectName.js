import React from "react";

export const ProjectName = ({ name, setname }) => {
  return (
    <>
      <div className="m-9">
        {/* Process Indicating Circle */}
        <div className="flex items-center justify-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="rounded-full w-14 h-14 bg-primary-mediumblue shadow-xl flex items-center justify-center text-primary-white font-bold text-lg">
              1
            </div>
            <p className="mt-2 text-primary-mediumblue text-sm font-semibold">
              Project Name
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full w-14 h-14 bg-primary-white text-primary-lightgrey shadow-xl flex items-center justify-center font-bold text-lg border-solid border-primary-lightgrey border-2">
              2
            </div>
            <p className="mt-2 text-primary-lightgrey text-sm font-semibold">
              Completed
            </p>
          </div>
        </div>

        {/* Input for the Form */}
        <div className="space-y-4">
          <div>
            <p className="justify-center w-full text-left text-primary-darkblue text-xl font-semibold mt-8 mb-0">
              What is your project's name?
            </p>
            <p className="mt-0 text-[12px] text-primary-darkblue font-light inline">
              example: "
              <p className="inline italic text-[12px] text-primary-darkblue font-light">
                Asset List 2024, My Awesome Project, etc"
              </p>
            </p>
          </div>
          <input
            type="text"
            className="block w-full border-primary-grey border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 placeholder:text-primary-lightgrey"
            placeholder="Project Name"
            value={name}
            onChange={(event) => setname(event.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectName;