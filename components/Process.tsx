"use client";

import { motion } from "framer-motion";

export default function Process() {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">

      {/* TOP FLOW */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#EB5002]/20 via-transparent to-transparent"></div>

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#EB5002]/10 blur-3xl rounded-full right-[-100px] top-20"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold">
          How It Works
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          A simple process designed to turn your business into a consistent client-generating system.
        </p>

        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {[
            {
              step: "01",
              title: "You Contact Us",
              short: "Tell us about your business and what you want to achieve.",
              long: `Reach out to us on WhatsApp or email and tell us about your business.

We’ll understand your goals, suggest the best approach, and guide you step-by-step.

No confusion. No technical headache.`,
            },
            {
              step: "02",
              title: "We Build Your System",
              short: "We design your website and set up your AI automation.",
              long: `We build everything for you — website, automation, and integrations.

From design to deployment, we handle it all so you don’t have to.

You can always reach us at aman@pixeltoneai.com for updates or support.`,
            },
            {
              step: "03",
              title: "You Get Customers",
              short: "Your system runs 24/7 bringing in leads automatically.",
              long: `Once everything is live, your system starts working instantly.

Leads come in, follow-ups happen automatically, and conversions increase.

You focus on your business — we handle the system.`,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="group relative h-[320px] p-8 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-lg bg-white/5 transition duration-300"
            >

              {/* GLOW OVERLAY */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#EB5002]/20 via-transparent to-transparent"></div>

              {/* DEFAULT VIEW */}
              <div className="absolute inset-0 flex flex-col items-center justify-center transition duration-300 group-hover:opacity-0 z-10">
                <div className="text-3xl font-bold text-[#EB5002] mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-gray-300 text-sm text-center px-2">
                  {item.short}
                </p>
              </div>

              {/* HOVER VIEW */}
              <div className="absolute inset-0 flex items-center justify-center text-xs md:text-sm text-gray-200 px-6 text-center opacity-0 group-hover:opacity-100 transition duration-300 leading-relaxed z-10 whitespace-pre-line">
                {item.long}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}