import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Code, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Logo from './Logo';

interface NavbarProps {
  onOpenResumeModal?: () => void;
}

export default function Navbar({ onOpenResumeModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a 
            href="#hero" 
            className="group flex items-center focus:outline-none"
            id="brand-logo-link"
          >
            <Logo size="md" showWordmark={true} id="navbar-brand-logo" />
          </a>

          {/* Desktop Nav Links (Visible on lg+ screens for ample breathing room) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-3 py-1 shadow-inner backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Socials */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="David Dhawan on GitHub"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg border border-transparent hover:border-slate-800 transition-all"
              id="navbar-github-link"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="David Dhawan on LinkedIn"
              className="p-2 text-slate-400 hover:text-[#0A66C2] hover:bg-slate-900 rounded-lg border border-transparent hover:border-slate-800 transition-all"
              id="navbar-linkedin-link"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile & Tablet Menu Button (Visible on < lg screens) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div 
          className="lg:hidden bg-slate-950/95 border-b border-slate-800/90 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-3"
          id="mobile-menu-drawer"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-[#0A66C2] border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.links.email}`}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 shadow-md"
              >
                Contact Me
              </a>
          </div>
        </div>
      )}
    </header>
  );
}
