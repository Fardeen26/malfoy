import { realData } from "@/lib/realData";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PricingSection() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 py-10 text-white px-4">
            {realData.pricing.plans.map((plan) => (
                <div
                    key={plan.name}
                    className={`w-full md:w-80 rounded-3xl p-6 flex flex-col ${plan.label === 'Popular' ? 'bg-blue-600 text-blue-50 transform md:scale-105 z-10' : 'bg-gray-800'}`}
                >
                    <h2 className="text-xl font-bold mb-2">{plan.name}</h2>
                    <div className="flex items-baseline mb-4">
                        <span className="text-5xl font-bold">{plan.price_monthly}</span>
                        <span className="text-gray-400 ml-1">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                        {plan.included.map((item, i) => (
                            <li key={i} className="flex items-center">
                                <div className={`w-5 h-5 rounded-full mr-2 ${plan.label === 'Popular' ? 'bg-white' : 'bg-blue-500'}`}></div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-2 mb-2">
                        {plan.ctas.map((cta, i) => (
                            <button
                                key={i}
                                className={`py-3 px-6 rounded-full flex items-center justify-center ${plan.label === 'Popular' ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'}`}
                            >
                                {cta}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>
                        ))}
                    </div>
                    {plan.note && (
                        <div className="text-xs text-gray-300 mt-2">{plan.note}</div>
                    )}
                </div>
            ))}
        </div>
    );
}