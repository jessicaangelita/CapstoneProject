import React from 'react'
import { PiSmileySadLight } from "react-icons/pi";

export default function NoAccount () {
  return (
    <>
      <div
        class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p class="font-bold">Sign-In Failed</p>
        <p>We can't find your account in our database</p>
        <PiSmileySadLight />
      </div>
    </>
  );
}

export default function WrongCredentials () {
  return (
    <>
      <div
        class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
        role="alert"
      >
        <p class="font-bold">Sign-In Failed</p>
        <p>There somethings wrong with your username or password</p>
        <PiSmileySadLight />
      </div>
    </>
  );
}

