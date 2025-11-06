import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl top-20 left-10 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 bg-accent/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 gradient-gold tracking-tight">
            CONTRIVE'25
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-accent mb-8 max-w-4xl mx-auto leading-relaxed">
            "Got an innovative idea bubbling in your mind? We'll give you the stage, the spotlight, and the chance to shine like never before."
          </p>
          
          <p className="text-base md:text-lg text-foreground/80 mb-6 max-w-3xl mx-auto leading-relaxed">
            CONTRIVE'25 is SCIEnT's annual innovation initiative — designed to ignite creativity and bring groundbreaking ideas to life. Whether you're a dreamer, thinker, or builder, this is your chance to turn imagination into impact.
          </p>
          
          <p className="text-sm md:text-base text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your raw concepts into impactful solutions with access to mentors, resources, and a platform that celebrates your brilliance.
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full glow-gold transition-all duration-300 hover:scale-105"
          >
            Register Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
