import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  BookOpen,
  Heart,
  Sparkles,
  Users
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import Logo from './Logo';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeContent = `DAVID DHAWAN
Phone: +91-9546681813 | Email: ${PERSONAL_INFO.links.email}
LinkedIn: ${PERSONAL_INFO.links.linkedin} | GitHub: ${PERSONAL_INFO.links.github}
Location: Bengaluru, India

==================================================
PROFESSIONAL SUMMARY
==================================================
B.Tech Information Technology student and aspiring Java Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, JavaScript, SQL, MongoDB, HTML and CSS. Experienced in developing full-stack applications, REST APIs, authentication systems and database-driven applications. Strong understanding of Object-Oriented Programming and web development. Seeking an entry-level Software Developer or Java Full Stack Developer position.

==================================================
EDUCATION
==================================================
Chandigarh Engineering College, Landran (2022 – 2026)
B.Tech in Information Technology | CGPA - 7.01/10

Mirza Ghalib College, Gaya (2020 – 2022)
Intermediate, Bihar Board | Percentage - 62.4%

Hansraj Public School, Gaya (2020)
Matriculation, CBSE | Percentage - 60.8%

==================================================
TECHNICAL SKILLS
==================================================
• Programming Languages: Java, JavaScript, SQL
• Frontend: HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS
• Backend: Java, Spring Boot, REST APIs, JSP
• Databases: MySQL, MongoDB
• Tools: Git, GitHub, Maven, Postman, VS Code, Eclipse
• Technologies: JWT, JDBC, AJAX, JSON, Cloudinary, Razorpay
• Core Concepts: Data Structures & Algorithms (DSA), OOP, DBMS, SQL, Operating Systems, Computer Networks

==================================================
PROJECTS
==================================================
1. Foodies – Food Ordering Website
Live: https://foodies-five-ruddy.vercel.app/
GitHub: https://github.com/ManzGhost/foodies
• Developed a responsive food ordering website using React.js.
• Built interactive pages for food browsing, menu, and cart management.
• Designed a modern and user-friendly interface with responsive layouts.

2. ExpensePro-Tracker
Live: https://expensepro-tracker.vercel.app/login
GitHub: https://github.com/ManzGhost/ExpensePro-Tracker
• Developed a full-stack expense management application using React.js, Spring Boot and MongoDB.
• Implemented REST APIs for user authentication, expense management, category tracking and transaction processing.
• Implemented JWT-based authentication to secure user and admin operations.
• Integrated MongoDB for storing users, expenses, categories and transaction information.

3. SimpleChat – Real-Time Messaging Application
Live: https://simplechat-ral1.onrender.com
GitHub: https://github.com/ManzGhost/simplechat
• Constructed low-latency full duplex messaging using Spring Boot WebSockets and STOMP message brokers.
• Maintained persistent message logs in MongoDB and enforced authenticated private chat channels.

4. InterviewAI Pro – AI-Powered Technical Interview Platform
Live: https://interviewai-pro-1znj.onrender.com
GitHub: https://github.com/ManzGhost/InterviewAl-PRO
• Developed an intelligent technical interview preparation platform with automated evaluation.

==================================================
CERTIFICATIONS
==================================================
${PERSONAL_INFO.certifications.map(c => `• ${c.title} – ${c.issuer}${c.certificateId ? ` (ID: ${c.certificateId})` : ''}\n  Verification: ${c.link}`).join('\n')}

==================================================
RELEVANT COURSEWORK
==================================================
• DSA • OOPs • DBMS

==================================================
INTERPERSONAL SKILLS
==================================================
• Problem Solving • Decision Making • Team Leadership • Quick Learner

==================================================
INTERESTS & HOBBIES
==================================================
• Reading books • Gaming • Stock Market • Cooking Food

==================================================
EXTRACURRICULAR / ACHIEVEMENTS
==================================================
• Volunteer at NGO- Vriksh Be The Change Since 2020, providing free education to underprivileged children and IIT/JEE Coaching for XI/XII Standard Students.
• Active member of an NGO focused on social and academic development in the Gaya locality.
• Organized cultural events including singing and dancing competitions in 2023.
• Contributed as a content writer in the college literary club.
`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'David_Dhawan_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyText = () => {
    const text = `David Dhawan - Java Full Stack Developer
Phone: +91-9546681813 | Email: ${PERSONAL_INFO.links.email}
Location: Bengaluru, India
Education: B.Tech IT (2022-2026), Chandigarh Engineering College, Landran (CGPA: 7.01/10)
Stack: Java, Spring Boot, React.js, REST APIs, MySQL, MongoDB, JavaScript, HTML5, CSS3
GitHub: ${PERSONAL_INFO.links.github} | LinkedIn: ${PERSONAL_INFO.links.linkedin}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white print:static"
      id="resume-modal-overlay"
    >
      {/* Container */}
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:rounded-none"
        id="resume-modal-container"
      >
        {/* Modal Top Control Bar (Hidden on Print) */}
        <div className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 border-b border-slate-800 bg-slate-950/90 print:hidden gap-2">
          <div className="flex items-center gap-2 sm:gap-2.5 overflow-hidden">
            <Logo size="sm" id="resume-modal-logo" />
            <div className="truncate">
              <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">David Dhawan — Resume</h2>
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">Java Full Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-sm transition-all cursor-pointer"
              title="Print or Save as PDF"
              id="resume-print-btn"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-medium transition-all cursor-pointer"
              title="Download Plain Text Resume"
              id="resume-download-txt-btn"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download .TXT</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700 text-xs transition-all cursor-pointer"
              title="Copy Summary"
              id="resume-copy-summary-btn"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-750 text-slate-400 hover:text-white transition-all ml-0.5 sm:ml-1 cursor-pointer"
              aria-label="Close modal"
              id="resume-close-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div 
          className="p-4 sm:p-8 md:p-10 overflow-y-auto print:overflow-visible print:p-8 bg-slate-900 print:bg-white text-slate-200 print:text-neutral-900 font-sans leading-normal"
          id="printable-resume"
        >
          {/* Resume Header - Centered Style matching the original PDF */}
          <div className="border-b border-slate-800 print:border-neutral-300 pb-5 mb-5 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-neutral-900 tracking-tight">
              David Dhawan
            </h1>

            {/* Contact Information Row */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 mt-2.5 text-xs text-slate-300 print:text-neutral-700 font-mono">
              <a 
                href="tel:+919546681813"
                className="flex items-center gap-1 hover:text-indigo-400 print:text-neutral-800 transition-colors"
              >
                <Phone className="w-3 h-3 text-emerald-400 print:text-emerald-700" />
                <span>+91-9546681813</span>
              </a>

              <span className="text-slate-600 print:text-neutral-400">&bull;</span>

              <a 
                href={`mailto:${PERSONAL_INFO.links.email}`}
                className="flex items-center gap-1 hover:text-indigo-400 print:text-neutral-800 transition-colors"
              >
                <Mail className="w-3 h-3 text-indigo-400 print:text-indigo-700" />
                <span>{PERSONAL_INFO.links.email}</span>
              </a>

              <span className="text-slate-600 print:text-neutral-400">&bull;</span>

              <a 
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-400 print:text-indigo-700 hover:underline"
              >
                <Linkedin className="w-3 h-3 text-[#0A66C2]" />
                <span>Linkedin</span>
              </a>

              <span className="text-slate-600 print:text-neutral-400">&bull;</span>

              <a 
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-400 print:text-indigo-700 hover:underline"
              >
                <Github className="w-3 h-3 text-slate-400 print:text-neutral-600" />
                <span>Github</span>
              </a>

              <span className="text-slate-600 print:text-neutral-400">&bull;</span>

              <span className="flex items-center gap-1 text-slate-400 print:text-neutral-700">
                <MapPin className="w-3 h-3 text-rose-400 print:text-rose-700" />
                <span>Bengaluru, India</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-900 border-b border-slate-800 print:border-neutral-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-neutral-800 leading-relaxed text-justify">
              B.Tech Information Technology student and aspiring Java Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, JavaScript, SQL, MongoDB, HTML and CSS. Experienced in developing full-stack applications, REST APIs, authentication systems and database-driven applications. Strong understanding of Object-Oriented Programming and web development. Seeking an entry-level Software Developer or Java Full Stack Developer position.
            </p>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-900 border-b border-slate-800 print:border-neutral-300 pb-1 mb-2.5">
              Education
            </h2>
            <div className="space-y-3 text-xs">
              {/* College */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-0.5">
                <div>
                  <h3 className="font-bold text-white print:text-neutral-900 text-[13px]">
                    Chandigarh Engineering College, Landran
                  </h3>
                  <p className="text-slate-300 print:text-neutral-700">
                    B.Tech in Information Technology
                  </p>
                </div>
                <div className="text-slate-400 print:text-neutral-600 font-mono sm:text-right">
                  <div>2022 – 2026</div>
                  <div className="font-semibold text-emerald-400 print:text-emerald-800">CGPA - 7.01/10</div>
                </div>
              </div>

              {/* Intermediate */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-0.5">
                <div>
                  <h3 className="font-bold text-white print:text-neutral-900 text-[13px]">
                    Mirza Ghalib College, Gaya
                  </h3>
                  <p className="text-slate-300 print:text-neutral-700">
                    Intermediate, Bihar Board
                  </p>
                </div>
                <div className="text-slate-400 print:text-neutral-600 font-mono sm:text-right">
                  <div>2020 – 2022</div>
                  <div className="text-slate-300 print:text-neutral-800">Percentage - 62.4%</div>
                </div>
              </div>

              {/* Matriculation */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-0.5">
                <div>
                  <h3 className="font-bold text-white print:text-neutral-900 text-[13px]">
                    Hansraj Public School, Gaya
                  </h3>
                  <p className="text-slate-300 print:text-neutral-700">
                    Matriculation, CBSE
                  </p>
                </div>
                <div className="text-slate-400 print:text-neutral-600 font-mono sm:text-right">
                  <div>2020</div>
                  <div className="text-slate-300 print:text-neutral-800">Percentage - 60.8%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-900 border-b border-slate-800 print:border-neutral-300 pb-1 mb-2.5">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-bold text-white print:text-neutral-900">Programming Languages</span>
                <span className="sm:col-span-9 text-slate-300 print:text-neutral-800">Java, JavaScript, SQL</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-bold text-white print:text-neutral-900">Frontend</span>
                <span className="sm:col-span-9 text-slate-300 print:text-neutral-800">HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-bold text-white print:text-neutral-900">Backend</span>
                <span className="sm:col-span-9 text-slate-300 print:text-neutral-800">Java, Spring Boot, REST APIs, JSP</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-bold text-white print:text-neutral-900">Databases</span>
                <span className="sm:col-span-9 text-slate-300 print:text-neutral-800">MySQL, MongoDB</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-bold text-white print:text-neutral-900">Tools</span>
                <span className="sm:col-span-9 text-slate-300 print:text-neutral-800">Git, GitHub, Maven, Postman, VS Code, Eclipse</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-bold text-white print:text-neutral-900">Technologies</span>
                <span className="sm:col-span-9 text-slate-300 print:text-neutral-800">JWT, JDBC, AJAX, JSON, Cloudinary, Razorpay</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                <span className="sm:col-span-3 font-bold text-white print:text-neutral-900">Core Concepts</span>
                <span className="sm:col-span-9 text-slate-300 print:text-neutral-800">Data Structures &amp; Algorithms (DSA), OOP, DBMS, SQL, Operating Systems, Computer Networks</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-900 border-b border-slate-800 print:border-neutral-300 pb-1 mb-2.5">
              Projects
            </h2>

            <div className="space-y-3.5 text-xs">
              {/* Foodies */}
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-bold text-white print:text-neutral-900 text-[13px]">
                    Foodies – Food Ordering Website
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400 print:text-neutral-600 flex gap-2">
                    <a href="https://github.com/ManzGhost/foodies" target="_blank" rel="noreferrer" className="text-indigo-400 print:text-indigo-700 underline hover:text-indigo-300">GitHub</a>
                    <span>|</span>
                    <a href="https://foodies-five-ruddy.vercel.app/" target="_blank" rel="noreferrer" className="text-indigo-400 print:text-indigo-700 underline hover:text-indigo-300">Live Demo</a>
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                  <li>Developed a responsive food ordering website using React.js.</li>
                  <li>Built interactive pages for food browsing, menu, and cart management.</li>
                  <li>Designed a modern and user-friendly interface with responsive layouts.</li>
                </ul>
              </div>

              {/* ExpensePro-Tracker */}
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-bold text-white print:text-neutral-900 text-[13px]">
                    ExpensePro-Tracker
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400 print:text-neutral-600 flex gap-2">
                    <a href="https://github.com/ManzGhost/ExpensePro-Tracker" target="_blank" rel="noreferrer" className="text-indigo-400 print:text-indigo-700 underline hover:text-indigo-300">GitHub</a>
                    <span>|</span>
                    <a href="https://expensepro-tracker.vercel.app/login" target="_blank" rel="noreferrer" className="text-indigo-400 print:text-indigo-700 underline hover:text-indigo-300">Live Demo</a>
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                  <li>Developed a full-stack expense management application using React.js, Spring Boot and MongoDB.</li>
                  <li>Implemented REST APIs for user authentication, expense management, category tracking and transaction processing.</li>
                  <li>Implemented JWT-based authentication to secure user and admin operations.</li>
                  <li>Integrated MongoDB for storing users, expenses, categories and transaction information.</li>
                </ul>
              </div>

              {/* SimpleChat */}
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-bold text-white print:text-neutral-900 text-[13px]">
                    SimpleChat – Real-Time Messaging Application
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400 print:text-neutral-600 flex gap-2">
                    <a href="https://github.com/ManzGhost/simplechat" target="_blank" rel="noreferrer" className="text-indigo-400 print:text-indigo-700 underline hover:text-indigo-300">GitHub</a>
                    <span>|</span>
                    <a href="https://simplechat-ral1.onrender.com" target="_blank" rel="noreferrer" className="text-indigo-400 print:text-indigo-700 underline hover:text-indigo-300">Live Demo</a>
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                  <li>Constructed low-latency full duplex messaging using Spring Boot WebSockets and STOMP message brokers.</li>
                  <li>Maintained persistent message logs in MongoDB and enforced authenticated private chat channels.</li>
                </ul>
              </div>

              {/* InterviewAI Pro */}
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-bold text-white print:text-neutral-900 text-[13px]">
                    InterviewAI Pro – Technical Interview Platform
                  </h3>
                  <div className="text-[11px] font-mono text-slate-400 print:text-neutral-600 flex gap-2">
                    <a href="https://github.com/ManzGhost/InterviewAl-PRO" target="_blank" rel="noreferrer" className="text-indigo-400 print:text-indigo-700 underline hover:text-indigo-300">GitHub</a>
                    <span>|</span>
                    <a href="https://interviewai-pro-1znj.onrender.com" target="_blank" rel="noreferrer" className="text-indigo-400 print:text-indigo-700 underline hover:text-indigo-300">Live Demo</a>
                  </div>
                </div>
                <ul className="list-disc list-outside pl-4 text-slate-300 print:text-neutral-700 space-y-0.5 mt-1">
                  <li>Developed an intelligent technical interview preparation platform with automated evaluation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-900 border-b border-slate-800 print:border-neutral-300 pb-1 mb-2">
              Certifications
            </h2>
            <div className="space-y-1.5 text-xs">
              {PERSONAL_INFO.certifications.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between text-slate-300 print:text-neutral-800">
                  <span>&bull; {cert.title} – {cert.issuer}{cert.certificateId ? ` (ID: ${cert.certificateId})` : ''}</span>
                  <a 
                    href={cert.link}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-indigo-400 print:text-indigo-700 underline text-[11px] font-mono hover:text-indigo-300 shrink-0 ml-2"
                  >
                    Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-900 border-b border-slate-800 print:border-neutral-300 pb-1 mb-2">
              Relevant Coursework
            </h2>
            <p className="text-xs text-slate-300 print:text-neutral-800 font-mono">
              &bull; DSA &nbsp;&bull; OOPs &nbsp;&bull; DBMS
            </p>
          </div>

          {/* Interpersonal Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-900 border-b border-slate-800 print:border-neutral-300 pb-1 mb-2">
              Interpersonal Skills
            </h2>
            <p className="text-xs text-slate-300 print:text-neutral-800">
              &bull; Problem Solving &nbsp;&bull; Decision Making &nbsp;&bull; Team Leadership &nbsp;&bull; Quick Learner
            </p>
          </div>

          {/* Interests & Hobbies */}
          <div className="mb-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-900 border-b border-slate-800 print:border-neutral-300 pb-1 mb-2">
              Interests &amp; Hobbies
            </h2>
            <p className="text-xs text-slate-300 print:text-neutral-800">
              &bull; Reading books &nbsp;&bull; Gaming &nbsp;&bull; Stock Market &nbsp;&bull; Cooking Food
            </p>
          </div>

          {/* Extracurricular/Achievements */}
          <div className="mb-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-400 print:text-indigo-900 border-b border-slate-800 print:border-neutral-300 pb-1 mb-2">
              Extracurricular / Achievements
            </h2>
            <ul className="list-disc list-outside pl-4 text-xs text-slate-300 print:text-neutral-700 space-y-1">
              <li>Volunteer at NGO- Vriksh Be The Change Since 2020, providing free education to underprivileged children and IIT/JEE Coaching for XI/XII Standard Students.</li>
              <li>Active member of an NGO focused on social and academic development in the Gaya locality.</li>
              <li>Organized cultural events including singing and dancing competitions in 2023.</li>
              <li>Contributed as a content writer in the college literary club.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
