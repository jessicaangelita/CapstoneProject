import React from 'react'
import Head from 'next/head';
import { useState, useEffect, useRef, useContext } from 'react';
import { MdPermIdentity, MdLockOutline } from 'react-icons/md';
import { BiHide, BiShow } from "react-icons/bi";
import axios from './api/axios';
import AuthContext from './context/AuthProvider';

const SignIn_URL = 'http://localhost:8050/user/login'

export const signInPage = () => {

  const usernameRef = useRef();
  const errorRef = useRef();
  const {setAuth} = useContext(AuthContext) ;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, [])

  useEffect(() => {
    setErrorMsg('');
  }, [username, password])


  const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
      });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
    e.preventDefault();
    // buat response success
    // test only // console.log(username, password);

    try {
      const response = await axios.post(SignIn_URL, JSON.stringify({username, password}), {
        headers: { 'Content-Type' : 'application/json'},
        withCredentials: true
      });
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));

      //get token
      const accessToken = response?.data?.accessToken;
      //get roles
      const roles = response?.data?.roles;

      setAuth({username, password, roles, accessToken});
      setUsername('');
      setPassword('');
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        // no response but there's error
        setErrorMsg('No Server Response');
      } else if (error.response?.status === 400) {
        // something missing
        setErrorMsg('Missing Username or Password');
      } else if (error.response?.status === 401) {
        // the roles / token unvalid
        setErrorMsg('Unauthorized');
      } else {
        setErrorMsg('Login Failed');
      }
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
    // // Lakukan aksi pendaftaran atau validasi form di sini
    // console.log(formData);
    // // Reset form setelah pengiriman
    // setFormData({
    //   name: '',
    //   username: '',
    //   email: '',
    //   password: ''
    // });
  };

  //const{show,showPass} = useState(false);
  
    return (
    <div>
        <div>
            <Head>
                <title>Sign In - Welcome to JICO</title>
            </Head>
        </div>
        {/* background */}
        <div className='bg-gradient-to-r from-cyan-500/10 via-teal-300/10 to-sky-200/10 block h-screen items-center justify-center p-4 md:flex'>
            {/* container */}
            <div className='bg-gradient-to-t from-sky-200 to-stone-50 flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-[0_3px_10px_rgb(0,0,0,1)] w-full md:flex-row text-white'>
                {/* form card */}
                <div className='bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-3/5 text-slate-700'>
                    {/* TITLE Sign In */}
                    <div className='flex flex-col items-center'>
                        <h1 className=' text-slate-700 text-4xl font-semibold mt-14 '>Sign in</h1>
                    </div>

                    {/* ISI FORM */}
                    <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-4'>
                        <div className="w-[80%] mx-auto bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black ">
                      <MdPermIdentity className='m-[1%] text-slate-700'/>
                        <input
                          type="text"
                          name="username"
                          id='username'
                          ref={usernameRef}
                          autoComplete='off'
                          placeholder="Username"

                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          
                          className="ml-[2%] w-full focus:outline-none"
                          maxLength={15}
                          // className="w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black"
                        />
                      </div>

                        {/* Password */}

                        <div className=' w-[80%] mx-auto bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-2 focus:outline-none shadow shadow-black'>
                          <MdLockOutline className='m-[1%] text-slate-700' />
                          <input
                            className='ml-[2%] w-full focus:outline-none'
                            type={showPassword ? 'text' : 'password'}
                            id='password'
                            name='password'
                            placeholder='Password'

                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          {/* Toggle password visibility */}
                          {showPassword ? (
                            <BiHide onClick={() => setShowPassword(false)} className="cursor-pointer" />
                          ) : (
                            <BiShow onClick={() => setShowPassword(true)} className="cursor-pointer" />
                          )}
                        </div>

                        <div>
                          <p ref={errorRef} className={errorMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
                        </div>

                        {/* Submit */}
                        <div className='relative py-2'>
                            <button href="/homePage" type="submit" className=" bg-blue-700  text-zinc-100 text-center justify-center rounded-md hover:bg-blue-800 transition-colors duration-200 inline-flex items-center w-72 h-10 px-3 py-1">Sign In</button>
                        </div>
                    </form>
                    <div className='flex flex-col items-center'>
                        <label htmlFor="remember" className="flex items-center  text-justify text-xs">
                            <input
                              type="checkbox"
                              name="remember"
                              checked={rememberMe}
                              onChange={() => setRememberMe(!rememberMe)}
                              className="mr-2"
                            />
                                Remember me
                        </label>
                    </div>
                    <div className='flex flex-col items-center pb-10'>
                        <a href='/NotForgotPass' className='text-slate-700 text-s font-semibold leading-snug hover:underline'>Forgot Password?</a>

                        <p className='SignUp text-slate-700 text-base font-normal leading-snug'>Not a member yet? <a href='/signUpPage' className='text-blue-700 font-bold text-base leading-snug'>Sign Up</a></p>
                    </div>
                    <div className=''>
                        <p ref={errorRef} className={errorMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
                    </div>

                </div>

                {/* welcome card */}
                <div className='flex flex-col items-center justify-center text-right text-slate-700 p-4 w-full md:w-2/5'>
                    <div>

                        <h2 className='text-2xl font-bold mb-4 mt-6 mx-5'>Welcome to JICO</h2>
                        <p className='text-base font-normal mb-12 mx-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ultricies nisi. Suspendisse pulvinar viverra nibh vel ultricies. Mauris tincidunt mollis diam, at mollis enim aliquet eget. Fusce eros neque, pharetra eget tincidunt in, tincidunt nec tellus. </p>

                        <div className='h-8 flex object-right-bottom'>
                        <img className='' src='https://upload.wikimedia.org/wikipedia/id/thumb/c/c4/Telkom_Indonesia_2013.svg/1200px-Telkom_Indonesia_2013.svg.png'/>
                        <img className='' src='https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170512.png'/>
                        </div>
                    </div>
                </div>
                
            </div>        
        </div>
    </div>
    
  )
}
export default signInPage ;