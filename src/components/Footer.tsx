import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
  <div className="container mx-auto px-4">
    <div className="flex justify-end">
      <div className="text-sm text-muted-foreground">
        © {currentYear} Soham Ghosh. Software Engineer.
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;