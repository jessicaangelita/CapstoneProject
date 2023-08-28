import React, { useEffect, useState } from "react";
import axios from "@/pages/api/axios";
import { useRouter } from "next/router";
import HeaderHome from "@/components/headerhome";
import { FaPencilAlt } from "react-icons/fa";
import UpdatedProject from "@/components/UpdatedProject";

export default function ContentProject() {
    const [project, setProject] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    const [showUpdate, setShowUpdate] = useState(false);
    const [data, setData] = useState(undefined);

    const openDeleteModal = (project_id) => {
        setSelectedProjectId(project_id);
        setDeleteModalOpen(true);
    }

    const closeDeleteModal = () => {
        setSelectedProjectId(null);
        setDeleteModalOpen(false);
    }

    const handleEdit = (item) => {
        // setSelectedData(data);
        setData(item);
    };

    const handleCancel = () => {
        setData(undefined);
        setShowUpdate(false);
    };

    const deleteProject = async () => {
        try {
            await axios.delete(`http://localhost:8050/project/id/${selectedProjectId}`)
            fetchData();
            closeDeleteModal();
        } catch (error) {
            console.error('Error deleting projects ', error);
        }
    }
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8050/project/user/connected/${userid}`);            
            const responseData = response.data.data;
            setProject(responseData); 
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data: ', error);
            setIsLoading(false);
        }
    };
    const router = useRouter();

    const { userid } = router.query
      
      useEffect(() => {
          if (!data) return;    
            setShowUpdate(true);
        }, [data]);

    useEffect (() => {
        void fetchData();
    },[])

    const onProviderUpdate = () => {
        void fetchData();
        handleCancel();
      };
    

    return (
        <>
            <HeaderHome/>
            <div className="flex justify-center mt-10">
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="border-collapse border w-full border-gray-800">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-6 py-3 text-left">ID</th>
                                <th className="px-6 py-3 text-left">Project Name</th>
                                <th className="px-6 py-3 text-left">Link Webhook</th>
                                <th className="px-6 py-3 text-left">Integration</th>
                                <th className="px-6 py-3 text-center">Edit</th>
                                <th className="px-6 py-3 text-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(project) && project.length > 0 ? (
                                project.map((item) => (
                                    <tr key={item.project_id}>
                                        <td className="px-6 py-4">{item.project_id}</td>
                                        <td className="px-6 py-4">{item.name}</td>
                                        <td className="px-6 py-4">{item.webhook}</td>
                                        <td className="px-6 py-4">{item.provider_type}</td>
                                        <td className="px-6 py-4">
                                            {/* Kolom Edit */}
                                            <div>
                                        <button onClick={() => handleEdit(item)}>
                                                <FaPencilAlt className="text-blue-500" />
                                            </button>      
                                        </div>                   
                                    </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button onClick={() => openDeleteModal(item.project_id)} className="text-red-500 hover:text-red-700">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">No data available.</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                )}
                {showUpdate && (
            <UpdatedProject
            data={data}
            onUpdate={onProviderUpdate}
            setData={setData}
            onCancel={handleCancel}
            />
        )}
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
