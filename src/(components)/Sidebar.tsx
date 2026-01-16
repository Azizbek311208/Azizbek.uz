import Link from "next/link";
import React from "react";

export default function Sidebar({ sidebarOpen }: { sidebarOpen: boolean }) {
  const contacts: [string, string, string?][] = [
    [
      "/gmail.png",
      "azizbekfayziyev244@gmail.com",
      "mailto:azizbekfayziyev244@gmail.com",
    ],
    ["/github.png", "github.com/Azizbek311208", "https://github.com/Azizbek311208"],
    ["/telegram.png", "t.me/Azizbek_3112", "https://t.me/Azizbek_3112"],
    ["/tel.png", "+998 (99) 769-31-12", "tel:+998997693112"],
    [
      "/instagram.png",
      "instagram.com/azizbek_3112_",
      "https://www.instagram.com/azizbek3112_/",
    ],
    [
      "/twitterX.png",
      "twitter.com/Azizbek_3112",
      "https://x.com/Azizbek_3112",
    ],
    [
      "/linkedin.png",
      "linkedin.com/in/azizbek-fayziyev-7243a43a4",
      "https://www.linkedin.com/in/azizbek-fayziyev-7243a43a4/",
    ],
  ];

  return (
    <aside
      className={`
        fixed top-[72px] left-0 z-40
        h-[calc(100vh-72px)] w-[300px]
        bg-[#111827] border-r border-white/10
        transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex flex-col h-full px-6 py-5 overflow-y-auto overflow-x-hidden">
        <img
          src="/xello.png"
          alt="Azizbek Fayziyev"
          className="
            w-[220px] h-[220px]
            object-cover rounded-2xl
            mx-auto border border-white/10 shadow-xl
          "
        />

        <h2 className="mt-2 text-center text-xl font-semibold text-white">
          Azizbek Fayziyev
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {["Frontend Developer", "Web Developer", "Junior"].map((tag) => (
            <span
              key={tag}
              className="
                px-3 py-1 rounded-full text-xs
                bg-white/5 border border-white/10
                text-[#9CA3AF]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-4 text-sm">
        {contacts.map(([icon, text, link]) => (
  <div key={text} className="flex items-center gap-3 text-[#9CA3AF]">
    <img src={icon} className="w-5 opacity-80 flex-shrink-0" />
    {link ? (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="truncate overflow-hidden whitespace-nowrap max-w-[180px] block"
      >
        {text}
      </Link>
    ) : (
      <span className="truncate overflow-hidden whitespace-nowrap max-w-[180px] block">
        {text}
      </span>
    )}
  </div>
))}

        </div>
      </div>
    </aside>
  );
}
