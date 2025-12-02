import React from "react";
import { FaSearch, FaGem, FaPaintBrush, FaBolt } from "react-icons/fa"; // icons for skills

const tools = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.2a046c3e.svg" },
  { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const skills = [
  { name: "SEO", description: "Qidiruv tizimining natijalarida sayt reytingini yaxshilash", icon: <FaSearch size={28} /> },
  { name: "Dizayn", description: "Kuchli dizayn va kichik detallarigacha e'tibor berish", icon: <FaPaintBrush size={28} /> },
  { name: "Sifat", description: "Yuqori darajada saytlarni sifatli ishlab chiqish", icon: <FaGem size={28} /> },
  { name: "Tezkorlik", description: "Qisqa muddat ichida tezkor sayt ishlab chiqish", icon: <FaBolt size={28} /> },
];

export default function AboutSection({ sidebarOpen }: { sidebarOpen: boolean }) {
  return (
    <main
      className={`transition-all duration-300 flex-1 min-h-screen px-20 py-10
        ${sidebarOpen ? "ml-[287px]" : "ml-0"}`}
      style={{
        backgroundImage: `url('/back.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      <div className=" w-full h-full px-4 py-10">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[36px] font-bold mb-8 mt-3 text-white">Men haqimda</h1>
          <p className="text-gray-300 leading-relaxed text-[16px] mb-12">
            Men Azizbek Fayziyev, 17 yoshda, Buxoro viloyati, Romitan tumanida tug‘ilganman. Men veb dasturchiman va zamonaviy, funksional va foydalanuvchilarga qulay saytlar yaratishga qiziqaman. Hozirgacha men bir nechta loyihalar ustida ishladim, jumladan shaxsiy portfel saytim va bir nechta kichik bizneslar uchun veb-saytlar yaratdim. Mening maqsadim har bir loyihani foydalanuvchilar uchun tezkor, intuitiv va estetik jihatdan yoqimli qilishdir. Texnologiyalar bilan ishlashni va yangi imkoniyatlarni o‘rganishni yaxshi ko‘raman. Agar mening loyihalarim sizni qiziqtirsa, “Loyihalar” sahifasiga tashrif buyurishingiz mumkin.
          </p>

          <div className="mb-12">
            <h2 className="text-[24px] font-semibold mb-6 text-white">Asbob-uskunalar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center p-6 bg-[#1A1A1A]/90 rounded-lg border border-[#2A2A2A] hover:scale-105 transition-transform"
                >
                  <img src={tool.logo} alt={tool.name} className="w-12 h-12 mb-4" />
                  <span className="text-white text-sm font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-[24px] font-semibold mb-6 text-white">Men nimalar qila olaman</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-start gap-4 p-6 bg-[#1A1A1A]/90 rounded-lg border border-[#2A2A2A] hover:scale-105 transition-transform"
                >
                  <div className="text-green-400">{skill.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-white">{skill.name}</h3>
                    <p className="text-gray-300 text-sm">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
