import React, { useEffect, useState } from 'react';
import axios from "../../api/axios";
import HeaderHome from "../../../components/HeaderHome";
import { useRouter } from 'next/router';
import Link from 'next/link';
import  NewConnectProject from '../../NewConnectProject';


const ProjectDetailPage = ({project_id}) => {
  console.log(project_id)
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [list, setList] = useState([]);
  // const [connection_project_id, setconnection_project_id] = useState("");
  // const [connectiion_message_provider_id, setconnectiion_message_provider_id] = useState("");
  // const [project_id, setproject_id] = useState([project_id, setproject_id]);
  // const [message]


  // useEffect(() => {
  //   setErrMsg("");
  // }, [connection_project_id, connectiion_message_provider_id])

  // const fetchConnectionProject = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8050/project/id/connected/{${project_id}}`
  //     );
  //     const responseData = response.data.data;
  //   } catch (error) {
  //     console.error("error fetching data:", error);
  //   };
  // };

  // useEffect(() => {
  //   fetchConnectionProject();
  // })
  

  // const fetchConnectionProject = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8050/project/id/{${project_id}}`
  //     );
  //     const responseData = response.data.data;

  //     setList(responseData);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("error fetching data: ", error);
  //   };
  // };

  // const fetchConnectionProvider = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8050/connection/message-provider/{${messageprovider_id}}`
  //     );
  //     const responseData = response.data.data;

  //     setList(responseData);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("error fetching data: ", error);
  //   };
  // };

  // useEffect(() => {
  //   fetchConnectionProject(),
  //   fetchConnectionProvider()
  // },);

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
