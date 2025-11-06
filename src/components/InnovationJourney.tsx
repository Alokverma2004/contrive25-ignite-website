const InnovationJourney = () => {
  return (
    <section className="py-20 px-4 bg-navy-dark relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl top-10 right-10 animate-float"></div>
        <div className="absolute w-64 h-64 bg-accent/10 rounded-full blur-2xl bottom-10 left-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="gradient-card rounded-3xl p-10 md:p-16 border-2 border-accent/30 glow-card animate-slide-up shadow-card">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 gradient-gold text-center">
            Your Innovation Journey
          </h2>
          
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent rounded-full"></div>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center max-w-4xl mx-auto pl-6">
              Imagine a space buzzing with creativity, where collaboration fuels innovation and every challenge is met with curiosity and courage. At CONTRIVE'25, your ideas won't just remain dreams — they'll evolve into groundbreaking solutions that can change lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationJourney;
