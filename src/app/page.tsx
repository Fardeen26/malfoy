import BentoLayout from "@/components/BentoGrid";
import { Hero } from "@/components/ui/animated-hero";
import WhyChooseSection from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="block">
      <Hero />
      <BentoLayout />
      <WhyChooseSection />
    </div>
  );
}
