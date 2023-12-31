import React, { useState, useEffect } from "react";
import axios from "../pages/api/axios";
// import axios from "@/pages/api/axios";

export default function UpdatedProvider({ data, onUpdate, onCancel, setData }) {
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
        updatedData
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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      <div className="bg-white rounded-lg absolute max-w-[30rem] p-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-lg text-black mb-2">Update Provider</h1>
          <button
            className="text-black hover:text-red-600 mb-2"
            type="button"
            onClick={onCancel}
          >
            Close
          </button>
        </div>
        <table className="w-full mb-5 ">
          <tbody className="">
            
            {/* ID*/}
            <tr>
              <td className="text-black font-semibold ">ID</td>
              <td className="pl-3">
                <input
                  type="text"
                  value={id}
                  disabled
                  className="w-full border p-2 rounded outline-none"
                />
              </td>
            </tr>

            {/* Provider Name */}
            <tr>
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
            </tr>

            {/* Link Webhook */}
            <tr>
              <td className="text-black font-semibold"> Link Webhook</td>
              <td className="pl-3">
                <input
                  type="text"
                  value={webhook}
                  onChange={(e) => setWebhook(e.target.value)}
                  className="w-full border p-2 rounded outline-none"
                />
              </td>
            </tr>

            {/* Nama Project */}
            <tr>
              <td className="text-black font-semibold">Project</td>
              <td className="pl-3">
                <select
                  className="w-full border p-2 rounded outline-none"
                  value={selectedproject}
                  onChange={(e) => setSelectedProject(e.target.value)}
                >
                  <option value="">Select Project</option>
                   {listProject?.map((project) => {
                    const { name, id: projectId } = project;
                    
                    console.log(project)
                    return (
                      <option key={projectId} value={name}>
                        {name}
                      </option>
                    );
                    
                  })}

                  <option value="Number 1">{data.project}</option>
                  <option value="Number 2">{data.project}</option>
                  <option value="Number 3">{data.project}</option>
                </select>

              </td>
            </tr>
          </tbody>
        </table>

        {/* Update */}
        <div className="flex justify-center items-center w-full space-x-3">
          <button
            type="button"
            className="px-4 py-1 bg-emerald-400 text-emerald-900 hover:bg-emerald-500 hover:text-white rounded-lg"
            onClick={handleSubmit}
          >
            Save
          </button>

          {/* Cancel */}
          <button
            type="button"
            className="px-4 py-1 bg-red-400 text-red-900 hover:bg-red-500 hover:text-white rounded-lg"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
