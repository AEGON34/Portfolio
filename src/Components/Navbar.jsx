import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      let current = 'home';
      
      // Check if we are at the top of the page
      if (window.scrollY < 100) {
        current = 'home';
      } else {
        // Find which section is currently in view
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the top of the section is within the viewport (with some offset)
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = section;
              break;
            }
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '⌂', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { id: 'about', label: 'About', icon: '👤', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'skills', label: 'Skills', icon: '⚙', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'projects', label: 'Projects', icon: '⧉', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'contact', label: 'Contact', icon: '✉', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-2 sm:py-3 md:py-4">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          mx-auto flex items-center gap-1 sm:gap-2 rounded-full 
          border border-slate-700/50 bg-slate-900/80 
          px-2 py-2 sm:px-3 md:gap-4 md:px-6 shadow-lg shadow-cyan-500/10 
          backdrop-blur-xl
        "
      >
        {/* Left logo/indicator (hidden on very small screens to save space) */}
        <div className="hidden items-center gap-3 sm:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 ring-1 ring-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                item.action();
              }}
              className={`
                relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300
                ${activeSection === item.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'}
              `}
            >
              {/* Active Background Animation (The "Toggle Bar") */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600/40 to-blue-600/40 border border-cyan-500/30 shadow-[0_0_20px_rgba(8,145,178,0.3)]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <span className="relative z-10 text-lg sm:text-base">{item.icon}</span>
              <span className="relative z-10 hidden sm:inline">{item.label}</span>
              
              {/* Glowing dot for active state on mobile */}
              {activeSection === item.id && (
                <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 sm:hidden" />
              )}
            </button>
          ))}
        </div>

        {/* Right accent (hidden on small screens) */}
        <div className="hidden items-center gap-3 sm:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 ring-1 ring-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
             <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
          </div>
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
