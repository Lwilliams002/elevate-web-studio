import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check,
  UtensilsCrossed,
  ShoppingBag,
  Briefcase,
  Monitor,
  Users,
  BarChart3,
  Globe,
  Printer,
  Clock
} from "lucide-react";

const skytabFeatures = [
  { icon: Monitor, title: "Tables & Floorplan", description: "Manage dine-in service with table tracking, split checks, and quick seat moves." },
  { icon: UtensilsCrossed, title: "Modifiers & Combos", description: "Build menus with modifiers, upcharges, combos, and prep notes for accuracy." },
  { icon: BarChart3, title: "Menu & Item Reporting", description: "See top sellers, voids, discounts, and sales trends by item and category." },
  { icon: Globe, title: "Online Ordering", description: "Offer takeout and pickup ordering with a smooth checkout experience." },
  { icon: Printer, title: "Kitchen Display/Printers", description: "Route tickets to stations and reduce mistakes during rush hours." },
  { icon: Users, title: "Staff Management", description: "Roles, permissions, and shift tools to keep operations consistent." },
];

const cloverFeatures = [
  { icon: ShoppingBag, title: "Inventory Tracking", description: "Track stock levels, set alerts, and manage products with ease." },
  { icon: Users, title: "Employee Management", description: "Time tracking, permissions, and performance insights." },
  { icon: BarChart3, title: "Analytics & Reports", description: "Detailed sales reports, trends, and business insights." },
  { icon: Globe, title: "E-commerce Ready", description: "Connect online and in-store inventory seamlessly." },
  { icon: Clock, title: "Appointment Booking", description: "Built-in scheduling for service businesses." },
  { icon: Monitor, title: "Flexible Hardware", description: "From handheld to countertop—choose what fits your space." },
];

const Solutions = () => {
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
                Our Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Two proven POS options—SkyTab for restaurants and Clover for retail & services. We'll help you choose the right fit and get you live fast.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SkyTab Section */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <UtensilsCrossed className="text-primary" size={32} />
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                  SkyTab for Restaurants
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Restaurant-first features designed to speed up ordering, improve accuracy, and keep the kitchen flowing.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {skytabFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-glass p-6 hover:bg-card/90 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <feature.icon size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    Request a SkyTab Demo
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Clover Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-card/30 to-transparent">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <ShoppingBag className="text-primary" size={32} />
                <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text">
                  Clover for Retail & Services
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Versatile POS solutions for retail stores, service businesses, and professional offices.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {cloverFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-glass p-6 hover:bg-card/90 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <feature.icon size={24} className="text-background" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    Request a Clover Demo
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
