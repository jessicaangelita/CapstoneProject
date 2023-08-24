import Link from "next/link";
import Header from "../components/Header";
import {FaDiscord} from 'react-icons/fa'
import { useRouter } from "next/router";
import Content from "../components/Content";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Head from 'next/head';
import { AuthProvider } from "./context/AuthProvider";

export default function Home() {

  return (
    
    <div>
      <AuthProvider>
        <Head>
          <title>Home</title>
        </Head>
        <Header/>
        {/* <FaDiscord/> */}
        <Content/>
        <Features/>
        <Footer/>
      </AuthProvider>
    </div>
  )
}


