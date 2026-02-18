import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, FileText, BookOpen, Sun, Moon, Cpu, Globe, Server, Database, Code, Terminal, GitBranch } from "lucide-react";

// Tech stack categorized with icons
const techStack = {
  "Programming Languages": [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Shell Script", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  ],
  "Databases": [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Neo4j", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg" },
    { name: "ChromaDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chromadb/chromadb-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  ],
  "Web Development": [
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  ],
  "AI": [
    { name: "LangChain", icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langchain-color.png" },
    { name: "CrewAI", icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/crewai-brand-color.png" },
    { name: "RAG", icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langchain-color.png" },
    { name: "LangGraph", icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langgraph-color.png" },
    { name: "Transformers", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "FastMCP", icon: "https://fastmcp.me/img/fastmcp-logo-for-white-bg.svg" },
  ],
  "DevOps & Infrastructure": [
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
    { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "SonarQube", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  ],
};

// Project tags with icons
const tagIcons: Record<string, string> = {
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "LangChain": "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langchain-color.png",
  "CrewAI": "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/crewai-brand-color.png",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "Neo4j": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "Terraform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  "Ansible": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
  "AI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Spotify API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spotify/spotify-original.svg",
  "PDF Generation": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg",
  "Database": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "MCP": "https://python.langchain.com/img/langchain_stack.svg",
  "Gemini": "https://www.gstatic.com/images/branding/product/2x/gen_ai_2025.svg",
};

// Projects data
const projects = [
  {
    title: "Chord Analyzer",
    description: "A music analysis project that takes any Spotify song link and automatically generates a downloadable PDF chord sheet with chords perfectly aligned above the lyrics, using AI to detect chords. Supports chord transposition to any key.",
    tags: ["JavaScript", "AI", "Spotify API", "PDF Generation"],
    link: "https://github.com/ghoshsoham71/chord_analyzer",
    github: "https://github.com/ghoshsoham71/chord_analyzer"
  },
  {
    title: "DummyDB",
    description: "A dummy database generator that creates fake data for testing and development purposes. Deployed at https://dummy-db-seven.vercel.app",
    tags: ["Python", "FastAPI", "Database"],
    link: "https://github.com/ghoshsoham71/DummyDB",
    github: "https://github.com/ghoshsoham71/DummyDB"
  },
  {
    title: "Playlist MCP",
    description: "Python MCP server that uses Gemini to analyze music requests and automatically generate curated Spotify playlists through API integration.",
    tags: ["Python", "MCP", "Gemini", "Spotify API", "AI"],
    link: "https://github.com/ghoshsoham71/playlist-mcp",
    github: "https://github.com/ghoshsoham71/playlist-mcp"
  },
];

// Blog posts
const blogPosts = [
  {
    title: "Building AI Agents with LangChain",
    excerpt: "Learn how to create autonomous AI agents that can reason, plan, and execute complex tasks.",
    date: "Coming Soon",
    readTime: "5 min read",
    link: "https://medium.com/@ghoshsoham71"
  },
  {
    title: "Infrastructure as Code Best Practices",
    excerpt: "A comprehensive guide to managing cloud infrastructure with Terraform and Ansible.",
    date: "Coming Soon",
    readTime: "8 min read",
    link: "https://medium.com/@ghoshsoham71"
  },
  {
    title: "Graph Databases for Modern Applications",
    excerpt: "Understanding Neo4j and when to use graph databases in your application architecture.",
    date: "Coming Soon",
    readTime: "6 min read",
    link: "https://medium.com/@ghoshsoham71"
  },
];

// GitHub contributions (simulated - replace with actual API in production)
const generateContributions = () => {
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      const rand = Math.random();
      let level = 0;
      if (rand > 0.6) level = 1;
      if (rand > 0.7) level = 2;
      if (rand > 0.85) level = 3;
      if (rand > 0.95) level = 4;
      days.push(level);
    }
    weeks.push(days);
  }
  return weeks;
};

const contributions = generateContributions();

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const resumeUrl = "https://drive.google.com/file/d/1GHZovVKtB_KrSLoXc0j5ZZeRcWrC501M/view?usp=sharing";
  const githubUsername = "ghoshsoham71";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'} text-gray-900 dark:text-white`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-black/95' : 'bg-gray-100/95') : 'bg-transparent'} backdrop-blur-md border-b ${darkMode ? 'border-white/10' : 'border-gray-200'} py-4`}>
        <div className="max-w-2xl mx-auto px-8 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight flex items-center gap-2">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>S</span>
            <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gradient-to-r from-red-500 to-blue-500' : 'bg-gradient-to-r from-red-600 to-blue-600'} animate-pulse`} />
            <span className="text-red-600">G</span>
          </a>
          <div className="flex items-center gap-6">
            {['About', 'Work Experience', 'Projects', 'Stack', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium hidden sm:block transition-colors duration-300 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - ramx.in style */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-8">
        {/* Background */}
        <div className={`absolute inset-0 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`} />
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 transition-colors duration-300 ${darkMode ? 'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]'} bg-[size:30px_30px]`} />
        
        {/* Animated orbs */}
        {darkMode && (
          <>
            <div 
              className="absolute w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(220,38,38,0.4) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)',
                left: '20%',
                top: '30%',
                transform: `translate(calc(-50% + ${mousePosition.x * 2}px), calc(-50% + ${mousePosition.y * 2}px))`,
                transition: 'transform 0.5s ease-out',
              }}
            />
            <div 
              className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
                right: '10%',
                bottom: '20%',
                transform: `translate(calc(50% + ${mousePosition.x}px), calc(50% + ${mousePosition.y}px))`,
                transition: 'transform 0.5s ease-out',
              }}
            />
          </>
        )}

        <div className="relative z-10 max-w-2xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
              <div className={`w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden p-3 ${darkMode ? 'bg-white/10' : 'bg-gray-200'} flex items-center justify-center`}>
                {/* Replace with your actual photo - add your photo to public folder and update the src */}
                <img 
                  src="https://lh3.googleusercontent.com/d/1EXIHqLs3t16B4Z0WbCX5Y3KOR3-kG5w0=w800-h800" 
                  alt="Soham Ghosh"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>';
                  }}
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-200 border border-gray-300'}`}>
                <span className={`w-2 h-2 rounded-full ${darkMode ? 'bg-gradient-to-r from-red-500 to-blue-500' : 'bg-gradient-to-r from-red-600 to-blue-600'} animate-pulse`} />
                <span className={`text-xs font-medium tracking-wider ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>AVAILABLE FOR WORK</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                  Soham Ghosh
                </span>
              </h1>
              
              <p className={`text-base md:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-5`}>
                Software Engineer at <span className="text-blue-600 font-medium">TCS-AI Cloud</span>
              </p>
              
              <p className={`text-sm md:text-base ${darkMode ? 'text-gray-500' : 'text-gray-500'} mb-6 max-w-md`}>
                Building intelligent systems with AI/ML, DevOps automation, and scalable backend solutions.
              </p>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 text-sm"
                >
                  Resume
                </a>
                <a
                  href="#projects"
                  className={`px-5 py-2.5 font-medium rounded-lg transition-all duration-300 text-sm ${darkMode ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20' : 'bg-gray-200 border border-gray-300 text-gray-900 hover:bg-gray-300'}`}
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 md:py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">About</span>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}> Me</span>
          </h2>
          
          <div className={`space-y-6 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            <p>
              Hey there! I'm <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Soham</span> — a Software Engineer at <span className="text-blue-600 font-medium">TCS-AI Cloud</span> who loves building smart systems that actually solve problems.
            </p>
            <p>
              I work with <span className="text-red-600 font-medium">AI/ML</span>, 
              <span className={darkMode ? 'text-gray-300' : 'text-gray-800'}> DevOps automation</span>, and 
              <span className="text-blue-600">scalable backends</span> to build things that work at scale.
            </p>
            <p>
              Got my CS degree from <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>KIIT University</span> and have been shipping tech solutions for over a year now.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work experience" className={`py-16 md:py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
           <h2 className="text-4xl font-bold mb-8">
             <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Work</span>
             <span className={darkMode ? 'text-white' : 'text-gray-900'}> Experience</span>
           </h2>
          
          <div className="space-y-8">
            {/* TCS Experience */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'}`}>
              <div className="flex items-start gap-4 mb-3">
                <img 
                  src="https://discover.give.do/static/img/logos/19WJ/9aad65c4-4ada-437d-a056-cd099c1e88ef.png" 
                  alt="TCS" 
                  className="w-12 h-12 rounded-lg object-contain bg-white p-1 flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Software Developer</h3>
                  <p className="text-blue-600 font-medium">Tata Consultancy Services</p>
                </div>
                <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Jan 2025 - Present</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Kolkata, India</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-3.5 h-3.5 object-contain" />
                  Python
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/crewai-brand-color.png" alt="CrewAI" className="w-3.5 h-3.5 object-contain" />
                  CrewAI
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langgraph-color.png" alt="LangGraph" className="w-3.5 h-3.5 object-contain" />
                  LangGraph
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langchain-color.png" alt="LangChain" className="w-3.5 h-3.5 object-contain" />
                  LangChain
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg" alt="Neo4j" className="w-3.5 h-3.5 object-contain" />
                  Neo4j
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://fastmcp.me/img/fastmcp-logo-for-white-bg.svg" alt="FastMCP" className="w-3.5 h-3.5 object-contain" />
                  FastMCP
                </span>
              </div>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• Developed a Call Graph module using AST and its visualization using PyVis and NetworkX for source code dependency analysis</li>
                <li>• Indexed source code into semantic chunks in Neo4j GraphRAG, preserving dependencies and producing LangChain-driven summarizations</li>
                <li>• Developed context-driven agents using CrewAI and LangGraph to parallelize feedback generation and document evaluation for accuracy using Tf-idf Vectorization</li>
                <li>• Enhanced Monolith Decomposition module enabling boundary-aware Microservice generation using a custom-weighted clustering approach with HDBSCAN and Spectral algorithms</li>
                <li>• Developed a rate limiter that adapts to LLM max-token limits and breaks down large prompts into cached batches, reducing latency and token usage by 20%</li>
              </ul>
            </div>

            {/* Nokia Experience */}
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'}`}>
              <div className="flex items-start gap-4 mb-3">
                <img 
                  src="https://1000logos.net/wp-content/uploads/2017/03/Nokia-Logo.png" 
                  alt="Nokia" 
                  className="w-12 h-12 rounded-lg object-contain bg-white p-1 flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>DevOps Intern</h3>
                  <p className="text-blue-600 font-medium">Nokia Solutions and Networks</p>
                </div>
                <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Sep 2023 - Jun 2024</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Bengaluru, India</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-3.5 h-3.5 object-contain" />
                  Jenkins
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Shell" className="w-3.5 h-3.5 object-contain" />
                  Shell
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" alt="Selenium" className="w-3.5 h-3.5 object-contain" />
                  Selenium
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-3.5 h-3.5 object-contain" />
                  Java
                </span>
              </div>
              <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• Developed cron-scheduled Jenkins pipelines with parallel builds for artifact deployment, retrieval and migration achieving 55–60% runtime optimization</li>
                <li>• Automated the report generation of Nmap-based TCP/UDP port scanning and OS security patching across 10+ isolated clusters using Shell scripts and Groovy</li>
                <li>• Developed Cucumber executable Gherkin scripts and leveraged UI Testing with Selenium Scripts for 20+ components using Java</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-16 md:py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Selected</span>
                <span className={darkMode ? 'text-white' : 'text-gray-900'}> Projects</span>
              </h2>
              <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Things I've built with code</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                className={`block p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-white/5 border border-white/10 hover:border-red-500/30' : 'bg-white border border-gray-200 hover:border-red-500/30'}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} hover:text-red-600 transition-colors`}>
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`p-1.5 rounded ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}>
                        <Github className="w-4 h-4 text-gray-500" />
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={`p-1.5 rounded ${darkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}>
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </a>
                  </div>
                </div>
                
                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded">
                      {tagIcons[tag] && (
                        <img 
                          src={tagIcons[tag]} 
                          alt={tag}
                          className="w-3.5 h-3.5 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      )}
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className={`py-16 md:py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Tech</span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}> Stack</span>
            </h2>
            <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Technologies I work with</p>
          </div>
          
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="mb-8">
              <h3 className={`text-sm font-medium mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-500'} uppercase tracking-wider`}>{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((tech, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200'} hover:border-red-500/30 transition-all duration-300`}
                  >
                    <a 
                      href={`https://www.google.com/search?q=${encodeURIComponent(tech.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {tech.name}
                    </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`py-16 md:py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Latest</span>
                <span className={darkMode ? 'text-white' : 'text-gray-900'}> Posts</span>
              </h2>
              <p className={darkMode ? 'text-gray-500' : 'text-gray-500'}>Writing about tech on Medium</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {blogPosts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-white/5 border border-white/10 hover:border-blue-500/30' : 'bg-white border border-gray-200 hover:border-blue-500/30'}`}
              >
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={`text-base font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} hover:text-blue-600 transition-colors`}>
                  {post.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  {post.excerpt}
                </p>
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://medium.com/@ghoshsoham71" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${darkMode ? 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20' : 'bg-gray-200 border border-gray-300 text-gray-700 hover:bg-gray-300'}`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Follow on Medium</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 md:py-20 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Let's</span>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}> Connect</span>
          </h2>
          <p className={`text-lg mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-md mx-auto`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { icon: Github, href: `https://github.com/${githubUsername}`, label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ghoshsoham71/", label: "LinkedIn" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=ghoshsoham71@gmail.com", label: "Email" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-300 ${darkMode ? 'bg-white/10 border border-white/20 hover:bg-white/20' : 'bg-white border border-gray-200 hover:bg-gray-100'}`}
              >
                <item.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            ))}
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-8 border-t ${darkMode ? 'border-white/10 bg-black' : 'border-gray-200 bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>SG</span>
            <span className={`w-1 h-1 rounded-full ${darkMode ? 'bg-gradient-to-r from-red-500 to-blue-500' : 'bg-gradient-to-r from-red-600 to-blue-600'}`} />
            <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>© {new Date().getFullYear()} Soham Ghosh</span>
          </div>
          <div className={`flex items-center gap-2 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            <span>Built with</span>
            <span className="text-red-600">♥</span>
            <span>using</span>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>React</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
