import React from 'react'
import Image from 'next/image';
import { IMAGE } from "../../public/config/index";
import {FaEnvelope, FaWhatsapp, FaLinkedin} from 'react-icons/fa'

export const Footer = () => {
  return (
    <>
    <footer className="shadow m-4 bg-[url('../public/assets/background/SnowyMountainFooter.png')] bg-cover bg-center font-inter bg-opacity-30 mx-0 my-0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#JICO" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <Image src={IMAGE.IMAGE_ONLY_COLOR} className='h-8 w-auto' alt="JICO" />
                    <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>JICO</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                    <li>
                        <a href='#'><FaEnvelope className="text-2xl cursor-pointer hover:text-red-600 me-10 md:me-18"/></a>
                    </li>
                    <li>
                        <a href='#'><FaWhatsapp className="text-2xl cursor-pointer hover:text-green-600 me-10 md:me-18"/></a>
                    </li>
                    <li>
                        <a href='#'><FaLinkedin className="text-2xl cursor-pointer hover:text-sky-400 me-10 md:me-18"/></a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-white sm:mx-auto lg:my-8" />
            <span className="block text-sm text-white sm:text-center">© 2023 <a href="https://www.telkom.co.id/sites" className="hover:underline">JICO™</a>. Privacy - Terms.</span>
        </div>
    </footer>
    </>
  )
}

export default Footer;