import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Code2 } from "lucide-react";

const backendTeam = [
  {
    name: "Muhammad Uzair",
    role: "Backend Developer",
    description: "Specialized in building robust APIs and scalable server architectures.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Alisha Kayani",
    role: "Backend Developer",
    description: "Expert in database design and performance optimization.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Hamana",
    role: "Backend Developer",
    description: "Passionate about cloud infrastructure and DevOps practices.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
];

const frontendTeam = [
  {
    name: "Muhammad Fahad Jabbar",
    role: "Frontend Developer",
    description: "Creating beautiful, responsive user interfaces with modern frameworks.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Abdul Hannan",
    role: "Frontend Developer",
    description: "Crafting seamless user experiences with attention to detail.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Maryam",
    role: "Frontend Developer",
    description: "Bringing designs to life with clean, maintainable code.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  }
];

const TeamPreview = () => {
  return (
    <section id="team-preview" className="py-16 sm:py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#deece9' }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(25,103,88,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Meet <span className="text-[#18675b]">Our Team</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Meet the team that brings our solutions to life
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Backend Developers */}
          <div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
              <Code2 className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: '#196758' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-[#18675b]">
                Backend Developers
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {backendTeam.map((member, index) => (
                <Card
                  key={index}
                  className="group transition-all duration-300 hover:-translate-y-2 bg-card/90 border-[#196758]/20 animate-fade-in-up overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(25, 103, 88, 0.4), 0 0 60px rgba(25, 103, 88, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="relative overflow-hidden rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#196758] text-xs sm:text-sm font-medium mb-2 sm:mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{member.description}</p>
                      <div className="flex justify-center gap-3">
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Frontend Developers */}
          <div>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
              <Code2 className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: '#196758' }} />
              <h3 className="text-xl sm:text-2xl font-bold text-[#18675b]">
                Frontend Developers
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {frontendTeam.map((member, index) => (
                <Card
                  key={index}
                  className="group transition-all duration-300 hover:-translate-y-2 bg-card/90 border-[#196758]/20 animate-fade-in-up overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(25, 103, 88, 0.4), 0 0 60px rgba(25, 103, 88, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="relative overflow-hidden rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-base sm:text-lg font-bold text-card-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[#196758] text-xs sm:text-sm font-medium mb-2 sm:mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{member.description}</p>
                      <div className="flex justify-center gap-3">
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
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

export default TeamPreview;
