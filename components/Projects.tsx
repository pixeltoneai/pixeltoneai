"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    "Clinic (Dental / Physio)",
    "Café Website",
    "Jewellery Store",
    "AI Telecaller System",
    "Hotel Booking Website",
    "Nutritionist Website",
  ];

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-black to-[#0d0d0d] text-white py-20 px-6 overflow-hidden"
    >
      {/* FLOW FROM SERVICES */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#EB5002]/10 to-transparent"></div>

      {/* RIGHT GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#EB5002]/10 blur-3xl rounded-full right-[-120px] top-32"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold">
          Demo Projects
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          See how your business can look and perform online.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="p-8 border border-gray-800 rounded-xl hover:border-[#EB5002] hover:shadow-lg hover:shadow-orange-500/10 transition cursor-pointer bg-[#0a0a0a]"
            >
              <h3 className="text-lg font-semibold">{project}</h3>

              <p className="mt-3 text-gray-400 text-sm">
                View demo →
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}