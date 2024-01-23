import React, { useEffect, useState } from 'react';
import axios from "../../api/axios";
import HeaderHome from "../../../components/HeaderHome";
import { useRouter } from 'next/router';
import Link from 'next/link';
import  NewConnectProject from '../../NewConnectProject';
import SideBar from '../../../components/sidebar/SideBar';


const ProjectDetailPage = ({}) => {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [projectData, setProjectData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [connectionData, setConnectionData] = useState(null);
  const [projectId, setProjectId] = useState(null);
  
  useEffect(() => {
    const projectIdFromQuery = router.query.project_id;
    setProjectId(projectIdFromQuery);

    if (projectId) {
      fetchConnectData(projectIdFromQuery);
      fetchListenerURL(projectIdFromQuery);
    }
  }, [router.query.project_id]);
  
  const fetchConnectData = async (projectId) => {
    try {
      const response = await axios.get(
        `http://localhost:8050/project/id/connected/${projectId}`,
        {
          headers: {
              Authorization : `Bearer ${localStorage.getItem("accessToken")}`    
          }
        }
      );

      const fetchData = await response.data;

      if(fetchData) {
        setProjectData(fetchData.data);
        setIsLoading(false);
        console.log(fetchData, "setelah api project connected");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const fetchListenerURL = async (projectId) => {
    try {
      const response = await axios.get(
        `http://localhost:8050/webhook/${projectId}`,
        {
          headers: {
              Authorization : `Bearer ${localStorage.getItem("accessToken")}`    
          }
        } 
      );

      const fetchData = await response.data;

      if(fetchData) {
        setConnectionData(fetchData.data);
        setIsLoading(false);
        console.log(fetchData, "setelah api listener")
      }
    } catch (error) {
      console.error("Error fetching data listener url:", error);
      setIsLoading(false);
    }
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <SideBar/>
      <title>Project Details</title>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white ml-80">Detail Project</h1>
        <button
          className="text-white bg-primary-lightblue hover:bg-primary-mediumblue px-8 py-2 rounded-md mx-5 mt-5 mb-8 text-end"
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
      <div className="mx-auto max-w-3xl mr-[300px]">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              {Array.isArray(connectionData) && connectionData.length > 0 ? (
                connectionData.map((item) => {
                  console.log(item, 'item');
                  return (
                    <div
                      key={item.user_id}
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                    >
                      <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {item.listener_url}
                        </h2>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-4">No data available.</div>
              )}
            </div>
            {Array.isArray(projectData) && projectData.length > 0 && projectData[0] ? (
              // projectData.map((item) => {
                // console.log(item, "item");
                // return (
                  <div
                    key={projectData[0].message_provider_user_id}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {projectData[0].provider_label}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        Connection ID: {projectData[0].connection_id}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        webhook : {projectData[0].webhook}
                      </p>
                    </div>
                  </div>
                // );
              // })
            ) : (
              <div className="text-center py-4">No data available.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
