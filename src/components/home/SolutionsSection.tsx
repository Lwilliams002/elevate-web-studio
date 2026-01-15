import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  UtensilsCrossed, 
  ShoppingBag, 
  Briefcase, 
  ArrowRight,
  Check
} from "lucide-react";

const solutions = [
  {
    icon: UtensilsCrossed,
    title: "SkyTab for Restaurants",
    description: "Restaurant-first POS with table management, modifiers, kitchen routing, and online ordering.",
    features: ["Table & Floorplan Management", "Kitchen Display System", "Online Ordering", "Staff Management"],
  },
  {
    icon: ShoppingBag,
    title: "Clover for Retail",
    description: "Versatile POS for retail with inventory tracking, employee management, and detailed reporting.",
    features: ["Inventory Tracking", "Employee Management", "Customer Loyalty", "E-commerce Integration"],
  },
  {
    icon: Briefcase,
    title: "Clover for Services",
    description: "Streamlined payments for service businesses with appointment scheduling and invoicing.",
    features: ["Appointment Booking", "Mobile Payments", "Invoicing", "Recurring Billing"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const SolutionsSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-6">
            Solutions for Every Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Two proven POS options—SkyTab for restaurants and Clover for retail & services. We'll help you choose the right fit.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card-glass p-8 h-full flex flex-col hover:bg-card/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2">
                <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <solution.icon size={32} className="text-background" />
                </div>
                
                <h3 className="text-xl font-heading font-bold gradient-text-light mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-accent group-hover:to-primary group-hover:border-transparent transition-all" asChild>
                  <Link to="/contact">
                    <span className="flex items-center gap-2">
                      Learn More
                      <ArrowRight size={16} />
                    </span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
