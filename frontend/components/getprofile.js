import React, { useState, useEffect} from "react";
import { useRouter } from "next/router";
// import FormProfileEdit from "../components/EditProfile";
import axios from "../pages/api/axios";
import Head from "next/head";
import HeaderHome from "./headerhome"
import { FaPencilAlt} from "react-icons/fa";
import { RiLockPasswordFill } from 'react-icons/ri';

export default function ContentProfile () {

  const [name, setName] = useState("");
  const[username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    username: '',
    email: '',
  });

  const router = useRouter();

  const handleEditButtonClick = () => {
    router.push("/editProfile"); // Sesuaikan dengan path yang sesuai untuk halaman edit profil Anda
  };
  
//   const handleEdit = (item) => {
//     setData(item);
// };

  const handleSaveProfile = async (editedData) => {
   try {
      const response = await axios.put(
        "http://localhost:8050/user/profile",
        editedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
  
      // Pastikan permintaan berhasil
      if (response.status === 200) {
        console.log("Profile updated successfully!");
        setIsEditing(false); 
        fetchProfileData(); 

        // router.push("/profile");
        console.log(router);
      } else {
        console.error("Failed to update profile:", response.data);
        
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      
    }
  };
    
    // Fetch profile data from the API
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
            `http://localhost:8050/user/profile`, 
            {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("accessToken")}`
                }
        });
        
        const dataFetch = await response.data;
        
        // console.log('Profile Data:', profileData);
        console.log('Data from API:', dataFetch);
        console.log(data.data?.id);
        // console.log(data.code);
        if(dataFetch){
          setData(dataFetch);
        }
        // setData(dataFetch);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    useEffect(() => {
        fetchProfileData();
      }, [router.query]);

  return (
    <div className="min-h-screen bg-primary-darkgrey flex flex-col w-full"> 
      <div>
            <Head>
                <title>Profile</title>
            </Head>
        </div>
      <HeaderHome />
      
      <div className="flex justify-center items-center mt-12 ml-40">
        {/* <h1 className="text-2xl font-bold mb-4 mr-28">Profile</h1> */}
        <div className="flex justify-center items-center">

        {/* Information */}
        <div className="bg-white flex flex-col items-center max-w-screen-lg border-8 border-gradient-to-l overflow-hidden rounded-lg shadow-[0_3px_10px_rgb(0,0,0,1)] w-2/3 md:flex-row text-black">
          {/* Profile display */}
          <div className= "p-6 flex flex-col shadow-md justify-start items-center py-10 w-2/3 from-primary-mediumblue via-white to-primary-mediumblue bg-gradient-to-tr">
            <img className=" md:flex-row inline-block h-50 w-56 rounded ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
              />
              {/* <h1 className="mb-2 mt-5 justify-start font-bold text-2xl text-black">
                <strong>{profileData.name}AHMAD</strong> 
              </h1> */}
              {/* <p className="font-semibold text-xl">
                Web Developer
              </p> */}
          </div>

          
          <div className="flex justify-center items-center space-y-4 flex-col">
            <div className="flex flex-col items-center mt-2 mb-4 mr-10">
              <h1 className="text-slate-700 text-3xl font-semibold">Profile</h1>
            </div>


          {isEditing ? (
            <FormProfileEdit onSave={handleSaveProfile} />
          ) : (
            <div className="mt-6 pl-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-2xl font-medium leading-6 text-gray-900">
                Fullname
              </label>
              <div className="mt-2 text-lg">
              <strong>{data.data?.name}</strong>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="md:flex-row block text-2xl font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2 text-lg">
              <strong>{data.data?.username}</strong> 
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email" class="block text-2xl font-medium leading-6 text-gray-900">
                Email address</label>
              <div class="mt-2 text-lg">
              <strong>{data.data?.email}</strong> 
              </div>
            </div>

              {/* Button Edit */}
              <div className="mt-10 flex items-center justify-end">
                <button
                  // onClick={() => setIsEditing(true)}
                  onClick={handleEditButtonClick}
                  className="bg-blue-500 text-white text-lg py-3 px-7 rounded mt-9 mb-5"
                >
                  Edit
                </button>
              </div>
            </div>
           )}
          </div>
          </div>
          </div>
        </div>
    </div>
  );
};


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
//             <FormProfileEdit onSave={handleSaveProfile} profileData={profileData} />
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

//               <RiLockPasswordFill />

//             </div>
//           )}
//                 </div>
//             </div>
//            </div>
//           </div>
//         </div>
//   );

// };

  
