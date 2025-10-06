import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">UE Campus</span>
            </div>
            <p className="text-sm opacity-90">
              Empowering learners worldwide with accredited online education programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programs" className="hover:text-accent transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programs?category=diploma" className="hover:text-accent transition-colors">
                  Diploma Programs
                </Link>
              </li>
              <li>
                <Link to="/programs?category=walsh" className="hover:text-accent transition-colors">
                  Walsh College
                </Link>
              </li>
              <li>
                <Link to="/programs?category=ppa" className="hover:text-accent transition-colors">
                  PPA Programs
                </Link>
              </li>
              <li>
                <Link to="/programs?category=eie" className="hover:text-accent transition-colors">
                  EIE Business School
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@uecampus.edu</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Online Education Platform</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} UE Campus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
