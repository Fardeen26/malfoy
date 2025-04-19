// components/FaqSection.tsx
'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FaqItem {
    question: string;
    answer: string;
    defaultOpen?: boolean;
}

const faqItems: FaqItem[] = [
    {
        question: "What is AI‑Powered Pricing Intelligence?",
        answer: "It's a platform that uses artificial intelligence to track competitors, simulate pricing strategies, predict demand, and automate profitable decisions—all in one place."
    },
    {
        question: "How does competitor price tracking work?",
        answer: "Our platform monitors competitor prices across multiple channels in real time, providing you with actionable insights and AI-driven recommendations to stay ahead in the market."
    },
    {
        question: "Can I test pricing strategies before going live?",
        answer: "Yes! You can run advanced pricing simulations in a risk-free sandbox to predict revenue impact and optimize your strategies before making changes public.",
        defaultOpen: true
    },
    {
        question: "What integrations are available?",
        answer: "We support seamless integrations with major marketplaces and tools like Amazon, Flipkart, Shopify, and more, so you can automate price updates and workflows easily."
    },
    {
        question: "How does automated dynamic pricing work?",
        answer: "You can set intelligent pricing rules based on demand, seasonality, and competition. The platform automates price updates through API integrations, saving you time and maximizing profit."
    },
    {
        question: "Is this platform suitable for teams of all sizes?",
        answer: "Absolutely! Our flexible plans and custom dashboards provide value for individuals, small teams, and large enterprises alike."
    },
    {
        question: "How does AI help predict demand and revenue?",
        answer: "Our AI models forecast how price changes will affect sales volume and revenue, helping you plan and make data-driven decisions with confidence."
    },
];

const FaqSection = () => {
    const [openItem, setOpenItem] = useState<number | null>(2); // Default open third item

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-16 bg-black text-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-center">
                    Everything you need to know about our AI-powered pricing platform.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-xl overflow-hidden ${openItem === index
                            ? 'bg-neutral-900 border border-neutral-800'
                            : 'bg-neutral-900/80 border border-neutral-800/50 hover:border-neutral-800'
                            }`}
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between p-5 text-left"
                        >
                            <span className="text-gray-200 font-medium">{item.question}</span>
                            {openItem === index ? (
                                <X className="w-5 h-5 text-gray-400" />
                            ) : (
                                <Plus className="w-5 h-5 text-gray-400" />
                            )}
                        </button>

                        {openItem === index && (
                            <div className="p-5 pt-0 text-gray-400">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FaqSection;