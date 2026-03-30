"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
    >
      {/* TOP FLOW GLOW */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#EB5002]/20 via-transparent to-transparent"></div>

      {/* SOFT SIDE GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#EB5002]/10 blur-3xl rounded-full left-[-100px] top-20"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold">
          What We Build For You
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We create systems that don’t just look good — they bring real customers to your business.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          {/* WEBSITE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-800 rounded-xl hover:border-[#EB5002] hover:shadow-lg hover:shadow-orange-500/20 transition bg-[#0a0a0a]"
          >
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-xl font-semibold">Websites</h3>
            <p className="mt-3 text-gray-300">
              High-converting websites designed to turn visitors into paying customers.
            </p>
          </motion.div>

          {/* AI TELECALLER */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-800 rounded-xl hover:border-[#EB5002] hover:shadow-lg hover:shadow-orange-500/20 transition bg-[#0a0a0a]"
          >
            <div className="text-3xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold">AI Telecaller</h3>
            <p className="mt-3 text-gray-300">
              AI-powered calling system that handles inquiries and bookings 24/7.
            </p>
          </motion.div>

          {/* AI OUTREACH */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-800 rounded-xl hover:border-[#EB5002] hover:shadow-lg hover:shadow-orange-500/20 transition bg-[#0a0a0a]"
          >
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold">AI Outreach</h3>
            <p className="mt-3 text-gray-300">
              Automated follow-ups that convert leads into clients without manual effort.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}