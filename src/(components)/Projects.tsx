import Link from "next/link";
import React from "react";

export default function ProjectsSection() {
  return (
    <section
      className="min-h-screen px-4 sm:px-20 py-10 transition-all duration-300"
      style={{
        backgroundImage: `url('/back.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-[28px] sm:text-[36px] font-bold mb-8 text-white text-center sm:text-left">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-[#1B1B1B]/90 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
            <img
              src="/pizza.png"
              alt="Pizza Market"
              className="rounded-lg w-full h-[180px] sm:h-[200px] object-cover"
            />
            <Link
              href="https://illustrious-yeot-fdc3c7.netlify.app/"
              target="_blank"
            >
              <h2 className="text-lg font-semibold mt-3 text-white">
                Pizza Market
              </h2>
            </Link>
            <p className="text-sm text-green-500 mt-1 break-words">
              #reactjs #vite #tailwind #toastify #nextjs #vercel
            </p>
          </div>

          <div className="bg-[#1B1B1B]/90 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
            <img
              src="/opportunity.png"
              alt="Mene Market"
              className="rounded-lg w-full h-[180px] sm:h-[200px] object-cover"
            />
            <Link
              href={"https://don-t-miss-out-opportunities-x5us.vercel.app/"}
              target="_blank"
            >
              <h2 className="text-lg font-semibold mt-3 text-white">
                Don't miss out opportunities
              </h2>
            </Link>

            <p className="text-sm text-green-500 mt-1 break-words">
              #reactjs #tailwind #toastify #nextjs #vercel #typescript
            </p>
          </div>

          <div className="bg-[#1B1B1B]/90 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
            <img
              src="/foodprep.png"
              alt="Ofis Mebllari"
              className="rounded-lg w-full h-[180px] sm:h-[200px] object-cover"
            />
            <Link href={"https://foodprep-w5jt.onrender.com/"} target="_blank">
              <h2 className="text-lg font-semibold mt-3 text-white">
                FOODprep
              </h2>
            </Link>

            <p className="text-sm text-green-500 mt-1 break-words">
              #reactjs #vite #tailwind #toastify #swiperjs #recaptcha
            </p>
          </div>
          <div className="bg-[#1B1B1B]/90 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
            <img
              src="/picnic.png"
              alt="Mene Market"
              className="rounded-lg w-full h-[180px] sm:h-[200px] object-cover"
            />
            <Link
              href={"https://picnic-project-rrxr.vercel.app/"}
              target="_blank"
            >
              <h2 className="text-lg font-semibold mt-3 text-white">
                Picnic Market
              </h2>
            </Link>

            <p className="text-sm text-green-500 mt-1 break-words">
              #reactjs #tailwind #toastify #nextjs #vercel #typescript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
