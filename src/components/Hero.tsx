import React, { useState, useRef } from 'react';
import { ChevronRight, FileText, Camera, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [photoSrc, setPhotoSrc] = useState<string>(
    PERSONAL_INFO.profilePhoto || "https://avatars.githubusercontent.com/u/158326941?v=4"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('Please select an image smaller than 10MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhotoSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageError = () => {
    // Fallback if local file fails to load
    setPhotoSrc("https://avatars.githubusercontent.com/u/158326941?v=4");
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-900/20 via-indigo-600/10 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-12 right-12 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: HERO CONTENT (Hi, I'm David Dhawan... Buttons)               */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 space-y-6 pt-2 lg:pt-10">
            
            {/* Fresher Status Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm"
              id="hero-status-pill"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">Status:</span>
              <span className="text-emerald-300 font-medium">B.Tech IT 2026 &bull; Open for Roles</span>
            </div>

            {/* Main Greeting & Role */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">David Dhawan</span>
              </h1>
              
              <div className="inline-block">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Java Full Stack Developer
                </h2>
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              I build responsive and scalable web applications using Java, Spring Boot, React and modern web technologies.
            </p>

            {/* Call To Action Buttons: [ View Projects ] [ View Resume ] */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
                id="hero-view-projects-btn"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              {onOpenResumeModal ? (
                <button
                  onClick={onOpenResumeModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-800 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  id="hero-resume-btn"
                  title="Inspect David Dhawan's Resume"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>View Resume</span>
                </button>
              ) : (
                <a
                  href="#resume"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-800 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>Resume</span>
                </a>
              )}
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN:                                                             */}
          {/* TOP-RIGHT: PERSONAL PROFILE PHOTO                                         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full space-y-6 lg:space-y-8">
            
            {/* Top-Right Profile Photo Container */}
            <div className="w-full flex justify-center lg:justify-end pr-0 lg:pr-2 pt-1 sm:pt-2">
              <div 
                className="relative group flex flex-col items-center"
                id="hero-profile-photo-container"
              >
                {/* Subtle outer glow layer */}
                <div 
                  className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-indigo-500/25 via-cyan-500/20 to-emerald-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none -z-10" 
                  aria-hidden="true" 
                />

                {/* Circular Profile Photo Frame */}
                <div 
                  className="relative w-[210px] h-[210px] sm:w-[260px] sm:h-[260px] lg:w-[310px] lg:h-[310px] rounded-full p-1.5 bg-gradient-to-tr from-indigo-500/60 via-slate-700/60 to-cyan-400/60 border-2 border-indigo-400/40 shadow-2xl shadow-indigo-950/70 backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.02]"
                >
                  {/* Inner ring & image mask */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border border-slate-800 relative">
                    <img
                      src={photoSrc}
                      alt="David Dhawan - Profile Photo"
                      onError={handleImageError}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                      id="hero-profile-img"
                    />

                    {/* Quick upload / change photo trigger on hover */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer z-20"
                      title="Update profile photo"
                      aria-label="Upload or update profile photo"
                      id="hero-profile-change-btn"
                    >
                      <Camera className="w-6 h-6 text-cyan-300 mb-1" />
                      <span className="text-xs font-semibold tracking-wide text-white">Update Photo</span>
                      <span className="text-[10px] font-mono text-slate-300 mt-0.5">JPG / PNG / WEBP</span>
                    </button>
                  </div>

                  {/* Hidden file input for updating profile photo */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                    id="hero-photo-file-input"
                  />

                  {/* Active status dot badge on photo corner */}
                  <div 
                    className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-2.5 py-1 rounded-full bg-slate-950/90 border border-emerald-500/40 shadow-lg flex items-center gap-1.5 z-30"
                    title="Available for Software Developer Opportunities"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-medium text-emerald-300">Open to Work</span>
                  </div>
                </div>

                {/* Small Caption Pill */}
                <div className="mt-2.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
                  <CheckCircle2 className="w-3 h-3 text-indigo-400" />
                  <span>David Dhawan &bull; Profile</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
