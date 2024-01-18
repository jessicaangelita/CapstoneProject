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
  
  // const {project_id} = router.query
  // console.log(project_id)

  const fetchConnectData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8050/connection/id/${project_id}`,
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
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchConnectData();
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
    </div>
  );
};

export default ProjectDetailPage;
