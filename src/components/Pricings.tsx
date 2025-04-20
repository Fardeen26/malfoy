"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingCardsProps {
    billingCycle: "monthly" | "yearly"
}

export default function PricingCards({ billingCycle }: PricingCardsProps) {
    // Pricing data for both cycles
    const pricingData = {
        monthly: {
            basic: { price: 1999, label: "/monthly" },
            pro: { price: 9999, label: "/monthly" },
            enterprise: { price: "Custom", label: "" },
        },
        yearly: {
            basic: { price: 19999, label: "/yearly" }, // Example: 19999/year
            pro: { price: 99999, label: "/yearly" },
            enterprise: { price: "Custom", label: "" },
        },
    };
    const data = pricingData[billingCycle];
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Basic Plan */}
            <div className="relative bg-white !text-black rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col h-full transform md:scale-95 md:translate-y-4 transition-all">
                <div className="mb-6">
                    <p className="text-gray-600 mb-1">For individuals</p>
                    <h3 className="text-2xl font-bold">Basic</h3>
                </div>

                <p className="text-gray-600 mb-8">Perfect for individuals and small projects.</p>

                <div className="mb-8">
                    <span className="text-5xl font-bold">{typeof data.basic.price === 'number' ? `$${data.basic.price}` : data.basic.price}</span>
                    <span className="text-gray-500 ml-2">{data.basic.label}</span>
                </div>

                <div className="space-y-4 mb-8">
                    <h4 className="font-medium">What&apos;s included</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                            <span>AI based analytics features</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                            <span>Up to 100,000 records</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                            <span>Normal support</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                            <span>Up to 3 team members</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-auto space-y-4">
                    <Button className="w-full bg-[#1a1a1a] hover:bg-black text-white">Get Started</Button>
                    <div className="text-center">
                        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            {/* Pro Plan - Featured */}
            <div className="relative rounded-2xl p-8 shadow-xl border border-gray-700 flex flex-col h-full z-10 transform scale-105 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#4a4a4a] via-[#3c3c3c] to-[#1a1a1a] z-0"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15),transparent_70%)] z-0"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.05),transparent_60%)] z-0"></div>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)] opacity-75 animate-shimmer-slow z-0"></div>

                <div className="absolute right-8 top-8 z-10">
                    <span className="bg-gray-500/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        Popular
                    </span>
                </div>

                <div className="mb-6 relative z-10">
                    <p className="text-gray-300 mb-1">For startups</p>
                    <h3 className="text-2xl font-bold text-white">Pro</h3>
                </div>

                <p className="text-gray-300 mb-8 relative z-10">
                    Unlock enhanced AI capabilities, priority support, and weekly updates.
                </p>

                <div className="mb-8 relative z-10">
                    <span className="text-5xl font-bold text-white">{typeof data.pro.price === 'number' ? `$${data.pro.price}` : data.pro.price}</span>
                    <span className="text-gray-300 ml-2">{data.pro.label}</span>
                </div>

                <div className="space-y-4 mb-8 relative z-10">
                    <h4 className="font-medium text-white">What&apos;s included</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start text-gray-200">
                            <div className="bg-white/10 rounded-full p-0.5 mr-2 flex-shrink-0">
                                <Check className="h-4 w-4 text-white" />
                            </div>
                            <span>AI based analytics features</span>
                        </li>
                        <li className="flex items-start text-gray-200">
                            <div className="bg-white/10 rounded-full p-0.5 mr-2 flex-shrink-0">
                                <Check className="h-4 w-4 text-white" />
                            </div>
                            <span>Up to 1,000,000 records</span>
                        </li>
                        <li className="flex items-start text-gray-200">
                            <div className="bg-white/10 rounded-full p-0.5 mr-2 flex-shrink-0">
                                <Check className="h-4 w-4 text-white" />
                            </div>
                            <span>Premium support</span>
                        </li>
                        <li className="flex items-start text-gray-200">
                            <div className="bg-white/10 rounded-full p-0.5 mr-2 flex-shrink-0">
                                <Check className="h-4 w-4 text-white" />
                            </div>
                            <span>Up to 10 team members</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-auto relative z-10">
                    <Button className="w-full bg-white hover:bg-gray-100 text-black relative overflow-hidden group">
                        <span className="relative z-10">Get Started</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
                    </Button>
                </div>
            </div>

            {/* Enterprise Plan */}
            <div className="relative bg-white text-black rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col h-full transform md:scale-95 md:translate-y-4 transition-all">
                <div className="mb-6">
                    <p className="text-gray-600 mb-1">For big companies</p>
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                </div>

                <p className="text-gray-600 mb-8">Access the full suite of AI features, 24/7 dedicated support.</p>

                <div className="mb-8">
                    <span className="text-5xl font-bold">{typeof data.enterprise.price === 'number' ? `$${data.enterprise.price}` : data.enterprise.price}</span>
                    <span className="text-gray-500 ml-2">{data.enterprise.label}</span>
                </div>

                <div className="space-y-4 mb-8">
                    <h4 className="font-medium">What&apos;s included</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                            <span>AI based analytics features</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                            <span>Up to 100,000,000 records</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                            <span>Dedicated support</span>
                        </li>
                        <li className="flex items-start">
                            <Check className="h-5 w-5 text-black mr-2 flex-shrink-0" />
                            <span>Up to 50 team members</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-auto space-y-4">
                    <Button className="w-full bg-[#1a1a1a] hover:bg-black text-white">Get Started</Button>
                    <div className="text-center">
                        <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
