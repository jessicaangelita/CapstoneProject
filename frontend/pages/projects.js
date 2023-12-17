import ContentProject from "./projects/[userid]";
import HeaderHome from "../components/HeaderHome";
// import ContentProject from "@/components/contentproject";
// import HeaderHome from "@/components/headerhome";
import React from "react";
// import ContentProject from "./projects/[userid]";

export default function Projects() {
    return (
        <div className="min-h-screen bg-primary-darkgrey">
            <ContentProject/>
        </div>
    )
}