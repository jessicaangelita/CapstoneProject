import React, { useEffect, useState } from "react";
import axios from "@/pages/api/axios";
// import UpdatedProject from "./UpdatedProject";
import { useRouter } from "next/router";
import HeaderHome from "@/components/headerhome";
import UpdatedProvider from "@/components/UpdatedProvider";
import { FaPencilAlt } from "react-icons/fa";

export default function ContentProvider() {
  const [provider, setProvider] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProviderId, setSelectedProviderId] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [data, setData] = useState(undefined);
    // const router = useRouter();

    // const { messageprovider_id } = router.query


    const openDeleteModal = (message_provider_id) => {
        setSelectedProviderId(message_provider_id);
        setDeleteModalOpen(true);
    }
  

  const closeDeleteModal = () => {
        setSelectedProviderId(null);
        setDeleteModalOpen(false);
    }
  // const messageprovider_id = router.query.messageprovider_id

  //Updated
  const handleEdit = (item) => {
    setData(item);
  };

  const handleCancel = () => {
    setData(undefined);
    setShowUpdate(false);
  };

  const deleteProvider = async () => {
        try {
            await axios.delete(`http://localhost:8050/message-provider/id/${selectedProviderId}`);
            fetchData();
            closeDeleteModal();
        } catch (error) {
            console.error('Error deleting provider: ', error);
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8050/message-provider/all');
            const responseData = response.data.data;
            setProvider(responseData); 
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

  const onProviderUpdate = () => {
    void fetchData();
    handleCancel();
  };

  return (
    <>
      <HeaderHome />
      <div className="flex justify-center mt-10">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="border-collapse border w-full border-gray-800">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Provider Name</th>
                <th className="px-6 py-3 text-left">Webhook Link</th>
                <th className="px-6 py-3 text-left">Integration</th>
                <th className="px-6 py-3 text-center">Edit</th>
                <th className="px-6 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(provider) && provider.length > 0 ? (
                provider.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.provider_label}</td>
                    <td className="px-6 py-4">{item.webhook}</td>
                    <td className="px-6 py-4">{item.provider_type}</td>
                    <td className="px-6 py-4 text-center">
                      {/* Kolom Edit */}
                      <div>
                        <button onClick={() => handleEdit(item)}>
                          <FaPencilAlt className="text-blue-500" />
                        </button>
                        {/* Render the update form popup */}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button onClick={() => openDeleteModal(item.id)} className="text-red-500 hover:text-red-700">
                                            Delete
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
          {showUpdate && data && (
            <UpdatedProvider
              data={data}
              onUpdate={onProviderUpdate}
              setData={setData}
              onCancel={handleCancel}
            />
          )}
        </div>
      </div>

        {deleteModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg">
                <p className="text-xl mb-4">Are you sure you want to delete this provider?</p>
                <div className="flex justify-end">
                    <button onClick={closeDeleteModal} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button onClick={deleteProvider} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                </div>
            </div>
        </div>
        )}
    </>
  );
}
