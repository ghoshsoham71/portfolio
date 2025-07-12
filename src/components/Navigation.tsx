import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-black text-xl gradient-text">
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Button 
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold text-sm px-6 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            className="md:hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold rounded-full p-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold text-sm py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;