import React from "react";
import HeaderHome from "../components/Headerhome";
import ContentHome from "../components/Contenthome";

export default function Home() {
    return (
        <>
            <div className="flex flex-col w-full">
                <HeaderHome/>
                <ContentHome/>
            </div>
        </>
    );
}