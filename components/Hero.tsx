"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 pt-24 overflow-hidden">

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
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          We Help Businesses Without Websites Go Online & Get Customers Fast
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          We build high-converting websites and AI-powered systems that bring you leads automatically.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <a href="https://wa.me/919512260104" target="_blank">
<button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-110 transition duration-300 hover:shadow-lg hover:shadow-white/20">              Chat on WhatsApp
            </button>
          </a>

          <a href="#projects">
            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
              View Demo Projects
            </button>
          </a>

        </div>

      </motion.div>
    </section>
  );
}