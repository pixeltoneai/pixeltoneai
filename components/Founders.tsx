"use client";

export default function Founders() {
  return (
    <section className="relative py-24 px-6 flex items-center justify-center">
      
      {/* Background glow (ORANGE now) */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-white/10 dark:bg-[#EB5002]/20 blur-[120px] rounded-full animate-float" />
      </div>

      <div className="max-w-4xl w-full text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          Meet the founders
        </h2>

        <p className="text-sm opacity-60 mb-12">
          Two founders. One obsession: growth.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Aman */}
          <div className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(235,80,2,0.35)]">
            
            <a
              href="mailto:aman@pixeltoneai.com"
              className="text-xl font-medium mb-1 inline-block transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#EB5002] group-hover:to-[#FF6A00] group-hover:bg-clip-text group-hover:text-transparent group-hover:drop-shadow-[0_0_12px_rgba(235,80,2,0.8)]"
            >
              Aman Shrivastav
            </a>

            <p className="text-sm opacity-60 mb-2">
              Co-founder & CEO
            </p>

            <p className="text-sm opacity-40 group-hover:opacity-80 transition">
              aman@pixeltoneai.com
            </p>
          </div>

          {/* Prisha */}
          <div className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(235,80,2,0.35)]">
            
            <a
              href="mailto:prisha@pixeltoneai.com"
              className="text-xl font-medium mb-1 inline-block transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#EB5002] group-hover:to-[#FF6A00] group-hover:bg-clip-text group-hover:text-transparent group-hover:drop-shadow-[0_0_12px_rgba(235,80,2,0.8)]"
            >
              Prisha Moradiya
            </a>

            <p className="text-sm opacity-60 mb-2">
              Co-founder & CTO
            </p>

            <p className="text-sm opacity-40 group-hover:opacity-80 transition">
              prisha@pixeltoneai.com
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}