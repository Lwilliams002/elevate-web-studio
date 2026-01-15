import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Brand SVG Icons as components
const UberEatsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#06C167">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.6 7.2h1.2v4.8h2.4v1.2h-3.6V7.2zm-4.2 0h1.2v4.8c0 .99.81 1.8 1.8 1.8s1.8-.81 1.8-1.8V7.2h1.2v4.8c0 1.654-1.346 3-3 3s-3-1.346-3-3V7.2z"/>
  </svg>
);

const DoorDashIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF3008">
    <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 110 3.108H8.632a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.515h4.001a6.097 6.097 0 005.886-7.41z"/>
  </svg>
);

const GrubhubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F63440">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 16.5c-1.5 1.5-3.5 2-5.5 2s-4-.5-5.5-2c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 1.2 1.2 2.8 1.6 4.4 1.6s3.2-.4 4.4-1.6c.3-.3.8-.3 1.1 0 .3.3.3.8-.1 1.1zM8 10c-.8 0-1.5-.7-1.5-1.5S7.2 7 8 7s1.5.7 1.5 1.5S8.8 10 8 10zm8 0c-.8 0-1.5-.7-1.5-1.5S15.2 7 16 7s1.5.7 1.5 1.5S16.8 10 16 10z"/>
  </svg>
);

const PostmatesIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FFDF00">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16 8 8 0 010-16zm0 2a6 6 0 100 12 6 6 0 000-12z"/>
  </svg>
);

const ToastIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF6633">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm6 8h-4v-6h4v6zm0-8h-4V7h4v2z"/>
  </svg>
);

const SquareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3E4348">
    <path d="M4.01 0A3.999 3.999 0 000 4.01v15.98C0 22.2 1.8 24 4.01 24h15.98C22.2 24 24 22.2 24 19.99V4.01C24 1.8 22.2 0 19.99 0zm11.665 5.605h2.048c.316 0 .573.256.573.573v11.644a.573.573 0 01-.573.573H6.277a.573.573 0 01-.573-.573V6.178c0-.317.256-.573.573-.573h9.398z"/>
  </svg>
);

const QuickBooksIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#2CA01C">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9.6 16.8H7.2V7.2h2.4v9.6zm7.2-4.8h-2.4v4.8h-2.4V7.2h4.8v4.8z"/>
  </svg>
);

const YelpIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#D32323">
    <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.09-.154-.12-.314-.333-2.089-3.108l-.99-1.556c-.181-.292-.239-.594-.163-.849.088-.292.319-.52.65-.637l2.507-.902c2.726-.973 2.818-1.001 3.028-.977.3.036.511.208.617.503.054.144.414 2.767.319 3.769zM14.039 9.768l1.031-2.415c1.139-2.68 1.188-2.787 1.346-2.934.23-.206.529-.247.815-.113.234.108 2.727 2.063 3.173 2.996.155.323.161.617.017.849-.091.147-.291.364-3.156 2.008l-1.555.894c-.273.163-.565.213-.824.149-.296-.073-.534-.277-.673-.579-.12-.251-.208-.565-.174-.855zM10.048 7.333V4.2c0-3.141.032-3.25.116-3.455.116-.292.346-.443.664-.443.256 0 3.606.781 4.393 1.228.268.152.444.387.492.659.031.172-.015.57-1.313 3.394l-1.102 2.428c-.129.281-.341.467-.61.536-.24.063-.502.027-.738-.098l-1.473-.791c-.193-.103-.354-.227-.429-.258z"/>
  </svg>
);

const integrations = [
  { name: "UberEats", Icon: UberEatsIcon },
  { name: "DoorDash", Icon: DoorDashIcon },
  { name: "Grubhub", Icon: GrubhubIcon },
  { name: "Postmates", Icon: PostmatesIcon },
  { name: "Toast", Icon: ToastIcon },
  { name: "Square", Icon: SquareIcon },
  { name: "QuickBooks", Icon: QuickBooksIcon },
  { name: "Yelp", Icon: YelpIcon },
];

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
                {integrations.map((integration, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl bg-background/50 min-w-[100px] hover:bg-background/70 transition-colors"
                  >
                    <div className="mb-2">
                      <integration.Icon />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                      {integration.name}
                    </span>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {integrations.map((integration, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 flex flex-col items-center justify-center p-4 rounded-xl bg-background/50 min-w-[100px] hover:bg-background/70 transition-colors"
                  >
                    <div className="mb-2">
                      <integration.Icon />
                    </div>
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
