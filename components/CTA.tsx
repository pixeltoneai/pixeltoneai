"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* TOP FLOW */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#EB5002]/10 to-transparent"></div>

      {/* CENTER GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-[#EB5002]/10 blur-3xl rounded-full left-1/2 -translate-x-1/2 top-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center relative z-10 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-10 md:p-14"
      >

        {/* 🔥 HEADLINE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Let’s Build Something That Actually Brings You Customers
        </h2>

        {/* 🧠 SUBTEXT */}
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          We don’t just design websites — we build systems that generate leads and grow your business automatically.
        </p>

        {/* 🧲 URGENCY */}
        <p className="mt-4 text-sm text-[#EB5002] font-medium">
          Only a few free website slots left this month.
        </p>

        {/* 🚀 CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="https://wa.me/919512260104?text=Hi%20I%20saw%20your%20website%20PixeltoneAI"
            target="_blank"
            className="bg-[#EB5002] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition duration-300 hover:bg-[#d94400] hover:shadow-lg hover:shadow-orange-500/30"
          >
            Chat on WhatsApp
          </a>

          <a
            href="mailto:aman@pixeltoneai.com"
            className="border border-gray-600 text-gray-300 px-8 py-4 rounded-xl hover:border-[#EB5002] hover:text-[#EB5002] transition"
          >
            Email Us
          </a>

        </div>

        {/* 🧠 TRUST LINE */}
        <p className="mt-6 text-xs text-gray-500">
          No commitment. Just a quick conversation to see if this is right for your business.
        </p>

      </motion.div>
    </section>
  );
}