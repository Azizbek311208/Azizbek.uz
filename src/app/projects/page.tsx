"use client"; 

import { useState } from "react";
import Header from "../../(components)/Header";
import Sidebar from "../../(components)/Sidebar";
import ProjectsSection from "../../(components)/Projects";

export default function ProjectsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar ochiq/yopiq holati

  return (
    <div className="bg-[#0D0D0D] text-white font-[Inter] min-h-screen">
 
      <Header />

      <div className="flex">
   
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

 
        <ProjectsSection sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
}
