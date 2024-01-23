import React, { useState, useEffect } from "react";
import ContentHome from "../components/contenthome";
import SideBar from "../components/sidebar/SideBar";
import axios from "../pages/api/axios";

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
            <div className="min-h-screen bg-primary-darkgrey flex flex-col w-full">
                <SideBar />
                <title>Home</title>
                <div className="flex-grow flex items-center justify-center">
                    <h1 className="text-4xl text-white font-bold">Welcome, {data.data?.username}</h1>
                </div>
                {/* <ContentHome/> */}
            </div>
        </>
    );
}
