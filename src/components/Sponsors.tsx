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
    <section className="py-20 px-4 bg-navy-dark overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-4 animate-slide-up">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Powered by SCIEnT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-12">
            Our Sponsors & Partners
          </h2>
        </div>

        {/* Scrolling sponsor carousel */}
        <div className="relative">
          <div className="flex gap-12 animate-slide-up overflow-hidden">
            <div className="flex gap-12 animate-marquee">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-card/50 rounded-xl border border-accent/20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:border-accent/50 hover:glow-card"
                >
                  <span className="text-foreground/50 font-semibold">
                    {sponsor}
                  </span>
                </div>
              ))}
            </div>
          </div>
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
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
