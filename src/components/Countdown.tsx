import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const Countdown = () => {
  const targetDate = new Date("2025-11-19T23:59:59").getTime();
  
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
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div className="gradient-card rounded-3xl p-6 border-2 border-accent/40 glow-card shadow-2xl backdrop-blur-sm max-w-xs">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
            <Clock className="w-5 h-5 text-accent animate-pulse-glow" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-accent uppercase tracking-wider">
              Registration Ends
            </h3>
            <p className="text-xs text-muted-foreground">Nov 19, 2025</p>
          </div>
        </div>

        {/* Countdown timer */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="text-center"
            >
              <div className="text-2xl font-black text-accent mb-1 animate-pulse-glow">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-foreground/60 font-medium">
                {unit}
              </div>
            </div>
          ))}
        </div>

        {/* Message */}
        <p className="text-xs text-center text-accent/90 font-semibold">
          Don't miss out!
        </p>
      </div>
    </div>
  );
};

export default Countdown;
