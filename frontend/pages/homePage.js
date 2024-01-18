import React, { useState, useEffect } from "react";
import HeaderHome from "../components/HeaderHome";
import ContentHome from "../components/contenthome";

export default function Home() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Gantilah dengan logika sebenarnya untuk mendapatkan informasi pengguna
                const userData = await fetchUserDataFunction(); // fungsi asinkron yang mengembalikan data pengguna
                setUsername(userData.username);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-primary-darkgrey flex flex-col w-full">
                <HeaderHome />
                <title>Home</title>
                <div className="flex-grow flex items-center justify-center">
                    <h1 className="text-4xl text-white font-bold">Welcome, {username}</h1>
                </div>
                {/* <ContentHome/> */}
            </div>
        </>
    );
}
