import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Star, ArrowRight, Clock, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-card/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, rotateY: -15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass p-8 lg:p-10 bg-background/50 hover:bg-card/90 transition-colors duration-300"
          >
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
              About Apex POS Solutions
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We help businesses accept payments in-store, online, and on the go. From countertop terminals to full POS, Apex POS Solutions focuses on reliability, transparency, and support that actually answers.
            </p>
            <Button variant="hero" asChild>
              <Link to="/about">
                <span className="flex items-center gap-2">
                  Our Story
                  <ArrowRight size={18} />
                </span>
              </Link>
            </Button>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, rotateY: 15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass p-8 lg:p-10 bg-card/80 hover:bg-card/90 transition-colors duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* 24/7 Support */}
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-heading font-bold gradient-text">24</span>
                  <span className="text-2xl font-heading font-bold text-foreground">/7</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Support that's available when you need it—setup help, troubleshooting, and ongoing optimization.
                </p>
              </div>

              <div className="hidden md:flex items-center justify-center">
                <div className="w-px h-full bg-border" />
              </div>

              {/* Fast */}
              <div className="flex flex-col md:col-span-1">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-primary" size={28} />
                  <span className="text-3xl font-heading font-bold gradient-text">Fast</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Next-day funding options and quick onboarding for most businesses.
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground">Trusted by local businesses</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
