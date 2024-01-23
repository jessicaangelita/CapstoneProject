import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IMAGE } from "../../public/config/index";
import { FaRegEnvelope } from "react-icons/fa";
import { MdPermIdentity, MdLockOutline } from "react-icons/md";
import { BiHide, BiShow } from "react-icons/bi";
import { useRouter } from "next/router";
import Head from "next/head";
import ProfileFooter from "../../components/footer/ProfileFooter";
import HeaderHome from "../../components/HeaderHome";
import SideBar from "../../components/sidebar/SideBar";
import axios from "../api/axios";

export const profile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [showChangePassword, setShowChangePassword] = useState(false);

  const router = useRouter();

  const handleEditButtonClick = () => {
    router.push("/user/editProfile"); // Sesuaikan dengan path yang sesuai untuk halaman edit profil Anda
  };

  const handleChangePasswordButtonClick = () => {
    setShowChangePassword(true);
    setIsEditing(false); // Close the edit mode when opening the Change Password pop-up
  };

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
      const response = await axios.get(`http://localhost:8050/user/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const dataFetch = await response.data;

      // console.log('Profile Data:', profileData);
      console.log("Data from API:", dataFetch);
      console.log(data.data?.name);
      if (dataFetch) {
        setData(dataFetch);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, [router.query]);
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="flex items-center justify-center bg-[url('../public/assets/background/SnowyMountainFooter.jpg')] min-h-screen">
        <div className="bg-primary-grey"><SideBar/></div>
          

        <div className=" bg-primary-white w-2/5 mt-10 rounded-lg h-[90vh] overflow-auto mb-10">
          <div className="flex items-center justify-center pt-10 flex-col">
            <Image
              src={IMAGE.AVATAR_1}
              className="rounded-full w-32 border-primary-lightblue border-solid border-2 mb-8 mt-5"
            />
            <p className="text-4xl font-semibold leading-normal mb-2 inline">
              Your Profile
            </p>
            <button
              className="ml-auto mr-16 bg-primary-mediumblue text-white text-center hover:bg-primary-darkblue duration-200 px-3 inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 py-2 text-base w-[20%]"
              type="button"
              onClick={handleEditButtonClick}
            >
              Edit Profile
            </button>
          </div>

          {isEditing ? (
            <FormProfileEdit onSave={handleSaveProfile} />
          ) : (
            <div className=" space-y-6 mx-10">
              {/* FullName */}
              <div className="space-y-2">
                <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                  Fullname
                </label>
                <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                  <MdPermIdentity className="m-[1%] text-slate-700" />
                  <input
                    type="text"
                    name="name"
                    value={data.data?.name }
                    readOnly
                    className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="space-y-2">
                <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                  Username
                </label>
                <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                  <MdPermIdentity className="m-[1%] text-slate-700" />
                  <input
                    type="text"
                    name="username"
                    value={data.data?.username}
                    readOnly
                    className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                  Email
                </label>
                <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                  <FaRegEnvelope className="m-[1%] text-slate-700" />
                  <input
                    type="email"
                    name="email"
                    value={data.data?.email}
                    readOnly
                    className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Password */}
              {/* <div className="space-y-2">
                <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                  Password
                </label>
                <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                  <MdLockOutline className="m-[1%] text-slate-700" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={data.data?.password}
                    className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                  />

                  {showPassword ? (
                    <BiHide
                      onClick={() => setShowPassword(false)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <BiShow
                      onClick={() => setShowPassword(true)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div> */}
            </div>
          )}
          <ProfileFooter />
        </div>
      </div>
    </>
  );
};

export default profile;
