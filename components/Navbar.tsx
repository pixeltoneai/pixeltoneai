"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const total = document.body.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress((current / total) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔥 SCROLL PROGRESS */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#EB5002] to-[#FF6A00] z-[60] transition-all duration-200"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300
        ${
          scrolled
            ? "py-3 bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "py-5 bg-black/40 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="flex justify-between items-center">

          {/* 🧠 BRAND */}
          <div className="flex items-center gap-2 group cursor-pointer relative">

            <img src="/logo.png" alt="PixeltoneAI" className="h-8 w-auto" />

            <span className="hidden sm:block text-sm md:text-base font-medium tracking-tight text-gray-200">
              Pixeltone
              <span className="bg-gradient-to-r from-[#EB5002] to-[#FF6A00] bg-clip-text text-transparent">
                AI
              </span>
            </span>

            {/* glow */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition w-20 h-20 bg-[#EB5002]/10 blur-2xl rounded-full pointer-events-none"></div>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm">

            {["services", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative capitalize text-gray-300 hover:text-white transition group"
              >
                {item}

                {/* underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#EB5002] to-[#FF6A00] transition-all duration-300 group-hover:w-full"></span>

                {/* glow underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[6px] bg-[#EB5002]/30 blur-md transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* 🚀 CTA */}
            <a
              href="https://wa.me/919512260104"
              target="_blank"
              className="hidden md:block relative overflow-hidden bg-[#EB5002] text-white px-6 py-2.5 rounded-xl text-sm font-medium transition hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              <span className="relative z-10">Get Started</span>

              {/* shine */}
              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] duration-700"></span>
            </a>

            {/* 🍔 MOBILE */}
            <button
              className="md:hidden text-white text-xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>
        </div>

        {/* 📱 MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-sm text-gray-300 bg-black/90 backdrop-blur-xl p-4 rounded-xl border border-white/10">

            {["services", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="capitalize hover:text-white transition"
              >
                {item}
              </a>
            ))}

            <a
              href="https://wa.me/919512260104"
              target="_blank"
              className="mt-2 bg-[#EB5002] text-white px-4 py-2 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>
    </>
  );
}