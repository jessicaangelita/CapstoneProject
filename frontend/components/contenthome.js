import {useState} from "react";
import NewProvider from "../pages/NewProvider"
import NewProject from "../pages/NewProject";
import Link from 'next/link';

export default function ContentHome() {

const [isPopupOpen, setIsPopupOpen] = useState(false);

const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
};
    return (
        <div className="container px-5 py-24 mx-auto">
            {/* <button onClick={togglePopup}>Add Project</button>

            {isPopupOpen && (
                <div className="popup-container">
                    <div className="popup-content">
                        <NewProject/>
                    </div>
                </div>
            )} */}
            <div className="flex justify-center"> {/* Center aligns the cards */}
                <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Add Project</h1>
                        <p className="leading-relaxed mb-3">
                            Click here to add a new project.
                        </p>
                        <Link href='/projects' className='text-blue-500 inline-flex items-center hover:underline font-semibold'>Projects</Link>

                    </div>
                </div>
                <div className="p-4 lg:w-1/3">
                    <div className="h-full bg-blue-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative transition-transform transform hover:scale-110 hover:bg-blue-200">
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Add Provider</h1>
                        <p className="leading-relaxed mb-3">
                            Click here to add a new provider.
                        </p>
                        <Link href='/providers' className='text-blue-500 inline-flex items-center hover:underline font-semibold'>Provider</Link>
                        
                        {isPopupOpen && (
                            <div className="popup-container">
                                <div className="popup-content">
                                    <NewProvider/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
