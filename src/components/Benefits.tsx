import { Brain, Briefcase, Trophy, Gift, Star, Shield, Building2 } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Mentorship and Guidance",
    description: "Participants receive direct guidance from accomplished members of the innovative community here at NITT.",
  },
  {
    icon: Building2,
    title: "Opportunity to be Industrial Innovators",
    description: "Contrive provides participants with the unique opportunity to work on industrially relevant problem statements. Exceptional teams stand a chance to become the inventors of projects that can be implemented in collaboration with industry partners.",
  },
  {
    icon: Briefcase,
    title: "Pre-Placement Interviews (PPI)",
    description: "Outstanding performance and innovation may open doors to pre-placement interviews or offers from reputed companies.",
  },
  {
    icon: Trophy,
    title: "Exciting Cash Prizes",
    description: "Top-performing teams will be awarded attractive cash prizes, certificates, and trophies in recognition of their innovative and impactful solutions.",
  },
  {
    icon: Shield,
    title: "Intellectual Property (IP) Support",
    description: "To encourage innovation and ownership, participants will receive complete intellectual property support. Teams with patentable ideas will be guided through the IP process.",
  },
  {
    icon: Gift,
    title: "Exclusive Merchandise",
    description: "Every participant will receive limited-edition Contrive 2025 merchandise as a token of participation and innovation.",
  },
  {
    icon: Star,
    title: "Exposure and Recognition",
    description: "Participants will have the opportunity to present their projects to industry experts, faculty evaluators, and members of the NIT Trichy innovation ecosystem.",
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

      <div className="px-4 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-4">
            Benefits of Participating
          </h2>
          <p className="text-xl text-accent/90 font-medium">
            Unlock opportunities that go beyond innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
