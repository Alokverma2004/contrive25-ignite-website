import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Countdown = () => {
  const targetDate = new Date("2024-11-19T23:59:59").getTime();
  
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
    <section className="py-20 px-4 bg-navy-dark relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl top-10 left-20 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/15 rounded-full blur-3xl bottom-10 right-20 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-64 h-64 bg-accent/10 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-gold">
            Countdown to Deadline
          </h2>
          <p className="text-lg md:text-xl text-accent/90 mb-12">
            Registration closes on <span className="font-bold text-accent">November 19, 2024</span>
          </p>

          {/* Countdown timer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="gradient-card rounded-2xl p-8 md:p-10 border-2 border-accent/30 glow-card hover:scale-110 transition-all duration-300 shadow-card group"
              >
                <div className="text-5xl md:text-7xl font-black text-accent mb-3 animate-pulse-glow group-hover:scale-110 transition-transform">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base uppercase tracking-widest text-foreground/80 font-bold">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-bold text-accent mb-10 animate-pulse-glow">
            Don't miss out — Be ready to spark innovation!
          </p>

          <Button 
            asChild
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-full glow-gold transition-all duration-300 hover:scale-110"
          >
            <a href="/register">
              Register Now <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
