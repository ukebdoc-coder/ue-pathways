import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { categories } from "@/data/programs";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });

    setFormData({ name: "", email: "", program: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-hover to-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Ready to start your educational journey? We're here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-sm text-muted-foreground">info@uecampus.edu</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-accent mt-1" />
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-sm text-muted-foreground">
                          [PLACEHOLDER]<br />
                          Online Education Platform<br />
                          Available Worldwide
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3 text-primary">Office Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program">Program of Interest</Label>
                      <Select
                        value={formData.program}
                        onValueChange={(value) => setFormData({ ...formData, program: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.filter((c) => c.id !== "all").map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your educational goals..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Application
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[PLACEHOLDER for interactive map]</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
