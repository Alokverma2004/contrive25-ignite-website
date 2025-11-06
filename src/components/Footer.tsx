import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-background border-t-2 border-accent/30 pt-16 pb-10 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl top-0 left-1/4 -translate-y-1/2"></div>
        <div className="absolute w-96 h-96 bg-accent/15 rounded-full blur-3xl top-0 right-1/4 -translate-y-1/2"></div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-8 right-8 w-14 h-14 bg-accent hover:bg-accent/90 text-primary-foreground rounded-full glow-gold z-50 hover:scale-125 transition-all duration-300 shadow-card"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-3">
            <h3 className="text-4xl md:text-5xl font-black gradient-gold mb-3">
              CONTRIVE'25
            </h3>
            <p className="text-base text-accent/90 font-semibold">
              Powered by SCIEnT NIT Trichy
            </p>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Empowering innovation, fostering creativity, and building the future one idea at a time.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full gradient-card border-2 border-accent/30 flex items-center justify-center hover:border-accent/70 hover:glow-card transition-all duration-300 hover:scale-125 shadow-card group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full gradient-card border-2 border-accent/30 flex items-center justify-center hover:border-accent/70 hover:glow-card transition-all duration-300 hover:scale-125 shadow-card group"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:contact@scient.com"
              className="w-14 h-14 rounded-full gradient-card border-2 border-accent/30 flex items-center justify-center hover:border-accent/70 hover:glow-card transition-all duration-300 hover:scale-125 shadow-card group"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t-2 border-accent/20 w-full">
            <p className="text-sm md:text-base text-muted-foreground font-medium">
              © 2025 SCIEnT NIT Trichy | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
