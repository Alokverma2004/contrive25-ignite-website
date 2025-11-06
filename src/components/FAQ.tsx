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
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-gold text-center animate-slide-up">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="gradient-card border border-accent/20 rounded-xl px-6 hover:border-accent/50 transition-all duration-300 hover:glow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-accent hover:text-accent/80 hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 pb-6 leading-relaxed">
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
