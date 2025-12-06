'use client';

export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-[12vw] font-display font-bold leading-none tracking-tighter hover:text-transparent hover:bg-clip-text hover:bg-spectrum-gradient transition-all duration-500 cursor-none interactive-hover mb-12 select-none">
          START CREATING
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-12">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-4 h-4 bg-black"></div>
            <span className="font-bold tracking-tight">AURA ART</span>
          </div>

          <div className="flex gap-8 text-sm font-mono uppercase tracking-wider">
            <a href="#" className="hover:line-through">Twitter</a>
            <a href="#" className="hover:line-through">Instagram</a>
            <a href="#" className="hover:line-through">Email</a>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-gray-400 font-mono">
            © 2025 LABORATORY INC.
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-spectrum-gradient blur-[120px] opacity-20 pointer-events-none"></div>
    </footer>
  );
}

