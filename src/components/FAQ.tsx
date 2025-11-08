import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Contrive?",
    answer: "Contrive is the flagship product development mentorship program of NIT Trichy. It is designed to help students gain hands-on experience in developing real-world engineering solutions through structured mentorship, technical training, and guided project execution.",
  },
  {
    question: "Who can participate?",
    answer: "Contrive is open to all undergraduate students from any engineering discipline who are eager to innovate and explore the process of product development.",
  },
  {
    question: "What is the duration of the program?",
    answer: "Contrive runs for approximately two months — from the last week of November to the third week of January. The schedule includes mentorship sessions, design reviews, and final presentations spread across this period.",
  },
  {
    question: "Is there any registration or participation fee?",
    answer: "No. Contrive is completely free of cost. The entire program, including mentorship and access to all sessions, is provided without any participation fee.",
  },
  {
    question: "Who will be the mentors?",
    answer: "Mentorship will be provided by expert members from the third year of Designers' Consortium, NIT Trichy's Technical Product Design and Innovation club. These mentors bring valuable technical expertise and experience from prior industry-oriented projects, ensuring participants receive practical and high-quality guidance throughout the program.",
  },
  {
    question: "What are the benefits of participating?",
    answer: "Participants gain exposure to real-world product development, mentorship from trained experts, and the opportunity to enhance both technical and creative skills. Top-performing teams will also receive cash prizes, certificates, and pre-placement interview (PPI) opportunities.",
  },
  {
    question: "What is IP support and how does it work?",
    answer: "Projects with patentable potential will receive intellectual property (IP) assistance, including guidance on documentation, filing, and protecting innovative ideas under institutional or national frameworks.",
  },
  {
    question: "What kind of recognition will participants receive?",
    answer: "Participants will earn certificates, exclusive Contrive 2025 merchandise, and the opportunity to present their projects to industry professionals and NIT Trichy's innovation ecosystem. Exceptional projects will receive special recognition and may be considered for industrial collaboration or implementation.",
  },
  {
    question: "How do I register?",
    answer: "Registration details and deadlines will be shared through the official Contrive website. Participants can register individually or as a team through the website.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl top-20 left-20 animate-float"></div>
        <div className="absolute w-80 h-80 bg-accent/10 rounded-full blur-3xl bottom-20 right-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="px-4 md:px-8 lg:px-12 relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-gold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-accent/90 font-medium">
            Everything you need to know about CONTRIVE'25
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="gradient-card rounded-2xl border-2 border-accent/40 hover:border-accent/70 transition-all duration-300 px-6 shadow-card data-[state=open]:glow-card data-[state=open]:border-accent/80 backdrop-blur-sm overflow-hidden"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-accent hover:text-accent/90 py-6 hover:no-underline transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/85 pb-6 leading-relaxed">
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
