"use client";

import { useState } from "react";

import "./globals.css";
import Header from "@/(components)/Header";
import Sidebar from "@/(components)/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-white font-[Inter]">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <Sidebar sidebarOpen={sidebarOpen} />

        <main
          className={`pt-[72px] transition-all duration-300 ${
            sidebarOpen ? "md:ml-[287px]" : "md:ml-0"
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
