import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      
      // Calculate scroll progress percentage
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScrollHeight) * 100));
        setScrollProgress(progress);
      }

      // Check if user has scrolled past the hero section
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        // Show button once the bottom of the hero section has scrolled past the top of the viewport
        setIsVisible(heroBottom <= 0);
      } else {
        // Fallback if hero id is not found
        setIsVisible(window.scrollY > 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case the page is loaded scrolled down
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Back to top of page"
        title="Back to top"
        id="back-to-top-btn"
        className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 hover:border-indigo-500 shadow-xl shadow-slate-950/70 hover:shadow-indigo-500/25 backdrop-blur-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
      >
        {/* Subtle SVG circular progress indicator around the border */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-1"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-slate-800/80"
          />
          <circle
            cx="22"
            cy="22"
            r="18"
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth="2.5"
            strokeDasharray="113.097"
            strokeDashoffset={113.097 - (113.097 * scrollProgress) / 100}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Arrow Icon with subtle bounce on hover */}
        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-slate-300 group-hover:text-indigo-300" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-200 border border-slate-700 shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
          Back to Top
        </span>
      </button>
    </div>
  );
}
