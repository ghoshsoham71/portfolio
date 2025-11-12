import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-primary/30 py-2 px-4 flex-shrink-0">
      <div className="font-mono text-xs text-center text-primary/60">
        <div>© {currentYear} SOHAM GHOSH | SOFTWARE ENGINEER | SYSTEM READY</div>
      </div>
    </div>
  );
};

export default Footer;