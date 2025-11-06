import { Brain, Briefcase, Trophy, Gift, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-72 h-72 bg-accent/20 rounded-full blur-3xl top-20 left-10 animate-float"></div>
        <div className="absolute w-72 h-72 bg-accent/15 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-gold">
            Benefits of Participating
          </h2>
          <p className="text-xl md:text-2xl text-accent/90 font-semibold">
            Unlock opportunities that go beyond innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="gradient-card border-2 border-accent/20 hover:border-accent/60 transition-all duration-300 hover:glow-card group hover:scale-105 animate-slide-up shadow-card overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 flex flex-col items-center text-center h-full relative">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors"></div>
                  
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/30 group-hover:to-accent/10 transition-all group-hover:glow-gold group-hover:scale-110 duration-300">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/85 text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
