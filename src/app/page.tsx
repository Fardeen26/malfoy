import BentoLayout from "@/components/BentoGrid";
import CTASection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import PricingSection from "@/components/Pricings";
import ProductDetails from "@/components/ProductDetails";
import { Hero } from "@/components/ui/animated-hero";
import WhyChooseSection from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="block">
      <Hero />
      <BentoLayout />
      <WhyChooseSection />
      <ProductDetails />
      <FaqSection />
      <PricingSection />
      <div className="px-4">
        <CTASection />
      </div>

    </div>
  );
}
