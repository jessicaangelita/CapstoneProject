import React, { useState, useEffect } from "react";
import axios from "../pages/api/axios";
import { IoCloseCircle } from "react-icons/io5";

export default function UpdatedProvider({ data, onUpdate, onCancel, setData }) {
  console.log(data)
  const [id,setID] = useState(data.id)
  const [providername, setProvidertName] = useState(data.provider_label);
  const [webhook, setWebhook] = useState(data.webhook);
  const [selectedproject, setSelectedProject] = useState("");
  const [listProject, setListProject] = useState([]);


  const fetchProvider = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8050/project/all`
      );
      const responseData = response.data.data;

      setListProject(responseData);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchProvider();
  }, [id]);

  const handleSubmit = async (e) => {
    try {
      const updatedData = {
        provider_label: providername,
        webhook,
        project: selectedproject,
      };

      await axios.put(
        `http://localhost:8050/message-provider/edit/${data.id}`,
        updatedData,
        {
          headers: {
              Authorization : `Bearer ${localStorage.getItem("accessToken")}`    
          }
        }
      );

      setData(updatedData);
      setProvidertName(updatedData)
      console.log("saved", updatedData);
      onUpdate();
    } catch (err) {
      console.log("Update error", err);
    }
  };

  if (!data) return null;

  return (
    <div className="items-center justify-center flex md:flex fixed inset-0 z-50 bg-black bg-opacity-70">
      <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border p-8 shadow-lg duration-200 sm:rounded-lg bg-primary-white text-primary-black">
         <IoCloseCircle
            className="absolute cursor-pointer right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2  focus:ring-offset-2 disabled:pointer-events-none h-auto text-primary-mediumblue hover:text-primary-darkblue font-extrabold w-[7%]"
            onClick={onCancel}
          />

        <div className="">
          <h1 className="flex justify-center text-primary-darkblue text-3xl font-bold">Update Provider</h1>
        </div>

        <div className='p-5'>
        <p className="justify-center w-full text-left text-primary-darkblue text-xl font-semibold mt-5">
            Update your message provider's name
        </p>
            <p className="mt-0 text-[12px] text-primary-darkblue font-light inline leading-none">
              You can use your discord server name, or anything you like, such
              as: "
              <p className="inline italic text-[12px] text-primary-darkblue font-light leading-none">
                The Gang Server, Developer Squad, etc"
              </p>
            </p>
        
          <div className='mt-5'>
            <input
              type="text"
              className="block w-full border-primary-grey border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 placeholder:text-primary-lightgrey"
              placeholder="Provider Name"
              value={providername}
              onChange={(e) => {
                setProvidertName(e.target.value);
              }}
            />
          </div>
      </div>
        
            {/* ID*/}
            {/* <tr>
              <td className="text-black font-semibold ">ID</td>
              <td className="pl-3">
                <input
                  type="text"
                  value={id}
                  disabled
                  className="w-full border p-2 rounded outline-none"
                />
              </td>
            </tr> */}

            {/* Provider Name */}
            {/* <tr>
              <td className="text-black font-semibold">Provider Name</td>
              <td className="pl-3">
                <input
                  type="text"
                  value={providername}
                  onChange={(e) => {
                    setProvidertName(e.target.value);
                  }}
                  className="w-full border p-2 rounded outline-none"
                />
              </td>
            </tr> */}

        {/* Update */}
        <div className="flex justify-center items-center w-full space-x-3">
          <button
            type="button"
            className="w-full text-white bg-primary-lightblue hover:bg-primary-mediumblue px-4 py-2 rounded-md mb-6 text-base font-semibold shadow-sm shadow-primary-darkblue"
            onClick={handleSubmit}
          >
            Save
          </button>

          {/* Cancel */}
          <button
            type="button"
            className="w-full text-primary-darkblue bg-primary-white hover:bg-primary-lightgrey px-4 py-2 rounded-md mb-6 text-base font-semibold shadow-primary-darkblue shadow-sm"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
