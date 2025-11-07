import { Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/90 to-background border-t-2 border-accent/30 py-16 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -bottom-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_10px_hsl(var(--accent)/0.5)]"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo/Brand */}
          <div className="animate-slide-up">
            <h3 className="text-4xl font-black gradient-gold mb-2">SCIEnT</h3>
            <p className="text-base text-muted-foreground font-medium">Innovation Hub of NIT Trichy</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <a
              href="https://www.linkedin.com/company/scient-nitt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 border-2 border-accent flex items-center justify-center hover:scale-110 hover:rotate-6 hover:glow-gold transition-all duration-300 shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 text-accent" />
            </a>
            <a
              href="https://www.instagram.com/scient_nitt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 border-2 border-accent flex items-center justify-center hover:scale-110 hover:rotate-6 hover:glow-gold transition-all duration-300 shadow-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7 text-accent" />
            </a>
            <a
              href="mailto:scient@nitt.edu"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/40 to-accent/20 border-2 border-accent flex items-center justify-center hover:scale-110 hover:rotate-6 hover:glow-gold transition-all duration-300 shadow-lg"
              aria-label="Email"
            >
              <Mail className="w-7 h-7 text-accent" />
            </a>
          </div>

          {/* Copyright */}
          <div className="animate-slide-up pt-4" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm text-muted-foreground font-medium">
              © 2025 SCIEnT NIT Trichy | All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-accent/50 to-accent/30 border-2 border-accent flex items-center justify-center hover:scale-110 hover:rotate-12 glow-gold transition-all duration-300 shadow-xl z-40 backdrop-blur-sm"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-7 h-7 text-accent" />
      </button>
    </footer>
  );
};

export default Footer;
