import collabImage from "@/assets/contrive-collab.jpg";
import designImage from "@/assets/contrive-design.jpg";
import prototypeImage from "@/assets/contrive-prototype.jpg";
import testingImage from "@/assets/contrive-testing.jpg";
import showcaseImage from "@/assets/contrive-showcase.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero py-20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl top-20 left-10 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 bg-accent/5 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 w-full">
        <div className="animate-slide-up max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 gradient-gold tracking-tight text-center">
            CONTRIVE'25
          </h1>
          
          <div className="gradient-card rounded-3xl p-8 md:p-12 border-2 border-accent/30 glow-card mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent text-center">
              About CONTRIVE'25
            </h2>
            
            <p className="text-base md:text-lg text-foreground/90 mb-6 leading-relaxed text-justify">
              <span className="font-bold italic text-accent">Contrive</span> is the flagship product development program jointly conducted by <span className="font-semibold text-accent">SCIEnT – the Innovation Hub of NIT Trichy</span> and <span className="font-semibold text-accent">Designers' Consortium – the Technical Product Design and Innovation Club of NIT Trichy</span>.
            </p>
            
            <p className="text-base md:text-lg text-foreground/90 mb-6 leading-relaxed text-justify">
              The program is crafted to ignite innovation and cultivate technical excellence among aspiring engineers. Participants engage with real-world problem statements that push the boundaries of creativity, analytical thinking, and engineering insight.
            </p>
            
            <p className="text-base md:text-lg text-foreground/90 mb-6 leading-relaxed text-justify">
              Through the guidance of experienced mentors and collaboration with industry professionals, students navigate every stage of product development — from ideation and conceptualization to prototyping and validation. The initiative emphasizes not just technical mastery, but also teamwork, communication, and project management, ensuring a well-rounded learning experience.
            </p>
            
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-justify">
              Over several weeks, Contrive transforms participants into capable innovators who bridge the gap between theory and practice, emerging with hands-on experience, a deep understanding of the innovation pipeline, and the confidence to tackle real-world engineering challenges.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="col-span-2 md:col-span-2 gradient-card rounded-2xl overflow-hidden border-2 border-accent/30 hover:border-accent/60 hover:glow-card transition-all duration-300 group">
              <img 
                src={collabImage} 
                alt="Team collaboration at CONTRIVE" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="gradient-card rounded-2xl overflow-hidden border-2 border-accent/30 hover:border-accent/60 hover:glow-card transition-all duration-300 group">
              <img 
                src={designImage} 
                alt="CAD Design and Simulation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="gradient-card rounded-2xl overflow-hidden border-2 border-accent/30 hover:border-accent/60 hover:glow-card transition-all duration-300 group">
              <img 
                src={prototypeImage} 
                alt="3D Printing and Prototyping" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="gradient-card rounded-2xl overflow-hidden border-2 border-accent/30 hover:border-accent/60 hover:glow-card transition-all duration-300 group">
              <img 
                src={testingImage} 
                alt="Testing and Validation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="gradient-card rounded-2xl overflow-hidden border-2 border-accent/30 hover:border-accent/60 hover:glow-card transition-all duration-300 group">
              <img 
                src={showcaseImage} 
                alt="Final Showcase Event" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
