import Header from "../components/Header";
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
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        </Head>
        <Content/>
        <Features/>
        <Footer/>
      </AuthProvider>
    </div>
  )
}


