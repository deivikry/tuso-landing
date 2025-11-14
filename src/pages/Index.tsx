import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ScreenshotsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
