"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Clinic Website",
      result: "Increased bookings by 40%",
      desc: "A clean, high-converting website designed to help patients book appointments بسهولة and trust the clinic instantly.",
    },
    {
      title: "Cafe Website",
      result: "Boosted online orders",
      desc: "Modern design with menu, quick ordering flow, and mobile-first experience for higher conversions.",
    },
    {
      title: "Jewellery Store",
      result: "Premium brand presence",
      desc: "Luxury UI with product showcase and inquiry system to attract high-value customers.",
    },
    {
      title: "Hotel Booking",
      result: "More direct bookings",
      desc: "Booking-focused design that reduces dependency on third-party platforms.",
    },
    {
      title: "AI Telecaller System",
      result: "Handles leads 24/7",
      desc: "Automated calling system that answers queries, books appointments, and never misses a lead.",
    },
    {
      title: "Nutritionist Website",
      result: "Higher client conversions",
      desc: "Personal branding + consultation booking system to turn visitors into paying clients.",
    },
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
              className="group relative h-[240px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg transition duration-300"
            >
              {/* glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#EB5002]/20 via-transparent to-transparent"></div>

              {/* fake thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-60"></div>

              {/* DEFAULT VIEW */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition duration-300 group-hover:opacity-0 z-10">
                
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-[#EB5002]">
                  {project.result}
                </p>

              </div>

              {/* HOVER VIEW */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
                
                <p className="text-sm text-gray-200 leading-relaxed">
                  {project.desc}
                </p>

                <button className="mt-4 text-sm text-[#EB5002] font-medium">
                  View Demo →
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}