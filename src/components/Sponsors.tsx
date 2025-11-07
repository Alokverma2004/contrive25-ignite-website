import solidworksLogo from "@/assets/solidworks-logo.png";
import ansysLogo from "@/assets/ansys-logo.png";
import mathworksLogo from "@/assets/mathworks-logo.png";

const sponsors = [
  {
    name: "SolidWorks",
    role: "Design Partner",
    logo: solidworksLogo,
  },
  {
    name: "Ansys",
    role: "Engineering Simulation Partner",
    logo: ansysLogo,
  },
  {
    name: "MathWorks",
    role: "System Modelling Partner",
    logo: mathworksLogo,
  },
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

        {/* Sponsor grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="gradient-card rounded-3xl border-2 border-accent/30 p-8 flex flex-col items-center justify-center hover:border-accent/60 hover:glow-card hover:scale-105 transition-all duration-300 shadow-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-full h-32 flex items-center justify-center mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-accent mb-2">{sponsor.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">{sponsor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
