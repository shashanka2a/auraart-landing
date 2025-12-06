'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 w-full z-50 py-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between nav-content transition-colors duration-300">
        <div className="flex items-center gap-3 interactive-hover">
          <div className="w-3 h-3 bg-current rotate-45"></div>
          <span className="font-display font-bold tracking-tight text-xl">AURA ART</span>
        </div>
        <div className="hidden md:flex gap-12">
          <a href="#spectrum" className="text-sm font-mono hover:text-laser-blue transition-colors interactive-hover">
            [ TEMPLATES ]
          </a>
          <a href="#process" className="text-sm font-mono hover:text-laser-blue transition-colors interactive-hover">
            [ EDITING ]
          </a>
          <a href="#gallery" className="text-sm font-mono hover:text-laser-blue transition-colors interactive-hover">
            [ AI-GEN ]
          </a>
        </div>
        <button className="border border-current px-6 py-2 text-xs font-mono rounded-full hover:bg-black hover:text-white hover:border-black transition-all duration-300 interactive-hover">
          START CREATING
        </button>
      </div>
    </nav>
  );
}

