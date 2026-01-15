import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Users, 
  Target, 
  Shield, 
  Headphones,
  TrendingUp,
  Heart
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Transparency",
    description: "Clear pricing with no hidden fees. We show you exactly what you pay.",
  },
  {
    icon: Headphones,
    title: "Real Support",
    description: "When you call, a real person answers. Setup help, troubleshooting, and optimization.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focus",
    description: "Tools and insights to help your business grow, not just process payments.",
  },
  {
    icon: Heart,
    title: "Local First",
    description: "We understand local businesses because we partner with them every day.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-radial-bg py-20 lg:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold gradient-text mb-6">
                About Apex POS Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                We help businesses accept payments in-store, online, and on the go. From countertop terminals to full POS, we focus on reliability, transparency, and support that actually answers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  At Apex POS Solutions, we believe every business deserves access to reliable payment processing without the headaches of hidden fees, complicated contracts, or impossible-to-reach support.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We partner with restaurants, retail stores, and service businesses to provide modern POS solutions with SkyTab and Clover—backed by transparent pricing and hands-on support from day one.
                </p>
                <Button variant="hero" asChild>
                  <Link to="/contact">
                    <span className="flex items-center gap-2">
                      Get Started Today
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="card-glass p-6 text-center">
                  <div className="text-4xl font-heading font-bold gradient-text mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <div className="text-4xl font-heading font-bold gradient-text mb-2">500+</div>
                  <p className="text-sm text-muted-foreground">Businesses Served</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <div className="text-4xl font-heading font-bold gradient-text mb-2">Fast</div>
                  <p className="text-sm text-muted-foreground">Next-Day Funding</p>
                </div>
                <div className="card-glass p-6 text-center">
                  <div className="text-4xl font-heading font-bold gradient-text mb-2">0</div>
                  <p className="text-sm text-muted-foreground">Hidden Fees</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-card/30 to-transparent">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                What sets us apart from other payment processors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-glass p-6 text-center hover:bg-card/90 transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <value.icon size={28} className="text-background" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
