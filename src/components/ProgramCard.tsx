import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, Monitor } from "lucide-react";
import { Program } from "@/data/programs";

// Import images
import diplomaImg from "@/assets/diploma-programs.jpg";
import walshImg from "@/assets/walsh-college.jpg";
import ppaImg from "@/assets/ppa-programs.jpg";
import eieImg from "@/assets/eie-programs.jpg";
import cyberImg from "@/assets/cyber-security.jpg";
import mbaImg from "@/assets/mba-program.jpg";

interface ProgramCardProps {
  program: Program;
}

const getImageForProgram = (program: Program) => {
  // Use specific image if set
  if (program.image === "cyber-security") return cyberImg;
  if (program.image === "mba-program") return mbaImg;
  if (program.image === "diploma-programs") return diplomaImg;
  if (program.image === "walsh-college") return walshImg;
  if (program.image === "ppa-programs") return ppaImg;
  if (program.image === "eie-programs") return eieImg;
  
  // Default images by category
  if (program.category === "diploma") return diplomaImg;
  if (program.category === "walsh" || program.category === "walsh-accelerated") return walshImg;
  if (program.category === "ppa") return ppaImg;
  if (program.category === "eie") return eieImg;
  
  return diplomaImg;
};

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

const ProgramCard = ({ program }: ProgramCardProps) => {
  const programImage = getImageForProgram(program);

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img 
          src={programImage} 
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge className={`${getLevelColor(program.level)} text-white font-semibold`}>
            Level {program.level}
          </Badge>
          {program.featured && (
            <Badge variant="outline" className="border-accent bg-accent/90 text-accent-foreground font-semibold">
              Featured
            </Badge>
          )}
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {program.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        {program.tagline && (
          <p className="text-sm font-medium text-accent mb-2 italic">
            "{program.tagline}"
          </p>
        )}
        <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
        
        {/* Quick Info */}
        <div className="space-y-2 text-xs text-muted-foreground">
          {program.duration && (
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 text-accent" />
              <span>{program.duration}</span>
            </div>
          )}
          {program.mode && (
            <div className="flex items-center gap-2">
              <Monitor className="h-3 w-3 text-accent" />
              <span>{program.mode}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1" asChild>
          <Link to={`/programs/${program.id}`}>
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <Button size="sm" className="flex-1" asChild>
          <Link to="/contact">Apply</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
