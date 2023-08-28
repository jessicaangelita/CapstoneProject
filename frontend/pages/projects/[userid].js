import React, { useEffect, useState } from "react";
import axios from "@/pages/api/axios";
import { useRouter } from "next/router";
import HeaderHome from "@/components/headerhome";
import { FaPencilAlt } from "react-icons/fa";
import UpdatedProject from "@/components/UpdatedProject";

export default function ContentProject() {
    const [project, setProject] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    const [showUpdate, setShowUpdate] = useState(false);
    const [data, setData] = useState(undefined);


    const router = useRouter();

    const { userid } = router.query

    const handleEdit = (item) => {
        // setSelectedData(data);
        setData(item);
    };

    const handleCancel = () => {
        setData(undefined);
        setShowUpdate(false);
    };

    
    useEffect(() => {
        if (!data) return;

        setShowUpdate(true);
    }, [data]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8050/project/user/connected/${userid}`);            
                const responseData = response.data.data;
                setProject(responseData); 
                setIsLoading(false);
                console.log(response);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setIsLoading(false);
            }
        };
        void fetchData();
    }, [userid]);

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
                                        {/* Kolom Delete */}
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
        </>
    );
}
