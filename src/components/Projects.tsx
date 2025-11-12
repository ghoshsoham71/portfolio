import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, ExternalLink, Github } from "lucide-react";
import TypingText from "@/components/TypingText";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "dummy-db: A schema-driven synthetic data generator with integrated quality evaluation framework.",
      github: "https://github.com/ghoshsoham71/DummyDB",
      features: [
        "Built form and script based schema parser with content-based deduplication, constraint extraction, foreign key resolution, and PostgreSQL storage via Supabase with RLS policies",
        "Developed FastAPI service with SlowAPI rate limiting and Pydantic-validated RESTful async endpoints.",
        "Engineered SDV-based synthetic data pipeline using HMASynthesizer and CTGAN with metadata inference, correlation preservation, and quality evaluation metrics."
      ],
      tech: ['SDV (Synthetic Data Vault)', 'CTGAN (Conditional Tabular GAN)', 'Pydantic / FastAPI', 'PostgreSQL + Supabase RLS']
    },
    {
      id: 2,
      title: "playlist-mcp: An intelligent music curation system that transforms texts into personalized Spotify playlists.",
      github: "https://github.com/ghoshsoham71/playlist-mcp",
      features: [
        "Developed FastMCP server integrating Tekore SDK with OAuth 2.0, enabling Spotify Web API access.",
        "Built modular handlers for user data aggregation, playlist orchestration and recommendation models.",
        "Engineered asynchronous playlist pipelines with concurrent track search , probabilistic deduplication, and batched Spotify API calls, cutting latency and request overhead."
      ],
      tech: ['FastMCP / Tekore SDK', 'Asynchronous I/O Pipelines', 'OAuth 2.0 Authentication Flow', 'Probabilistic Deduplication Algorithms']
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="terminal-header mb-4 flex-shrink-0">
        <span className="text-primary">C:\PORTFOLIO\PROJECTS&gt;</span>
        <span className="ml-2">DIR</span>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={project.id} className="border border-primary/30 p-4">
              <div className="font-mono">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-primary flex-shrink-0">[{index + 1}]</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-yellow-400 text-sm sm:text-base mb-2 break-words">
                      <TypingText text={project.title} speed={20} onComplete={() => {}} />
                    </h3>
                    {/* <p className="text-primary/80 text-xs sm:text-sm mb-4">{project.description}</p>
                     */}
                    <div className="mb-4">
                      <div className="text-blue-400 text-xs mb-2">FEATURES:</div>
                      <div className="space-y-1">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            <span className="text-primary flex-shrink-0">►</span>
                            <span className="text-primary/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-blue-400 text-xs mb-2">TECH: </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span key={tech} className="terminal-badge text-xs">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3">
  <Button
    variant="outline"
    size="sm"
    asChild
  >
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <Github className="h-4 w-4" />
      <span>View on GitHub</span>
    </a>
  </Button>
</div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;