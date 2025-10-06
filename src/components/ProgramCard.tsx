import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
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

const ProgramCard = ({ program }: ProgramCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge className={`${getLevelColor(program.level)} text-white font-semibold`}>
            Level {program.level}
          </Badge>
          {program.featured && (
            <Badge variant="outline" className="border-accent text-accent font-semibold">
              Featured
            </Badge>
          )}
        </div>
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
        <p className="text-sm text-muted-foreground">{program.description}</p>
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
