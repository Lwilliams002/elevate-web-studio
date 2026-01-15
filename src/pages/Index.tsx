import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <SolutionsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
