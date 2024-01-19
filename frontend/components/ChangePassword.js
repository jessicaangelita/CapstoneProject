import React, {useState, useEffect, useRef} from "react";
import Head from "next/head";
import { BiSolidInfoCircle, BiHide, BiShow } from "react-icons/bi";
import { FcCheckmark } from "react-icons/fc";
import { MdLockOutline } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import axios from "../pages/api/axios";

const pass_valid =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,10}$/; //ada satu huruf dan angka yang required dengan min.6-10 huruf


export default function ChangePassword ({onCancel}) {
    const errReference = useRef();

    // Toggle Password
    const [showPassword, setShowPassword] = useState(false);

    const [oldPassword, setOldPassword] = useState("");
    const [validOldPassword, setValidOldPassword] = useState(false);
    const [oldPasswordFocus, setOldPasswordFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState("");
    const [matchValid, setMatchValid] = useState(false);
    const [MatchFocus, setMatchFocus] = useState(false);


    // Error Message
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [oldPasswordError, setOldPasswordError] = useState("")

    // useEffect(() => {
    //   const verifyOldPassword = async () => {
    //     if (oldPassword.length > 0) {
    //       try {
    //         const response = await axios.patch(
    //           "http://localhost:8050/user/password",
    //           {
    //             old_password: oldPassword,
    //           },
    //           {
    //             headers: {
    //               Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //             },
    //           }
    //         );
            
    //         console.log("Request Body:", {
    //           old_password: oldPassword,
    //         });
    //         setValidOldPassword(true);
    //         setOldPasswordError("");
    //       } catch (error) {
    //         console.error("Error verifying old password:", error);
    //         console.error("Error verifying old password:", error);
    //         console.log("Error response data:", error.response.data);
    //         console.log("Error response status:", error.response.status);
    //         console.log("Error response headers:", error.response.headers);
    
    //         if (error.response && error.response.status === 401) {
    //           setValidOldPassword(false);
    //           setOldPasswordError("Incorrect old password");
    //         } else {
    //           // Handle other errors
    //           setValidOldPassword(false);
    //           setOldPasswordError("Error verifying old password");
    //         }
    //       }
    //     } else {
    //       setValidOldPassword(false);
    //       setOldPasswordError("");
    //     }
    //   };
    
    //   verifyOldPassword();
    // }, [oldPassword]);

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
      }, [oldPassword, password, matchPassword ]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const changeData = {
           old_password: oldPassword,
           new_password: password,
          };
    
            const response = await axios.patch(`http://localhost:8050/user/password`, changeData, {
              headers: {
                Authorization : `Bearer ${localStorage.getItem("accessToken")}`
              }
            })
            .then((res) => {
              console.log("Change Password Success");
              setSuccess(true);
              window.location.href = "/profile";
            })
            .catch((err) => {
              if (err instanceof Error && err.response) {
                if (err.response.status === 400) {
                  console.log("Change Password Failed");
                  // setRegistrationWarning(true);
                }
              }
            });
    
          } catch (err) {
            console.log('Change Password Failed',err)
            // errReference.current.focus();
          }
        };
    

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
             <div>
                 <Head>
                    <title>Change Password</title>
                </Head>
             </div>

            
            <div className="bg-white rounded-lg absolute max-w-[30rem] p-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-1 flex-col justify-center  lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Change password
                    </h2>

                    <button
                      className=" hover:text-red-600 mb-2 bg-red-500 text-black py-1 px-4 text-lg"
                      type="button"
                      onClick={onCancel}
                    >
                      Close
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">

                      {/* Old password */}
                      <div className="space-y-2">
                      <p
                        id="email-note"
                        className={`${
                          oldPasswordFocus && oldPassword && !validOldPassword
                            ? "instructions"
                            : "sr-only"
                        } flex items-center text-red-600 mt-2`}
                      >
                        <BiSolidInfoCircle className="mr-2" />
                        Incorrect old password!
                      </p>
                      <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                        Old Password
                        <span className="text-red-600 ml-1">*</span>
                      </label>
                      <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                        <MdLockOutline className="m-[1%] text-slate-700" />
                        <input
                          // onChange={(e) => setOldPassword(e.target.value)}
                          // aria-invalid={validOldPassword ? "false" : "true"}
                          // aria-describedby="oldpass-note"
                          // name="Oldpassword"
                          type={showPassword ? "text" : "password"}
                          // autoComplete="current-password"
                          // required
                          // placeholder="Enter your Password"
                          // onFocus={() => setOldPasswordFocus(true)}
                          // onBlur={() => setOldPasswordFocus(false)}
                          id="password"
                          name="password"
                          // type="password"
                          // autoComplete="current-password"
                          required
                          className="ml-[2%] w-full focus:outline-none h-7 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
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
                        <span className={validOldPassword? "valid" : "hidden"}>
                          <FcCheckmark />
                        </span>
                        <span
                          className={`${
                            validOldPassword || !oldPassword ? "hidden" : ""
                          } text-red-600`}
                        >
                          <FaTimes />
                        </span>
                      </div>
                    </div>

                    {/* New password */}
                    <div className="space-y-2 mt-5">
                      <p
                        id="pass-note"
                        className={`${
                          passFocus && password && !validPass
                            ? "instructions"
                            : "sr-only"
                        } flex items-center text-red-600 mt-2`}
                      >
                        <BiSolidInfoCircle className="mr-2" />
                        6 to 10 characters <br />
                        Must have atleast 1 characters, 1 numbers
                      </p>
                      <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                        New Password
                        <span className="text-red-600 ml-1">*</span>
                      </label>
                      <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
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
                          className="ml-[2%] w-full focus:outline-none h-7 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
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
                          
                      {/* Confirm password */}
                      <div className="space-y-2 mt-5">
                      
                      {/* Warning */}
                      <p
                        id="confirm-note"
                        className={`${
                          MatchFocus && !matchValid
                            ? "instructions"
                            : "sr-only"
                        } flex items-center text-red-600 mt-2`}
                      >
                        <BiSolidInfoCircle className="mr-2" />
                        Must match the first password input field.
                      </p>
                       
                      <label className="text-base font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-dark-300">
                        Confirm Password
                        <span className="text-red-600 ml-1">*</span>
                      </label>
                      <div className="mx-auto bg-white flex items-center mb-[3%] border-primary-grey border rounded-lg px-3 py-2 focus:outline-none shadow shadow-primary-darkblue">
                        <MdLockOutline className="m-[1%] text-slate-700" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={(e) => setMatchPassword(e.target.value)}
                          required
                          aria-invalid={matchValid ? "false" : "true"}
                          aria-describedby="confirm-note"
                          onFocus={() => setMatchFocus(true)}
                          onBlur={() => setMatchFocus(false)}
                          placeholder="Enter your Password"
                          className="ml-[2%] w-full focus:outline-none h-7 border-slate-200 bg-white px-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium transition duration-300 ease-in-out  disabled:cursor-not-allowed disabled:opacity-50 block rounded-md border-0 py-1.5 text-primary-darkblue shadow-sm  placeholder:text-primary-grey sm:text-sm sm:leading-6"
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
                        <span className={matchValid && matchPassword ? "valid" : "hidden"}>
                          <FcCheckmark />
                        </span>
                        <span
                          className={`${
                            matchValid || !matchPassword ? "hidden" : ""
                          } text-red-600`}
                        >
                          <FaTimes />
                        </span>

                      </div>
                    </div>  

                </div>

                <button 
                    type="submit" 
                    className="mx-auto bg-blue-500 text-white py-2 px-4 rounded justify-center text-center items-center mt-5">
                    Save Changes
                </button>

                </form>
            </div>
        </div>
    )
}

