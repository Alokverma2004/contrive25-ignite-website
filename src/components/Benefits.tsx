import { Brain, Briefcase, Trophy, Gift, Star } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Mentorship",
    description: "Get direct guidance from top faculty and experienced alumni mentors.",
  },
  {
    icon: Briefcase,
    title: "Pre-Placement Offers (PPI)",
    description: "Exceptional teams stand a chance to earn PPIs from reputed companies.",
  },
  {
    icon: Trophy,
    title: "Exciting Prizes",
    description: "Attractive cash rewards, certificates, and trophies for top innovations.",
  },
  {
    icon: Gift,
    title: "Exclusive Merchandise",
    description: "Participants receive limited-edition CONTRIVE'25 merchandise.",
  },
  {
    icon: Star,
    title: "Exposure & Recognition",
    description: "Showcase your project to industry experts and the NIT Trichy innovation ecosystem.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-background/80 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 bg-accent/15 rounded-full blur-3xl top-10 right-10 animate-float"></div>
        <div className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl bottom-10 left-10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-4">
            Benefits of Participating
          </h2>
          <p className="text-xl text-accent/90 font-medium">
            Unlock opportunities that go beyond innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="gradient-card rounded-3xl p-8 border-2 border-accent/40 hover:border-accent/80 transition-all duration-500 hover:glow-card hover:scale-105 hover:-translate-y-2 shadow-card group animate-slide-up backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/20 border-2 border-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 glow-gold shadow-xl">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4 group-hover:text-accent/90 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-base text-foreground/80 leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
