'use client';

import { useState } from 'react';
import { ArrowUpRight, Lightbulb } from 'lucide-react';

interface BentoCardProps {
    title: string;
    description: string;
    className?: string;
    children?: React.ReactNode;
}

const BentoCard = ({ title, description, className = "", children }: BentoCardProps) => {
    return (
        <div
            className={`relative rounded-2xl border border-lime-300/15 bg-gradient-to-br from-black/60 via-neutral-900/70 to-black/80 shadow-xl shadow-lime-900/10 backdrop-blur-md p-6 flex flex-col overflow-hidden group transition-shadow duration-300 hover:shadow-2xl ${className}`}
            style={{
                background:
                    "radial-gradient(circle, rgba(180, 236, 81, 0.8) 0%, rgba(66, 147, 33, 0.4) 40%, transparent 70%)",
                // filter: "blur(20px)",
            }}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            >
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-32 sm:h-40 md:h-48 lg:h-56 rounded-b-2xl"
                    style={{
                        background: "radial-gradient(ellipse at center bottom, #b4ec51 0%, #429321 40%, transparent 80%)",
                        opacity: 0.45,
                        filter: "blur(8px)"
                    }}
                />
            </div>
            <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
                <p className="text-gray-300 mb-4">{description}</p>
                {children}
            </div>
        </div>
    );
};

export const BentoLayout = () => {
    const [activeTab] = useState<'skip' | 'read' | 'deep-dive'>('skip');

    return (
        <div className="w-full max-w-6xl mx-auto mt-16 px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-medium mb-6">
                    <span className="text-white">Monitor and Optimize Pricing</span>
                    <br />
                    <span className="text-lime-100"> at Any Scale</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BentoCard
                    title="Competitive Intelligence"
                    description="Track competitor prices across multiple channels in real time and get AI-driven recommendations to stay ahead in the market."
                    className="bg-black/70"
                >
                    <div className="mt-auto">
                        <div className="flex gap-4 mt-4">
                            <button
                                className={`rounded-full px-4 py-2 text-sm flex items-center ${activeTab === 'skip' ? 'bg-lime-400 text-black' : 'bg-gray-800 text-gray-300'}`}
                            >
                                <span className="mr-2 h-3 w-3 rounded-full bg-current"></span>
                                Track
                            </button>
                            <button
                                className={`rounded-full px-4 py-2 text-sm flex items-center ${activeTab === 'read' ? 'bg-lime-400 text-black' : 'bg-gray-800 text-gray-300'}`}
                            >
                                <span className="mr-2 h-3 w-3 rounded-full bg-current"></span>
                                AI
                            </button>
                        </div>
                        <button
                            className={`rounded-full px-4 py-2 text-sm flex items-center mt-4 ${activeTab === 'deep-dive' ? 'bg-lime-400 text-black' : 'bg-gray-800 text-gray-300'}`}
                        >
                            <span className="mr-2 h-3 w-3 rounded-full bg-current"></span>
                            Lead
                        </button>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Pricing Simulations"
                    description="Run advanced pricing simulations in a risk-free sandbox to predict revenue impact and optimize strategies before going live."
                >
                    <div className="bg-black/80 rounded-lg p-4 mt-4 border border-lime-500/20">
                        <div className="flex items-start">
                            <div className="bg-lime-400 text-black p-1 rounded mr-3">
                                <Lightbulb size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg">Sandbox</h3>
                                <p className="text-gray-300 text-sm mt-1">
                                    Test risk-free.
                                </p>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Automated Dynamic Pricing"
                    description="Set intelligent pricing rules based on demand, seasonality, competition, and automate price updates seamlessly through API integrations."
                >
                    <div className="flex items-center justify-between bg-black/80 rounded-lg border border-lime-500/20 mt-4 p-3">
                        <div className="text-gray-300">Where can I access this tool?</div>
                        <button className="bg-lime-400 text-black rounded-full p-2">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Easy to Integrate"
                    description="Add two lines of code to your script and automatically start tracking code, hyperparameters, metrics, and more, so you can compare and reproduce training runs."
                    className="col-span-1 md:col-span-1 lg:col-span-2"
                >
                    <div className="mt-4">
                        <div className="bg-black/80 rounded-lg p-4 border border-lime-500/20 max-w-md">
                            <div className="flex items-start">
                                <div className="bg-lime-500/20 text-lime-400 p-1 rounded mr-3">
                                    <span className="font-mono">+</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Cognitive Load</h3>
                                    <p className="text-gray-300 text-sm mt-1">
                                        refers to how much your brain is juggling at once while trying to understand somethin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                <BentoCard
                    title="Build your own visualizations"
                    description="Create custom dashboards to surface the metrics that matter most for your business."
                >
                </BentoCard>
            </div>
        </div>
    );
};

export default BentoLayout;