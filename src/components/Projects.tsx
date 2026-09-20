import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'ai'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'fullstack') return p.technologies.includes('Spring Boot') && p.technologies.includes('React');
    if (filter === 'ai') return p.technologies.includes('AI');
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Full-Stack Applications
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Production-ready web applications built with Java, Spring Boot microservices, and React frontends.
            </p>
          </div>

          {/* Quick Filter Tabs */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'fullstack' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Java + React
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filter === 'ai' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Integrated
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1 group overflow-hidden"
              id={`project-card-${project.id}`}
            >
              {/* Project Card Header Banner */}
              <div className="p-6 sm:p-7 border-b border-slate-800/80 bg-gradient-to-br from-slate-850 to-slate-900 relative">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-mono font-semibold text-indigo-400 tracking-wider uppercase block mb-1">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Index Badge */}
                  <span className="font-mono text-xs text-slate-400 px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/60">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="p-6 sm:p-7 pt-5 flex flex-col justify-between flex-grow space-y-5">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Technologies Used
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950 border border-slate-800 text-slate-300 group-hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links / Action Bar */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
                      id={`project-github-${project.id}`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Private repo</span>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all"
                      id={`project-live-${project.id}`}
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800">
                      Local / Server
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
