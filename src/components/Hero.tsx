import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Github, Linkedin, Mail, Play } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Minimal background gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-8 border-primary/50 text-primary bg-primary/10 text-sm px-4 py-2">
            Available for DevOps Roles
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-foreground">Soham</span>
            <span className="block gradient-text">Ghosh</span>
          </h1>

          {/* Simple subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium">
            DevOps Engineer & Systems Developer
          </p>

          {/* Single CTA */}
          <Button 
            size="lg" 
            className="spotify-glow bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full mb-16"
            onClick={() => scrollToSection('contact')}
          >
            <Play className="w-6 h-6 mr-3 fill-current" />
            Let's Connect
          </Button>

          {/* Minimal social links */}
          <div className="flex justify-center gap-8">
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
          </div>
        </div>

        {/* Scroll indicator */}
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