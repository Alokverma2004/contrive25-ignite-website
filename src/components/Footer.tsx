import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-dark border-t border-accent/20 pt-12 pb-8 px-4">
      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 bg-accent hover:bg-accent/90 text-primary-foreground rounded-full glow-gold z-50 hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo/Title */}
          <div>
            <h3 className="text-3xl font-black gradient-gold mb-2">
              CONTRIVE'25
            </h3>
            <p className="text-sm text-muted-foreground">
              Powered by SCIEnT NIT Trichy
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-accent/20 flex items-center justify-center hover:border-accent/50 hover:glow-card transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-accent" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card border border-accent/20 flex items-center justify-center hover:border-accent/50 hover:glow-card transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-accent" />
            </a>
            <a
              href="mailto:contact@scient.com"
              className="w-12 h-12 rounded-full bg-card border border-accent/20 flex items-center justify-center hover:border-accent/50 hover:glow-card transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-accent" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-accent/10 w-full">
            <p className="text-sm text-muted-foreground">
              © 2025 SCIEnT NIT Trichy | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
