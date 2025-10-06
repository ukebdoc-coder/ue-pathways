import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { programs } from "@/data/programs";
import { ArrowLeft, CheckCircle, Clock, Award, BookOpen } from "lucide-react";

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

  const learningOutcomes = [
    "[PLACEHOLDER] Develop comprehensive understanding of core concepts and principles",
    "[PLACEHOLDER] Apply theoretical knowledge to practical, real-world scenarios",
    "[PLACEHOLDER] Master essential skills required for professional success",
    "[PLACEHOLDER] Gain industry-recognized qualifications and certifications",
    "[PLACEHOLDER] Build critical thinking and problem-solving capabilities",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-hover to-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link to="/programs" className="inline-flex items-center gap-2 mb-6 hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className={`${getLevelColor(program.level)} text-white font-semibold`}>
              Level {program.level}
            </Badge>
            <Badge variant="outline" className="border-primary-foreground text-primary-foreground">
              {getCategoryName(program.category)}
            </Badge>
            {program.featured && (
              <Badge variant="outline" className="border-accent text-accent font-semibold">
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
                  <p className="text-lg text-foreground leading-relaxed">{program.description}</p>
                </CardContent>
              </Card>

              {/* Learning Outcomes */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-primary">
                    <Award className="h-6 w-6" />
                    Learning Outcomes
                  </h2>
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

              {/* Program Details */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Program Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                      <Clock className="h-8 w-8 text-primary" />
                      <div>
                        <div className="font-semibold">Duration</div>
                        <div className="text-sm text-muted-foreground">[PLACEHOLDER] Flexible</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                      <Award className="h-8 w-8 text-primary" />
                      <div>
                        <div className="font-semibold">Accreditation</div>
                        <div className="text-sm text-muted-foreground">[PLACEHOLDER] Recognized</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <Card className="sticky top-24 border-2 border-primary">
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
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Study Mode:</span>
                      <span className="font-medium">Online</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Level:</span>
                      <span className="font-medium">{program.level}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{getCategoryName(program.category)}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Start Date:</span>
                      <span className="font-medium">Flexible</span>
                    </li>
                  </ul>
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
