import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-red-500/20 py-2 sm:py-3 px-3 sm:px-4 flex-shrink-0 bg-background/50 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2">
        <div className="font-mono text-[10px] sm:text-xs text-center sm:text-left text-gray-500 flex flex-wrap justify-center sm:justify-start gap-x-2">
          <span>© {currentYear} Soham Ghosh</span>
          <span className="hidden sm:inline text-red-500/30">|</span>
          <span className="hidden sm:inline">Built with</span> 
          <span className="hidden sm:inline"><Heart className="w-3 h-3 inline text-red-500 mx-0.5" /></span>
          <span className="hidden sm:inline">using React</span>
          <span className="sm:hidden">•</span>
          <span className="sm:hidden">Made with</span>
          <span className="sm:hidden"><Heart className="w-2.5 h-2.5 inline text-red-500 mx-0.5" /></span>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 text-gray-500">
          <span className="font-mono text-[10px] sm:text-xs">
            <span className="text-cyan-400">&gt;</span> system ready
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
