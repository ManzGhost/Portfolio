import React from 'react';
import { Layout, Server, Database, Wrench, CheckCircle2, Cpu, BookOpen } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const categoryIcons: Record<string, React.ElementType> = {
    "Frontend Development": Layout,
    "Backend Development": Server,
    "Database Management": Database,
    "Core Concepts": BookOpen,
    "Developer Tools": Wrench,
  };

  const categoryTheme: Record<string, { border: string; glow: string; badge: string }> = {
    "Frontend Development": {
      border: "hover:border-cyan-500/40",
      glow: "from-cyan-500/10 to-transparent",
      badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
    },
    "Backend Development": {
      border: "hover:border-amber-500/40",
      glow: "from-amber-500/10 to-transparent",
      badge: "bg-amber-500/10 text-amber-300 border-amber-500/20"
    },
    "Database Management": {
      border: "hover:border-emerald-500/40",
      glow: "from-emerald-500/10 to-transparent",
      badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
    },
    "Core Concepts": {
      border: "hover:border-purple-500/40",
      glow: "from-purple-500/10 to-transparent",
      badge: "bg-purple-500/10 text-purple-300 border-purple-500/20"
    },
    "Developer Tools": {
      border: "hover:border-indigo-500/40",
      glow: "from-indigo-500/10 to-transparent",
      badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-slate-900/30 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tools &amp; Technologies
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Core stack utilized across full-stack engineering, microservices, and client applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = categoryIcons[category.title] || Layout;
            const theme = categoryTheme[category.title] || categoryTheme["Frontend Development"];

            return (
              <div
                key={category.title}
                className={`relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all duration-300 ${theme.border} group shadow-lg shadow-black/20 hover:-translate-y-1`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.title.replace(' Development', '').replace(' Management', '')}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs"
                      >
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        {skill.level && (
                          <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] border ${theme.badge}`}>
                            {skill.level}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/80" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
