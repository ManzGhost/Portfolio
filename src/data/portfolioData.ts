export interface Certification {
  id: string;
  title: string;
  name?: string;
  issuer: string;
  date?: string;
  type?: string;
  skills?: string[];
  description: string;
  link: string;
  certificateId?: string;
  instructor?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "David Dhawan",
  role: "Java Full Stack Developer",
  profilePhoto: "/david-profile.jpg",
  shortBio: "B.Tech Information Technology student and aspiring Java Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, JavaScript, SQL, MongoDB, HTML and CSS.",
  summary: "B.Tech Information Technology student and aspiring Java Full Stack Developer with hands-on experience in Java, Spring Boot, React.js, JavaScript, SQL, MongoDB, HTML and CSS. Experienced in developing full-stack applications, REST APIs, authentication systems and database-driven applications. Strong understanding of Object-Oriented Programming and web development. Seeking an entry-level Software Developer or Java Full Stack Developer position.",
  phone: "+91-9546681813",
  location: "Bengaluru, India",
  education: {
    degree: "B.Tech in Information Technology",
    college: "Chandigarh Engineering College, Landran",
    duration: "2022 – 2026",
    cgpa: "7.01/10",
    location: "Landran, Punjab, India",
    courses: [
      "Data Structures & Algorithms (DSA)",
      "Object-Oriented Programming (OOPs)",
      "Database Management Systems (DBMS)",
      "Computer Networks",
      "Operating Systems",
      "Web Technologies"
    ]
  },
  educationHistory: [
    {
      institution: "Chandigarh Engineering College, Landran",
      degree: "B.Tech in Information Technology",
      duration: "2022 – 2026",
      score: "CGPA - 7.01/10",
      location: "Landran, Punjab"
    },
    {
      institution: "Mirza Ghalib College, Gaya",
      degree: "Intermediate, Bihar Board",
      duration: "2020 – 2022",
      score: "Percentage - 62.4%",
      location: "Gaya, Bihar"
    },
    {
      institution: "Hansraj Public School, Gaya",
      degree: "Matriculation, CBSE",
      duration: "2020",
      score: "Percentage - 60.8%",
      location: "Gaya, Bihar"
    }
  ],
  certifications: [
    {
      id: "java-dsa-apna-college",
      title: "Alpha (DSA with Java)",
      name: "Certificate of Completion - Alpha (DSA with Java)",
      issuer: "Apna College",
      date: "Course Completion",
      type: "Certificate of Completion",
      certificateId: "69304610deaddfc45a0115d6",
      instructor: "Shradha Khapra (Co-Founder, Apna College)",
      skills: ["Java", "Data Structures & Algorithms", "OOPs", "Recursion", "Dynamic Programming", "Trees & Graphs"],
      description: "Certificate of Completion awarded to David Dhawan for successfully completing the course of Alpha (DSA with Java), certified by Shradha Khapra (Co-Founder, Apna College). Certificate ID: 69304610deaddfc45a0115d6.",
      link: "https://drive.google.com/file/d/1YBxPjn-mO7mpK0iYZtnJp5usgPl1lQA-/view"
    },
    {
      id: "full-stack-gfg",
      title: "Full Stack Developer Bootcamp",
      name: "Full Stack Developer Bootcamp - Master Frontend to Backend",
      issuer: "GeeksforGeeks",
      date: "8-Week Course",
      type: "Certificate of Course Completion",
      skills: ["Frontend to Backend", "Full Stack Development", "Web Development", "Java", "Spring Boot", "React.js"],
      description: "Successfully completed the course on Full Stack Developer Bootcamp - Master Frontend to Backend of duration 8 weeks, issued by Mr. Sandeep Jain (Founder & CEO, GeeksforGeeks).",
      link: "https://media.geeksforgeeks.org/courses/certificates/e3970c9dea1afe5297b67f6595fe03aa.pdf"
    },
      {
      id: "Frontend Developer",
      title: "Frontend Developer(React.js)",
      name: "Certificate of Completion - Hacker Rank",
      issuer: "Hacker Rank",
      date: "Course Completion",
      type: "Certificate of Completion",
      certificateId: "EF83E9764092",
      skills: ["React.js", "JavaScript", "Frontend Developer"],
      description: "Passed the HackerRank role certification assessment for Frontend Developer (React), verifying technical competency in building modern, scalable React applications.",
      link: "https://drive.google.com/file/d/1Fwlw1tic0_G1jJFmOfOieDG3ip6tg_PA/view"
    },
  ],
  relevantCoursework: ["DSA", "OOPs", "DBMS"],
  interpersonalSkills: ["Problem Solving", "Decision Making", "Team Leadership", "Quick Learner"],
  interestsAndHobbies: ["Reading books", "Gaming", "Stock Market", "Cooking Food"],
  extracurricular: [
    "Volunteer at NGO- Vriksh Be The Change Since 2020, providing free education to underprivileged children and IIT/JEE Coaching for XI/XII Standard Students.",
    "Active member of an NGO focused on social and academic development in the Gaya locality.",
    "Organized cultural events including singing and dancing competitions in 2023.",
    "Contributed as a content writer in the college literary club."
  ],
  links: {
    github: "https://github.com/ManzGhost",
    linkedin: "https://www.linkedin.com/in/david-dhawan-4263a4277/",
    email: "daviddhawan876@gmail.com",
    phone: "+919546681813",
    resumeUrl: "#resume"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "foodies",
    title: "Foodies",
    subtitle: "Food Ordering Website",
    description: "A comprehensive full-stack food delivery platform featuring menu exploration, cart management, real-time order tracking, and secure checkout processing.",
    technologies: ["Java", "Spring Boot", "React", "MongoDB", "Cloudinary", "JWT", "Razorpay"],
    githubUrl: "https://github.com/ManzGhost/foodies",
    liveUrl: "https://foodies-five-ruddy.vercel.app/",
    featured: true,
    highlights: [
      "Integrated Razorpay gateway for safe online payment processing",
      "Cloudinary integration for dynamic food image upload and CDN delivery",
      "Role-based authentication & route protection via Spring Security JWT"
    ]
  },
  {
    id: "expensepro-tracker",
    title: "ExpensePro Tracker",
    subtitle: "Personal Finance & Expense Management",
    description: "An intuitive financial management dashboard enabling users to log transactions, categorize expenditures, visualize spending trends, and manage monthly budgets.",
    technologies: ["Java", "Spring Boot", "React", "MongoDB", "JWT"],
    githubUrl: "https://github.com/ManzGhost/ExpensePro-Tracker",
    liveUrl: "https://expensepro-tracker.vercel.app/login",
    featured: true,
    highlights: [
      "Interactive data breakdowns and expense categorization analytics",
      "Secure token-based user sessions and personalized transaction logs",
      "RESTful Spring Boot API with MongoDB aggregation pipelines"
    ]
  },
  {
    id: "simplechat",
    title: "SimpleChat",
    subtitle: "Real-time Messaging Application",
    description: "Real-time chat application with authentication, private conversations and real-time messaging using WebSocket protocol and resilient messaging handlers.",
    technologies: ["React", "Java", "Spring Boot", "MongoDB", "WebSocket", "JWT"],
    githubUrl: "https://github.com/ManzGhost/simplechat",
    liveUrl: "https://simplechat-ral1.onrender.com",
    featured: false,
    highlights: [
      "Bi-directional real-time communication powered by Spring WebSocket / STOMP",
      "Private 1-on-1 conversations with persisted chat history in MongoDB",
      "Responsive React client with instant message dispatch and online presence"
    ]
  },
  {
    id: "interviewai-pro",
    title: "InterviewAI Pro",
    subtitle: "AI-Powered Technical Interview Platform",
    description: "An intelligent platform designed to help aspiring engineers practice technical and behavioral interviews with automated AI evaluations, tailored questions, and insights.",
    technologies: ["React", "Java", "Spring Boot", "AI"],
    liveUrl: "https://interviewai-pro-1znj.onrender.com",
    githubUrl: "https://github.com/ManzGhost/InterviewAl-PRO",
    featured: true,
    highlights: [
      "AI-driven automated assessment evaluating answers for depth and correctness",
      "Adaptive technical question generation for core Java and Web development",
      "Responsive user interface for live mock interview practice"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Crafting intuitive, accessible, and fast client interfaces",
    skills: [
      { name: "React", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3 / Tailwind", level: "Proficient" }
    ]
  },
  {
    title: "Backend Development",
    description: "Architecting robust enterprise services & REST APIs",
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Spring Boot", level: "Proficient" },
      { name: "REST API", level: "Advanced" },
      { name: "Spring Security & JWT", level: "Working Knowledge" }
    ]
  },
  {
    title: "Database Management",
    description: "Designing reliable relational and document data storage",
    skills: [
      { name: "MySQL", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "SQL Queries", level: "Proficient" },
      { name: "Database Design", level: "Working Knowledge" }
    ]
  },
  {
    title: "Developer Tools",
    description: "Version control, API testing, and daily dev environments",
    skills: [
      { name: "Git", level: "Proficient" },
      { name: "GitHub", level: "Proficient" },
      { name: "Postman", level: "Proficient" },
      { name: "IntelliJ IDEA", level: "Primary IDE" },
      { name: "VS Code", level: "Frontend Editor" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = PERSONAL_INFO.certifications;
