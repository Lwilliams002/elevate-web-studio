import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-card/30 to-transparent">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent/20 via-card to-primary/20 border border-border p-8 md:p-12 lg:p-16"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Request a demo, get pricing, or ask for a free statement review. We'll help you find the right payment solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/contact">
                    <span className="flex items-center gap-2">
                      Get a Quote
                      <ArrowRight size={20} />
                    </span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+17542179770">
                    <span className="flex items-center gap-2">
                      <Phone size={20} />
                      Call Us
                    </span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="card-glass p-8 bg-card/80">
              <h3 className="text-xl font-heading font-bold gradient-text-light mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+17542179770"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      +1 (754) 217-9770
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:apexpossolutions@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-background" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      apexpossolutions@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
