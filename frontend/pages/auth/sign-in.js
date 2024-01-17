import React from "react";
import Head from "next/head";
import { useState, useEffect, useRef, useContext } from "react";
import { MdPermIdentity, MdLockOutline } from "react-icons/md";
import { BiHide, BiShow } from "react-icons/bi";
import axios, { setToken } from "../api/axios";
import AuthContext from "../context/AuthProvider";
import Image from "next/image";
import { IMAGE } from "../../public/config/index";
import Link from "next/link";

const SignIn_URL = "http://localhost:8050/user/SignIn";

export const signInPage = () => {
  const usernameRef = useRef();
  const errorRef = useRef();
  const { setAuth } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [username, password]);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const rememberedUsername = localStorage.getItem("rememberedUsername");
      const rememberedPassword = localStorage.getItem("rememberedPassword");

      if (rememberedUsername) {
        setFormData((prevData) => ({
          ...prevData,
          username: rememberedUsername,
        }));
      }

      if (rememberedPassword) {
        setFormData((prevData) => ({
          ...prevData,
          password: rememberedPassword,
        }));
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const data = {
        username,
        password,
      };

     const res = await axios.post(SignIn_URL, data)
     
     const { accessToken } = res.data.data;

     localStorage.setItem("accessToken", accessToken);
     console.log("success");
     setSuccess(true);
     window.location.href = "/homePage";

        // .then((res) => {
        //   const { accessToken } = response.data.data;

        //   localStorage.setItem("accessToken", accessToken);
        //   console.log("success");
        //   // const { accessToken } = res.data.data;

        //   // localStorage.setItem("accessToken", accessToken);
        //   //IF LOGIN SUCCESS <bakal direplace atau dipindahin gtw>
        //   setSuccess(true);
        //   window.location.href = "/homePage";
        // })
        // .catch((error) => {
        //   console.log(error);
        // });

      // //get token
      // const accessToken = response?.data?.accessToken;
      // localStorage.setItem('token', accessToken)
      // setToken()
      // //get roles
      // const roles = response?.data?.roles;

      setAuth({ username, password });
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log("Sign In Failed", error);
      errorRef.current.focus();
    }


    // buat remember me
    if (rememberMe) {
      localStorage.setItem("rememberedUsername", formDatusername);
      localStorage.setItem("rememberedPassword", formDatpassword);
    } else {
      localStorage.removeItem("rememberedUsername");
      localStorage.removeItem("rememberedPassword");
    }
  };

  return (
    <>
      <Head>
        <title>Sign In - Welcome to JICO</title>
      </Head>
      <div className="md:flex font-inter">
        {/* IMG SECTION */}
        <div className="md:w-3/5 h-32 md:h-screen lg:h-screen items-center relative">
          {/* Background */}
          <Image
            alt="Sign In Background"
            src={IMAGE.AUTH_PAGE}
            className="w-full h-full"
          />

          {/* JICO Logo */}
          <div className="absolute inset-0 mx-5 my-5">
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
            <div className="z-10 text-left">
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
            <div className="flex gap-2 items-center mb-3">
              <span className="block text-sm text-white sm:text-center">
                © 2023{" "}
                <a
                  href="https://www.telkom.co.id/sites"
                  className="hover:underline"
                >
                  JICO™
                </a>
                . Privacy - Terms.
              </span>
              <div>
              <a href="https://www.telkom.co.id/sites" target="_blank" rel="noopener noreferrer">
                <Image
                  alt="TELKOM Logo"
                  src={IMAGE.TELKOM_LOGO_WHITE}
                  className="h-10 w-auto mb-2"
                />
                </a>
              </div>
              <div>
              <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer">
                <Image
                  alt="JIRA Logo"
                  src={IMAGE.JIRA_LOGO_WHITE}
                  className="h-5 w-auto mb-2"
                />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="md:w-2/5 flex flex-col justify-center">

          {/* JICO Logo */}
          <div className="flex flex-col items-end py-0 pr-16">
          <Link href="/">
              <Image
                alt="JICO Logo"
                src={IMAGE.LOGO_DARK_BLUE}
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>
          <div className="pt-1 pb-8 px-4 w-full">
            <div className="rounded-md border border-primary-lightblue text-primary-darkgrey shadow-sm flex min-h-full flex-1 flex-col justify-center bg-transparent border-none">

              {/* FORM Title */}
              <div className="flex flex-col space-y-1.5 p-3 mx-auto w-full max-w-lg">
                <h5 className="mt-5 font-bold leading-9 tracking-tight text-primary-darkgrey text-4xl ">
                  Sign In
                </h5>
                <p className="font-light text-sm mb-5 text-primary-lightblue">
                  Enter your Username and Password to sign in
                </p>
              </div>

              <div className="p-3 pt-0">
                <div className="mt-10 mx-auto w-full max-w-lg">

                  {/* FORM */}
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Username */}
                    <div className="space-y-2">
                      <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                        Username
                        <span className="text-red-600 ml-1">*</span>
                      </label>
                      <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                        <MdPermIdentity className="m-[1%] text-slate-700" />
                        <input
                          type="text"
                          name="username"
                          id="username"
                          ref={usernameRef}
                          autoComplete="off"
                          placeholder="Enter your Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          className="ml-[2%] w-full focus:outline-none h-10 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
                          maxLength={15}
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                        Password
                        <span className="text-red-600 ml-1">*</span>
                      </label>
                      <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                        <MdLockOutline className="m-[1%] text-slate-700" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          id="password"
                          placeholder="Enter your Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
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
                    
                    {/* Error Message */}
                    <div>
                      <p
                        ref={errorRef}
                        className={errorMsg ? "errmsg" : "offscreen"}
                        aria-live="assertive"
                      >
                        {errorMsg}
                      </p>
                    </div>

                    {/* Remember Me */}
                    <div className=" space-y-2">
                      <div className="flex items-center justify-between mt-2">
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            name="remember"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="mr-2 h-[20px] w-[20px] shrink-0 rounded-md border-2 border-primary ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:ring-offset-white data-[state=checked]:text-zinc-50"
                          />
                          Remember me
                        </label>
                        <a href="/forgotpass" className=" text-primary-lightblue font-semibold hover:underline text-md">Forgot Password</a>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="py-2 w-full flex justify-center">
                      <button
                        href="/homePage"
                        type="submit"
                        className=" bg-primary-darkblue text-white text-center hover:bg-primary-mediumblue duration-200 px-3 inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 py-2 w-full text-base "
                      >
                        Sign In
                      </button>
                    </div>

                    {/* Redirect Sign Up */}
                    <div className="flex items-center justify-center my-5">
                      <span className=" text-primary-grey text-md">Not a member yet?</span>
                      <a href="/auth/sign-up" className="ml-2 text-primary-lightblue text-md font-semibold">Sign Up</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default signInPage;
