import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, MapPin } from "lucide-react";
import TypingText from "./TextAnimation";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-9">
              <TypingText text="Let's Work Together" />
            </h2>

            {/* Contact Card */}
            <Card className="spotify-glow bg-card/50 border-border/50 mb-8 ">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ghoshsoham71@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">ghoshsoham71@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ghoshsoham71/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">Soham Ghosh</p>
                    </div>
                  </a>

                  <div className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-muted/50 transition-colors group">
                    <MapPin className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">Kolkata, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;