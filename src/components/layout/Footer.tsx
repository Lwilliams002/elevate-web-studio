import { Link } from "react-router-dom";
import { Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Contact", path: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="footer-radial-bg pt-20 pb-8">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <span className="text-xl font-bold text-background">A</span>
              </div>
              <span className="text-xl font-heading font-bold gradient-text">
                Apex POS Solutions
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Helping restaurants, retail, and service businesses accept payments fast—with transparent pricing, modern POS options, and hands-on support.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-secondary hover:text-foreground transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold gradient-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold gradient-text mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+17542179770"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  <span>+1 (754) 217-9770</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:apexpossolutions@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span>apexpossolutions@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Clock size={16} />
                <span>Mon–Sat • 9AM–6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Apex POS Solutions. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
