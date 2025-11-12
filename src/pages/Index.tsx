import { useState } from "react";
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black text-primary terminal-scanlines overflow-hidden">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 flex flex-col mt-14 p-4 overflow-hidden">
        <div className="terminal-window flex-1 p-4 sm:p-6 flex flex-col overflow-hidden">
          {renderContent()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
