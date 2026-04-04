"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* TOP FLOW */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#EB5002]/20 via-transparent to-transparent"></div>

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#EB5002]/10 blur-3xl rounded-full left-[-100px] top-20"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold">
          What We Build For You
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We create systems that don’t just look good — they bring real customers to your business.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {[
            {
              icon: "💻",
              title: "Websites",
              short: "High-converting websites designed to turn visitors into customers.",
              long: `We design modern, high-converting websites tailored to your business.

Your site will be fast, mobile-friendly, and built to turn visitors into paying customers.

We focus on clean UI, strong CTAs, and SEO basics so your business actually grows.`,
            },
            {
              icon: "🤖",
              title: "AI Telecaller",
              short: "AI-powered calling system that handles inquiries and bookings 24/7.",
              long: `Our AI telecaller handles customer calls automatically — 24/7.

It can answer questions, book appointments, and follow up instantly.

This ensures no missed leads and higher conversion rates.`,
            },
            {
              icon: "📈",
              title: "AI Outreach",
              short: "Automated follow-ups that convert leads into clients.",
              long: `We build automated outreach systems that follow up instantly.

From WhatsApp to email, your leads get timely responses.

This builds trust and turns more leads into paying clients.`,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative h-[320px] p-8 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-lg bg-white/5 transition duration-300"
            >

              {/* GLOW OVERLAY */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#EB5002]/20 via-transparent to-transparent"></div>

              {/* DEFAULT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 group-hover:opacity-0 z-10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-300 text-sm text-center px-2">
                  {item.short}
                </p>
              </div>

              {/* HOVER */}
              <div className="absolute inset-0 flex items-center justify-center text-xs md:text-sm text-gray-200 px-6 text-center opacity-0 group-hover:opacity-100 transition duration-300 leading-relaxed z-10">
                {item.long}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}