'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const interactiveElements = document.querySelectorAll('a, button, .interactive-hover');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = () => {
      cursor?.classList.add('hovered');
    };

    const handleMouseLeave = () => {
      cursor?.classList.remove('hovered');
    };

    document.addEventListener('mousemove', handleMouseMove);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div id="cursor"></div>;
}

