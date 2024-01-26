import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import HeaderHome from "../../../components/HeaderHome";
import { useRouter } from "next/router";
import Link from "next/link";
import NewConnectProject from "../../NewConnectProject";
import SideBar from "../../../components/sidebar/SideBar";
import { GoCopy } from "react-icons/go";

const ProjectDetailPage = ({}) => {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [connectionData, setConnectionData] = useState(null);
  const [projectId, setProjectId] = useState(null);

  const fetchConnectData = async (projectId) => {
    try {
      const response = await axios.get(
        `http://localhost:8050/project/id/connected/${projectId}`,
        // berarti projectId nya diganti ke connection_id kah?
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const fetchData = await response.data;

      if (fetchData) {
        setProjectData(fetchData.data);
        console.log(fetchData, "setelah api project connected");
      }
      // INI CONNECTION IDNYA
      //
      fetchListenerURL(fetchData.data[0].connection_id);
      console.log(fetchData.data[0].connection_id);
      // connection id dapat dari ProjectData.
      // ada atau tidak ada data loadingnya di false kan
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const projectIdFromQuery = router.query.project_id;
    setProjectId(projectIdFromQuery);

    if (projectId) {
      fetchConnectData(projectIdFromQuery);
    }
  }, [router.query.project_id]);

  const fetchListenerURL = async (connectionId) => {
    try {
      const response = await axios.get(
        `http://localhost:8050/webhook/${connectionId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const fetchData = await response.data;

      if (fetchData) {
        setConnectionData(fetchData.data);
        console.log(fetchData, "setelah api listener connect");
      }
    } catch (error) {
      console.error("Error fetching data listener url:", error);
    }
    return;
  };

  // ini dari awal bisa langsung dapat webhooknya atau harus pilih connection dulu ?
  // fetchListenerURL(projectIdFromQuery);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <title>Project Details</title>
      <div className="min-h-screen bg-primary-darkgrey">
        <SideBar />
        <div className="flex justify-between items-center pt-12 mb-6 border-b-2 border-primary-white ml-14 md:ml-40 md:mr-24 ">
          <h1 className="lg:text-2xl font-bold text-white items-start ml-12 text-xl">
            Detail Project
          </h1>
          <div className="flex items-center justify-end w-[30%] md:w[20%] lg:w-[18%] xl:w-[16%] 2xl:w-[14%] mr-4 md:mr-8 xl:mr-14">
            <button
              className="text-white bg-primary-lightblue hover:bg-primary-mediumblue py-2 rounded-md mt-5 mb-8 text-center shadow-sm shadow-primary-grey w-full"
              onClick={togglePopup}
            >
              Connect Project
            </button>
            {isPopupOpen && (
              <div className="popup-container">
                <div className="popup-content">
                  <NewConnectProject onClose={togglePopup} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:ml-28 ml-[87px] mr-2 mt-10">
          {isLoading ? (
            <p className=" text-primary-lightgrey">Loading...</p>
          ) : (
            <div className=" md:ml-12 md:mr-24">
              {connectionData ? (
                <>
                  <div className="flex justify-between w-full mb-8">
                    <h2 className="text-xl font-bold bg-primary-black text-primary-white overflow-hidden shadow-lg p-4 inline-block justify-start w-3/4 rounded-l-lg">
                      {connectionData.listener_url}
                    </h2>
                    <button
                      className=" inline-block ml-auto justify-end w-1/4 rounded-r-lg bg-primary-lightgrey text-primary-black font-semibold text-lg"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          connectionData.listener_url ?? ""
                        );
                        alert("Listener URL Copied!");
                      }}
                    >
                      Copy Listener URL 
                      <div className="inline-block justify-center items-center ml-2">
                        <GoCopy className="text-primary-black" />
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-4  text-primary-lightgrey">
                  No data available.
                </div>
              )}
              {/* {connectionData ? (
              console.log(connectionData.listener_url, "data connection")
                connectionData.map((item) => {
                  console.log(item, 'item');
                  return (
                    <div
                      key={connectionData.listener_url}
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                    >
                      <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {connectionData.listener_url}
                        </h2>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-4">No data available.</div>
              )} */}

              {Array.isArray(projectData) &&
              projectData.length > 0 &&
              projectData[0] ? (
                // projectData.map((item) => {
                // console.log(item, "item");
                // return (
                <div
                  key={projectData[0].message_provider_user_id}
                  className=" bg-primary-grey p-6 rounded-lg overflow-hidden shadow-lg"
                >
                  <h2 className="text-xl font-bold text-primary-white mb-2">
                    {projectData[0].provider_label}
                  </h2>
                  <p className="text-primary-lightgrey">
                    Connection ID: {projectData[0].connection_id}
                  </p>
                  <p className="text-primary-lightgrey">
                    Webhook : {projectData[0].webhook}
                  </p>
                </div>
              ) : (
                <div className="text-center py-4">No data available.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
