import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const stats = [
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: '#196758'
      }}
    >
      {/* Animated subtle radial gradient glow overlay */}
      <div 
        className="absolute inset-0 animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 60%)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/20">
            <span className="text-white text-sm sm:text-base">✨</span>
            <span className="text-xs sm:text-sm text-white font-medium">Innovative Web Solutions to Transform Your Business</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-2">
            We Build Scalable Web Solutions <br className="hidden sm:block" /> From Backend to Frontend
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4 px-4">
            <Button
              onClick={() => { window.location.href = "/contact"; }}
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl font-bold
                shadow-lg transition-all
                hover:shadow-[0_0_24px_6px_#4ade80]
                hover:bg-[#4ade80]/90
                focus:outline-none
                border-0"
              style={{ background: '#4ade80', color: '#0f4f45', border: "none" }}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button
              onClick={() => {
                const el = document.getElementById('team-preview');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.location.href = '/#team-preview';
                }
              }}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl text-white font-bold 
                shadow-lg transition-all
                hover:shadow-[0_0_24px_6px_rgba(255,255,255,0.7)]
                "
              style={{
                background: 'linear-gradient(135deg,#23826f 0%,#338678 100%)',
                color: '#fff',
                borderWidth: '1px',
                borderColor: 'rgba(255,255,255,0.7)'
              }}
            >
              Meet Your Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
