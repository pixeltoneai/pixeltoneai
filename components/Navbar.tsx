"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition duration-300
      ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
          : "bg-black/40 backdrop-blur-md border-b border-white/5"
      }`}
    >

      {/* LOGO */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <img src="/logo.png" alt="PixeltoneAI" className="h-8 w-auto" />

        <span className="hidden sm:block text-sm font-medium text-gray-300 group-hover:text-white transition">
          PixeltoneAI
        </span>

        {/* subtle glow on hover */}
        <div className="absolute opacity-0 group-hover:opacity-100 transition w-24 h-24 bg-[#EB5002]/10 blur-2xl rounded-full"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          {["Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-white transition group"
            >
              {item}

              {/* 🔥 animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#EB5002] to-[#FF6A00] transition-all duration-300 group-hover:w-full"></span>

              {/* ✨ glow underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[6px] bg-[#EB5002]/30 blur-md transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

        </div>

        {/* 🚀 CTA */}
        <a
          href="https://wa.me/919512260104?text=Hi%20I%20saw%20your%20website%20PixeltoneAI"
          target="_blank"
          className="relative overflow-hidden bg-[#EB5002] text-white px-5 py-2 rounded-xl text-sm md:text-base font-medium transition hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
        >
          <span className="relative z-10">Get Started</span>

          {/* 🔥 shine effect */}
          <span className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] duration-700"></span>
        </a>

      </div>
    </nav>
  );
}