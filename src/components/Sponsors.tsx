const sponsors = [
  "Sponsor 1",
  "Sponsor 2",
  "Sponsor 3",
  "Sponsor 4",
  "Sponsor 5",
  "Sponsor 6",
];

const Sponsors = () => {
  return (
    <section className="py-20 px-4 bg-background overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-80 h-80 bg-accent/15 rounded-full blur-3xl top-1/2 left-10 -translate-y-1/2 animate-float"></div>
        <div className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl top-1/2 right-10 -translate-y-1/2 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <p className="text-sm md:text-base uppercase tracking-widest text-muted-foreground mb-3 font-bold">
            Powered by SCIEnT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-4">
            Our Sponsors & Partners
          </h2>
          <p className="text-lg text-accent/80">
            Supporting innovation and excellence
          </p>
        </div>

        {/* Scrolling sponsor carousel */}
        <div className="relative">
          <div className="flex gap-8 md:gap-12 overflow-hidden py-8">
            <div className="flex gap-8 md:gap-12 animate-marquee">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-52 h-28 gradient-card rounded-2xl border-2 border-accent/20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:border-accent/60 hover:glow-card hover:scale-110 shadow-card"
                >
                  <span className="text-foreground/60 font-bold text-lg hover:text-accent transition-colors">
                    {sponsor}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
