import React from 'react';
import { GraduationCap, Code2, Server, Database, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      title: "B.Tech in Information Technology",
      description: "Class of 2026 at Chandigarh Engineering College, Landran with a 7.01/10 CGPA.",
      icon: GraduationCap,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    },
    {
      title: "Core Java & Spring Boot",
      description: "Building production-grade REST APIs, dependency injection, and secure authentication with JWT.",
      icon: Server,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      title: "React & Modern Frontend",
      description: "Developing dynamic, responsive user interfaces with reusable stateful components and modern tooling.",
      icon: Code2,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    },
    {
      title: "SQL & MongoDB Persistence",
      description: "Designing structured schemas, relational queries in MySQL, and document databases with MongoDB.",
      icon: Database,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering scalable web solutions with a strong Java foundation.
          </h2>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-base leading-relaxed">
            <p>
              I am an aspiring <strong className="text-white font-semibold">Java Full Stack Developer</strong> currently pursuing my <strong className="text-indigo-300 font-medium">B.Tech in Information Technology</strong> at Chandigarh Engineering College, Landran, graduating in <strong className="text-white font-semibold">2026</strong>.
            </p>
            <p>
              My passion lies in architecting end-to-end applications where rock-solid backend services meet seamless user experiences. With deep hands-on expertise in <strong className="text-amber-300 font-medium">Java and Spring Boot</strong>, I design resilient <strong className="text-indigo-300 font-medium">REST APIs</strong> that handle authentication, business logic, and third-party integrations like payment gateways.
            </p>
            <p>
              On the client side, I create responsive, reactive web interfaces using <strong className="text-cyan-300 font-medium">React</strong> and modern JavaScript, ensuring clean code separation and intuitive UX.
            </p>
            <p>
              Having engineered real-world full-stack systems—ranging from food ordering ecosystems with Razorpay to real-time chat servers and AI interview platforms—I am eager to contribute my problem-solving skills to high-impact software engineering teams.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Explore my real-world projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:bg-slate-900/90 shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.borderColor} border flex items-center justify-center mb-3.5`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
