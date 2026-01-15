import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Monitor, Star } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Transparent Pricing",
    description: "Clear rates, no surprises. We'll review your current statement and show your true effective rate.",
  },
  {
    icon: DollarSign,
    title: "Fast Funding",
    description: "Get paid faster with dependable deposits and options that fit your cash flow.",
  },
  {
    icon: Monitor,
    title: "POS & Terminals",
    description: "From simple terminals to full POS—built for restaurants, retail, and service businesses.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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

export const FeaturesSection = () => {
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
            Everything You Need to Take Payments
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple card processing with the tools to grow—transparent pricing, modern hardware, and reporting that helps you understand every sale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card-glass p-8 h-full text-center hover:bg-card/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={40} className="text-background" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
