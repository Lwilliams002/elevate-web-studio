import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="relative z-50">
      <nav className="container mx-auto py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <span className="text-xl font-bold text-background">A</span>
              </div>
              <span className="text-xl font-heading font-bold gradient-text">
                Apex POS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button variant="hero" asChild>
              <Link to="/contact">
                <span>Get a Quote</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary border-2 border-primary rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg border-b border-border"
          >
            <div className="container py-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-lg font-medium py-2 transition-colors duration-200 hover:text-primary ${
                        location.pathname === link.path
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-col gap-3 text-muted-foreground mb-4">
                  <a href="tel:+17542179770" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone size={16} />
                    <span>+1 (754) 217-9770</span>
                  </a>
                  <a href="mailto:apexpossolutions@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail size={16} />
                    <span>apexpossolutions@gmail.com</span>
                  </a>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>Mon–Sat • 9AM–6PM</span>
                  </span>
                </div>
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <span>Get a Quote</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
