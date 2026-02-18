import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, ExternalLink, Github, ArrowRight } from "lucide-react";
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
      {/* Header */}
      <div className="terminal-header mb-4 sm:mb-6 flex-shrink-0 text-xs sm:text-sm">
        <span className="text-purple-400">~/portfolio</span>
        <span className="text-gray-500 mx-1 sm:mx-2">→</span>
        <span className="text-gray-300">ls projects/</span>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="grid gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-600/30 to-purple-800/30 flex items-center justify-center border border-purple-500/20 flex-shrink-0">
                    <span className="text-purple-400 font-mono text-xs sm:text-sm">{index + 1}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-lg font-semibold text-gray-100 group-hover:text-purple-300 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4 sm:mb-5">
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-purple-400/70 mb-2 sm:mb-3 font-mono">
                  Key Features
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="feature-item text-xs sm:text-sm text-gray-400">
                      <span className="text-purple-400/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-3 sm:mb-5">
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-purple-400/70 mb-2 sm:mb-3 font-mono">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="terminal-badge text-[10px] sm:text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-1 sm:pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-purple-500/30 text-purple-300 hover:bg-purple-600/20 hover:border-purple-400 transition-all group/btn text-xs sm:text-sm"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>View on GitHub</span>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* More projects coming soon indicator */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400/60 text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            More projects coming soon...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
