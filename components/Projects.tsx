"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    "Jewellery Store",
    "Café Website",
    "Hotel Booking",
    "Textile Business",
    "Dental Clinic",
    "Physiotherapy Clinic",
    "Factory / Manufacturing",
  ];

  return (
<section id="projects" className="bg-black text-white py-20 px-6">      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Demo Projects
        </h2>

        <p className="mt-4 text-gray-400">
          Sample builds to showcase what your business can look like online.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
           <motion.div
  key={index}
  whileHover={{ scale: 1.04 }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4 }}
  className="p-6 border border-gray-800 rounded-xl hover:border-white hover:bg-gray-900 transition cursor-pointer"
>
              <h3 className="text-lg font-semibold">{project}</h3>
              <p className="mt-2 text-gray-400 text-sm group-hover:text-white">
                View demo →
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}