// TRY CCATCH CEK PASS LAMA
  // const verifyPass = await axios.patch(
          //   `http://localhost:8050/user/password`,
          //   {
          //     old_password: oldPassword,
          //   }, 
          //   {
          //     headers: {
          //       Authorization : `Bearer ${localStorage.getItem("accessToken")}`
          //     },
          //   }
          // );

          // if (verifyResponse.status === 200) {
          //   // Jika verifikasi password lama berhasil, lanjutkan dengan mengirim permintaan untuk mengubah password
          //   const changeData = {
          //     old_password: oldPassword,
          //     new_password: password,
          //   };

          //   const changeResponse = await axios.patch(
          //     "http://localhost:8050/user/password",
          //     changeData,
          //     {
          //       headers: {
          //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          //       },
          //     }
          //   );
      
          //   if (changeResponse.status === 200) {
          //     console.log("Change Password Success");
          //     setSuccess(true);
          //     window.location.href = "/profile";
          //   } else {
          //     console.log("Change Password Failed");
          //     // Tambahkan logika atau tindakan yang sesuai jika perubahan password gagal
          //   }
          // } else {
          //   console.log("Old Password Verification Failed");
          //   // Tambahkan logika atau tindakan yang sesuai jika verifikasi password lama gagal
          // }

          
