import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Laptop } from "lucide-react";

const backendTeam = [
  {
    name: "Muhammad Uzair",
    role: "Backend Developer",
    bio: "Specialized in building robust APIs and scalable server architectures.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    name: "Alisha Kayani",
    role: "Backend Developer",
    bio: "Expert in database design and performance optimization.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
  },
  {
    name: "Hamana",
    role: "Backend Developer",
    bio: "Passionate about cloud infrastructure and DevOps practices.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
  }
];

const frontendTeam = [
  {
    name: "Muhammad Fahad Jabbar",
    role: "Frontend Developer",
    bio: "Creating beautiful, responsive user interfaces with modern frameworks.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
  },
  {
    name: "Abdul Hannan",
    role: "Frontend Developer",
    bio: "Crafting seamless user experiences with attention to detail.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
  },
  {
    name: "Maryam",
    role: "Frontend Developer",
    bio: "Bringing designs to life with clean, maintainable code.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-primary to-[hsl(var(--dark-section))] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            A passionate team dedicated to delivering excellence in software development
          </p>
        </div>

        <div className="space-y-20">
          {/* Backend Team */}
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-10">
              <Database className="h-8 w-8 text-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Backend Developers
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {backendTeam.map((member, index) => (
                <Card
                  key={member.name}
                  className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 bg-card/90 backdrop-blur-sm border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-accent/30 group-hover:border-accent transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-accent transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Frontend Team */}
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-3 mb-10">
              <Laptop className="h-8 w-8 text-accent" />
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Frontend Developers
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frontendTeam.map((member, index) => (
                <Card
                  key={member.name}
                  className="group hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 bg-card/90 backdrop-blur-sm border-border animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-accent/30 group-hover:border-accent transition-all duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-accent transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
