import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation */}
      <Navbar onOpenResumeModal={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with 3D Developer visual on right */}
        <Hero onOpenResumeModal={handleOpenResume} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Certificates Section */}
        <Certifications onOpenResumeModal={handleOpenResume} />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={handleOpenResume} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Complete ATS Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </div>
  );
}
