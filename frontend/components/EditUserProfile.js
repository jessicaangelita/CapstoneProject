import React, { useState, useEffect, useRef } from "react";
import { FaRegEnvelope, FaArrowLeft, FaTimes } from "react-icons/fa";
import { MdPermIdentity, MdLockOutline } from "react-icons/md";
import { BiHide, BiShow, BiSolidInfoCircle } from "react-icons/bi";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "../pages/api/axios";
import { IoCloseCircle } from "react-icons/io5";
import { FcCheckmark } from "react-icons/fc";
import ProfileFooter from "../components/footer/ProfileFooter";
import SideBar from "../components/sidebar/SideBar";
import Image from "next/image";
import {IMAGE} from "../public/config/index";

const fullname_valid = /^[A-Z][a-zA-Z\s]*$/;
const username_valid = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/; //bebas min 5-15 huruf bole spasi
const email_valid = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //dapat menggunakan angka, huruf, _ dan . sebelum @
const pass_valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,10}$/; //ada satu huruf dan angka yang required dengan min.6-10 huruf


export default function EditProfile ({ onCancel }) {
  const userReference = useRef();
  const errReference = useRef();

  // Toggle Password
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [validFullname, setValidFullname] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [validUname, setValidUname] = useState(false);
  const [unameFocus, setUnameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [matchValid, setMatchValid] = useState(false);
  const [MatchFocus, setMatchFocus] = useState(false);

  // Error Message
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [registrationWarning, setRegistrationWarning] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  //   userReference.current.focus(); //setting focusnya ketika komponen load
  // }, []);

  useEffect(() => {
    const result = fullname_valid.test(name);
    console.log(result);
    console.log(name);
    setValidFullname(result);
  }, [name]);

  useEffect(() => {
    const result = username_valid.test(username);
    console.log(result);
    console.log(username);
    setValidUname(result);
  }, [username]);

  useEffect(() => {
    const result = email_valid.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = pass_valid.test(password);
    console.log(result);
    console.log(password);
    setValidPass(result);
    const match = password === matchPassword;
    setMatchValid(match);
}, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [name, username, email, password, matchPassword]);

  const handleSubmit = async (e) => {
    try {
      const updatedData = {
        name,
        username,
        email,
        password,
      };

      const response = await axios.put(
        `http://localhost:8050/user/profile`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // setProfileData(updatedData);
      console.log("saved", updatedData);
      // router.push("/user/profile");
      // onUpdate();
    } catch (err) {
      // console.log("Update error", err);
      if (err.response) {
        // Respons dari server, termasuk status code dan pesan kesalahan
        console.error("Update error:", err.response.status, err.response.data);
      } else {
        // Kesalahan lainnya (misalnya, tidak dapat terhubung ke server)
        console.error("Update error:", err.message);
      }
    }
    window.location.href = "/user/profile";
  };

  const handleBack = () => {
    router.push("/user/profile");
  };


  const [data, setData] = useState({});
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
      console.log(data.data?.id);
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
        <title>Edit Profile</title>
      </Head>
      <div className="bg-primary-grey">
        <SideBar />
      </div>
      <div className="flex items-center justify-center bg-[url('../public/assets/background/SnowyMountainFooter.jpg')] min-h-screen">
        <div className=" bg-primary-white lg:w-2/5 w-auto mt-10 rounded-lg h-[90vh] overflow-auto mb-10">
          <div className="flex items-center justify-center pt-10 flex-col">
            <Image
              src={IMAGE.AVATAR_1}
              className="rounded-full w-32 border-primary-lightblue border-solid border-2 mb-8 mt-5"
            />
            <p className="text-4xl font-semibold leading-normal mb-2 inline">
              Edit Profile
            </p>

            <FaArrowLeft
              className="cursor-pointer right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2  focus:ring-offset-2 disabled:pointer-events-none text-primary-mediumblue font-extrabold sm:w-[15%] md:w-[15%] lg:w-[11%] xl:w-[9%] 2xl:w-[7%] h-auto mr-auto ml-[4%] mb-6 text-center hover:text-primary-darkblue duration-200 px-3 inline-flex items-center justify-center whitespace-nowrap ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:opacity-50py-2 text-base"
              onClick={handleBack}
            />
          </div>

          <form
            onSubmit={handleSubmit}
            method="post"
            className="space-y-6 mx-10"
          >
            {/* FullName */}
            <div className="space-y-2">
              <p
                id="note"
                className={`${
                  fullnameFocus && name && !validFullname
                    ? "instructions"
                    : "sr-only"
                } flex items-center text-red-600 mb-1 text-xs`}
              >
                <BiSolidInfoCircle className="mr-2" />
                Must start with a capital letter
              </p>
              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                Fullname
                <span className="text-red-600 ml-1">*</span>
              </label>
              <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                <MdPermIdentity className="m-[1%] text-slate-700" />
                <input
                  type="text"
                  name="name"
                  placeholder={data.data?.name}
                  ref={userReference}
                  autoComplete="off"
                  onChange={(e) => setName(e.target.value)}
                  required
                  aria-invalid={validFullname ? "false" : "true"}
                  aria-describedby="note"
                  onFocus={() => setFullnameFocus(true)}
                  onBlur={() => setFullnameFocus(false)}
                  className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                />
                {/* checkmark */}
                <span className={validFullname ? "valid" : "hidden"}>
                  <FcCheckmark />
                </span>
                <span
                  className={`${
                    validFullname || !name ? "hidden" : ""
                  } text-red-600`}
                >
                  <FaTimes />
                </span>
              </div>
            </div>

            {/* Username */}
            <div className="space-y-2">
              <p
                id="uname-note"
                className={`${
                  unameFocus && username && !validUname
                    ? "instructions"
                    : "sr-only"
                } flex items-center text-red-600 mt-2 text-xs`}
              >
                <BiSolidInfoCircle className="mr-2" />
                Must be 5 to 15 characters
              </p>
              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                Username
                <span className="text-red-600 ml-1">*</span>
              </label>
              <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                <MdPermIdentity className="m-[1%] text-slate-700" />
                <input
                  type="text"
                  name="username"
                  placeholder={data.data?.username}
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  aria-invalid={validUname ? "false" : "true"}
                  aria-describedby="uname-note"
                  onFocus={() => setUnameFocus(true)}
                  onBlur={() => setUnameFocus(false)}
                  className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                />
                {/* checkmark */}
                <span className={validUname ? "valid" : "hidden"}>
                  <FcCheckmark />
                </span>
                <span
                  className={`${
                    validUname || !username ? "hidden" : ""
                  } text-red-600`}
                >
                  <FaTimes />
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <p
                id="email-note"
                className={`${
                  emailFocus && email && !validEmail
                    ? "instructions"
                    : "sr-only"
                } flex items-center text-red-600 mt-2 text-xs`}
              >
                <BiSolidInfoCircle className="mr-2" />
                Must be in email format
              </p>
              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                Email
                <span className="text-red-600 ml-1">*</span>
              </label>
              <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                <FaRegEnvelope className="m-[1%] text-slate-700" />
                <input
                  type="email"
                  name="email"
                  placeholder={data.data?.email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="email-note"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                />
                {/* checkmark */}
                <span className={validEmail ? "valid" : "hidden"}>
                  <FcCheckmark />
                </span>
                <span
                  className={`${
                    validEmail || !email ? "hidden" : ""
                  } text-red-600`}
                >
                  <FaTimes />
                </span>
              </div>
            </div>

            {/* //Password */}
            <div className="space-y-2">
            <p
                id="pass-note"
                className={`${
                  passFocus && password && !validPass
                    ? "instructions"
                    : "sr-only"
                } flex items-center text-red-600 mt-2 text-xs`}
              >
                <BiSolidInfoCircle className="mr-2" />
                6 to 10 characters <br />
                Must have atleast 1 characters, 1 numbers
              </p>
              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                Password
                <span className="text-red-600 text-xs ml-1">(Optional)</span>
              </label>
              <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                <MdLockOutline className="m-[1%] text-slate-700" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={validPass ? "false" : "true"}
                  aria-describedby="pass-note"
                  onFocus={() => setPassFocus(true)}
                  onBlur={() => setPassFocus(false)}
                  placeholder="Enter your Password"
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
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
            <p
              id="confirm-note"
              className={`${
              MatchFocus && !matchValid
                ? "instructions"
                : "sr-only"
              } flex items-center text-red-600 mt-2 text-xs`}
              >
              <BiSolidInfoCircle className="mr-2" />
              Must match the first password input field.
              </p>

              <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                Confirm Password
                <span className="text-red-600 text-xs ml-1">(Optional)</span>
              </label>
              <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                <MdLockOutline className="m-[1%] text-slate-700" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={(e) => setMatchPassword(e.target.value)}
                  aria-invalid={matchValid ? "false" : "true"}
                  aria-describedby="confirm-note"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  placeholder="Confirm your Password"
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
            </div>

            <button
              className="bg-primary-mediumblue text-white text-center hover:bg-primary-darkblue duration-200 px-3 inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 py-2 text-base w-full"
              type="submit"
            >
              Save Changes
            </button>
          </form>
          <ProfileFooter />
        </div>
      </div>
    </>
  );
};



