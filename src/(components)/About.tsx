import React from "react";
import { FaSearch, FaGem, FaPaintBrush, FaBolt } from "react-icons/fa";

const tools = [
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind", logo: "https://logo.svgcdn.com/bxl/tailwind-css-dark.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];



const skills = [
  { name: "SEO", description: "Improving website ranking in search engine results", icon: <FaSearch size={28} /> },
  { name: "Design", description: "Strong design skills with attention to even the smallest details", icon: <FaPaintBrush size={28} /> },
  { name: "Quality", description: "Developing websites with high standards and quality", icon: <FaGem size={28} /> },
  { name: "Speed", description: "Delivering websites quickly within short deadlines", icon: <FaBolt size={28} /> },
];


export default function AboutSection() {
  return (
    <section
      className="min-h-screen px-6 py-10 md:px-20"
      style={{
        backgroundImage: `url('/back.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-[36px] font-bold mb-8 mt-3">About me</h1>

        <p className="text-gray-300 leading-relaxed mb-12">
 
I’m Azizbek Fayziyev, a 17-year-old Frontend Developer from Bukhara, Uzbekistan. I’m passionate about building modern, responsive, and user-friendly web interfaces that combine clean design with solid functionality.

I mainly work with HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS, and I enjoy turning ideas and designs into real, interactive websites. I pay close attention to details, performance, and usability, because I believe a good website should not only look great but also feel smooth and intuitive to use.

I’m constantly learning new technologies, improving my skills, and challenging myself with real projects. As a junior developer, I’m highly motivated, open to feedback, and always ready to grow both technically and creatively.

My goal is to become a strong full-stack developer and work on impactful projects that solve real problems and deliver great user experiences.
        </p>

        <h2 className="text-[24px] font-semibold mb-6">Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center p-6 bg-[#1A1A1A]/90 rounded-lg border border-[#2A2A2A]"
            >
              <img src={tool.logo} className="w-12 h-12 mb-4" />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-[24px] font-semibold mb-6">
          What can I do?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex gap-4 p-6 bg-[#1A1A1A]/90 rounded-lg border border-[#2A2A2A]"
            >
              <div className="text-green-400">{skill.icon}</div>
              <div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-gray-300 text-sm">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
