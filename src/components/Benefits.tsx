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
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-gold">
            Benefits of Participating
          </h2>
          <p className="text-xl text-accent/80">
            Unlock opportunities that go beyond innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="gradient-card border-accent/20 hover:border-accent/50 transition-all duration-300 hover:glow-card group hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors group-hover:glow-gold">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-accent">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">
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
