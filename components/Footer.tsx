"use client";

import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-24 px-6 overflow-hidden">

      {/* TOP FLOW */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#EB5002]/20 to-transparent"></div>

      {/* CENTER GLOW */}
      <div className="absolute w-[700px] h-[700px] bg-[#EB5002]/20 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* 🔥 MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* BRAND */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-[#EB5002] to-[#FF6A00] bg-clip-text text-transparent">
              PixeltoneAI
            </h1>

            <p className="mt-4 text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
              Websites • AI Automation • Lead Systems that actually bring you customers.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="#services" className="hover:text-[#EB5002] transition">
                Services
              </a>
              <a href="#projects" className="hover:text-[#EB5002] transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-[#EB5002] transition">
                Contact
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">
              Contact
            </h4>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a
                href="mailto:business@pixeltoneai.com"
                className="hover:text-[#EB5002] transition"
              >
                business@pixeltoneai.com
              </a>

              <a
                href="https://wa.me/919512260104"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#EB5002] transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* 🔥 SOCIALS */}
        <div className="mt-16 flex justify-center gap-10 text-2xl">

          <a
            href="https://www.instagram.com/pixeltoneai"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-400 hover:text-[#EB5002] transition group"
          >
            <FaInstagram />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#EB5002]/20 blur-xl rounded-full"></span>
          </a>

          <a
            href="https://www.linkedin.com/company/114553955/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-400 hover:text-[#EB5002] transition group"
          >
            <FaLinkedin />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#EB5002]/20 blur-xl rounded-full"></span>
          </a>

          <a
            href="mailto:business@pixeltoneai.com"
            className="relative text-gray-400 hover:text-[#EB5002] transition group"
          >
            <FaEnvelope />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#EB5002]/20 blur-xl rounded-full"></span>
          </a>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-xs text-gray-500">
          © {new Date().getFullYear()} PixeltoneAI. Built to grow businesses.
        </p>

      </div>
    </footer>
  );
}