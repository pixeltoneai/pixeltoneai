"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 text-center">
      
      <p className="text-xl font-semibold">PixeltoneAI</p>

      <p className="text-gray-500 text-sm mt-2">
        Websites • AI Automation • Lead Systems
      </p>

      <div className="flex justify-center gap-6 mt-6 text-gray-400 text-sm">

        <a 
          href="https://www.instagram.com/pixeltoneai" 
          target="_blank"
          className="hover:text-white transition"
        >
          📸 Instagram
        </a>

        <a 
          href="https://www.linkedin.com/in/aman-shrivastav-5842893b5" 
          target="_blank"
          className="hover:text-white transition"
        >
          💼 LinkedIn
        </a>

        <a 
          href="mailto:pixeltoneai@gmail.com"
          className="hover:text-white transition"
        >
          ✉️ Email
        </a>

      </div>

      <p className="mt-8 text-xs text-gray-500">
        © {new Date().getFullYear()} PixeltoneAI. All rights reserved.
      </p>

    </footer>
  );
}