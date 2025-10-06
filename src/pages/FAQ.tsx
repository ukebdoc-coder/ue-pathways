import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What do diploma levels mean?",
      answer:
        "Diploma levels indicate the academic progression and complexity of the program. Level 2 is foundation level, Level 3 is equivalent to A-levels, Level 4-5 are undergraduate level, and Level 7 is postgraduate level. Each level builds upon the previous, providing structured educational advancement.",
    },
    {
      question: "What's the difference between a Top-Up and full degree?",
      answer:
        "A Top-Up degree allows you to complete a full bachelor's or master's degree if you already have relevant qualifications or work experience. It's a shorter, accelerated pathway that recognizes your prior learning. Full degrees start from the beginning and cover all required coursework.",
    },
    {
      question: "Is UE Campus accredited?",
      answer:
        "Yes, UE Campus partners with internationally recognized institutions and accrediting bodies. Our programs meet rigorous quality standards and are recognized globally. Specific accreditation details vary by program and are available on each program page.",
    },
    {
      question: "What's the difference between Walsh, EIE, and PPA programs?",
      answer:
        "Walsh College offers comprehensive American-style education with both standard and accelerated tracks. EIE European Business School provides European-standard business education with international recognition. PPA (Professional Pathway Academic) programs focus on industry-specific skills with professional certifications. Each has its unique approach tailored to different career goals.",
    },
    {
      question: "Can I study while working?",
      answer:
        "Absolutely! All our programs are designed for working professionals with flexible online learning. You can study at your own pace, access materials 24/7, and balance education with your career and personal commitments. Our accelerated programs are particularly popular with busy professionals.",
    },
    {
      question: "How do I apply?",
      answer:
        "Applying is simple: 1) Browse our programs and select one that matches your goals, 2) Click 'Apply Now' or visit our Contact page, 3) Fill out the application form with your details, 4) Submit required documents (if any), 5) Our admissions team will review your application and contact you within 24-48 hours to discuss next steps.",
    },
    {
      question: "What are the entry requirements?",
      answer:
        "Entry requirements vary by program level. Generally, diploma programs have minimal requirements, undergraduate programs require secondary education completion, and postgraduate programs require a bachelor's degree. Some programs may accept relevant work experience in place of formal qualifications. Contact our admissions team for specific program requirements.",
    },
    {
      question: "How long does it take to complete a program?",
      answer:
        "Duration varies by program type and study mode. Diploma programs typically take 6-18 months, bachelor's degrees 3-4 years, master's programs 1-2 years, and doctoral programs 3-5 years. Accelerated programs can reduce these timelines significantly. You can study full-time or part-time based on your schedule.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-hover to-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Find answers to common questions about our programs, admissions, and learning experience
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-primary hover:text-primary-hover">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Still Have Questions CTA */}
          <Card className="mt-8 border-2 border-primary">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 text-primary">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Our admissions team is here to help you find the perfect program and answer any questions you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/programs">Browse Programs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
