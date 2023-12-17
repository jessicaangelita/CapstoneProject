import React from "react";
import HeaderHome from "../components/HeaderHome";
import ContentHome from "../components/contenthome";

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-primary-darkblue flex flex-col w-full">
                <HeaderHome/>
                <ContentHome/>
            </div>
        </>
    );
}