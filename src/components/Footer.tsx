import postivaLogo from "@/assets/postiva-logo.jpg";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <Testimonials />
      <footer className="bg-muted/30 text-foreground py-12 sm:py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
            {/* Brand Section */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <img src={postivaLogo} alt="Postiva" className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-cover" />
                <span className="text-xl sm:text-2xl font-bold text-primary">Postiva</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                Automate & Amplify Your Digital Voice
              </p>
              <div className="flex gap-2 sm:gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="mailto:contact@postiva.com"
                   className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">UI/UX Design</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4">Legal</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 sm:mb-8" />
          
          <p className="text-center text-xs sm:text-sm text-muted-foreground px-4">
            © 2025 Postiva. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
