import ContentProvider from "./providers/[messageprovider_id]";
import React from "react";
import HeaderHome from "../components/HeaderHome";

export default function Providers() {
    return (
        <div className="min-h-screen bg-primary-darkgrey">
            <ContentProvider/>
        </div>
    )
}