import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

          {/* Right Card - Integrations */}
          <motion.div
            initial={{ opacity: 0, rotateY: 15 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass p-8 lg:p-10 bg-card/80 hover:bg-card/90 transition-colors duration-300 overflow-hidden"
          >
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-2">
              Seamless Integrations
            </h3>
            <p className="text-muted-foreground mb-6">
              Connect your POS with the platforms your customers already use.
            </p>

            {/* Integration Carousel */}
            <div className="relative">
              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card/80 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card/80 to-transparent z-10" />
              
              {/* Scrolling container */}
              <div className="flex gap-6 animate-scroll">
                {/* First set of icons */}
                {[
                  { name: "UberEats", icon: "🍔", color: "bg-green-500/20" },
                  { name: "DoorDash", icon: "🚗", color: "bg-red-500/20" },
                  { name: "Grubhub", icon: "🍕", color: "bg-orange-500/20" },
                  { name: "Postmates", icon: "📦", color: "bg-blue-500/20" },
                  { name: "Toast", icon: "🍞", color: "bg-amber-500/20" },
                  { name: "Square", icon: "⬜", color: "bg-slate-500/20" },
                  { name: "QuickBooks", icon: "📊", color: "bg-emerald-500/20" },
                  { name: "Yelp", icon: "⭐", color: "bg-red-500/20" },
                ].map((integration, index) => (
                  <div
                    key={`first-${index}`}
                    className={`flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl ${integration.color} border border-border/50 min-w-[100px]`}
                  >
                    <span className="text-3xl mb-2">{integration.icon}</span>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                      {integration.name}
                    </span>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { name: "UberEats", icon: "🍔", color: "bg-green-500/20" },
                  { name: "DoorDash", icon: "🚗", color: "bg-red-500/20" },
                  { name: "Grubhub", icon: "🍕", color: "bg-orange-500/20" },
                  { name: "Postmates", icon: "📦", color: "bg-blue-500/20" },
                  { name: "Toast", icon: "🍞", color: "bg-amber-500/20" },
                  { name: "Square", icon: "⬜", color: "bg-slate-500/20" },
                  { name: "QuickBooks", icon: "📊", color: "bg-emerald-500/20" },
                  { name: "Yelp", icon: "⭐", color: "bg-red-500/20" },
                ].map((integration, index) => (
                  <div
                    key={`second-${index}`}
                    className={`flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl ${integration.color} border border-border/50 min-w-[100px]`}
                  >
                    <span className="text-3xl mb-2">{integration.icon}</span>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                      {integration.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6 text-center">
              + 50 more delivery & business integrations
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
