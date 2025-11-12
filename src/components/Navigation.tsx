import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = ({ activeTab, setActiveTab }) => {
  const [time, setTime] = useState(new Date());

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
        e.preventDefault();<a></a>
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
    { id: 'home', label: 'HOME.BAS', key: 'F4' },
    { id: 'projects', label: 'PROJECTS.BAS', key: 'F5' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-2 border-primary">
      <div className="flex items-center justify-between px-4 py-2 font-mono text-xs">
        <div className="flex items-center gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1 border-2 transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-black border-primary'
                  : 'bg-black text-primary border-primary/50 hover:border-primary'
              }`}
            >
              [{tab.key}] {tab.label}
            </button>
          ))}
        </div>
        
        {/* <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => window.open('https://github.com', '_blank')}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            [F1] GITHUB
          </button>
          <button
            onClick={() => window.open('https://www.linkedin.com/in/ghoshsoham71/', '_blank')}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            [F2] LINKEDIN
          </button>
          <button
            onClick={() => window.open('mailto:ghoshsoham71@gmail.com')}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            [F3] EMAIL
          </button>
        </div> */}

        <div className="text-primary">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;