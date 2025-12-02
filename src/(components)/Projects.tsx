import Link from "next/link";
import React from "react";

export default function ProjectsSection({ sidebarOpen }: { sidebarOpen: boolean }) {
  return (
    <main
      className={`transition-all duration-300 flex-1 min-h-screen
        px-4 sm:px-20 py-10
        ${sidebarOpen ? "ml-[287px]" : "ml-0"}`}
      style={{
        backgroundImage: `url('/back.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full h-full">
        <div className="max-w-[1100px] mx-auto">
          <h1 className="text-[28px] sm:text-[36px] font-bold mb-8 text-white text-center sm:text-left">
            Loyihalar
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
      
            <div className="bg-[#1B1B1B]/90 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
              <img
                src="./fir.png"
                alt="Pizza Market"
                className="rounded-lg w-full h-[180px] sm:h-[200px] object-cover"
              />
              <Link href={"https://illustrious-yeot-fdc3c7.netlify.app/"}>
                <h2 className="text-lg font-semibold mt-3 text-white">Pizza Market</h2>
              </Link>
              <p className="text-sm text-green-500 mt-1 break-words">
                #reactjs #vite #tailwind #toastify #antidesign #swiperjs #recaptcha
              </p>
            </div>

       
            <div className="bg-[#1B1B1B]/90 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
              <img
                src="./sec.png"
                alt="Mene Market"
                className="rounded-lg w-full h-[180px] sm:h-[200px] object-cover"
              />
              <h2 className="text-lg font-semibold mt-3 text-white">Mene market</h2>
              <p className="text-sm text-green-500 mt-1 break-words">
                #reactjs #vite #tailwind #toastify #antidesign #swiperjs #recaptcha
              </p>
            </div>

    
            <div className="bg-[#1B1B1B]/90 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
              <img
                src="./thir.png"
                alt="Ofis Mebllari"
                className="rounded-lg w-full h-[180px] sm:h-[200px] object-cover"
              />
              <h2 className="text-lg font-semibold mt-3 text-white">Ofis mebllari</h2>
              <p className="text-sm text-green-500 mt-1 break-words">
                #reactjs #vite #tailwind #toastify #antidesign #swiperjs #recaptcha
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
