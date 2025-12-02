import React from "react";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <aside
      className={`fixed top-[68px] left-0 h-dvh bg-[#1A1A1A] text-white p-6 
      border-r border-[#2A2A2A] overflow-y-auto transition-all duration-300
      ${sidebarOpen ? "w-[287px]" : "w-0"}`}
    >
      <div className="flex justify-end mb-3">
        <button
          className="text-white text-2xl"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "☰" : "☰"}
        </button>
      </div>

      {sidebarOpen && (
        <>
          <img
            src="/xello.png"
            alt="profile"
            className="w-[240px] h-[240px] object-cover rounded-md mx-auto"
          />

          <h2 className="text-center mt-4">Azizbek Fayziyev</h2>

          <div className="flex flex-wrap justify-center gap-2 mt-3 mb-6">
            <span className="bg-[#2A2A2A] px-3 py-1 rounded-full text-sm">
              Veb dasturchi
            </span>
            <span className="bg-[#2A2A2A] px-3 py-1 rounded-full text-sm">Odam</span>
            <span className="bg-[#2A2A2A] px-3 py-1 rounded-full text-sm">Dizayner</span>
            <span className="bg-[#2A2A2A] px-3 py-1 rounded-full text-sm">Junior</span>
          </div>

   
          <div className="flex flex-col space-y-4 text-[14px] w-full">
            <div className="flex items-center gap-3">
              <img src="/gmail.png" className="w-6" />
              <span className="text-gray-300">azizbekfayziyev244@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <img src="/github.png" className="w-6" />
              <span className="text-gray-300">github.com/azizbekuz</span>
            </div>

            <div className="flex items-center gap-3">
              <img src="/telegram.png" className="w-6" />
              <span className="text-gray-300">t.me/Azizbek3112</span>
            </div>

            <div className="flex items-center gap-3">
              <img src="/tel.png" className="w-6" />
              <span className="text-gray-300">+998 (99) 769-31-12</span>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
