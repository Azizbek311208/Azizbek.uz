"use client";

import MainSection from "../(components)/MainSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0D0F14] text-[#E5E7EB]">
      <MainSection sidebarOpen={false} />
    </div>
  );
}
