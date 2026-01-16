"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function Header({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/connect" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[72px] z-50 bg-[#0B0F14] border-b border-white/10">
      <div className="max-w-[1400px] mx-auto h-full px-8 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="text-gray-400 hover:text-white transition"
            aria-label="Toggle sidebar"
          >
            <HiMenu size={22} />
          </button>

          <Link
            href="/"
            className="text-lg font-semibold tracking-wide text-white hover:opacity-80 transition"
          >
            <span className="text-[#4F46E5]">A</span>ZIZBEK
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm transition ${
                  active ? "text-[#4F46E5]" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[1.5px] bg-[#4F46E5] transition-all duration-300 ${
                    active ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href="https://github.com/Azizbek311208"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition text-lg"
          >
            <FaGithub />
          </a>
        </nav>

        <div className="md:hidden relative">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="text-gray-400 hover:text-white transition"
            aria-label="Toggle mobile menu"
          >
            <HiMenu size={22} />
          </button>

          {mobileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#0B0F14] border border-white/10 rounded-xl shadow-lg py-4 flex flex-col gap-3 z-50">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 text-sm rounded transition ${
                      active ? "text-[#4F46E5]" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a
                href="https://github.com/Azizbek311208"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-gray-400 hover:text-white text-sm transition"
              >
                GitHub
              </a>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
