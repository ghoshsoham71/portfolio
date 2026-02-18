import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navigation = ({ activeTab, setActiveTab }) => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'F1') {
        e.preventDefault();
        window.open('https://github.com', '_blank');
      } else if (e.key === 'F2') {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/ghoshsoham71/', '_blank');
      } else if (e.key === 'F3') {
        e.preventDefault();
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ghoshsoham71@gmail.com');
      } 
       else if (e.key === 'F5') {
        e.preventDefault();
        setActiveTab('projects');
      } else if (e.key === 'F4') {
        e.preventDefault();
        setActiveTab('home');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [setActiveTab]);

  const tabs = [
    { id: 'home', label: 'Home', key: 'F4' },
    { id: 'projects', label: 'Projects', key: 'F5' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-red-500/20">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
            <span className="text-white font-bold text-xs sm:text-sm">SG</span>
          </div>
          <span className="hidden xs:block text-xs sm:text-sm font-mono text-gray-300">
            Soham<span className="text-cyan-400">.dev</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all text-xs sm:text-sm font-mono ${
                activeTab === tab.id
                  ? 'bg-red-600/20 text-red-300 border border-red-500/30'
                  : 'text-gray-400 hover:text-red-300 hover:bg-red-600/10'
              }`}
            >
              <span className="text-red-500/60 text-[10px] sm:text-xs mr-1">{tab.key}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-red-600/10"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ghoshsoham71/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-red-600/10"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ghoshsoham71@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-red-600/10"
          >
            <Mail className="w-4 h-4" />
          </a>
          <div className="ml-1 sm:ml-2 text-cyan-400/60 text-[10px] sm:text-xs font-mono">
            {time.toLocaleTimeString()}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-400 hover:text-red-300 p-1.5"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-red-500/20 bg-background/95 backdrop-blur-sm">
          <div className="px-3 py-2 sm:py-3 space-y-1.5 sm:space-y-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all text-xs sm:text-sm font-mono ${
                  activeTab === tab.id
                    ? 'bg-red-600/20 text-red-300 border border-red-500/30'
                    : 'text-gray-400 hover:text-red-300 hover:bg-red-600/10'
                }`}
              >
                <span className="text-red-500/60 text-[10px] sm:text-xs mr-1 sm:mr-2">{tab.key}</span>
                {tab.label}
              </button>
            ))}
            <div className="flex gap-2 pt-2 border-t border-red-500/20">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-gray-400 hover:text-cyan-400 transition-colors py-2 rounded-lg hover:bg-red-600/10 flex items-center justify-center gap-1.5 text-xs sm:text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ghoshsoham71/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-gray-400 hover:text-cyan-400 transition-colors py-2 rounded-lg hover:bg-red-600/10 flex items-center justify-center gap-1.5 text-xs sm:text-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ghoshsoham71@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center text-gray-400 hover:text-cyan-400 transition-colors py-2 rounded-lg hover:bg-red-600/10 flex items-center justify-center gap-1.5 text-xs sm:text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
