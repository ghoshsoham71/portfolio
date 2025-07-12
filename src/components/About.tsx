import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Systems Engineer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Specialized in DevOps automation and cloud infrastructure. 
                Currently at Tata Consultancy Services, building scalable solutions 
                with modern technologies.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-primary font-semibold mb-2">Current Role</h3>
                  <p className="text-muted-foreground">Systems Engineer at TCS</p>
                </div>
                
                <div>
                  <h3 className="text-primary font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">B.Tech from KIIT Bhubaneswar • CGPA: 9.19</p>
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="animate-fade-in">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Core Skills</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-primary font-semibold mb-3">DevOps & Cloud</h4>
                      <div className="flex flex-wrap gap-2">
                        {['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-muted">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-primary font-semibold mb-3">Programming</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'Java', 'PostgreSQL', 'FastAPI'].map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-muted">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;