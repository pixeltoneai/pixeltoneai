"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center z-50 border-b border-white/5">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img
          src="/logo.png"
          alt="PixeltoneAI"
          className="h-8 w-auto"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* NAV LINKS (HIDDEN ON MOBILE) */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#services" className="hover:text-[#EB5002] transition">
            Services
          </a>

          <a href="#projects" className="hover:text-[#EB5002] transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-[#EB5002] transition">
            Contact
          </a>
        </div>

        {/* CTA BUTTON */}
        <a
          href="https://wa.me/919512260104?text=Hi%20I%20saw%20your%20website%20PixeltoneAI"
          target="_blank"
          className="bg-[#EB5002] text-white px-4 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-[#d94400] transition hover:shadow-md hover:shadow-orange-500/30 whitespace-nowrap"
        >
          Get Started
        </a>

      </div>
    </nav>
  );
}