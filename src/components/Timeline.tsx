import { Lightbulb, FileCheck, Users, Wrench, Sparkles } from "lucide-react";

const stages = [
  {
    icon: Lightbulb,
    title: "Idea Submission",
    description: "Submit your innovative concept and let your creativity flow.",
    date: "6 Nov",
    month: "November 2024",
  },
  {
    icon: FileCheck,
    title: "Shortlisting & Feedback",
    description: "Get evaluated and receive constructive feedback from experts.",
    date: "10 Nov",
    month: "November 2024",
  },
  {
    icon: Users,
    title: "Mentorship Phase",
    description: "Work with industry mentors to refine and strengthen your idea.",
    date: "12 Nov",
    month: "November 2024",
  },
  {
    icon: Wrench,
    title: "Prototype Development",
    description: "Build your prototype with support and resources.",
    date: "15 Nov",
    month: "November 2024",
  },
  {
    icon: Sparkles,
    title: "Grand Finale & Showcase",
    description: "Present your innovation and compete for top prizes.",
    date: "19 Nov",
    month: "November 2024",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 gradient-gold text-center animate-slide-up">
          The CONTRIVE Journey
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 via-accent/60 to-accent/30 transform md:-translate-x-1/2"></div>

          {/* Timeline stages */}
          <div className="space-y-12">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 animate-slide-up ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-left pl-20 md:pl-0`}>
                    <div className="gradient-card rounded-2xl p-6 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:glow-card hover:scale-105">
                      <div className="flex items-center gap-3 mb-3 md:justify-end justify-start">
                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-start`}>
                          <span className="text-2xl font-black text-accent">{stage.date}</span>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">{stage.month}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-accent">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon container - centered on line */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10 w-16 h-16 rounded-full bg-card border-4 border-accent flex items-center justify-center glow-gold hover:scale-125 transition-transform">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
