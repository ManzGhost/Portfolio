import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Logo from './Logo';

interface FooterProps {
  onOpenResumeModal?: () => void;
}

export default function Footer({ onOpenResumeModal }: FooterProps) {
  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Identity */}
          <div className="flex items-center gap-3">
            <Logo size="md" showWordmark={true} id="footer-brand-logo" />
          </div>

          {/* Social & Resume Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-medium">
            {onOpenResumeModal ? (
              <button
                onClick={onOpenResumeModal}
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            ) : (
              <a
                href="#resume"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            )}
            <span className="text-slate-700">|</span>
            <a
              href="#certificates"
              className="text-slate-400 hover:text-white transition-colors"
              id="footer-certificates"
            >
              Certificates
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              id="footer-github"
            >
              GitHub
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0A66C2] transition-colors"
              id="footer-linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>&copy; 2026 David Dhawan. All rights reserved.</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Crafted with Java &amp; React Architecture</span>
        </div>

      </div>
    </footer>
  );
}
