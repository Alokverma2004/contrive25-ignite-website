import { Lightbulb, FileCheck, Users, Wrench, Sparkles } from "lucide-react";

const stages = [
  {
    icon: Lightbulb,
    title: "Idea Submission",
    description: "Submit your innovative concept and let your creativity flow.",
  },
  {
    icon: FileCheck,
    title: "Shortlisting & Feedback",
    description: "Get evaluated and receive constructive feedback from experts.",
  },
  {
    icon: Users,
    title: "Mentorship Phase",
    description: "Work with industry mentors to refine and strengthen your idea.",
  },
  {
    icon: Wrench,
    title: "Prototype Development",
    description: "Build your prototype with support and resources.",
  },
  {
    icon: Sparkles,
    title: "Grand Finale & Showcase",
    description: "Present your innovation and compete for top prizes.",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-navy-dark">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 gradient-gold text-center animate-slide-up">
          The CONTRIVE Journey
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-accent/30"></div>

          {/* Timeline stages */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon container */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-accent flex items-center justify-center mb-4 glow-gold hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 text-accent">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {stage.description}
                  </p>
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
