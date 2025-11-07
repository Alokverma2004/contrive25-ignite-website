import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Timeline from "@/components/Timeline";
import Countdown from "@/components/Countdown";
import Sponsors from "@/components/Sponsors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Timeline />
      <Sponsors />
      <FAQ />
      <Footer />
      <Countdown />
    </div>
  );
};

export default Index;
