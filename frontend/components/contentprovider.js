import React, { useEffect, useState } from "react";
import axios from "@/pages/api/axios";
import UpdatedProject from "./UpdatedProject";

export default function ContentProvider() {
    const [provider, setProvider] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:8050/message-provider/all');
    //         setProvider(response.data);
    //         setIsLoading(false);
    //     } catch (error) {
    //         console.error('Error fetching data: ', error);
    //         setIsLoading(false);
    //     }
    // };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8050/message-provider/all');
            const responseData = response.data.data;
            setProvider(responseData); 
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data: ', error);
            setIsLoading(false);
        }
    };    

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex justify-center mt-10">
    {isLoading ? (
        <p>Loading...</p>
    ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left">ID</th>
                    <th scope="col" className="px-6 py-3 text-left">Provider Name</th>
                    <th scope="col" className="px-6 py-3 text-left">Webhook Link</th>
                    <th scope="col" className="px-6 py-3 text-left">Integration</th>
                    <th scope="col" className="px-6 py-3 text-center">Edit</th>
                    <th scope="col" className="px-6 py-3 text-center">Delete</th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(provider) && provider.length > 0 ? (
                    provider.map((item) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {item.id}</th>
                            <td className="px-6 py-4">{item.provider_label}</td>
                            <td className="px-6 py-4">{item.webhook}</td>
                            <td className="px-6 py-4">{item.provider_type}</td>
                            <td className="px-6 py-4 text-center">
                                {/* Kolom Edit */}
                                
                            </td>
                            <td className="px-6 py-4 text-center">
                                {/* Kolom Delete */}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center py-4">
                            No data available.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
    )}
</div>

    );
}
