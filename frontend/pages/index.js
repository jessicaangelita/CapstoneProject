import { AuthProvider } from "./context/AuthProvider";
import Head from "next/head";
import React from 'react'
import Navbar from "../components/landing/navbar/Navbar";
import Body from "../components/landing/body/Body";
import Footer from "../components/footer/Footer";

export const Home = () => {
  return (
    <>
    <AuthProvider>
      <Head>
        <title>JICO - Where JIRA meets Discord</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <div className="bg-primary-darkblue">
        <Navbar/>
        <Body/>
        <Footer/>
      </div>
    </AuthProvider>
    </>
  )
}

export default Home;
