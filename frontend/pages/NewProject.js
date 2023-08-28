import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { AddProject1 } from '../components/AddProject1';
import { AddProject2 } from '../components/AddProject2';
import { AddProject3 } from '../components/AddProject3';
import { AddProject4 } from '../components/AddProject4';

export const NewProject = () => {

const NewProjectURL = "http://localhost:8050/project/new";
const errReference = useRef();
const [errMsg, setErrMsg] = useState("");
const [success, setSuccess] = useState(false);

const [page, setPage] = useState(0);
const [formData, setFormData] = useState({
  projectName: "",
  projectLink: "",
  providerSelected : []
});

useEffect(() => {
    setErrMsg("");
}, [projectName, projectLink, providerSelected]);


const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const data = {
        formData
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
    return <AddProject1 formData={formData} setFormData={setFormData} />;
  } else if (page === 1) {
    return <AddProject2 formData={formData} setFormData={setFormData} />;
  } else if (page === 2) {
    return <AddProject3 formData={formData} setFormData={setFormData} />;
  } else if (page === 3) {
    return <AddProject4 formData={formData} setFormData={setFormData} />;
  }
};

const FormTitles = ["Name The Project", "Configure Project", "Configure Providers", "New Project Created!"];

  return (
    <div className='items-center justify-center flex md:flex'>
      <div className='bg-gray-100  w-fit shadow-2xl rounded-lg border-solid border-black p-4 mx-4 my-8'>
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
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className='w-full text-white bg-gray-700 px-4 py-2 rounded-md my-6'
          >
            Prev
          </button>

          <button onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }} className='w-full text-white bg-gray-700 px-4 py-2 rounded-md my-6'>
              Next
          </button>
        </div>
      </div>
    </div>
    
  )
}
export default NewProject
