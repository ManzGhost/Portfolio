import React from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2,
  FileBadge
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

interface CertificationsProps {
  onOpenResumeModal?: () => void;
}

export default function Certifications({ onOpenResumeModal }: CertificationsProps) {
  return (
    <section id="certificates" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>ACHIEVEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Certificates
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Certifications and learning achievements
            </p>
          </div>
        </div>

        {/* Certificate Cards: Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {CERTIFICATIONS.map((cert, index) => {
            const isPlaceholderLink = cert.link.includes('PASTE_YOUR_');
            // If the link is a placeholder, fallback to the provided Drive folder until individual link is added
            const targetUrl = isPlaceholderLink 
              ? "https://drive.google.com/drive/folders/100YUPLtyCaW02anZsPEn1TogRLXY3Avv?usp=drive_link" 
              : cert.link;

            return (
              <div
                key={cert.id || index}
                className="group relative p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between"
                id={`certificate-card-${cert.id || index}`}
              >
                {/* Subtle gradient hover highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative space-y-4">
                  {/* Top Row: Certificate Icon & Organization */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center border bg-indigo-500/10 border-indigo-500/25 text-indigo-400 group-hover:border-indigo-500/40 group-hover:scale-105 transition-all shrink-0">
                        <FileBadge className="w-6 h-6" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block truncate">
                          {cert.type || 'Certification'}
                        </span>
                        <span className="text-xs font-semibold text-slate-200 block truncate">
                          {cert.issuer}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Title */}
                  <div className="pt-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {cert.title || cert.name}
                    </h3>
                    {cert.certificateId && (
                      <div className="text-[11px] font-mono text-slate-400 mt-1 flex items-center gap-1.5">
                        <span className="text-slate-500">ID:</span>
                        <span className="text-indigo-300 select-all font-mono">{cert.certificateId}</span>
                      </div>
                    )}
                  </div>

                  {/* Short description */}
                  {cert.description && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  )}

                  {/* Competencies / Skills Tags */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-950 border border-slate-800 text-slate-400"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="px-1.5 py-0.5 rounded-md text-[11px] font-mono text-slate-500 bg-slate-950/50">
                            +{cert.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer with "View Certificate" button */}
                <div className="relative pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Verified</span>
                  </div>

                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-500/30 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer"
                    aria-label={`View Certificate: ${cert.title || cert.name}`}
                    id={`view-cert-btn-${cert.id || index}`}
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
