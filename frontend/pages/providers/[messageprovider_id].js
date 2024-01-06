import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useRouter } from "next/router";
import HeaderHome from "../../components/HeaderHome";
import UpdatedProvider from "../../components/UpdatedProvider";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import NewProvider from "../NewProvider";

export default function ContentProvider() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [provider, setProvider] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProviderId, setSelectedProviderId] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);
  const [data, setData] = useState(undefined);

  const openDeleteModal = (message_provider_id) => {
    setSelectedProviderId(message_provider_id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedProviderId(null);
    setDeleteModalOpen(false);
  };

  const handleEdit = (item) => {
    setData(item);
  };

  const handleCancel = () => {
    setData(undefined);
    setShowUpdate(false);
  };

  const deleteProvider = async () => {
    try {
      await axios.delete(
        `http://localhost:8050/message-provider/id/${selectedProviderId}`
      );
      fetchData();
      closeDeleteModal();
    } catch (error) {
      console.error("Error deleting provider: ", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8050/message-provider/all"
      );
      const responseData = response.data.data;
      setProvider(responseData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
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
      <title>Providers</title>
      <div className="flex justify-end">
        <button
          className="text-white bg-primary-lightblue hover:bg-primary-mediumblue px-8 py-2 rounded-md mx-5 mt-5 mb-8 text-end"
          onClick={togglePopup}
        >
          Add Provider
        </button>
        {isPopupOpen && (
          <div className="popup-container">
            <div className="popup-content">
              <NewProvider onClose={togglePopup} />
            </div>
          </div>
        )}
      </div>
      <div className="mx-auto max-w-3xl mr-[300px]">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.isArray(provider) && provider.length > 0 ? (
              provider.map((item) => (
                <div
                  key={item.provider_id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {item.provider_label}
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
                    <button onClick={() => openDeleteModal(item.provider_id)}>
                      <FaTrashAlt className="text-red-500" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4">No data available.</div>
            )}
          </div>
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
            <p className="text-xl mb-4">
              Are you sure you want to delete this provider?
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeDeleteModal}
                className="mr-2 px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={deleteProvider}
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
