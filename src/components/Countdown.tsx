import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Countdown = () => {
  const targetDate = new Date("2025-01-10T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-64 h-64 bg-accent/20 rounded-full blur-3xl top-10 left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl bottom-10 right-20 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-gold">
            Countdown to CONTRIVE'25 Launch
          </h2>

          {/* Countdown timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="gradient-card rounded-2xl p-6 md:p-8 border border-accent/20 glow-card hover:scale-105 transition-transform"
              >
                <div className="text-5xl md:text-6xl font-black text-accent mb-2 animate-pulse-glow">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base uppercase tracking-wider text-foreground/70 font-semibold">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-semibold text-accent mb-8">
            Be ready to spark the next wave of innovation!
          </p>

          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full glow-gold transition-all duration-300 hover:scale-105"
          >
            Register Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
