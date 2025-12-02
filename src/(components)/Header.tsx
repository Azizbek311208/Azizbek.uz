"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = [
    { name: "Bosh sahifa", href: "/" },
    { name: "Haqida", href: "/about" },
    { name: "Loyihalar", href: "/projects" },
    { name: "Bog‘lanish", href: "/connect" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0D0D0D] text-white border-b border-[#2A2A2A] z-50">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center py-4 px-8">

        <div className="text-[#00C896] font-bold text-xl tracking-wide">
          AZIZBEK.UZ
        </div>

        <nav className="hidden md:flex">
          <ul className="flex space-x-10 text-[15px] font-medium items-center">
            {menuItems.map((item) => (
              <li key={item.name} className="hover:text-[#00C896] cursor-pointer">
                <Link
                  className="text-white hover:text-green-500"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <img src="/github1.png" alt="GitHub" className="w-6 h-6" />
            </li>
          </ul>
        </nav>

 
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <HiX size={28} className="text-white" />
            ) : (
              <HiMenu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

   
      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-[#2A2A2A] w-full px-8 py-4 absolute top-full left-0">
          <ul className="flex flex-col space-y-4 text-[16px] font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="hover:text-[#00C896] cursor-pointer">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <img src="/github1.png" alt="GitHub" className="w-6 h-6" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
