import React from "react";

export default function Boglanish() {
  const contacts = [
    {
      title: "E-mail",
      value: "azizbekfayziyev244@gmail.com",
      href: "mailto:azizbekfayziyev244@gmail.com",
      img: "/men.png",
    },
    {
      title: "Telegram",
      value: "t.me/Azizbek_3112",
      href: "https://t.me/Azizbek_3112",
      img: "/sen.png",
    },
    {
      title: "Phone",
      value: "+998 (99) 769-31-12",
      href: "tel:+998997693112",
      img: "/u.png",
    },
  ];

  return (
    <section
      className="min-h-screen px-4 py-10 flex items-center justify-center"
      style={{
        backgroundImage: `url('/back.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[800px] w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <a
            key={contact.title}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1B1B1B]/90 rounded-xl p-6 flex flex-col items-center text-center
                       hover:scale-105 transition-transform duration-300"
          >
            <img src={contact.img} alt={contact.title} className="w-[50px] h-[50px]" />
            <h2 className="text-lg font-semibold mt-4 text-white">{contact.title}</h2>
            <p className="text-sm text-gray-300 mt-1 break-all">{contact.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
