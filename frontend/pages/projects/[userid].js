import React, { useEffect, useState } from "react";
import axios from "../api/axios";
// import { useRouter } from "next/router";
import HeaderHome from "../../components/headerhome";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import UpdatedProject from "../../components/UpdatedProject";
import {AddProject} from "../../components/project/create/AddProject"

export default function ContentProject() {
  //update pb
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [data, setData] = useState({});

  const openDeleteModal = (project_id) => {
    setSelectedProjectId(project_id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedProjectId(null);
    setDeleteModalOpen(false);
  };

  // const router = useRouter();
  // const { user_id } = router.query;
  // console.log(user_id, "userid")

  const handleEdit = (item) => {
    setData(item);
    if (!data) return;

    setShowUpdate(true);
  };

//   useEffect(() => {
//   if (!data) return;

//   setShowUpdate(true);
// }, [data]);

  const handleCancel = () => {
    setData(undefined);
    setShowUpdate(false);
  };

  const deleteProject = async () => {
    try {
      console.log(selectedProjectId)
      await axios.delete(
        `http://localhost:8050/project/id/${selectedProjectId}`,
        {
          headers: {
              Authorization : `Bearer ${localStorage.getItem("accessToken")}`    
          }
        }
      );
      console.log('asd')
      fetchProjectData();
      closeDeleteModal();
    } catch (error) {
      console.error("Error deleting project: ", error);
    }
  };

  

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8050/project/all");
//       const responseData = response.data.data;
//       setProject(responseData);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//       setIsLoading(false);
//     }
//   };

const fetchProjectData = async () => {
    try {
        const response = await axios.get(
            `http://localhost:8050/project/user/owned`,
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
          console.log(project, "abc")
            setProject(fetchData.data);
            console.log(project, "asd")
            setIsLoading(false);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
    }
};



useEffect(() => {
    fetchProjectData();
}, []);



//   useEffect(() => {
//     void fetchData();
//   }, []);

  const onProjectUpdate = () => {
    void fetchProjectData();
    handleCancel();
  };

  return (
    <>
      <HeaderHome />
      <title>Projects</title>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white ml-80">List Project</h1>
        <button
          className="text-white bg-primary-lightblue hover:bg-primary-mediumblue px-8 py-2 rounded-md mx-5 mt-5 mb-8 text-end"
          onClick={togglePopup}
        >
          Add Project
        </button>
        {isPopupOpen && (
          <div className="popup-container">
            <div className="popup-content">
              <AddProject onClose={togglePopup} />
            </div>
          </div>
        )}
      </div>
      <div className="mx-auto max-w-3xl mr-[300px]">
        {console.log(Array.isArray(project), "array")}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {Array.isArray(project) && project.length > 0 ? (
              project.map((item) => {
                console.log(item, "item");
                return(
                  <div
                  key={item.user_id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {item.name}
                    </h2>
                    {/* <p className="text-gray-500 dark:text-gray-400">{item.webhook}</p> */}
                    <p className="text-gray-500 dark:text-gray-400">
                      ID: {item.id}
                    </p>
                    {/* <p className="text-gray-500 dark:text-gray-400">Integration: {item.provider_type}</p> */}
                  </div>
                  <div className="flex justify-between p-4">
                    <button onClick={() => handleEdit(item)}>
                      <FaPencilAlt className="text-blue-500" />
                    </button>
                    {/* <a href={`/projectDetails/${item.id}`}>Details</a> */}
                    <a href="/projectDetails">Details</a>
                    <button onClick={() => openDeleteModal(item.id)}>
                      <FaTrashAlt className="text-red-500" />
                    </button>
                  </div>
                </div>
                )
                
                })
            ) : (
              <div className="text-center py-4">No data available.</div>
            )}
          </div>
        )}
        <div>
          {showUpdate && data && (
            <UpdatedProject
              data={data}
              onUpdate={onProjectUpdate}
              setData={setData}
              onCancel={handleCancel}
            />
          )}
        </div>
      </div>

      {deleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-xl mb-4">
              Are you sure you want to delete this project?
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeDeleteModal}
                className="mr-2 px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={deleteProject}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
