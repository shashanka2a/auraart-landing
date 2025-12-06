'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const bar = document.getElementById('loader-bar');
    const percent = document.getElementById('loader-percent');
    const preloader = document.getElementById('preloader');

    if (bar) {
      bar.style.width = '100%';
    }

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 1;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);
      if (percent) {
        percent.innerText = currentProgress + '%';
      }

      if (currentProgress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (preloader) {
            preloader.style.transform = 'translateY(-100%)';
            setIsHidden(true);
            revealElements();
          }
        }, 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const revealElements = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-text, .reveal-fade').forEach(el => {
      observer.observe(el);
    });
  };

  if (isHidden) return null;

  return (
    <div id="preloader">
      <div className="w-64">
        <div className="flex justify-between text-xs font-mono mb-2 text-gray-400">
          <span>SYSTEM</span>
          <span>INITIALIZING</span>
        </div>
        <div className="w-full bg-gray-800 h-[1px]">
          <div id="loader-bar" className="loader-line"></div>
        </div>
        <div className="mt-2 text-right text-xs font-mono text-laser-blue" id="loader-percent">
          {progress}%
        </div>
      </div>
    </div>
  );
}

