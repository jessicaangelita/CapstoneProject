import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { AddProject1 } from '../components/AddProject1';
import { AddProject2 } from '../components/AddProject2';
import { AddProject3 } from '../components/AddProject3';
import { AddProject4 } from '../components/AddProject4';
import axios from './api/axios';

export const NewProject = ({onClose}) => {

const NewProjectURL = "http://localhost:8050/project/new";
const errReference = useRef();
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);
const [page, setPage] = useState(0);
const [name, setname] = useState("");

useEffect(() => {
    setErrMsg("");
}, [name]);


const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const data = {
        name
      };

      axios
        .post(NewProjectURL, data)
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });

    } catch (err) {
      console.log('Add New Project Failed',err)
      errReference.current.focus();
    }
    setSuccess(true);
  };

const PageDisplay = () => {
  if (page === 0) {
    return <AddProject1 name={name} setname={setname} />;
  } else if (page === 1) {
    return <AddProject2 />;
  }
};
1
const FormTitles = ["Name The Project", "New Project Created!"];

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
        <p className="flex justify-center text-slate-700 text-2xl font-extrabold mb-6">Create New Project</p>

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
                alert("FORM SUBMITTED");
                console.log("name nya " + name);
                handleSubmit(e);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }} className='w-full text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md my-6'>
              Next
          </button>
        </div>
      </div>
    </div>
    
  )
}
export default NewProject
