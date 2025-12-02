"use client";

import { useState } from "react";
import Header from "../(components)/Header";
import Sidebar from "../(components)/Sidebar";
import MainSection from "../(components)/MainSection";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true); 

  return (
    <div className="bg-[#0D0D0D] text-white font-[Inter] min-h-screen">
   
      <Header />

      <div className="flex">
      
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

   
        <MainSection sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
}
