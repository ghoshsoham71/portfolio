import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TypingText from "./TextAnimation";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-3xl font-black font-funnel mb-6">
                <TypingText text={"About me"}></TypingText>
              </h2>
              <p className="text-[15px] text-white opacity-85 text-lg text-muted-foreground mb-8 leading-relaxed font-grotesk">           
                Hey, I’m Soham. I’m all about creating smart solutions that make life easier and work smoother. 
                I enjoy tackling challenges, learning new things, and bringing ideas to life. 
                When I’m not working, you’ll probably find me exploring new interests... or pushing a commit named ‘Final_fix_temp2’.
              </p>
              
              <div className="space-y-2">
                <div>
                  <h3 className="text-primary font-semibold mb-1 font-funnel">Current Role</h3>
                  <p className="text-[15px] text-white opacity-85 text-muted-foreground font-grotesk">Software Engineer at TCS-AI Cloud</p>
                </div>
                <div>
                  <h3 className="text-primary font-semibold mb-1 font-funnel">Previous Experience</h3>
                  <p className="text-[15px] text-white opacity-85 text-muted-foreground font-grotesk">DevOps Intern at Nokia Solutions and Networks</p>
                </div>
                
                
                <div>
                  <h3 className="text-primary font-semibold mb-1 font-funnel">Education</h3>
                  <p className="text-[15px] text-white opacity-85 text-muted-foreground font-grotesk">B.Tech in CSE from KIIT, Bhubaneswar</p>
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="animate-fade-in">
              <Card className="spotify-glow bg-card/90 border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 font-funnel">Core Skills</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white text-primary font-semibold mb-3 font-funnel opacity-70">Languages & Databases:</h4>
                      <div className="flex flex-wrap gap-2 font-grotesk">
                        {['Java', 'Python', 'Shell Script', 'PostgreSQL', 'Neo4j', 'MongoDB', 'FastAPI'].map((skill) => (
                          <Badge key={skill}  className="bg-primary-glow opacity-75">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white text-primary font-semibold mb-3 font-funnel opacity-70">DevOps & Cloud Technologies:</h4>
                      <div className="flex flex-wrap gap-2 font-grotesk">
                        {['Git', 'Docker', 'Jenkins', 'Ansible', 'AWS'].map((skill) => (
                          <Badge key={skill} className="bg-primary-glow opacity-75">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white text-primary font-semibold mb-3 font-funnel opacity-70 ">AI & Machine Learning:</h4>
                      <div className="flex flex-wrap gap-2 font-grotesk text-white">
                        {['LangChain', 'ChromaDB', 'PyTorch', 'LangGraph'].map((skill) => (
                          <Badge key={skill} className="bg-primary-glow opacity-75">
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