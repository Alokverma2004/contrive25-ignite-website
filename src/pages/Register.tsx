import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero">
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl top-20 left-10 animate-float"></div>
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 text-accent hover:text-accent/80 hover:bg-accent/10"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Button>

        {/* Registration content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-black mb-6 gradient-gold">
              Register for CONTRIVE'25
            </h1>
            <p className="text-xl text-accent/90">
              Take the first step towards innovation
            </p>
          </div>

          <div className="gradient-card rounded-3xl p-8 md:p-12 border-2 border-accent/30 glow-card animate-slide-up">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 rounded-full bg-accent/20 border-4 border-accent flex items-center justify-center mx-auto mb-8 glow-gold">
                <span className="text-4xl">🚀</span>
              </div>
              
              <h2 className="text-3xl font-bold text-accent mb-4">
                Registration Opens Soon!
              </h2>
              
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed">
                We're preparing an amazing registration experience for you. The registration portal will open on <span className="text-accent font-semibold">November 6, 2024</span>. Stay tuned!
              </p>

              <div className="pt-8 space-y-4">
                <h3 className="text-xl font-semibold text-accent">What to Expect:</h3>
                <ul className="text-left max-w-xl mx-auto space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">•</span>
                    <span>Simple and quick registration process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">•</span>
                    <span>Team formation options (individual or group)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">•</span>
                    <span>Submit your innovative idea pitch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent text-2xl">•</span>
                    <span>Get instant confirmation and updates</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-6">
                  Want to stay updated? Follow us on social media or check back here regularly.
                </p>
                
                <Button
                  onClick={() => navigate("/")}
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full glow-gold transition-all duration-300 hover:scale-105"
                >
                  Explore CONTRIVE'25
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
