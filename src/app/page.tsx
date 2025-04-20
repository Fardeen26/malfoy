"use client"

import BentoLayout from "@/components/BentoGrid";
import CTASection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import CompanyShowcase from "@/components/PartnersShowcase";
import PricingCards from "@/components/Pricings";
import PricingToggle from "@/components/PricingToggle";
import ProductDetails from "@/components/ProductDetails";
import { Hero } from "@/components/ui/animated-hero";
import WhyChooseSection from "@/components/WhyChooseUs";
import { useState } from "react";

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="block">
      <Hero />
      <BentoLayout />
      <WhyChooseSection />
      <CompanyShowcase />
      <ProductDetails />
      <FaqSection />
      <div className="w-full max-w-6xl mx-auto space-y-8 mt-8">
        <h2 className="text-4xl md:text-5xl font-medium text-center">Flexible and <span className="text-lime-400">Transparent Pricing</span> for  <br /> Teams of all sizes</h2>
        <div className="flex justify-center mb-12 mt-12">
          <PricingToggle value={billingCycle} onChange={setBillingCycle} />
        </div>

        <PricingCards billingCycle={billingCycle} />
      </div>
      <div className="px-12 mt-40 mb-16">
        <CTASection />
      </div>
    </div>
  );
}
