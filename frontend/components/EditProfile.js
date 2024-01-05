// // components/FormProfileEdit.js

// import React, { useState } from "react";
// import Head from "next/head";

// const FormProfileEdit = ({ onSave }) => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simpan data profil yang diedit
//     onSave({ fullName, email, password });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
//         <div>
//             <Head>
//                 <title>Edit Profile</title>
//             </Head>
//         </div>

//       <div className="mb-4">
//         <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
//           Full Name
//         </label>
//         {/* <input
//           type="text"
//           id="fullName"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           className="w-full border rounded py-2 px-3"
//         /> */}
//         <input
//                   type="text"
//                   name="first-name"
//                   id="first-name"
//                   placeholder='Name'
//                   autoComplete="given-name"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//           Email
//         </label>
//         {/* <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full border rounded py-2 px-3"
//         /> */}
//          <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder='Email'
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
//           Password
//         </label>
//         {/* <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full border rounded py-2 px-3"
//         /> */}
//         <input
//           className ="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           // type={showPassword ? 'text' : 'password'}
//           id='password'
//           name='password'
//           placeholder='Password'
//           value={password}
//         //  onChange={(e) => setPassword(e.target.value)}
//           // required
//         />
//       </div>
//       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
//         Save Changes
//       </button>
//     </form>
//   );
// };

// export default FormProfileEdit;

// components/FormProfileEdit.js
import React, { useState } from "react";
import Head from "next/head";

const FormProfileEdit = ({ onSave }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ fullName, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 flex flex-col items-center">
      <div>
        <Head>
          <title>Edit Profile</title>
        </Head>
      </div>

      {/* Fullname */}
      {/* <div className="mt-0.2 mb-4 flex flex-col items-center"> */}
      <div className="mb-[3%]">
        <label htmlFor="fullName" className="block text-black-700 text-sm font-bold mb-2">
          Full Name
        </label>
        <div className="w-full bg-white flex items-center border-gray-300 border rounded-lg px-3 py-1 focus:outline-none shadow shadow-black">
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder='Name'
            autoComplete="given-name"
            className="pl-2 py-1 w-72 focus:outline-none"
          />
        </div>
      </div>

      {/* Email */}
      {/* <div className="mb-4 flex flex-col items-center"> */}
      <div className="mb-[3%]">
        <label htmlFor="email" className="block text-black-700 text-sm font-bold mb-2">
          Email
        </label>
        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-1 focus:outline-none shadow shadow-black">
        <input
          id="email"
          name="email"
          type="email"
          placeholder='Email'
          autoComplete="email"
          className="pl-2 py-1 w-72 focus:outline-none"
        />
       </div>
      </div>

      {/* Password */}
      {/* <div className="mb-4 flex flex-col items-center"> */}
      <div className="mb-[3%]">
        <label htmlFor="password" className="block text-black-700 text-sm font-bold mb-2">
          Password
        </label>
        <div className="w-full bg-white flex items-center mb-[3%] border-gray-300 border rounded-lg px-3 py-1 focus:outline-none shadow shadow-black">
        <input
          className="pl-2 py-1 w-72 focus:outline-none"
          id='password'
          name='password'
          placeholder='Password'
          value={password}
        />
        </div>
      </div>


      <button 
      type="submit" 
      className="mx-auto bg-blue-500 text-white py-2 px-4 rounded justify-center text-center items-center">
        Save Changes
      </button>
    </form>
  );
};

export default FormProfileEdit;
