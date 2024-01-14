// components/FormProfileEdit.js
import React, { useState,useEffect, useRef } from "react";
import Head from "next/head";
import { FaRegEnvelope, FaTimes } from "react-icons/fa";
import { MdPermIdentity, MdLockOutline } from "react-icons/md";
import { BiSolidInfoCircle, BiHide, BiShow } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { FcCheckmark } from "react-icons/fc";

const fullname_valid = /^[A-Z][a-zA-Z\s]*$/;
const username_valid = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/; //bebas min 5-15 huruf bole spasi
const email_valid = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //dapat menggunakan angka, huruf, _ dan . sebelum @
const pass_valid =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,10}$/; //ada satu huruf dan angka yang required dengan min.6-10 huruf

const FormProfileEdit = ({ onSave }) => {
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

  // Error Message
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [registrationWarning, setRegistrationWarning] = useState(false);

  useEffect(() => {
    userReference.current.focus(); //setting focusnya ketika komponen load
  }, []);

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
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [name, username, email, password]);


  // const handleSubmit = (e) => {

  //   e.preventDefault();
  //   onSave({ fullName, email, password });
  // };

  const handleSubmit = async (e) => {
    try {
      const updatedData = {
        name: '',
        username: '',
        email: '',
        password: ''
      };

      await axios.put(
        `http://localhost:8050/message-provider/edit/${data.id}`,
        updatedData
      );

      setData(updatedData);
      setProvidertName(updatedData)
      console.log("saved", updatedData);
      onUpdate();
    } catch (err) {
      console.log("Update error", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 flex flex-col items-center w-full p-1">
      <div>
        <Head>
          <title>Edit Profile</title>
        </Head>
      </div>

      {/* Fullname */}
       <div className="space-y-2 mb-2">
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
        {/* <span className="text-red-600 ml-1">*</span> */}
        </label>
        <div className="w-full bg-white flex items-center mb-[5px] border-gray-300 border rounded-lg px-3 py-1 focus:outline-none shadow shadow-black">
        <MdPermIdentity className="m-[1%] text-slate-700" />
        <input
         type="text"
         name="name"
         placeholder="Enter your Full Name"
        ref={userReference}
        autoComplete="off"
        onChange={(e) => setName(e.target.value)}
        required
        aria-invalid={validFullname ? "false" : "true"}
        aria-describedby="note"
        onFocus={() => setFullnameFocus(true)}
        onBlur={() => setFullnameFocus(false)}
        className="ml-[2%] w-64 focus:outline-none h-8 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
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
      <div className="space-y-2 mb-2">
                      <p
                        id="uname-note"
                        className={`${
                          unameFocus && username && !validUname
                            ? "instructions"
                            : "sr-only"
                        } flex items-center text-red-600 mt-2 text-xs`}
                      >
                        <BiSolidInfoCircle className="mr-2" />
                        Must be 5 to 15 characters, letters, numbers are allowed
                      </p>
                      <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                        Username
                        {/* <span className="text-red-600 ml-1 text-sm">*</span> */}
                      </label>
                      <div className="w-full bg-white flex items-center mb-[5px] border-gray-300 border rounded-lg px-3 py-1 focus:outline-none shadow shadow-black">
                        <MdPermIdentity className="m-[1%] text-slate-700" />
                        <input
                          type="text"
                          name="username"
                          autoComplete="off"
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          aria-invalid={validUname ? "false" : "true"}
                          aria-describedby="uname-note"
                          onFocus={() => setUnameFocus(true)}
                          onBlur={() => setUnameFocus(false)}
                          placeholder="Enter your Username"
                          className="ml-[2%] w-64 focus:outline-none h-8 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
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
       <div className="space-y-2 mb-2">
                      <p
                        id="email-note"
                        className={`${
                          emailFocus && email && !validEmail
                            ? "instructions"
                            : "sr-only"
                        } flex items-center text-red-600 mt-2 text-xs`}
                      >
                        <BiSolidInfoCircle className="mr-2" />
                        Letters, numbers, underscore and dot are allowed
                      </p>
                      <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                        Email
                        {/* <span className="text-red-600 ml-1">*</span> */}
                      </label>
                      <div className="w-full bg-white flex items-center mb-[5px] border-gray-300 border rounded-lg px-3 py-1 focus:outline-none shadow shadow-black">
                        <FaRegEnvelope className="m-[1%] text-slate-700" />
                        <input
                          type="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          aria-invalid={validEmail ? "false" : "true"}
                          aria-describedby="email-note"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                          placeholder="Enter your Email"
                          className="ml-[2%] w-64 focus:outline-none h-8 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
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


      {/* PASSWORD */}
        <div className="space-y-2 mb-2">
        <p
        id="email-note"
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
          {/* <span className="text-red-600 ml-1">*</span> */}
          </label>
            <div className="w-full bg-white flex items-center mb-[5px] border-gray-300 border rounded-lg px-3 py-1 focus:outline-none shadow shadow-black">
            <MdLockOutline className="m-[1%] text-slate-700" />
            <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-invalid={validPass ? "false" : "true"}
            aria-describedby="pass-note"
            onFocus={() => setPassFocus(true)}
            onBlur={() => setPassFocus(false)}
            placeholder="Enter your Password"
            className="ml-[2%] w-60 focus:outline-none h-8 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
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

            {/* checkmark */}
            <span className={validPass ? "valid" : "hidden"}>
            <FcCheckmark />
            </span>
            <span
            className={`${
            validPass || !password ? "hidden" : ""
            } text-red-600`}
            >
            <FaTimes />
          </span>
        </div>
        </div>                     


        <button 
        type="submit" 
        className="mx-auto bg-blue-500 text-white py-2 px-4 rounded justify-center text-center items-center mt-5">
          Save Changes
        </button>
      </form>
    );
  };

export default FormProfileEdit;
