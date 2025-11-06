import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is CONTRIVE'25?",
    answer: "CONTRIVE'25 is SCIEnT's flagship annual innovation initiative at NIT Trichy, designed to empower students to transform their innovative ideas into impactful solutions. It provides a comprehensive platform with mentorship, resources, and recognition.",
  },
  {
    question: "Who can participate?",
    answer: "All NIT Trichy students from any discipline and year are welcome to participate. Whether you're an engineer, designer, manager, or creative thinker, CONTRIVE'25 welcomes all innovators.",
  },
  {
    question: "How can I register?",
    answer: "Registration will open soon! Click the 'Register Now' button on this page and fill out the application form with your team details and innovative idea.",
  },
  {
    question: "What type of ideas are encouraged?",
    answer: "We encourage ideas across all domains - technology, social impact, sustainability, healthcare, education, and more. The key is innovation, feasibility, and potential for real-world impact.",
  },
  {
    question: "Are there any registration fees?",
    answer: "No! Participation in CONTRIVE'25 is completely free. We believe in making innovation accessible to everyone.",
  },
  {
    question: "What is the prize structure?",
    answer: "Winners receive attractive cash prizes, certificates, trophies, and exclusive CONTRIVE merchandise. Top teams also have opportunities for Pre-Placement Interviews (PPIs) with partner companies. Detailed prize structure will be announced soon.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-navy-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-72 h-72 bg-accent/15 rounded-full blur-3xl top-10 right-20 animate-float"></div>
        <div className="absolute w-72 h-72 bg-accent/10 rounded-full blur-3xl bottom-10 left-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-gold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-accent/80">
            Everything you need to know about CONTRIVE'25
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="gradient-card border-2 border-accent/20 rounded-2xl px-8 hover:border-accent/60 transition-all duration-300 hover:glow-card animate-slide-up shadow-card data-[state=open]:border-accent/70 data-[state=open]:glow-gold"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-accent hover:text-accent/90 hover:no-underline py-6 gap-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/85 pb-6 pt-2 leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
