import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-[#196758] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_55%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground px-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-4">
            Let's discuss how we can help you achieve your goals with innovative digital solutions.
          </p>
          
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
              Contact Us
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
             Schedule a Call
            </Button>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default CTA;
