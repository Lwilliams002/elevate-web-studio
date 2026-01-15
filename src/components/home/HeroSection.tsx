import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Smartphone, Shield } from "lucide-react";
import skytabImage from "@/assets/skytab-pos.webp";

export const HeroSection = () => {
  return (
    <section className="hero-radial-bg py-20 lg:py-32 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold leading-tight tracking-tight gradient-text mb-6">
              Payments That Power Your Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              POS systems, card processing, and business tools built for restaurants, retail, and service companies. Fast setup, fair pricing, and real support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/solutions" className="text-primary hover:text-primary/80">
                  View Solutions
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Content - SkyTab Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl scale-110" />
              
              {/* Main SkyTab Image */}
              <motion.div
                animate={{ y: [-10, 5, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src={skytabImage} 
                  alt="SkyTab POS System" 
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating small card - top left */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -left-4 lg:-left-8 w-36 lg:w-44 card-glass p-3 lg:p-4 flex items-center gap-3 shadow-xl z-20"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0">
                  <Smartphone size={18} className="text-background" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-muted-foreground">Mobile Ready</p>
                  <p className="text-xs lg:text-sm font-semibold text-foreground">On-the-go</p>
                </div>
              </motion.div>

              {/* Floating small card - bottom right */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 lg:-right-8 w-36 lg:w-44 card-glass p-3 lg:p-4 flex items-center gap-3 shadow-xl z-20"
              >
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <Shield size={18} className="text-background" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-muted-foreground">Secure</p>
                  <p className="text-xs lg:text-sm font-semibold text-foreground">24/7 Support</p>
                </div>
              </motion.div>

              {/* Stats badge - top right */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 -right-2 lg:right-0 card-glass px-4 py-2 shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <CreditCard size={16} className="text-primary" />
                  <span className="text-xs lg:text-sm font-semibold text-foreground">500+ Businesses</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
