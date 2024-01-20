import React, { useEffect, useState } from 'react';
import axios from "../../api/axios";
import HeaderHome from "../../../components/HeaderHome";
import { useRouter } from 'next/router';
import Link from 'next/link';
import  NewConnectProject from '../../NewConnectProject';


const ProjectDetailPage = ({}) => {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [ project_id, setProject_id] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [connection_id, setConnection_id] = useState(null);

  
  // const {project_id} = router.query
  // console.log(project_id)

  const fetchConnectData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8050/message-provider/user/connected/owned`,
        {
          headers: {
              Authorization : `Bearer ${localStorage.getItem("accessToken")}`    
          }
        }
      );

      const fetchData = await response.data;

      console.log('Data from API', fetchData);
      console.log(fetchData.data);
      if(fetchData) {
        console.log(project_id), "project id";
        setProject_id(fetchData.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const fetchListenerURL = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8050/webhook/${connection_id}`,
        {
          headers: {
              Authorization : `Bearer ${localStorage.getItem("accessToken")}`    
          }
        } 
      );

      const fetchData = await response.data;

      console.log('Data from API', fetchData);
      console.log(fetchData.data);
      if(fetchData) {
        console.log(connection_id, "connection id");
        setConnection_id(fetchData.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching data listener url:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchConnectData();
    fetchListenerURL();
  }, []);


  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <HeaderHome />
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
        {console.log(Array.isArray(project_id, connection_id), "array")}

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              {Array.isArray(connection_id) && connection_id.length > 0 ? (
                connection_id.map((item) => {
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
            {Array.isArray(project_id) && project_id.length > 0 ? (
              project_id.map((item) => {
                console.log(item, "item");
                return (
                  <div
                    key={item.message_provider_user_id}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                  >
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {item.provider_label}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400">
                        Connection ID: {item.connection_id}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        webhook : {item.webhook}
                      </p>
                    </div>
                  </div>
                );
              })
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
