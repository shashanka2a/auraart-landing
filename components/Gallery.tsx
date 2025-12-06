'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Gallery() {
  useEffect(() => {
    const projectTexts = document.querySelectorAll('.project-text');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const frameCounter = document.getElementById('frame-counter');
    const galleryFrame = document.getElementById('gallery-frame');

    if (projectTexts.length > 0 && galleryImages.length > 0) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');

            // Update Images
            galleryImages.forEach(img => {
              const imgElement = img as HTMLElement;
              if (img.getAttribute('data-index') === index) {
                imgElement.style.opacity = '1';
                imgElement.style.transform = 'scale(1.05)';
              } else {
                imgElement.style.opacity = '0';
                imgElement.style.transform = 'scale(1)';
              }
            });

            // Update Counter
            if (frameCounter && index !== null) {
              frameCounter.innerText = `0${parseInt(index) + 1} / 03`;
            }

            // Subtle Frame Shake/Interaction
            if (galleryFrame) {
              galleryFrame.style.transform = 'scale(0.98)';
              setTimeout(() => {
                galleryFrame.style.transform = 'scale(1)';
              }, 300);
            }
          }
        });
      }, {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px"
      });

      projectTexts.forEach(text => {
        observer.observe(text);
      });
    }
  }, []);

  return (
    <section id="gallery" className="bg-lab-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          {/* Left: Sticky Image Frame */}
          <div className="hidden md:block w-1/2 sticky top-0 h-screen py-24 z-10">
            <div className="w-full h-full rounded-2xl overflow-hidden relative border border-gray-200 shadow-2xl bg-black transition-transform duration-700" id="gallery-frame">
              {/* Project 1 Image */}
              <div className="gallery-img absolute inset-0 opacity-100 transition-opacity duration-1000 ease-in-out" data-index="0">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
                  alt="Fashion Editorial"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              {/* Project 2 Image */}
              <div className="gallery-img absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out" data-index="1">
                <Image
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200"
                  alt="Neon Grade"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              {/* Project 3 Image */}
              <div className="gallery-img absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out" data-index="2">
                <Image
                  src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=1200"
                  alt="Cyberpunk Asset"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* UI Overlay */}
              <div className="absolute top-6 right-6 z-20">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 text-white font-mono text-xs z-20 border-t border-white/10 backdrop-blur-sm bg-black/20">
                <div className="flex justify-between items-center">
                  <span>OUTPUT_RENDER</span>
                  <span id="frame-counter">01 / 03</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrolling Text Sections */}
          <div className="w-full md:w-1/2 md:pl-24 pb-24 relative z-20">
            <div className="mb-24 pt-24">
              <span className="font-mono text-xs text-laser-blue mb-4 block reveal-fade">RESULTS ARCHIVE</span>
              <h2 className="text-4xl font-display font-bold reveal-text text-prism-black">MADE WITH AURA</h2>
            </div>

            {/* Project 1 Text */}
            <div className="project-text min-h-[90vh] flex flex-col justify-center group" data-index="0">
              <span className="text-red-500 font-mono text-xs mb-4">TEMPLATE: STORIES_V1</span>
              <h3 className="text-6xl font-display font-bold mb-6 text-prism-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-purple-600 transition-all duration-500">Fashion Editorial</h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Generated in 0.4s using the Noir Editorial V3 template. Auto-adjusted for contrast and grain to match the client's mood board.
              </p>
              {/* Mobile Image Fallback */}
              <div className="md:hidden mt-8 rounded-lg overflow-hidden h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
                  alt="Fashion Editorial"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project 2 Text */}
            <div className="project-text min-h-[90vh] flex flex-col justify-center group" data-index="1">
              <span className="text-green-500 font-mono text-xs mb-4">TOOL: COLOR_SHIFT</span>
              <h3 className="text-6xl font-display font-bold mb-6 text-prism-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-teal-500 transition-all duration-500">Neon Grade</h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Complex color grading achieved via natural language prompting. "Make it look like Tokyo at midnight" applied to raw footage.
              </p>
              {/* Mobile Image Fallback */}
              <div className="md:hidden mt-8 rounded-lg overflow-hidden h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800"
                  alt="Neon Grade"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Project 3 Text */}
            <div className="project-text min-h-[90vh] flex flex-col justify-center group" data-index="2">
              <span className="text-blue-500 font-mono text-xs mb-4">AI: GENERATIVE_FILL</span>
              <h3 className="text-6xl font-display font-bold mb-6 text-prism-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-500">Cyberpunk Asset</h3>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                Background expanded 300% using generative fill. Floating UI elements added via smart object insertion.
              </p>
              {/* Mobile Image Fallback */}
              <div className="md:hidden mt-8 rounded-lg overflow-hidden h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=800"
                  alt="Cyberpunk Asset"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

