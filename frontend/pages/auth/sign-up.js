import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { FaRegEnvelope, FaTimes } from "react-icons/fa";
import { MdPermIdentity, MdLockOutline } from "react-icons/md";
import { BiSolidInfoCircle, BiHide, BiShow } from "react-icons/bi";
import { ImCheckmark } from "react-icons/im";
import { FcCheckmark } from "react-icons/fc";
import axios from "../api/axios";
import { IMAGE } from "../../public/config/index";
import Image from "next/image";

// export default function SignUpPage() {

const fullname_valid = /^[A-Z][a-zA-Z\s]*$/;
const username_valid = /^[a-zA-Z][a-zA-Z0-9_]{4,14}$/; //bebas min 5-15 huruf bole spasi
const email_valid = /^[a-zA-Z0-9_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //dapat menggunakan angka, huruf, _ dan . sebelum @
const pass_valid =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,10}$/; //ada satu huruf dan angka yang required dengan min.6-10 huruf
const signup_url = "/user/SignUp";

const SignUpPage = () => {
  const userReference = useRef();
  const errReference = useRef();

  // Toggle Password
  const [showPassword, setShowPassword] = useState(false);

  const [fullname, setFullname] = useState("");
  const [validFullname, setValidFullname] = useState(false);
  const [fullnameFocus, setFullnameFocus] = useState(false);

  const [uname, setUname] = useState("");
  const [validUname, setValidUname] = useState(false);
  const [unameFocus, setUnameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pass, setPass] = useState("");
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
    const result = fullname_valid.test(fullname);
    console.log(result);
    console.log(fullname);
    setValidFullname(result);
  }, [fullname]);

  useEffect(() => {
    const result = username_valid.test(uname);
    console.log(result);
    console.log(uname);
    setValidUname(result);
  }, [uname]);

  useEffect(() => {
    const result = email_valid.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = pass_valid.test(pass);
    console.log(result);
    console.log(pass);
    setValidPass(result);
  }, [pass]);

  useEffect(() => {
    setErrMsg("");
  }, [fullname, uname, email, pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name: fullname,
        username: uname,
        email,
        password: pass,
      };

      const response = await axios.post(signup_url, data)
      .then((res) => {
        console.log("Registration Success");
      })
      .catch((err) => {
        if (err instanceof Error && err.response) {
          if (err.response.status === 400) {
            console.log("Registration failed. Account already registered.");
            setRegistrationWarning(true);
          }
        }
      });

      } catch (err) {
        console.log('Registrastion Failed',err)
        // setErrMsg("Registration failed. Please try again.");
        errReference.current.focus();
      }
      setSuccess(true);
      window.location.href = "/auth/sign-in";
    };

  return (
    <>
      <Head>
        <title>Sign Up - Welcome to JICO</title>
      </Head>
      <div className="md:flex font-inter">
        {/* FORM SECTION */}
        <div className="md:w-2/5 flex flex-col justify-center">
          {/* LOGO */}
          <div className="flex flex-col items-start py-4 pl-6 ">
            <Image
              alt="JICO Logo"
              src={IMAGE.LOGO_DARK_BLUE}
              className="h-10 w-auto"
            />
          </div>

          <div className="pt-1 pb-8 px-4 w-full">
            <div className="rounded-md border border-primary-lightblue text-primary-darkgrey shadow-sm flex min-h-full flex-1 flex-col justify-center bg-transparent border-none">
              {/* TITLE */}
              <div className="flex flex-col space-y-1.5 p-3 mx-auto w-full max-w-lg">
                <h5 className="mt-5 font-bold leading-9 tracking-tight text-primary-darkgrey text-4xl ">
                  Sign Up
                </h5>
                <p className="font-light text-sm mb-5 text-primary-lightblue">
                  Fill the credential required for registration
                </p>

                {/* Warning for already registered data */}
                {registrationWarning && (
                  <p className="text-red-600 text-sm ">
                    Account already registered. Please sign in or use a different email/username.
                  </p>
                )}
              </div>

              <div className="p-3 pt-0">
                <div className="mt-10 mx-auto w-full max-w-lg">
                  <p
                    ref={errReference}
                    className={` ${errMsg ? "errmsg" : "offscreen"}`}
                    aria-live="assertive"
                  >
                    {errMsg}
                  </p>

                  {/* FORM */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* FullName */}
                    <div className="space-y-2">
                      <p
                        id="note"
                        className={`${
                          fullnameFocus && fullname && !validFullname
                            ? "instructions"
                            : "sr-only"
                        } flex items-center text-red-600 mb-2`}
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
                          placeholder="Enter your Full Name"
                          ref={userReference}
                          autoComplete="off"
                          onChange={(e) => setFullname(e.target.value)}
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
                            validFullname || !fullname ? "hidden" : ""
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
                          unameFocus && uname && !validUname
                            ? "instructions"
                            : "sr-only"
                        } flex items-center text-red-600 mt-2`}
                      >
                        <BiSolidInfoCircle className="mr-2" />
                        Must be 5 to 15 characters, letters, numbers are allowed
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
                          autoComplete="off"
                          onChange={(e) => setUname(e.target.value)}
                          required
                          aria-invalid={validUname ? "false" : "true"}
                          aria-describedby="uname-note"
                          onFocus={() => setUnameFocus(true)}
                          onBlur={() => setUnameFocus(false)}
                          placeholder="Enter your Username"
                          className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                        />
                        {/* checkmark */}
                        <span className={validUname ? "valid" : "hidden"}>
                          <FcCheckmark />
                        </span>
                        <span
                          className={`${
                            validUname || !uname ? "hidden" : ""
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
                        } flex items-center text-red-600 mt-2`}
                      >
                        <BiSolidInfoCircle className="mr-2" />
                        Letters, numbers, underscore and dot are allowed
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
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          aria-invalid={validEmail ? "false" : "true"}
                          aria-describedby="email-note"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                          placeholder="Enter your Email"
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

                    {/* Password */}
                    <div className="space-y-2">
                      <p
                        id="email-note"
                        className={`${
                          passFocus && pass && !validPass
                            ? "instructions"
                            : "sr-only"
                        } flex items-center text-red-600 mt-2`}
                      >
                        <BiSolidInfoCircle className="mr-2" />
                        6 to 10 characters <br />
                        Must have atleast 1 characters, 1 numbers
                      </p>
                      <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                        Password
                        <span className="text-red-600 ml-1">*</span>
                      </label>
                      <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                        <MdLockOutline className="m-[1%] text-slate-700" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={(e) => setPass(e.target.value)}
                          required
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

                        {/* checkmark */}
                        <span className={validPass ? "valid" : "hidden"}>
                          <FcCheckmark />
                        </span>
                        <span
                          className={`${
                            validPass || !pass ? "hidden" : ""
                          } text-red-600`}
                        >
                          <FaTimes />
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="py-2 w-full flex justify-center">
                      <button
                        href="/auth/sign-in"
                        type="submit"
                        className=" bg-primary-darkblue text-white text-center hover:bg-primary-mediumblue duration-200 px-3 inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 py-2 w-full text-base "
                      >
                        Sign Up
                      </button>
                    </div>

                    {/* Redirect Sign In */}
                    <div className="flex items-center justify-center my-5">
                      <span className=" text-primary-grey text-md">
                        Already a member?
                      </span>
                      <a
                        href="/auth/sign-in"
                        className="ml-2 text-primary-lightblue text-md font-semibold"
                      >
                        Sign In
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IMG SECTION */}
        <div className="md:w-3/5 h-32 md:h-auto lg:h-auto items-center relative">
          {/* Background */}
          <Image
            alt="Sign Up Background"
            src={IMAGE.AUTH_PAGE2}
            className="w-full h-full"
          />

          {/* JICO Logo */}
          <div className="absolute inset-0 my-5 pl-16 flex flex-col items-end pt-6 pb-8 pr-16">
            <a href="/index" className="text-white cursor-pointer">
              <Image
                alt="JICO Logo"
                src={IMAGE.IMAGE_ONLY_COLOR}
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* IMG Title */}
          <div className="absolute inset-0 flex items-center justify-center invisible md:visible lg:visible">
            <div className="z-10 text-right">
              <h5 className="text-white lg:text-5xl md:text-2xl font-medium drop-shadow-lg shadow-outline ">
                Welcome to JICO
              </h5>
              <br />
              <h3 className=" text-primary-lightblue lg:text-7xl md:text-5xl  drop-shadow-lg shadow-outline font-bold">
                JIRA Connector
              </h3>
              <br />
              <p className="text-primary-lightblue lg:text-2xl md:text-2xl italic mt-5 font-medium drop-shadow-white-3xl shadow-outline ">
                Your Gateway to Seamless Collaboration!
              </p>
            </div>
          </div>

          {/* IMG Footer */}
          <div className="absolute bottom-0 text-white mx-3 invisible md:visible lg:visible">
            <div className="flex gap-2 mb-3 items-end flex-row ">
              <span className="block text-sm text-white sm:text-center">
                © 2023
                <a
                  href="https://www.telkom.co.id/sites"
                  className="hover:underline"
                >
                  JICO™
                </a>
                . Privacy - Terms.
              </span>
              <Image
                alt="TELKOM Logo"
                src={IMAGE.TELKOM_LOGO_WHITE}
                className="h-10 w-auto mb-2"
              />
              <Image
                alt="JIRA Logo"
                src={IMAGE.JIRA_LOGO_WHITE}
                className="h-5 w-auto mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
