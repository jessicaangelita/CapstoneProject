import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useRouter } from "next/router";
import HeaderHome from "../../components/HeaderHome";
// import HeaderHome from "@/components/headerhome";
import { FaPencilAlt, FaTrashAlt  } from "react-icons/fa";
import UpdatedProject from "../../components/UpdatedProject";
// import UpdatedProject from "@/components/UpdatedProject";
import NewProject from "../NewProject";


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
    const [data, setData] = useState(undefined);


    const openDeleteModal = (project_id) => {
        setSelectedProjectId(project_id);
        setDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setSelectedProjectId(null);
        setDeleteModalOpen(false);
    };

    // const router = useRouter();
    // const { userid } = router.query;

    const handleEdit = (item) => {
        setData(item);
    };

    const handleCancel = () => {
        setData(undefined);
        setShowUpdate(false);
    };

    const deleteProject = async () => {
        try {
            await axios.delete(`http://localhost:8050/project/id/${selectedProjectId}`);
            fetchData();
            closeDeleteModal();
        } catch (error) {
            console.error('Error deleting project: ', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8050/project/all');
            const responseData = response.data.data;
            setProject(responseData); 
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data: ', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!data) return;
        
        setShowUpdate(true);
      }, [data]);
    
      useEffect(() => {
        void fetchData();
      }, []);
    
      const onProjectUpdate = () => {
        void fetchData();
        handleCancel();
      };

    return (
        <>
            <HeaderHome/>
            <div className="flex justify-end">
              <button className="text-white bg-primary-lightblue hover:bg-primary-mediumblue px-8 py-2 rounded-md mx-5 mt-5 mb-8 text-end" onClick={togglePopup}>Add Project</button>
                {isPopupOpen && (
                    <div className="popup-container">
                        <div className="popup-content">
                            <NewProject onClose={togglePopup}/>
                        </div>
                    </div>
                )}
            </div>
            <div className="mx-auto max-w-3xl mr-[250px]">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left">ID</th>
                                <th scope="col" className="px-6 py-3 text-left">Project Name</th>
                                <th scope="col" className="px-6 py-3 text-left">Webhook Link</th>
                                <th scope="col" className="px-6 py-3 text-left">Integration</th>
                                <th scope="col" className="px-6 py-3 text-center">Edit</th>
                                <th scope="col" className="px-6 py-3 text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(project) && project.length > 0 ? (
                                project.map((item) => (
                                    <tr key={item.project_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {item.id} </th>
                                        <td className="px-6 py-4">{item.project_id}</td>
                                        <td className="px-6 py-4">{item.name}</td>
                                        <td className="px-6 py-4">{item.webhook}</td>
                                        <td className="px-6 py-4">{item.provider_type}</td>
                                        <td className="px-6 py-4 text-center">
                                            <div>
                                        <button onClick={() => handleEdit(item)}>
                                                <FaPencilAlt className="text-blue-500" />
                                            </button>      
                                        </div>                   
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <button onClick={() => openDeleteModal(item.project_id)}>
                                                <FaTrashAlt className="text-red-500" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-4">
                                        No data available.
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                )}
                <div>
                {showUpdate && (
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
                <p className="text-xl mb-4">Are you sure you want to delete this project?</p>
                <div className="flex justify-end">
                    <button onClick={closeDeleteModal} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button onClick={deleteProject} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                </div>
                </div>
            </div>
            )}
        </>
    );
}
