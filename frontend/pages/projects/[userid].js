import React, { useEffect, useState } from "react";
import axios from "../api/axios";
// import { useRouter } from "next/router";
import HeaderHome from "../../components/HeaderHome";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import UpdatedProject from "../../components/UpdatedProject";
import { AddProject } from "../../components/project/create/AddProject";
import SideBar from "../../components/sidebar/SideBar";
import { CiCirclePlus } from "react-icons/ci";

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
      console.log(selectedProjectId);
      await axios.delete(
        `http://localhost:8050/project/id/${selectedProjectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log("asd");
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
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      const fetchData = await response.data;

      console.log("Data from API", fetchData);
      console.log(fetchData.data);
      if (fetchData) {
        console.log(project, "abc");
        setProject(fetchData.data);
        console.log(project, "asd");
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
      <SideBar />
      <title>Projects</title>
      <div className="flex justify-between items-center pt-12 mb-6 border-b-2 border-primary-white ml-14 md:ml-40 md:mr-24">
        <h1 className="lg:text-2xl font-bold text-white items-start ml-12 text-xl">
          List Project
        </h1>
        <div className="flex items-center justify-end w-[30%] md:w[20%] lg:w-[18%] xl:w-[16%] 2xl:w-[14%] mr-4 md:mr-8 xl:mr-14">
          <button
            className="text-white bg-primary-lightblue hover:bg-primary-mediumblue py-2 rounded-md mt-5 mb-8 text-center  shadow-sm shadow-primary-grey w-full"
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
      </div>
      <div className="md:ml-28 ml-[87px] mr-2 mt-10">
        {console.log(Array.isArray(project), "array")}
        {isLoading ? (
          <p className=" text-primary-lightgrey">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:ml-12 md:mr-24 overflow-auto">
            {Array.isArray(project) && project.length > 0 ? (
              project.map((item) => {
                console.log(item, "item");
                return (
                  <div
                    key={item.user_id}
                    className=" bg-primary-black rounded-lg overflow-hidden shadow-md shadow-primary-darkblue"
                  >
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-primary-white mb-2">
                        {item.name}
                      </h2>
                      <p className=" text-primary-lightgrey">ID: {item.id}</p>
                    </div>

                    <div className="flex justify-between p-4 mx-3 mb-3">
                      <div className="justify-start">
                        <a
                          href={`projects//detailproject/${item.id}`}
                          className="text-primary-darkgrey py-3 px-8 rounded-md font-semibold bg-primary-lightgrey"
                        >
                          Details
                        </a>
                      </div>
                      <div className="flex justify-end space-x-4">
                        <button onClick={() => handleEdit(item)}>
                          <FaPencilAlt className="text-primary-lightgrey h-6 w-auto" />
                        </button>
                        {/* <a href="/projectDetails">Details</a> */}
                        <button onClick={() => openDeleteModal(item.id)}>
                          <FaTrashAlt className="text-red-400 h-6 w-auto" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-4  text-primary-lightgrey">
                No added project yet.
              </div>
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
        <div className="items-center justify-center flex md:flex fixed inset-0 z-50 bg-black bg-opacity-70">
          <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border p-8 shadow-lg duration-200 sm:rounded-lg bg-primary-white text-primary-black">
            <p className="text-xl mb-7">
              Are you sure you want to delete this project?
            </p>
            <div className="flex justify-end gap-x-3">
              <button
                onClick={closeDeleteModal}
                className="w-32 text-primary-darkblue bg-primary-white hover:bg-primary-lightgrey px-4 py-2 rounded-md text-base font-semibold shadow-primary-darkblue shadow-sm"
              >
                Cancel
              </button>
              <button
                onClick={deleteProject}
                className="w-32 text-primary-darkblue bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-base font-semibold shadow-primary-darkblue shadow-sm"
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
