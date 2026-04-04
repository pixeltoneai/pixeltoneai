"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    "Clinic Website",
    "Cafe Website",
    "Jewellery Store",
    "Hotel Booking",
    "AI Telecaller System",
    "Nutritionist Website",
  ];

  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#EB5002]/10 blur-3xl rounded-full right-[-100px] top-20"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold">
          Demo Projects
        </h2>

        <p className="mt-4 text-gray-300">
          See how your business can look and perform online.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative h-[220px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg transition duration-300"
            >
              {/* overlay glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#EB5002]/20 via-transparent to-transparent"></div>

              {/* fake thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-60"></div>

              {/* content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-lg font-semibold">{project}</h3>

                <p className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
                  View Demo →
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}