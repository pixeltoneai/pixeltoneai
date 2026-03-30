"use client";

import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-24 px-6 overflow-hidden">

      {/* TOP FLOW */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#EB5002]/20 to-transparent"></div>

      {/* CENTER GLOW */}
      <div className="absolute w-[700px] h-[700px] bg-[#EB5002]/20 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* BRAND */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-[#EB5002] to-[#FF6A00] bg-clip-text text-transparent">
          PixeltoneAI
        </h1>

        <p className="mt-4 text-gray-400 text-sm tracking-wide">
          Websites • AI Automation • Lead Systems
        </p>

        {/* ICONS */}
        <div className="mt-10 flex justify-center gap-10 text-2xl">

          <a
            href="https://www.instagram.com/pixeltoneai"
            target="_blank"
            className="text-gray-400 hover:text-[#EB5002] transition hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/aman-shrivastav-5842893b5"
            target="_blank"
            className="text-gray-400 hover:text-[#EB5002] transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:pixeltoneai@gmail.com"
            className="text-gray-400 hover:text-[#EB5002] transition hover:scale-110"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} PixeltoneAI
        </p>

      </div>
    </footer>
  );
}