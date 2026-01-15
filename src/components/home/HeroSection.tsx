import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CreditCard, Smartphone, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="hero-radial-bg py-20 lg:py-32">
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

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl" />
              
              {/* Main card */}
              <motion.div
                animate={{ y: [-15, 0, -15] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 card-glass p-6 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                    <CreditCard className="text-background" size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold gradient-text-light mb-2">
                    Smart POS
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Accept payments anywhere with modern terminals
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary border-2 border-card"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">500+ businesses</span>
                </div>
              </motion.div>

              {/* Floating small card - left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-10 left-0 w-40 h-24 card-glass p-4 flex items-center gap-3 shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0">
                  <Smartphone size={20} className="text-background" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Mobile Ready</p>
                  <p className="text-sm font-semibold text-foreground">On-the-go</p>
                </div>
              </motion.div>

              {/* Floating small card - right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-0 w-40 h-24 card-glass p-4 flex items-center gap-3 shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                  <Shield size={20} className="text-background" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Secure</p>
                  <p className="text-sm font-semibold text-foreground">24/7 Support</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
