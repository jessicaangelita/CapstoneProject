import ContentProfile from "../components/getprofile";
import React , { useEffect, useState }from "react";
import Link from "next/link";

export default function Profile() {

    return (
        <div className="min-h-screen bg-primary-darkgrey">
            <ContentProfile/>
        </div>
    )
}

// pages/profile.js

// import React, { useState, useEffect} from "react";
// import { useRouter } from "next/router";
// import FormProfileEdit from "../components/EditProfile";
// import axios from "./api/axios";
// import Head from "next/head";
// import HeaderHome from "../components/headerhome"

// export default function ContentProfile () {

//   const [name, setName] = useState("");
//   const[username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [data, setData] = useState({});

//   const [isEditing, setIsEditing] = useState(false);
//   const [profileData, setProfileData] = useState({
//     name: '',
//     username: '',
//     email: '',
//   });

//   const handleSaveProfile = (editedData) => {
//     setProfileData(editedData);
//     setIsEditing(false);
//   };
    
//     // Fetch profile data from the API
//     const fetchProfileData = async () => {
//       try {
//         const response = await axios.get(
//             `http://localhost:8050/user/profile`, 
//             {
//                 headers: {
//                     Authorization : `Bearer ${localStorage.getItem("accessToken")}`
//                 }
//         });
        
//         const dataFetch = await response.data;
        
//         // console.log('Profile Data:', profileData);
//         console.log('Data from API:', dataFetch);
//         console.log(data.data?.id);
//         // console.log(data.code);
//         if(dataFetch){
//           setData(dataFetch);
//         }
//         // setData(dataFetch);
//       } catch (error) {
//         console.error("Error fetching profile data:", error);
//       }
//     };

//     useEffect(() => {
//         fetchProfileData();
//       }, []);

//   return (
//     <div className="min-h-screen bg-primary-darkgrey flex flex-col w-full">
//       <div>
//             <Head>
//                 <title>Profile</title>
//             </Head>
//         </div>
//       <HeaderHome />  
//       <div className="flex justify-center items-center mt-5 ml-40">

//         {/* Information */}
//         <div className="bg-white flex flex-col items-center max-w-screen-lg border-8 border-gradient-to-l overflow-hidden rounded-lg shadow-[0_3px_10px_rgb(0,0,0,1)] w-1/2 md:flex-row text-black">
//           {/* Profile display */}
//           <div className= "p-2 rounded-2xl m-1 flex flex-col shadow-md justify-start items-center w-full from-primary-mediumblue via-white to-primary-mediumblue bg-gradient-to-tr h-full">

//           <div className="flex justify-center items-center space-y-4 flex-col">
//             <div className="flex flex-col items-center mb-4">
//               <h1 className="text-black-700 text-4xl font-semibold">Profile</h1>
//             </div>

//           {isEditing ? (
//             <FormProfileEdit onSave={handleSaveProfile} />
//           ) : (
//             <div className="mt-6 pl-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-3">
//               <label htmlFor="first-name" className="block text-3xl font-medium leading-6 text-gray-900">
//                 Fullname
//               </label>
//               <div className="mt-2 text-lg">
//               <strong>{data.data?.name}</strong> 
//               </div>
//             </div>

//             <div className="sm:col-span-3">
//               <label htmlFor="last-name" className="md:flex-row block text-3xl font-medium leading-6 text-gray-900">
//                 Username
//               </label>
//               <div className="mt-2 text-lg">
//               <strong>{data.data?.username}</strong>
//               </div>
//             </div>

//             <div class="sm:col-span-3">
//               <label for="email" class="block text-3xl font-medium leading-6 text-gray-900">
//                 Email address</label>
//               <div class="mt-2 text-lg">
//               <strong>{data.data?.email}</strong> 
//               </div>
//             </div>

//               {/* Button Edit */}
//               <div className="mt-6 flex items-center justify-end">
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="bg-blue-500 text-white text-lg py-3 px-5 rounded mt-2 ml-5"
//                 >
//                   Edit
//                 </button>
//               </div>
//             </div>
//           )}
//                 </div>
//             </div>
//            </div>
//           </div>
//         </div>
//   );

// };



