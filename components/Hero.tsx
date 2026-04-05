"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white px-6 md:px-12 overflow-hidden">

      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0a05]" />

      {/* 🧲 MOUSE GLOW */}
  <div
  className="pointer-events-none absolute w-[180px] h-[180px] bg-[#EB5002]/15 rounded-full blur-2xl transition"
  style={{
    left: mouse.x - 90,
    top: mouse.y - 90,
  }}
/>

      {/* 💍 GLOW TRAIL RING */}
      <div className="absolute right-[-150px] top-1/2 animate-slow-spin">
        <svg width="600" height="600" viewBox="0 0 600 600">
          <defs>
            <linearGradient id="ringGradient">
              <stop offset="0%" stopColor="#EB5002" stopOpacity="0" />
              <stop offset="40%" stopColor="#EB5002" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FF6A00" stopOpacity="1" />
              <stop offset="60%" stopColor="#EB5002" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EB5002" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle
            cx="300"
            cy="300"
            r="250"
            stroke="url(#ringGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* 🔥 RING GLOW */}
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EB5002]/20 blur-3xl rounded-full"></div>

      {/* ✨ FLOATING PARTICLES */}
      <div className="absolute left-[20%] top-[30%] w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
      <div className="absolute left-[30%] top-[60%] w-1.5 h-1.5 bg-orange-500 rounded-full animate-float delay-20"></div>
      <div className="absolute left-[50%] top-[40%] w-2 h-2 bg-orange-300 rounded-full animate-float delay-100"></div>

      {/* 🧠 BACKGROUND TEXT */}
      <h1 className="absolute text-[80px] md:text-[160px] font-bold text-white/5 select-none pointer-events-none w-full text-center">
        PIXELTONEAI
      </h1>

      {/* 📦 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl"
      >
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[#EB5002] to-[#FF6A00] bg-clip-text text-transparent">
          AI-powered websites that bring you customers — automatically.
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl">
          We build high-converting websites and AI automation systems that work 24/7 to grow your business — so you never chase clients again.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Limited free website slots available this month.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <a href="https://wa.me/919512260104" target="_blank">
            <button className="bg-[#EB5002] text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition duration-300 hover:bg-[#d94400] hover:shadow-lg hover:shadow-orange-500/30">
              Chat on WhatsApp
            </button>
          </a>

          <a href="#projects">
            <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-xl hover:border-[#EB5002] hover:text-[#EB5002] transition">
              View Demo Projects
            </button>
          </a>

        </div>

      </motion.div>
    </section>
  );
}