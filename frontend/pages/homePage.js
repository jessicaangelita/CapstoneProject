import React, { useState, useEffect } from "react";
import ContentHome from "../components/contenthome";
import SideBarHome from "../components/sidebar/SideBarHome";
import axios from "../pages/api/axios";
import { CiFaceSmile } from "react-icons/ci";
import Image from "next/image";
import {IMAGE} from "../public/config/index"

export default function Home() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState({});

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             // Gantilah dengan logika sebenarnya untuk mendapatkan informasi pengguna
    //             const userData = await fetchUserDataFunction(); // fungsi asinkron yang mengembalikan data pengguna
    //             setUsername(userData.username);
    //         } catch (error) {
    //             console.error("Error fetching user data:", error);
    //         }
    //     };

    //     fetchUserData();
    // }, []);

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
        }, []);

    return (
      <>
        <div className="min-h-screen bg-primary-darkgrey flex flex-col w-full pl-16 overflow-visible">
          <SideBarHome />
          <title>Home</title>

          <div className="flex items-center justify-center w-full mt-40">
            <Image src={IMAGE.INFINITY} className="h-44 w-fit" />
          </div>
          <div className="flex items-center justify-center mt-10">
            <h1 className="text-6xl text-primary-lightgrey font-extrabold">
              Welcome, {data.data?.username} <CiFaceSmile className="inline" />
            </h1>
          </div>
          <div className="flex justify-center mt-10">
            <p className="text-2xl text-primary-lightgrey font-semibold">
              Let's start connecting your project and activities!
            </p>
          </div>

          {/* <ContentHome/> */}
        </div>
      </>
    );
}
