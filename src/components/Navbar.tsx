import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/programs", label: "Programs" },
    { path: "/contact", label: "Contact" },
    { path: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity">
            <GraduationCap className="h-8 w-8 text-accent" />
            <span className="hidden sm:inline">UE Campus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? "text-accent" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="accent" size="sm" asChild>
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary-hover rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors hover:bg-primary-hover ${
                    isActive(link.path) ? "bg-primary-hover text-accent" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="accent" className="mt-2" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
