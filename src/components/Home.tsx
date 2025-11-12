import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import TypingText from "./TextAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [downloaded, setDownloaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);

  const skills = [
    "Skills:",
    "Java, Python, Shell Script",
    "PostgreSQL, Neo4j, ChromaDB",
    "FastAPI, FastMCP, LangChain, CrewAI",
    "Ansible, Terraform, Git, SonarQube",
    "Jenkins, Docker, Kubernetes, AWS"
  ];

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleDownload = () => {
    if (downloaded) return;

    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1GHZovVKtB_KrSLoXc0j5ZZeRcWrC501M/view?usp=sharing";
    link.download = "Resume-Soham_Ghosh-1YOE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  const handleShowSkills = () => {
    if (showSkills) {
      // Hide terminal
      setShowSkills(false);
      setTerminalLines([]);
      setTyping(false);
      return;
    }

    // Show terminal + start typing skills
    setShowSkills(true);
    setTyping(true);
    setTerminalLines(["C:\> fbc SKILL_SET.BAS", "> SKILL_SET.EXE\n", ""]);

    // Type skills line by line
    const typeLines = (newLines: string[]) => {
      let index = 0;

      // print first line immediately
      setTerminalLines((prev) => [...prev, newLines[index]]);
      index++;

      const interval = setInterval(() => {
        if (index < newLines.length) {
          setTerminalLines((prev) => [...prev, newLines[index]]);
          index++;
        } else {
          clearInterval(interval);
          setTyping(false);
        }
      }, 500);
    };

    // Start printing skills
    typeLines(skills.map((skill) => `> ${skill}`));
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="terminal-header mb-4 flex-shrink-0">
        <span className="text-primary">C:\PORTFOLIO&gt;</span>
        <span className="ml-2">TYPE SOHAM.BAS</span>
      </div>

      {/* Main Flex Layout */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col lg:flex-row gap-8">
        {/* Left Side - Info Terminal */}
        <div className="flex-1 min-w-[60%] space-y-6">
          <div className="space-y-2 font-mono text-xs sm:text-sm">
            <div className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">10</span>
              <div className="flex-1">
                <span className="text-blue-400">PRINT</span>
                <span className="text-yellow-400">
                  {" "}
                  "==============================================="
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">20</span>
              <div className="flex-1">
                <span className="text-blue-400">PRINT</span>
                <span className="text-yellow-400">
                  {' "'}
                  <TypingText
                    text="Soham Ghosh - Software Engineer"
                    speed={10}
                    onComplete={() => {}}
                  />
                  {'"'} <span className="animate-blink">_</span>
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">30</span>
              <div className="flex-1">
                <span className="text-blue-400">PRINT</span>
                <span className="text-yellow-400">
                  {" "}
                  "==============================================="
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">40</span>
              <div>
                <span className="text-blue-400">PRINT</span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">50</span>
              <div className="flex-1">
                <span className="text-blue-400">PRINT</span>
                {showContent && (
                  <span className="text-yellow-400">
                    {" "}
                    "CURRENT: Software Engineer @ TCS-AI Cloud"
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">60</span>
              <div className="flex-1">
                <span className="text-blue-400">PRINT</span>
                <span className="text-yellow-400">
                  {" "}
                  "PREVIOUS: DevOps Intern @ Nokia"
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">70</span>
              <div className="flex-1">
                <span className="text-blue-400">PRINT</span>
                <span className="text-yellow-400">
                  {" "}
                  "EDUCATION: B.Tech CSE @ KIIT ; R$"
                </span>
              </div>
            </div>

            <div className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">80</span>
              <div>
                <span className="text-blue-400">END</span>
              </div>
            </div>
          </div>

          {/* Buttons + Links */}
          <div className="mt-6 pt-4 border-t border-primary/30">
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={handleDownload}
                className="terminal-button px-4 py-2 font-mono text-xs sm:text-sm"
                disabled={downloaded}
              >
                {downloaded
                  ? "[✓] RESUME VIEWED"
                  : "[->] VIEW RESUME"}
              </button>

              <button
                onClick={handleShowSkills}
                className="terminal-button px-4 py-2 font-mono text-xs sm:text-sm"
              >
                {showSkills ? "[✖] HIDE SKILLS" : "[->] SHOW SKILLS"}
              </button>
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-4 sm:gap-6 font-mono text-xs flex-wrap">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                [F1] GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/ghoshsoham71/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                [F2] LINKEDIN
              </a>
              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=ghoshsoham71@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-primary hover:text-primary/80 transition-colors"
>
  [F3] EMAIL
</a>

            </div>
          </div>
        </div>

        {/* Right Side — QBasic Style Terminal */}
        <div className="w-full lg:w-[35%] xl:w-[30%] flex-shrink-0 bg-black border-2 border-primary text-green-400 font-mono text-sm p-4 rounded-lg relative overflow-y-auto">
          <div className="text-center mb-2 text-green-500 font-bold">
            SKILL-SET TERMINAL v1.0
          </div>
          <div className="whitespace-pre-wrap leading-relaxed">
            {terminalLines.length > 0 ? (
              terminalLines.map((line, idx) => <div key={idx}>{line}</div>)
            ) : (
              <div className="text-green-400">
                C:\&gt;
                <span className="animate-blink">█</span>
              </div>
            )}
            {typing && <span className="animate-blink">█</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
