import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, FileText, BookOpen, Sun, Moon } from "lucide-react";

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
    { name: "ChromaDB", icon: "https://brandlogos.net/wp-content/uploads/2025/06/chroma-logo_brandlogos.net_1z1qk-512x339.png" },
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
  "FastMCP": "https://fastmcp.me/img/fastmcp-logo-for-white-bg.svg",
  "Gemini": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png",
  "Supabase" : "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
  "Genius API" : "data:image/png;base64,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",
  "Tekore" : "https://pypi-camo.freetls.fastly.net/a67be5d605e18ddb7d386621b60f270a6367a066/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f66656c69782d68696c64656e2f74656b6f72652f6d61737465722f646f63732f7372632f6c6f676f5f736d616c6c2e706e67",
};

// Projects data
const projects = [
  {
    title: "Chord Analyzer",
    description: "A music analysis project that takes any Spotify song link and automatically generates a downloadable PDF chord sheet with chords perfectly aligned above the lyrics, using AI to detect chords. Supports chord transposition to any key.",
    tags: ["Python", "CrewAI", "Multimodal Agents", "Tekore", "Genius API"],
    link: "https://github.com/ghoshsoham71/chord_analyzer",
    github: "https://github.com/ghoshsoham71/chord_analyzer"
  },
  {
    title: "DummyDB",
    description: "A dummy database generator that creates fake data for testing and development purposes. Engineered SDV-based synthetic data pipeline using HMASynthesizer and CTGAN with quality metrics.",
    tags: ["Python", "FastAPI", "Supabase", "SDV", "HMASynthesizer", "CTGAN"],
    link: "https://github.com/ghoshsoham71/DummyDB",
    github: "https://github.com/ghoshsoham71/DummyDB"
  },
  {
    title: "Playlist MCP",
    description: "Python MCP server that uses Gemini to analyze music requests and automatically generate curated Spotify playlists through API integration.",
    tags: ["Python", "FastMCP", "Gemini", "Tekore"],
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

  const resumeUrl = "https://drive.google.com/file/d/18jiAJ62TfT7Pk8t6hEqy_8BOx3grsGUZ/view?usp=sharing";
  const githubUsername = "ghoshsoham71";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'} text-gray-900 dark:text-white`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-black/95' : 'bg-gray-100/95') : 'bg-transparent'} backdrop-blur-md border-b ${darkMode ? 'border-white/10' : 'border-gray-200'} py-6`}>
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
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden px-8 md:pt-6 pt-12">
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
              <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden p-1 ${darkMode ? 'bg-white/10' : 'bg-gray-200'} flex items-center justify-center`}>
                {/* Replace with your actual photo - add your photo to public folder and update the src */}
                <img 
                  src="https://lh3.googleusercontent.com/d/1EXIHqLs3t16B4Z0WbCX5Y3KOR3-kG5w0=w800-h800" 
                  alt="Soham Ghosh"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 rounded-full text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>';
                  }}
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3" style={{ fontFamily: 'Caveat, cursive' }}>
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                  Soham Ghosh
                </span>
              </h1>
              
              <p className={`text-base md:text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-5`}>
                Software Engineer at <span className="text-blue-600 font-medium">TCS-AI Cloud</span>
              </p>
              
              {/* <p className={`text-sm md:text-base ${darkMode ? 'text-gray-500' : 'text-gray-500'} mb-6 max-w-md`}>
                Building intelligent systems with Generative AI.
              </p>
               */}
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
      <section id="about" className={`py-4 md:py-6 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-[#5d9606]">About</span>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}> Me</span>
          </h2>
          
          <div className={`space-y-4 text-[15px] ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
            <p>
              Hey there! I'm <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Soham</span> — a Software Engineer at <span className="text-blue-600 font-medium">TCS-AI Cloud</span> who enjoys building intelligent systems that actually make a difference.
            </p>
            <p>
              My work sits at the intersection of <span className="text-red-600 font-medium">Generative AI</span> 
              <span className={darkMode ? 'text-gray-300' : 'text-gray-800'}> and scalable backend engineering,</span> 
              <span className="text-blue-600"> </span> where I create solutions designed for real-world scale.
            </p>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work experience" className={`py-4 md:py-6 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
           <h2 className="text-4xl font-bold mb-4">
             <span className="text-[#5d9606]">Work</span>
             <span className={darkMode ? 'text-white' : 'text-gray-900'}> Experience</span>
           </h2>
          
          <div className="space-y-6">
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
      <section id="projects" className={`py-4 md:py-6 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-[#5d9606]">Selected</span>
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
                
                <p className={`text-sm mb-3 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                
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
      <section id="stack" className={`py-4 md:py-6 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-2">
              <span className="text-[#5d9606]">Tech</span>
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
      <section id="blog" className={`py-4 md:py-6 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-[#5d9606]">Latest</span>
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
      <section id="contact" className={`py-4 md:py-6 px-6 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#5d9606]">Let's</span>
            <span className={darkMode ? 'text-white' : 'text-gray-900'}> Connect</span>
          </h2>
          <p className={`text-[13px] mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-md mx-auto`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", href: `https://github.com/${githubUsername}`, label: "GitHub" },
              { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg", href: "https://www.linkedin.com/in/ghoshsoham71/", label: "LinkedIn" },
              { icon: "https://img.icons8.com/?size=96&id=P7UIlhbpWzZm&format=png", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ghoshsoham71@gmail.com", label: "Email" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-all duration-300 ${darkMode ? 'bg-white/10 border border-white/20 hover:bg-white/20' : 'bg-white border border-gray-200 hover:bg-gray-100'}`}
              >
                <img src={item.icon} alt={item.label} className={`w-5 h-5 ${darkMode ? 'invert' : ''}`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-4 px-8 border-t ${darkMode ? 'border-white/10 bg-black' : 'border-gray-200 bg-gray-100'}`}>
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
