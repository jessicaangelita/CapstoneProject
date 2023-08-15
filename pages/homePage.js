import React from "react";
import HeaderHome from "@/components/headerhome";

export default function Home() {
  return (
    <>
      {/* <Sidebar/> */}
      <div className="" flex flex-col w-full>
        <HeaderHome />
        <main className="p-8">Content</main>
      </div>
    </>
  );
}
