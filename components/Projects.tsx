"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [preview, setPreview] = useState<string | null>(null);

  const projects = [
    {
      title: "Clinic Website",
      result: "Increased bookings by 40%",
      desc: "High-converting patient booking experience.",
      link: "https://clinic-sigma-rouge.vercel.app/",
    },
    {
      title: "Cafe Website",
      result: "Boosted online orders",
      desc: "Fast, mobile-first ordering system.",
      link: "https://cafe-wheat-six.vercel.app/",
    },
    {
      title: "Hotel Booking",
      result: "More direct bookings",
      desc: "Reduced dependency on third-party platforms.",
      link: "https://hotel-seven-mu.vercel.app/",
    },
    {
      title: "Jewellery Store",
      result: "Premium brand presence",
      desc: "Luxury UI for high-ticket customers.",
    },
    {
      title: "AI Telecaller System",
      result: "Handles leads 24/7",
      desc: "Automated calling & booking system.",
    },
    {
      title: "Nutritionist Website",
      result: "Higher conversions",
      desc: "Personal branding + consultation funnel.",
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Demo Projects
        </h2>

        <p className="mt-4 text-gray-400">
          Interactive previews. Real experience.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onMouseEnter={() => project.link && setPreview(project.link)}
              onMouseLeave={() => setPreview(null)}
              onClick={() => {
                if (project.link) {
                  document.body.style.overflow = "hidden";
                  setPreview(project.link + "?open=true");
                  setTimeout(() => {
                    window.open(project.link, "_blank");
                    document.body.style.overflow = "auto";
                  }, 400);
                }
              }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg cursor-pointer overflow-hidden"
            >
              {/* TEXT */}
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-[#EB5002]">
                {project.result}
              </p>

              <p className="mt-3 text-sm text-gray-400">
                {project.desc}
              </p>

              {project.link ? (
                <span className="inline-block mt-4 text-sm text-[#EB5002]">
                  View Demo →
                </span>
              ) : (
                <span className="inline-block mt-4 text-sm text-gray-600">
                  Coming Soon
                </span>
              )}

              {/* MAGNETIC GLOW */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#EB5002]/10 via-transparent to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIVE PREVIEW FLOATING */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-10 right-10 w-[320px] h-[200px] rounded-xl overflow-hidden border border-white/10 shadow-2xl z-50"
          >
            <iframe
              src={preview}
              className="w-full h-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* PAGE MORPH OVERLAY */}
      <AnimatePresence>
        {preview?.includes("?open=true") && (
          <motion.div
            initial={{ scale: 0, borderRadius: "100%" }}
            animate={{ scale: 50, borderRadius: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-1/2 left-1/2 w-20 h-20 bg-[#EB5002] z-50"
            style={{ translateX: "-50%", translateY: "-50%" }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}