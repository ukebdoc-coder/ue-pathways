import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { programs } from "@/data/programs";
import { ArrowLeft, CheckCircle, Clock, Award, BookOpen, Monitor, Globe, Briefcase, GraduationCap } from "lucide-react";

// Import images
import diplomaImg from "@/assets/diploma-programs.jpg";
import walshImg from "@/assets/walsh-college.jpg";
import ppaImg from "@/assets/ppa-programs.jpg";
import eieImg from "@/assets/eie-programs.jpg";
import cyberImg from "@/assets/cyber-security.jpg";
import mbaImg from "@/assets/mba-program.jpg";

const getImageForProgram = (program: any) => {
  if (program.image === "cyber-security") return cyberImg;
  if (program.image === "mba-program") return mbaImg;
  if (program.image === "diploma-programs") return diplomaImg;
  if (program.image === "walsh-college") return walshImg;
  if (program.image === "ppa-programs") return ppaImg;
  if (program.image === "eie-programs") return eieImg;
  
  if (program.category === "diploma") return diplomaImg;
  if (program.category === "walsh" || program.category === "walsh-accelerated") return walshImg;
  if (program.category === "ppa") return ppaImg;
  if (program.category === "eie") return eieImg;
  
  return diplomaImg;
};

const ProgramDetail = () => {
  const { programId } = useParams();
  const program = programs.find((p) => p.id === programId);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Program Not Found</h1>
            <Button asChild>
              <Link to="/programs">Browse Programs</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    const colors: Record<string, string> = {
      "2": "bg-level-2",
      "3": "bg-level-3",
      "4": "bg-level-4",
      "5": "bg-level-5",
      "7": "bg-level-7",
      "Bachelor": "bg-level-3",
      "Master": "bg-level-5",
      "Doctorate": "bg-level-7",
    };
    return colors[level] || "bg-accent";
  };

  const getCategoryName = (category: string) => {
    const names: Record<string, string> = {
      diploma: "Diploma Program",
      walsh: "Walsh College",
      "walsh-accelerated": "Walsh Accelerated",
      ppa: "PPA Program",
      eie: "EIE European Business School",
    };
    return names[category] || category;
  };

  const defaultLearningOutcomes = [
    "Develop comprehensive understanding of core concepts and principles in your field",
    "Apply theoretical knowledge to practical, real-world business scenarios",
    "Master essential skills required for professional success and career advancement",
    "Gain industry-recognized qualifications and professional certifications",
    "Build critical thinking, problem-solving, and analytical capabilities",
    "Network with industry professionals and like-minded learners globally"
  ];

  const defaultCareerPaths = [
    "Entry-level positions in relevant field",
    "Career progression opportunities",
    "Specialist roles",
    "Management positions",
    "Consultancy opportunities"
  ];

  const learningOutcomes = program.learningOutcomes || defaultLearningOutcomes;
  const careerPaths = program.careerPaths || defaultCareerPaths;
  const programImage = getImageForProgram(program);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with Image */}
      <section className="relative">
        <div className="absolute inset-0 h-[400px]">
          <img 
            src={programImage} 
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-hover/90" />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-primary-foreground">
          <Link to="/programs" className="inline-flex items-center gap-2 mb-6 hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className={`${getLevelColor(program.level)} text-white font-semibold`}>
              Level {program.level}
            </Badge>
            <Badge variant="outline" className="border-primary-foreground text-primary-foreground bg-primary-foreground/10">
              {getCategoryName(program.category)}
            </Badge>
            {program.featured && (
              <Badge variant="outline" className="border-accent text-accent font-semibold bg-accent/20">
                Featured Program
              </Badge>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{program.title}</h1>
          {program.tagline && (
            <p className="text-xl italic opacity-95 mb-6">"{program.tagline}"</p>
          )}
        </div>
      </section>

      {/* Program Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <BookOpen className="h-6 w-6" />
                    Program Overview
                  </h2>
                  <p className="text-lg text-foreground leading-relaxed mb-4">{program.description}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    This comprehensive program is designed to provide you with in-depth knowledge and practical skills needed to excel in your chosen field. 
                    Through a combination of theoretical learning and hands-on application, you'll develop the expertise required to advance your career 
                    and make meaningful contributions to your organization.
                  </p>
                </CardContent>
              </Card>

              {/* Learning Outcomes */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <Award className="h-6 w-6" />
                    Learning Outcomes
                  </h2>
                  <p className="text-muted-foreground mb-4">Upon completion of this program, you will be able to:</p>
                  <ul className="space-y-3">
                    {learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Career Paths */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <Briefcase className="h-6 w-6" />
                    Career Opportunities
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Graduates of this program are well-prepared for various roles including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {careerPaths.map((path, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-secondary rounded-lg">
                        <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{path}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Program Details Grid */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Program Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                      <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Duration</div>
                        <div className="text-sm text-muted-foreground">
                          {program.duration || "Flexible, self-paced learning"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                      <Monitor className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Study Mode</div>
                        <div className="text-sm text-muted-foreground">
                          {program.mode || "Online, flexible schedule"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                      <Award className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Accreditation</div>
                        <div className="text-sm text-muted-foreground">
                          {program.accreditation || "Internationally recognized"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                      <Globe className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <div className="font-semibold">Global Access</div>
                        <div className="text-sm text-muted-foreground">
                          Study from anywhere in the world
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Prerequisites */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Entry Requirements</h2>
                  <p className="text-foreground">
                    {program.prerequisites || "Entry requirements vary by program level. Contact our admissions team for specific requirements."}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    We welcome applications from motivated individuals with diverse backgrounds. 
                    If you don't meet the standard entry requirements, you may still be considered based on relevant work experience.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <Card className="sticky top-24 border-2 border-primary shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Ready to Apply?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Start your journey today. Our admissions team is here to help you every step of the way.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full" size="lg" asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <Link to="/contact">Request Information</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">Quick Facts</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Study Mode:</span>
                      <span className="font-medium">Online</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Level:</span>
                      <span className="font-medium">{program.level}</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{getCategoryName(program.category)}</span>
                    </li>
                    <li className="flex justify-between border-b border-border pb-2">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{program.duration || "Flexible"}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Start Date:</span>
                      <span className="font-medium">Rolling Admission</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card className="bg-secondary">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-primary">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our dedicated support team is available to answer any questions about this program.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Contact Support</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetail;
