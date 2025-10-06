import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Globe, Users, BookOpen, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import { getFeaturedPrograms } from "@/data/programs";

const Index = () => {
  const featuredPrograms = getFeaturedPrograms();

  const academicTracks = [
    {
      title: "Diploma Programs",
      description: "From Level 2 to Level 7, building your foundation to advanced professional qualifications",
      icon: Award,
      link: "/programs?category=diploma",
      color: "text-level-4",
    },
    {
      title: "Walsh College",
      description: "Bachelor's, Master's, and Doctoral programs with standard and accelerated options",
      icon: GraduationCap,
      link: "/programs?category=walsh",
      color: "text-level-3",
    },
    {
      title: "PPA Programs",
      description: "Professional Pathway Academic programs with industry-focused curriculum",
      icon: TrendingUp,
      link: "/programs?category=ppa",
      color: "text-level-5",
    },
    {
      title: "EIE European Business School",
      description: "European-standard business education with global recognition",
      icon: Globe,
      link: "/programs?category=eie",
      color: "text-accent",
    },
  ];

  const stats = [
    { label: "Programs", value: "100+", icon: BookOpen },
    { label: "Students", value: "10,000+", icon: Users },
    { label: "Countries", value: "50+", icon: Globe },
    { label: "Success Rate", value: "95%", icon: Award },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-hover to-primary py-20 md:py-32 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground font-bold">
              Accredited Online Education
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Journey to Success Starts at <span className="text-accent">UE Campus</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              World-class diploma, undergraduate, postgraduate, and doctoral programs designed for your career advancement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="xl" asChild>
                <Link to="/programs">Explore Programs</Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Tracks Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Our Academic Tracks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from diverse educational pathways tailored to your goals and aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicTracks.map((track, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 group cursor-pointer border-2 hover:border-primary animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={track.link}>
                  <CardContent className="p-6 text-center">
                    <track.icon className={`h-12 w-12 mx-auto mb-4 ${track.color} group-hover:scale-110 transition-transform`} />
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{track.description}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Featured Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular and in-demand programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredPrograms.map((program, index) => (
              <div
                key={program.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProgramCard program={program} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Student Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who transformed their careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="mb-4 text-accent text-4xl">"</div>
                  <p className="text-muted-foreground mb-4 italic">
                    [PLACEHOLDER for testimonial - Success story from a UE Campus graduate about their career transformation]
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-full"></div>
                    <div>
                      <div className="font-semibold">Student Name</div>
                      <div className="text-sm text-muted-foreground">Program Name</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Accredited & Recognized
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-32 h-32 bg-card rounded-lg flex items-center justify-center shadow-md"
              >
                <span className="text-muted-foreground text-xs text-center px-2">
                  [PLACEHOLDER<br/>Accreditation<br/>Logo]
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-hover text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join thousands of students worldwide who are advancing their careers with UE Campus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/programs">Browse Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
