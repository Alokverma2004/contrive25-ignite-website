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

      <div className="px-4 md:px-8 lg:px-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-gold text-center animate-slide-up">
          Timeline
        </h2>
        <p className="text-center text-accent/80 mb-20 text-lg">
          From idea to innovation — track your progress through each phase
        </p>

        <div className="relative max-w-7xl mx-auto">
          {/* Curvy center timeline line - using SVG for smooth curves */}
          <svg 
            className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 pointer-events-none hidden md:block" 
            style={{ maxWidth: '100%' }}
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Curvy path connecting all timeline items */}
            <path
              d="M 50% 0 Q 55% 11%, 50% 11% Q 45% 22%, 50% 22% Q 55% 33%, 50% 33% Q 45% 44%, 50% 44% Q 55% 55%, 50% 55% Q 45% 66%, 50% 66% Q 55% 77%, 50% 77% Q 45% 88%, 50% 88% Q 55% 100%, 50% 100%"
              stroke="url(#timelineGradient)"
              strokeWidth="3"
              fill="none"
              className="drop-shadow-[0_0_8px_hsl(var(--accent)/0.6)]"
            />
          </svg>

          {/* Vertical line connecting all dots */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent rounded-full -translate-x-1/2"></div>

          {/* Timeline stages - alternating left and right */}
          <div className="space-y-12 md:space-y-16">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center animate-slide-up ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content card - takes half width on desktop */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                    <div className="gradient-card rounded-2xl p-6 md:p-8 border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 hover:glow-card hover:scale-105 shadow-card group">
                      <div className="mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-accent mb-3">
                          {stage.title}
                        </h3>
                        <div className="inline-flex px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 mb-3">
                          <span className="text-sm font-black text-accent">{stage.date}</span>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <div className="w-5 h-5 rounded-full bg-accent border-2 border-background shadow-[0_0_20px_hsl(var(--accent)/0.6)]"></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-5/12"></div>
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
