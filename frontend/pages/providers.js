import ContentProvider from "@/components/contentprovider";
import HeaderHome from "@/components/headerhome";
import UpdatedProvider from '@/components/UpdatedProvider';
import React from "react";

export default function Providers() {
    return (
        <div>
            <HeaderHome/>
            <ContentProvider/>
            <UpdatedProvider/>
        </div>
    )
}