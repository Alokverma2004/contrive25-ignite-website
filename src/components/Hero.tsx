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
      <div className="relative z-10 container mx-auto px-4">
        <div className="animate-slide-up max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 gradient-gold tracking-tight text-center">
            CONTRIVE'25
          </h1>
          
          <div className="gradient-card rounded-3xl p-8 md:p-12 border-2 border-accent/30 glow-card mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent text-center">
              About CONTRIVE'25
            </h2>
            
            <p className="text-base md:text-lg text-foreground/90 mb-6 leading-relaxed text-justify">
              CONTRIVE'25 is the flagship innovation initiative by SCIEnT, the Technical Society of NIT Trichy. It is a platform designed to transform ideas into reality, where students from diverse disciplines come together to innovate, collaborate, and create solutions that address real-world challenges. This year marks another exciting chapter in our journey to foster a culture of creativity and entrepreneurship on campus.
            </p>
            
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-justify">
              At CONTRIVE'25, we believe that every great innovation begins with a simple idea. Whether you're an engineer, designer, scientist, or creative thinker, this is your stage to showcase your potential. With mentorship from industry experts, access to cutting-edge resources, and opportunities to win exciting prizes and recognition, CONTRIVE'25 is more than just a competition—it's a launchpad for your innovative journey. Join us to turn your vision into impact and be a part of the next wave of changemakers.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-full glow-gold transition-all duration-300 hover:scale-110"
            >
              <a href="/register">
                Register Now <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </Button>
          </div>
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
