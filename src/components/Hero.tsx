import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Play } from "lucide-react";
import TypingText from "./TextAnimation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  const [downloaded, setDownloaded] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClick = () => {
    scrollToSection('contact');

    if (downloaded) return; // prevent multiple downloads

    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1T__16Xk2Ixwhd8rktwZK21dhvKZfmN9H';
    link.download = 'Resume-Soham_Ghosh-1YOE.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Minimal background gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">

          <div>
            <h1 className="text-[125px] text-white italic font-[UnifrakturCook]">
              <TypingText text="Soham Ghosh" />
            </h1>
          </div>

          <p className="text-[18px] text-white italic font-[UnifrakturCook] pb-6 text-opacity-70">        
           Tech enthusiast dedicated to crafting impactful software solutions
          </p>

          <Button
            size="lg"
            className="spotify-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full mb-16"
            onClick={handleClick}
            disabled={downloaded}  // optional: disables after download
          >
            <Play className="w-6 h-6 mr-3 fill-current" />
            Download my Resume
          </Button>

          {/* <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/ghoshsoham71/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ghoshsoham71@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div> */}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown
            className="w-6 h-6 text-muted-foreground cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
