import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin,
  Send
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Request a POS demo, get monthly pricing for SkyTab or Clover, or ask for a free statement review. We'll respond fast.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Info Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-accent to-primary p-8 lg:p-10 rounded-3xl text-background"
              >
                <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-6">
                  How Can We Help?
                </h2>
                <p className="mb-8 opacity-90">
                  Tell us what you need—new POS, better processing rates, online payments, or help switching. We'll recommend the right setup for your business.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="opacity-90">Serving businesses nationwide</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+17542179770" className="opacity-90 hover:opacity-100 transition-opacity">
                        +1 (754) 217-9770
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:apexpossolutions@gmail.com" className="opacity-90 hover:opacity-100 transition-opacity">
                        apexpossolutions@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-semibold">Operating Hours</p>
                      <p className="opacity-90">Monday to Saturday<br />9:00am to 6:00pm</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card-glass p-8 lg:p-10"
              >
                <h2 className="text-2xl font-heading font-bold gradient-text-light mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border focus:border-primary h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background/50 border-border focus:border-primary h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border focus:border-primary h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <span className="flex items-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={20} />
                    </span>
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
