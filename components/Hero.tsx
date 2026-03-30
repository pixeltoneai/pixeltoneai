"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 pt-24 overflow-hidden">

      {/* ORANGE GLOW BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-[#EB5002]/10 blur-3xl rounded-full"></div>

      {/* BIG BACKGROUND BRAND */}
      <h1 className="absolute text-[80px] md:text-[160px] font-bold text-white/5 select-none pointer-events-none">
        PIXELTONEAI
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center relative z-10"
      >
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-[#EB5002] to-[#FF6A00] bg-clip-text text-transparent">
          We Build Websites & AI Systems That Bring You Customers Automatically
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          High-converting websites and AI automation systems that work 24/7 to grow your business — so you don’t chase customers anymore.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          Limited free website plans available this month.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <a href="https://wa.me/919512260104" target="_blank">
            <button className="bg-[#EB5002] text-white px-6 py-3 rounded-xl font-medium hover:scale-110 transition duration-300 hover:bg-[#d94400] hover:shadow-lg hover:shadow-orange-500/30">
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