import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import postivaLogo from "@/assets/postiva-logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#518b80] backdrop-blur-sm"
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(25, 103, 88, 0.4), 0 0 60px rgba(25, 103, 88, 0.2)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img src={postivaLogo} alt="Postiva" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-lg object-cover" />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">Postiva</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              to="/"
              className="text-white transition-colors font-medium relative pb-1
                before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              style={{ overflow: 'hidden' }}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-white transition-colors font-medium relative pb-1
                before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              style={{ overflow: 'hidden' }}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="text-white transition-colors font-medium relative pb-1
                before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-0.5 before:bg-white before:transition-all before:duration-300 hover:before:w-full"
              style={{ overflow: 'hidden' }}
            >
              About Us
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button
                className="text-white hover:opacity-90 transition-all duration-300"
                style={{ 
                  background: '#196758',
                  boxShadow: '0 4px 15px rgba(25, 103, 88, 0.5), 0 0 20px rgba(25, 103, 88, 0.3)'
                }}
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px] bg-[#518b80] border-none">
              <div className="flex flex-col space-y-6 mt-8">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-primary-foreground transition-colors py-2 border-b border-white/20"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-primary-foreground transition-colors py-2 border-b border-white/20"
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium hover:text-primary-foreground transition-colors py-2 border-b border-white/20"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4"
                >
                  <Button
                    className="w-full text-white"
                    style={{ 
                      background: '#196758',
                      boxShadow: '0 4px 15px rgba(25, 103, 88, 0.5), 0 0 20px rgba(25, 103, 88, 0.3)'
                    }}
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
