import React from "react";

export default function Boglanish({ sidebarOpen }: { sidebarOpen: boolean }) {
  return (
    <main
      className={`
        transition-all duration-300 flex-1 min-h-screen
        px-4 py-10
        ${sidebarOpen ? "ml-[287px]" : "ml-0"}
      `}
      style={{
        backgroundImage: `url('/back.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
   
      <div className=" w-full h-full p-4 sm:p-10">
        <div className="max-w-[1000px] mx-auto">

          <h1 className="text-[28px] mt-5 sm:text-[32px] font-bold mb-10 relative text-white text-center">
            Bog‘lanish
          </h1>

       
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#1B1B1B] rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <img src="/men.png" alt="E-pochta" className="w-[50px] h-[50px]" />
              <h2 className="text-lg font-semibold mt-4 text-white">E-pochta</h2>
              <p className="text-sm text-gray-300 mt-1 break-all">pubgnek642@gmail.com</p>
            </div>

            <div className="bg-[#1B1B1B] rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <img src="/sen.png" alt="Telegram" className="w-[50px] h-[50px]" />
              <h2 className="text-lg font-semibold mt-4 text-white">Telegram</h2>
              <p className="text-sm text-gray-300 mt-1 break-all">t.me/mnyaxyobek</p>
            </div>

            <div className="bg-[#1B1B1B] rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <img src="/u.png" alt="Telefon" className="w-[50px] h-[50px]" />
              <h2 className="text-lg font-semibold mt-4 text-white">Telefon raqam</h2>
              <p className="text-sm text-gray-300 mt-1 break-all">+998 (20) 007-77-29</p>
            </div>
          </div>

      
          <h2 className="text-[24px] sm:text-[28px] font-bold mb-6 text-white text-center">
            So‘rov yuborish
          </h2>
          <form className="bg-[#1B1B1B]/90 p-6 sm:p-8 rounded-xl space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Ismingiz*"
                className="bg-[#0D0D0D] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C896]"
              />
              <input
                type="email"
                placeholder="Manzilingiz*"
                className="bg-[#0D0D0D] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C896]"
              />
              <select
                className="bg-[#0D0D0D] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                defaultValue="E-pochta"
              >
                <option value="E-pochta">E-pochta</option>
                <option value="Telegram">Telegram</option>
                <option value="Telefon">Telefon</option>
              </select>
            </div>

            <textarea
              rows={5}
              placeholder="O‘z izohingizni yozing..."
              className="w-full bg-[#0D0D0D] text-white px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#00C896]"
            ></textarea>

            <button className="btn w-full sm:w-auto btn-success mt-2">
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
