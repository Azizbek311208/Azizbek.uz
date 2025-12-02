"use client"; 

import { useState } from "react";
import Header from "../../(components)/Header";
import Sidebar from "../../(components)/Sidebar";
import AboutSection from "../../(components)/About";

export default function AboutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar holati

  return (
    <div className="bg-[#0D0D0D] text-white font-[Inter] min-h-screen">
    
      <Header />

      <div className="flex">
    
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <AboutSection sidebarOpen={sidebarOpen} />
      </div>
    </div>
  );
}
