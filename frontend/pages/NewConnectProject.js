import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { ConnectProject } from '../components/ConnectProject';
import axios from './api/axios';
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';
import { IoCloseCircle } from "react-icons/io5";

export const NewConnectProject = ({onClose}) => {
  const router = useRouter();

// const NewConnectProjectURL = "http://localhost:8050/connection/new";
const errReference = useRef();
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);
const [page, setPage] = useState(0);
const [projectId, setprojectId] = useState("");
const [message_provider_id, setmessage_provider_id] = useState("");
const [isLastPage, setIsLastPage] = useState(false);
const [shouldClosePopup, setShouldClosePopup] = useState(false);
const [name, setname] = useState("");

  const [listProvider, setListProvider] = useState([]);
  const [selectedprovider, setSelectedProvider] = useState('');


useEffect(() => {
    setErrMsg("");
    setIsLastPage(page === FormTitles.length - 1);
}, [projectId, ,message_provider_id]);

useEffect(() => {
  setErrMsg("");
}, [projectId, ,message_provider_id]);

const fetchProvider = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8050/message-provider/owned`, 
      {
        headers: {
          Authorization : `Bearer ${localStorage.getItem("accessToken")}`    
        }
      }
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
}, [projectId]);
// bkan dari connection id
// ini didapat dari 
// beda page pin
const handleSubmit = (e) => {
    e.preventDefault();
    const projectIdFromQuery = router.query.project_id;
    setprojectId(projectIdFromQuery);
    try {
      const data = {
        project_id : projectIdFromQuery,
        message_provider_id : selectedprovider
      };
      axios
        .post(`http://localhost:8050/connection/new`, data)
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });
        router.reload();
    } catch (err) {
      console.log('Add New Connection Failed',err)
      errReference.current.focus();
    }
    setSuccess(true);
  };

  useEffect(() => {
    if (shouldClosePopup) {
      onClose(); 
      window.location.reload();
    }
  }, [shouldClosePopup, onClose]);

const PageDisplay = () => {
  if (page === 0) {
    return <ConnectProject 
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
          {/* <button
            className="flex top-0 right-0 m-2 text-white bg-blue-700 px-5 mx-2 my-4 hover:text-gray-700 rounded-md p-2"
            onClick={onClose}
          >
            Close
          </button> */}
          <IoCloseCircle
            className="absolute cursor-pointer rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none h-auto text-primary-mediumblue hover:text-primary-darkblue font-extrabold w-[3%]"
            onClick={onClose}
        />
        
        {/* Title */}
        <p className="flex justify-center text-slate-700 text-2xl font-extrabold mb-6">Connect Project</p>

        {/* Progress Title */}
        {/* <div className='flex justify-center'>
          <h1 className='flex justify-center'>{FormTitles[page]}</h1>
        </div> */}
        

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


        <div className='flex gap-2 justify-center'>
          {/* nanti apus */}

          <button
          type="submit"
          onClick={(e) => {
              if (page === FormTitles.length - 1) {
                console.log("name nya " + name);
                handleSubmit(e);
                setShouldClosePopup(true);
              } else {
                setPage((currPage) => currPage + 1);
                setIsLastPage(page + 1 === FormTitles.length - 1);
              }
              // setIsLastPage(page + 1 === FormTitles.length - 1);
            }} 
            className={`w-72 flex justify-center text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md my-3 mt-[-4%]
              ${
                isLastPage ? "bg-blue-500 hover:bg-blue-600" : ""
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
