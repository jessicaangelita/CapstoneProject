import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { ConnectProject } from '../components/ConnectProject';
import axios from './api/axios';
import { data } from 'autoprefixer';

export const NewConnectProject = ({onClose}) => {

const NewConnectProjectURL = "http://localhost:8050/connection/new";
const errReference = useRef();
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);
const [page, setPage] = useState(0);
const [project_id, setproject_id] = useState("");
const [message_provider_id, setmessage_provider_id] = useState("");
const [isLastPage, setIsLastPage] = useState(false);
const [shouldClosePopup, setShouldClosePopup] = useState(false);

const [id, setId] = useState([project_id, setproject_id]);
  const [listProvider, setListProvider] = useState([]);
  const [selectedprovider, setSelectedProvider] = useState('');



useEffect(() => {
    setErrMsg("");
    setIsLastPage(page === FormTitles.length - 1);
}, [project_id, ,message_provider_id]);

const fetchProvider = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8050/message-provider/all`
    );
    const responseData = response.data.data;

    setListProvider(responseData);
    console.log(response);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

useEffect(() => {
  fetchProvider();
}, [id]);

const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const data = {
        project_id,
        message_provider_id
      };

      axios
        .post(NewConnectProjectURL, data)
        .then((res) => {
          console.log("success");
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
        });

    } catch (err) {
      console.log('Add New Connection Failed',err)
      errReference.current.focus();
    }
  };

  useEffect(() => {
    if (shouldClosePopup) {
      onClose(); // Memanggil fungsi onClose untuk menutup pop-up
      window.location.reload();
    }
  }, [shouldClosePopup, onClose]);

  

const PageDisplay = () => {
  if (page === 0) {
    return <ConnectProject 
              project_id={project_id} 
              setproject_id={setproject_id}
              message_provider_id={message_provider_id}
              setmessage_provider_id={setmessage_provider_id}
              listProvider={listProvider}
              setListProvider={setListProvider}
              selectedprovider={selectedprovider}
              setSelectedProvider={setSelectedProvider}
            />;
  }
};

const FormTitles = ["Connect Project"];

  return (
    <div className='items-center justify-center flex md:flex fixed inset-0 z-50'>
      <div className='bg-gray-100  w-fit shadow-2xl rounded-lg border-solid border-black p-4 mx-4 my-8 min-w-[300px] max-w-md md:w-[50%]'>
        {/* Close button */}
          <button
            className="flex top-0 right-0 m-2 text-white bg-blue-700 px-5 mx-2 my-4 hover:text-gray-700 rounded-md p-2"
            onClick={onClose}
          >
            Close
          </button>
        
        {/* Title */}
        <p className="flex justify-center text-slate-700 text-2xl font-extrabold mb-6">Connect Project</p>

        {/* Progress Title */}
        <div className='flex justify-center'>
          <h1 className='flex justify-center'>{FormTitles[page]}</h1>
        </div>
        

        {/* Form Body */}
        <div>
          <p
            ref={errReference}
            className={` ${errMsg ? "errmsg" : "offscreen"}`}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              {PageDisplay()}
            </div>
          </form>
        </div>


        {/* Button */}


        <div className='mt-2 flex gap-2'>
          {/* nanti apus */}

          <button
          type="submit"
          onClick={(e) => {
              if (page === FormTitles.length - 1) {
                // alert("FORM SUBMITTED");
                console.log("name nya " + name);
                handleSubmit(e);
                setShouldClosePopup(true);
              } else {
                setPage((currPage) => currPage + 1);
                setIsLastPage(page + 1 === FormTitles.length - 1);
              }
              setIsLastPage(page + 1 === FormTitles.length - 1);
            }} 
            className={`w-full text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md my-6 
              ${
                isLastPage ? "bg-green-500 hover:bg-green-600" : ""
              }`}
            >
                {isLastPage ? "OK" : "Next"}
            </button>
        </div>
      </div>
    </div>
    
  )
}
export default NewConnectProject;
