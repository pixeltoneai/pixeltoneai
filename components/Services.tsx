"use client";
import { motion } from "framer-motion";

export default function Services() {
  return (
<section id="services" className="bg-black text-white py-20 px-6">      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          What We Build For You
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-800 rounded-xl hover:border-white transition"
          >
            <h3 className="text-xl font-semibold">Websites</h3>
            <p className="mt-3 text-gray-400">
              Clean, modern websites designed to convert visitors into customers.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-800 rounded-xl hover:border-white transition"
          >
            <h3 className="text-xl font-semibold">AI Telecaller</h3>
            <p className="mt-3 text-gray-400">
              Automated calling system that handles customer inquiries 24/7.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-6 border border-gray-800 rounded-xl hover:border-white transition"
          >
            <h3 className="text-xl font-semibold">AI Outreach</h3>
            <p className="mt-3 text-gray-400">
              Smart follow-ups and messaging to bring in more leads automatically.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}