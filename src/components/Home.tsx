import React from "react";
import { ExternalLink, FileText, Terminal, Code, Database, Cloud, BookOpen } from "lucide-react";

// Tech stack data with icons
const techStack = [
  { name: "Python", icon: "🐍", category: "language" },
  { name: "Java", icon: "☕", category: "language" },
  { name: "Shell", icon: "🐚", category: "language" },
  { name: "PostgreSQL", icon: "🐘", category: "database" },
  { name: "Neo4j", icon: "🔷", category: "database" },
  { name: "ChromaDB", icon: "💎", category: "database" },
  { name: "FastAPI", icon: "⚡", category: "framework" },
  { name: "LangChain", icon: "⛓️", category: "ai" },
  { name: "CrewAI", icon: "🤖", category: "ai" },
  { name: "Docker", icon: "🐳", category: "devops" },
  { name: "Kubernetes", icon: "☸️", category: "devops" },
  { name: "AWS", icon: "☁️", category: "cloud" },
  { name: "Jenkins", icon: "🔧", category: "devops" },
  { name: "Terraform", icon: "🏗️", category: "devops" },
  { name: "Ansible", icon: "📋", category: "devops" },
  { name: "Git", icon: "📊", category: "devops" },
];

// GitHub contributions data (52 weeks)
const generateContributions = () => {
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.7) level = 1;
      if (rand > 0.8) level = 2;
      if (rand > 0.9) level = 3;
      if (rand > 0.95) level = 4;
      days.push(level);
    }
    weeks.push(days);
  }
  return weeks;
};

const contributions = generateContributions();

const Home = () => {
  const resumeUrl = "https://drive.google.com/file/d/1GHZovVKtB_KrSLoXc0j5ZZeRcWrC501M/view?usp=sharing";

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="terminal-header mb-4 sm:mb-6 flex-shrink-0 text-xs sm:text-sm">
        <span className="text-red-500">~/portfolio</span>
        <span className="text-gray-600 mx-1 sm:mx-2">→</span>
        <span className="text-gray-400">cat about.md</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* Hero Section */}
        <div className="space-y-4 sm:space-y-6 mb-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Available for work
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              <span className="text-gray-100">Soham </span>
              <span className="text-red-500">Ghosh</span>
            </h1>
            <p className="text-lg sm:text-xl text-cyan-400 font-medium">
              Software Engineer @ TCS-AI Cloud
            </p>
          </div>

          {/* Bio */}
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
            Building intelligent systems with AI/ML, DevOps automation, and scalable backend solutions. 
            Passionate about creating impactful technology that solves real-world problems.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button flex items-center gap-2 text-sm px-4 py-2 sm:px-6 sm:py-3"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button flex items-center gap-2 text-sm px-4 py-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="glass-card rounded-lg p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-red-500">B.Tech</div>
            <div className="text-[10px] sm:text-xs text-gray-500">CSE @ KIIT</div>
          </div>
          <div className="glass-card rounded-lg p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-red-500">1+</div>
            <div className="text-[10px] sm:text-xs text-gray-500">Years Exp</div>
          </div>
          <div className="glass-card rounded-lg p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-red-500">10+</div>
            <div className="text-[10px] sm:text-xs text-gray-500">Projects</div>
          </div>
          <div className="glass-card rounded-lg p-3 sm:p-4 text-center">
            <div className="text-xl sm:text-2xl font-bold text-red-500">5+</div>
            <div className="text-[10px] sm:text-xs text-gray-500">Certifications</div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-red-500" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="tech-icon flex flex-col items-center justify-center gap-1 group cursor-default"
                title={tech.name}
              >
                <span className="text-xl sm:text-2xl">{tech.icon}</span>
                <span className="text-[8px] sm:text-[10px] text-gray-500 group-hover:text-gray-300 truncate w-full text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Contributions Chart */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-red-500" />
            GitHub Activity
          </h2>
          <div className="glass-card rounded-xl p-4 overflow-x-auto">
            <div className="flex gap-0.5 min-w-max">
              {contributions.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-0.5">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`contribution-cell contribution-level-${level}`}
                      title={`${level} contributions`}
                    />
                  ))}
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center gap-2 mt-3 text-[10px] text-gray-500">
              <span>Less</span>
              <div className="contribution-cell contribution-level-0" />
              <div className="contribution-cell contribution-level-1" />
              <div className="contribution-cell contribution-level-2" />
              <div className="contribution-cell contribution-level-3" />
              <div className="contribution-cell contribution-level-4" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Medium Blog Posts Section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-red-500" />
            Blog Posts
          </h2>
          <div className="glass-card rounded-xl p-6 text-center">
            <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <p className="text-gray-400 mb-4">Coming soon on Medium</p>
            <a
              href="https://medium.com/@ghoshsoham71"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              <span>Follow on Medium</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
