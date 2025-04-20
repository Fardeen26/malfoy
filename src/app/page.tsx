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
import { realData } from "@/lib/realData";
import { useState } from "react";

function AdvancedFeaturesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced Features</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {realData.advanced_features.map((feature, idx) => (
          <div key={idx} className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 rounded-xl p-6 flex flex-col items-start">
            <h3 className="text-2xl font-bold mb-2 text-lime-300">{feature.title}</h3>
            <p className="text-gray-300 mb-4">{feature.description}</p>
            <button className="mt-auto bg-lime-400 text-black rounded-full px-6 py-2 font-semibold">{feature.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="block">
      <Hero />
      <BentoLayout />
      <WhyChooseSection />
      <CompanyShowcase />
      <AdvancedFeaturesSection />
      <ProductDetails />
      <FaqSection />
      <div className="w-full max-w-6xl mx-auto space-y-8">
        <div className="flex justify-center mb-8">
          <PricingToggle value={billingCycle} onChange={setBillingCycle} />
        </div>

        <PricingCards billingCycle={billingCycle} />
      </div>
      <div className="px-4">
        <CTASection />
      </div>
    </div>
  );
}
