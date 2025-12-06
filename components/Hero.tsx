'use client';

import { useEffect, useState, useMemo } from 'react';

const phrases = [
  "Create a noir editorial story...",
  "Edit this to look cinematic...",
  "Generate a cyberpunk poster...",
  "Apply minimalist layout..."
];

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let typeSpeed = 100;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setTypewriterText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
          typeSpeed = 50;
        } else {
          setIsDeleting(false);
          setPhraseIndex(prev => (prev + 1) % phrases.length);
          typeSpeed = 500;
        }
      } else {
        if (charIndex < currentPhrase.length) {
          setTypewriterText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
          typeSpeed = 100;
        } else {
          setIsDeleting(true);
          typeSpeed = 2000;
        }
      }

      timeoutId = setTimeout(type, typeSpeed);
    };

    timeoutId = setTimeout(type, typeSpeed);
    return () => clearTimeout(timeoutId);
  }, [phraseIndex, charIndex, isDeleting, phrases]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-32">
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(0,102,255,0.03)_0%,transparent_60%)] pointer-events-none"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
        {/* Massive H1 */}
        <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-6 text-prism-black leading-[0.9] reveal-text">
          CREATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-laser-blue via-purple-500 to-pink-500 italic font-serif pr-2">FASTER.</span>
        </h1>

        {/* Concise Subtext */}
        <p className="text-xl text-gray-600 max-w-xl mx-auto font-light mb-16 reveal-fade delay-100 leading-relaxed">
          The all-in-one workspace blending smart templates, pro editing, and generative AI.
        </p>

        {/* Interactive Prompt Bar */}
        <div className="w-full max-w-2xl relative group reveal-fade delay-200 interactive-hover">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-laser-blue to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          {/* Input Container */}
          <div className="relative bg-white border border-gray-200 rounded-2xl p-2 shadow-2xl flex items-center gap-4 transition-transform duration-300 group-hover:-translate-y-1">
            <div className="pl-4 text-gray-400">
              <svg className="w-5 h-5 text-laser-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="flex-1 h-12 flex items-center overflow-hidden">
              <span className="font-mono text-lg text-gray-800 tracking-tight">{typewriterText}</span>
              <span className="w-0.5 h-6 bg-laser-blue animate-blink ml-1"></span>
            </div>
            <button className="bg-prism-black text-white px-6 py-3 rounded-xl font-medium hover:bg-laser-blue transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/10">
              <span>Generate</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Floating Tags */}
          <div className="flex justify-center gap-3 mt-8 opacity-60">
            <span className="px-3 py-1 rounded-full border border-gray-200 bg-white/50 text-[10px] font-mono text-gray-500 uppercase tracking-wide hover:border-laser-blue hover:text-laser-blue transition-colors cursor-pointer">Templates</span>
            <span className="px-3 py-1 rounded-full border border-gray-200 bg-white/50 text-[10px] font-mono text-gray-500 uppercase tracking-wide hover:border-laser-blue hover:text-laser-blue transition-colors cursor-pointer">Editing</span>
            <span className="px-3 py-1 rounded-full border border-gray-200 bg-white/50 text-[10px] font-mono text-gray-500 uppercase tracking-wide hover:border-laser-blue hover:text-laser-blue transition-colors cursor-pointer">Gen AI</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal-fade delay-500 opacity-40">
        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Scroll</span>
        <div className="h-10 w-[1px] bg-gray-300 overflow-hidden">
          <div className="h-full w-full bg-black animate-[flow_1.5s_ease-in-out_infinite] translate-y-[-100%]"></div>
        </div>
      </div>
    </section>
  );
}

