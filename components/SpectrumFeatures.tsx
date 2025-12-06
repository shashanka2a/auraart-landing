'use client';

import Image from 'next/image';

export default function SpectrumFeatures() {
  return (
    <section id="spectrum" className="py-32 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 sticky top-32 h-fit">
            <span className="font-mono text-xs text-laser-blue mb-4 block reveal-fade">THE TRINITY</span>
            <h2 className="text-5xl font-display font-bold mb-6 reveal-text text-prism-black">
              CREATIVE<br />SPECTRUM
            </h2>
            <p className="text-gray-500 font-light leading-relaxed reveal-fade">
              We combined the best of three worlds into one fluid workflow. No more app switching.
            </p>
          </div>

          <div className="md:col-span-8 flex flex-col gap-24">
            {/* Red: Templates */}
            <div className="group reveal-fade interactive-hover">
              <div className="border-t border-black py-4 flex justify-between items-start">
                <span className="font-mono text-xs">λ 700nm</span>
                <span className="font-mono text-xs text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">FOUNDATION</span>
              </div>
              <h3 className="text-4xl font-display font-medium mb-4 group-hover:pl-4 transition-all duration-300">Social-First Templates</h3>
              <p className="text-gray-500 max-w-md">
                <strong>Think Unfold.</strong> Minimalist, editorial-grade layouts for Stories and Reels. Drop your content into pre-designed structures that scream professional polish.
              </p>
              <div className="mt-8 h-[300px] w-full bg-gray-50 overflow-hidden relative border border-gray-100">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded backdrop-blur text-xs font-mono">
                  TEMPLATE: "Noir Editorial V3" LOADED
                </div>
              </div>
            </div>

            {/* Green: Editing */}
            <div className="group reveal-fade interactive-hover">
              <div className="border-t border-gray-200 py-4 flex justify-between items-start">
                <span className="font-mono text-xs">λ 530nm</span>
                <span className="font-mono text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">MANIPULATION</span>
              </div>
              <h3 className="text-4xl font-display font-medium mb-4 group-hover:pl-4 transition-all duration-300">Pro-Grade Editing</h3>
              <p className="text-gray-500 max-w-md">
                <strong>Think Picsart.</strong> Deep creative control. Layers, blending modes, masking, and stickers. Break the template when you need to, and craft pixel-perfect details.
              </p>
              <div className="mt-8 h-[300px] w-full bg-gray-50 overflow-hidden relative border border-gray-100">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded backdrop-blur text-xs font-mono">
                  TOOL: MASKING_BRUSH [ACTIVE]
                </div>
              </div>
            </div>

            {/* Blue: AI */}
            <div className="group reveal-fade interactive-hover">
              <div className="border-t border-gray-200 py-4 flex justify-between items-start">
                <span className="font-mono text-xs">λ 450nm</span>
                <span className="font-mono text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">INTELLIGENCE</span>
              </div>
              <h3 className="text-4xl font-display font-medium mb-4 group-hover:pl-4 transition-all duration-300">Gemini-Powered AI</h3>
              <p className="text-gray-500 max-w-md">
                <strong>Think Gemini.</strong> Your creative co-pilot. Generate captions, expand images, remove backgrounds, or brainstorm concepts with Google's most capable AI models.
              </p>
              <div className="mt-8 h-[300px] w-full bg-gray-50 overflow-hidden relative border border-gray-100">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-3 rounded backdrop-blur text-xs font-mono flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 animate-pulse rounded-full"></div>
                  AI: "Generating variations..."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

