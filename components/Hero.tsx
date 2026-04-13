"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function DemoChat() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current = (current + 1) % 5; // loops 0 → 4
      setStep(current);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="mailto:youremail@example.com?subject=Interested in your AI system&body=Hey, I saw the demo on your site and I’m really excited to know more about this."
      className="block w-full max-w-sm cursor-pointer"
    >
      <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md hover:border-[#EB5002]/50 transition">

        {/* header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#EB5002]/20 flex items-center justify-center text-sm">
            🤖
          </div>
          <div>
            <p className="text-sm font-medium text-white">Pixeltone AI</p>
            <p className="text-xs text-green-400">Typing...</p>
          </div>
        </div>

        {/* messages */}
        <div className="space-y-3 text-sm">

          {step >= 1 && (
            <div className="bg-gray-800 px-3 py-2 rounded-lg w-fit text-gray-200 animate-fade-in">
              Hi, I want more leads for my clinic
            </div>
          )}

          {step >= 2 && (
            <div className="bg-[#EB5002]/20 px-3 py-2 rounded-lg w-fit text-white animate-fade-in">
              Got it 👍 We can set up an AI system that replies instantly.
            </div>
          )}

          {step >= 3 && (
            <div className="bg-gray-800 px-3 py-2 rounded-lg w-fit text-gray-200 animate-fade-in">
              Sounds good 👀
            </div>
          )}

          {step >= 4 && (
            <div className="bg-[#EB5002]/20 px-3 py-2 rounded-lg w-fit text-white animate-fade-in">
              It captures leads, follows up, and books clients 24/7.
            </div>
          )}

          {step < 4 && (
            <div className="flex gap-1 px-3 py-2 bg-[#EB5002]/10 rounded-lg w-fit">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-200"></span>
            </div>
          )}

        </div>

        <p className="text-xs text-gray-500 mt-4">
          Click to learn more →
        </p>

      </div>
    </a>
  );
}

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
        className="pointer-events-none absolute w-[180px] h-[180px] bg-[#EB5002]/15 rounded-full blur-2xl"
        style={{
          left: mouse.x - 90,
          top: mouse.y - 90,
        }}
      />

      {/* 💍 RING */}
      <div className="absolute right-[-150px] top-1/2 animate-slow-spin">
        <svg width="600" height="600">
          <defs>
            <linearGradient id="ringGradient">
              <stop offset="0%" stopColor="#EB5002" stopOpacity="0" />
              <stop offset="50%" stopColor="#FF6A00" stopOpacity="1" />
              <stop offset="100%" stopColor="#EB5002" stopOpacity="0" />
            </linearGradient>
          </defs>

          <circle cx="300" cy="300" r="250" stroke="url(#ringGradient)" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* 🔥 RING GLOW */}
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#EB5002]/20 blur-3xl rounded-full" />

      {/* ✨ FLOATING PARTICLES (BACK BABY) */}
      <div className="absolute left-[20%] top-[30%] w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
      <div className="absolute left-[30%] top-[60%] w-1.5 h-1.5 bg-orange-500 rounded-full animate-float delay-200"></div>
      <div className="absolute left-[50%] top-[40%] w-2 h-2 bg-orange-300 rounded-full animate-float delay-500"></div>
      {/* 🧠 BACKGROUND TEXT */}
<h1 className="absolute text-[80px] md:text-[160px] font-bold text-white/[0.03] select-none pointer-events-none w-full text-center tracking-tight">
  PIXELTONEAI
</h1>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12"
      >

        {/* LEFT */}
        <div className="max-w-xl">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your website shouldn’t just look good —{" "}
            <span className="block bg-gradient-to-r from-[#EB5002] to-[#FF6A00] bg-clip-text text-transparent">
              it should bring you clients.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            We build AI systems that capture, follow up, and convert your leads — automatically.
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Most businesses lose 40–60% of leads. We fix that.
          </p>

          <div className="mt-8">
            <a href="https://wa.me/919512260104" target="_blank">
              <button className="bg-[#EB5002] px-7 py-3.5 rounded-xl text-lg font-medium hover:scale-105 transition">
                Get More Clients
              </button>
            </a>
          </div>

        </div>

        {/* RIGHT */}
        <DemoChat />

      </motion.div>
    </section>
  );
}