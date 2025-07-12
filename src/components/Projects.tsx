import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Featured Project
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-world solution built for production environments
            </p>
          </div>

          {/* Single Project Card */}
          <Card className="spotify-glow bg-card/50 border-border/50 hover:bg-card/70 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-xl bg-primary/10">
                  <Database className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">
                    PostgreSQL Database Synchronizer
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Automated PostgreSQL database synchronization system with resilient handling 
                    of DDL changes and new tables. Features backup logging and fault-tolerant 
                    incremental updates using psycopg2.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="text-primary font-semibold mb-4">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Fault-tolerant incremental updates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">DDL change detection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Automated backup logging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Real-time synchronization</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-primary font-semibold mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'PostgreSQL', 'psycopg2', 'DevOps', 'Database Management'].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/30 text-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button variant="outline" className="border-border hover:border-primary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;