// INI TABLE Kek update provider
// <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
        //     {/*    min-h-screen bg-primary-darkgrey flex flex-col w-full (INI KLO MAU PINDA PAGE BGnya)*/}
        //     <div>
        //         <Head>
        //         <title>Change Password</title>
        //         </Head>
        //     </div>
            
        //     {/* Card */}
        //     <div className="bg-white rounded-lg absolute max-w-[30rem] p-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        //         <div className="flex flex-col justify-between items-center mb-3">
        //             <h1 className="text-lg text-black font-bold mb-2">Change Password</h1>
        //             <button
        //                 className="text-black hover:text-red-600 mb-2"
        //                 type="button"
        //                 onClick={onCancel}
        //             >
        //                 Close
        //             </button>
                    
        //             {/* Form */}
        //             <table className="w-full mb-5">
        //                 <tbody> 
        //                    {/* Old Password */}
        //                     <tr>
        //                     <td className="text-black font-semibold">Old Password</td>
        //                     <td className="pl-3">
        //                         <input
        //                         type="text"
        //                         //   value={providername}
        //                         // onChange={(e) => {
        //                         //     setProvidertName(e.target.value);
        //                         // }}
        //                         className="w-full border p-2 rounded outline-none"
        //                         />
        //                     </td>
        //                     </tr>
                            
        //                     {/* New Password */}
        //                     <tr>
        //                     <p
        //                         id="email-note"
        //                         className={`${
        //                         passFocus && pass && !validPass
        //                             ? "instructions"
        //                             : "sr-only"
        //                         } flex items-center text-red-600 mt-2`}
        //                     >
        //                         <BiSolidInfoCircle className="mr-2" />
        //                         6 to 10 characters <br />
        //                         Must have atleast 1 characters, 1 numbers
        //                     </p>
        //                     <td className="text-black font-semibold">New Password</td>
        //                     <td className="pl-3">
        //                     <MdLockOutline className="m-[1%] text-slate-700" />
        //                         <input
        //                         //   value={providername}
        //                         // onChange={(e) => {
        //                         //     setProvidertName(e.target.value);
        //                         // }}
        //                         type={showPassword ? "text" : "password"}
        //                         name="password"
        //                         onChange={(e) => setPass(e.target.value)}
        //                         required
        //                         aria-invalid={validPass ? "false" : "true"}
        //                         aria-describedby="pass-note"
        //                         onFocus={() => setPassFocus(true)}
        //                         onBlur={() => setPassFocus(false)}
        //                         placeholder="Enter your Password"
        //                         className="w-full border p-2 rounded outline-none"
        //                         />
        //                     </td>
        //                     </tr>
                            
        //                     {/* Confirm Password */}
        //                     <tr>
        //                     <td className="text-black font-semibold">Confirm Password</td>
        //                     <td className="pl-3">
        //                         <input
        //                         type="text"
        //                         //   value={providername}
        //                         // onChange={(e) => {
        //                         //     setProvidertName(e.target.value);
        //                         // }}
        //                         className="w-full border p-2 rounded outline-none"
        //                         />
        //                     </td>
        //                     </tr>
                           
        //                 </tbody>
        //             </table>

        //              {/* Update */}
        //             <div className="flex justify-center items-center w-full space-x-3">
        //                 <button
        //                     type="button"
        //                     className="px-4 py-1 bg-emerald-400 text-emerald-900 hover:bg-emerald-500 hover:text-white rounded-lg"
        //                     // onClick={handleSubmit}
        //                 >
        //                     Save
        //                 </button>

        //             {/* Cancel */}
        //                 <button
        //                     type="button"
        //                     className="px-4 py-1 bg-red-400 text-red-900 hover:bg-red-500 hover:text-white rounded-lg"
        //                     // onClick={onCancel}
        //                 >
        //                     Cancel
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>