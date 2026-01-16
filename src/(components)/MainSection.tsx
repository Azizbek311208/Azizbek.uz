import Link from "next/link";
import React from "react";

export default function MainSection({ sidebarOpen }: { sidebarOpen: boolean }) {
  return (
    <main
      className={`
        transition-all duration-300 flex justify-center items-center flex-1
        h-screen
        px-4
        ${sidebarOpen ? "ml-[287px] sm:ml-[287px] xs:ml-0" : "ml-0"}
      `}
      style={{
        backgroundImage: `url('/back.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[700px] text-center">
        <h1 className="text-[36px] sm:text-[36px] xs:text-[28px] font-bold leading-snug">
          Assalomu alaykum, I'm
          <span className="text-[#00C896]"> Azizbek Fayziyev</span>
        </h1>

        <p className="text-gray-400 mt-5 mb-8 leading-relaxed text-[16px] sm:text-[16px] xs:text-[14px]">
          “A results-driven Web Developer and Designer. My goal is to achieve
          overall product success by creating and managing websites.”
        </p>

        <button className="bg-[#00C896] w-[169px] text-center text-black px-6 py-2 rounded-md font-medium text-sm sm:text-base">
          <Link href="/connect" className="text-decoration-none text-white">
            Projects
          </Link>
        </button>
      </div>
    </main>
  );
}
