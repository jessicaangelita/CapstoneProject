import React from "react";
import HeaderHome from "../components/HeaderHome";
import ContentHome from "../components/ContentHome";

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