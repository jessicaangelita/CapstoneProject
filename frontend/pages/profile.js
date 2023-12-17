// pages/profile.js

import React, { useState, useEffect, useRouter } from "react";
import HeaderHome from "../components/HeaderHome";
import FormProfileEdit from "../components/EditProfile";
import axios from "../pages/api/axios";
// import user from "../public/assets/user.png"
import Head from "next/head";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullname: '',
    uname: '',
    email: '',
    pass: ''
  });

  const handleSaveProfile = (editedData) => {
    // Save edited data to the backend or application state
    setProfileData(editedData);
    setIsEditing(false);
  };

  // const router = useRouter();
  // const { userid } = router.query;

  useEffect(() => {
    // Fetch profile data from the API
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`http://localhost:8050/project/user/connected/${userid}`);
        const data = await response.data;

        // Assuming the API response structure is { fullName, email, password }
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <div>
            <Head>
                <title>Profile</title>
            </Head>
        </div>
      <HeaderHome />
      
      <div className="container mx-auto mt-8 p-4">
        <h1 className="text-2xl font-bold mb-4 mr-8">Profile</h1>
        <div className="flex justify-center items-center">

        {/* Information */}
        <div className="bg-white flex flex-col items-center max-w-screen-lg border-8 border-gradient-to-l overflow-hidden rounded-lg shadow-[0_3px_10px_rgb(0,0,0,1)] w-3/5 md:flex-row text-black">
          {/* Profile display */}
          <div className= "p-6 rounded-2xl m-1 flex flex-col shadow-md justify-start items-center w-96 from-primary-mediumblue via-white to-primary-mediumblue bg-gradient-to-tr h-96">
            <img className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
              />
              <h1 className="mb-2 mt-5 justify-start font-bold text-2xl text-black">
                <strong>{profileData.fullname}AHMAD</strong> 
              </h1>
              <p className="font-semibold text-xl">
                Web Developer
              </p>
          </div>

          
          <div className="flex justify-center items-center space-y-4 flex-col">
            <div className="flex flex-col items-center mb-4 mr-12">
              <h1 className="text-slate-700 text-4xl font-semibold">Profile</h1>
            </div>


          {isEditing ? (
            <FormProfileEdit onSave={handleSaveProfile} />
          ) : (
            <div className="mt-6 pl-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-3xl font-medium leading-6 text-gray-900">
                Fullname
              </label>
              <div className="mt-2 text-xl">
              <strong>Belinda</strong> {profileData.username}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="md:flex-row block text-3xl font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2 text-xl">
              <strong>Clex23</strong> {profileData.username}
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="email" class="block text-3xl font-medium leading-6 text-gray-900">
                Email address</label>
              <div class="mt-2">
              <strong>jahbahbs@gmail.com</strong> {profileData.pass}
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email" class="block text-3xl font-medium leading-6 text-gray-900">
                Password</label>
              <div class="mt-2">
              <strong>Password</strong> {profileData.pass}
              </div>
            </div>

              {/* Button Edit */}
              <div className="mt-6 flex items-center justify-end">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white py-1 px-7 rounded mt-9"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}
          </div>
          </div>
          </div>
        </div>
    // </div>
  );
};

export default Profile;
