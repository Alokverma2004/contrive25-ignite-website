import { ClipboardCheck, UserCheck, Search, Lightbulb, Cpu, Hammer, FlaskConical } from "lucide-react";

const stages = [
  {
    icon: ClipboardCheck,
    title: "Registration",
    description: "Open registration for all participants",
    date: "8th Nov",
  },
  {
    icon: ClipboardCheck,
    title: "Registration Closes",
    description: "Final deadline for team registration",
    date: "17th - 22nd Nov",
  },
  {
    icon: UserCheck,
    title: "Onboarding & PS Release",
    description: "Welcome session and problem statement release",
    date: "23rd Nov",
  },
  {
    icon: UserCheck,
    title: "Mentor Allocation",
    description: "Teams assigned to expert mentors",
    date: "24th Nov",
  },
  {
    icon: Search,
    title: "Phase 1: Background Research",
    description: "Deep dive into problem understanding and existing solutions",
    date: "24th - 30th Nov",
  },
  {
    icon: Lightbulb,
    title: "Phase 2: Ideation",
    description: "Brainstorm and develop innovative solutions",
    date: "1st - 3rd Dec",
  },
  {
    icon: Cpu,
    title: "Phase 3: Simulation (PoC)",
    description: "Create simulation models to validate your concept",
    date: "3rd - 14th Dec",
  },
  {
    icon: Hammer,
    title: "Phase 4: Prototyping",
    description: "1st Years: 5th Jan - 14th Jan | Others: 15th Dec - 21st Dec",
    date: "Dec - Jan",
  },
  {
    icon: FlaskConical,
    title: "Phase 5: Testing",
    description: "1st Years: 1st - 10th Jan | Others: 4th Jan - 14th Jan",
    date: "Jan",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl top-20 left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl bottom-20 right-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-gold text-center animate-slide-up">
          The CONTRIVE Journey
        </h2>
        <p className="text-center text-accent/80 mb-20 text-lg">
          From idea to innovation — track your progress through each phase
        </p>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent rounded-full"></div>

          {/* Timeline stages */}
          <div className="space-y-8">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              
              return (
                <div
                  key={index}
                  className="relative flex items-start gap-6 md:gap-8 animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon container - on the line */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-4 border-accent flex items-center justify-center glow-gold group-hover:scale-110 transition-all duration-300 shadow-card">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                    </div>
                    {/* Connector dot */}
                    <div className="absolute top-1/2 -left-[11px] md:-left-[15px] w-2 h-2 bg-accent rounded-full -translate-y-1/2"></div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 pb-2">
                    <div className="gradient-card rounded-2xl p-6 md:p-8 border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 hover:glow-card hover:scale-[1.02] shadow-card">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-accent">
                          {stage.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="px-4 py-2 rounded-full bg-accent/20 border border-accent/40">
                            <span className="text-sm md:text-base font-black text-accent">{stage.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
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
