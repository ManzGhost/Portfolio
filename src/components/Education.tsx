import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Education() {
  const { education, educationHistory } = PERSONAL_INFO;

  return (
    <section id="education" className="py-20 lg:py-28 relative bg-slate-900/30 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 space-y-8">
            
            {/* Degree 1: B.Tech */}
            <div className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-400 shadow-md shadow-indigo-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all shadow-xl shadow-black/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {education.degree}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono text-xs self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{education.duration}</span>
                  </div>
                </div>

                <div className="text-base font-medium text-slate-300 mb-1 flex items-center gap-2">
                  <span>{education.college}</span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-6 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {education.location}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    CGPA: {education.cgpa}
                  </span>
                </div>

                {/* Relevant Coursework */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Relevant Coursework &amp; Core Subjects</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {education.courses.map((course) => (
                      <div key={course} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Degree 2 & 3: Intermediate & Matriculation */}
            {educationHistory?.slice(1).map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600 shadow-md flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {item.degree}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">{item.duration}</span>
                  </div>
                  <div className="text-sm text-slate-300 mb-2">{item.institution}</div>
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="text-slate-300 font-semibold">{item.score}</span>
                    <span>&bull;</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
