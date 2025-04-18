// components/BentoLayout.tsx
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
        <div className={`rounded-xl border border-lime-600/20 bg-black/40 backdrop-blur-sm p-6 flex flex-col ${className}`}>
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-300 mb-4">{description}</p>
            {children}
        </div>
    );
};

export const BentoLayout = () => {
    const [activeTab, setActiveTab] = useState<'skip' | 'read' | 'deep-dive'>('skip');

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12">
            {/* Hero Heading */}
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="text-white">The Fastest Way to</span>
                    <br />
                    <span className="text-lime-100">Understand Anything</span>
                </h1>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Skim Smarter */}
                <BentoCard
                    title="Skim Smarter"
                    description="Quickly see the structure of the page and focus only on what matters most."
                    className="bg-black/70"
                >
                    <div className="mt-auto">
                        <div className="flex gap-4 mt-4">
                            <button
                                onClick={() => setActiveTab('skip')}
                                className={`rounded-full px-4 py-2 flex items-center ${activeTab === 'skip' ? 'bg-lime-400 text-black' : 'bg-gray-800 text-gray-300'
                                    }`}
                            >
                                <span className="mr-2 h-3 w-3 rounded-full bg-current"></span>
                                Skip
                            </button>
                            <button
                                onClick={() => setActiveTab('read')}
                                className={`rounded-full px-4 py-2 flex items-center ${activeTab === 'read' ? 'bg-lime-400 text-black' : 'bg-gray-800 text-gray-300'
                                    }`}
                            >
                                <span className="mr-2 h-3 w-3 rounded-full bg-current"></span>
                                Read
                            </button>
                        </div>
                        <button
                            onClick={() => setActiveTab('deep-dive')}
                            className={`rounded-full px-4 py-2 flex items-center mt-4 ${activeTab === 'deep-dive' ? 'bg-lime-400 text-black' : 'bg-gray-800 text-gray-300'
                                }`}
                        >
                            <span className="mr-2 h-3 w-3 rounded-full bg-current"></span>
                            Deep Dive
                        </button>
                    </div>
                </BentoCard>

                {/* Instant Summaries */}
                <BentoCard
                    title="Instant Summaries"
                    description="Get the key points without reading every sentence or scrolling endlessly."
                >
                    <div className="bg-black/80 rounded-lg p-4 mt-4 border border-lime-500/20">
                        <div className="flex items-start">
                            <div className="bg-lime-400 text-black p-1 rounded mr-3">
                                <Lightbulb size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white text-lg">Article Summary</h3>
                                <p className="text-gray-300 text-sm mt-1">
                                    Tachyo transforms how you read online by highlighting what matters most, enabl{/* truncated in image */}
                                </p>
                            </div>
                        </div>
                    </div>
                </BentoCard>

                {/* Ask Anything */}
                <BentoCard
                    title="Ask Anything"
                    description="Ask a question mid-article and get instant, relevant responses in context."
                >
                    <div className="flex items-center justify-between bg-black/80 rounded-lg border border-lime-500/20 mt-4 p-3">
                        <div className="text-gray-300">Where can I access this tool?</div>
                        <button className="bg-lime-400 text-black rounded-full p-2">
                            <ArrowUpRight size={20} />
                        </button>
                    </div>
                </BentoCard>

                {/* Auto-Fill Context */}
                <BentoCard
                    title="Auto-Fill Context"
                    description="Tachyo explains unfamiliar ideas instantly so you stay focused."
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
                                        refers to how much your brain is juggling at once while trying to understand somethin{/* truncated in image */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 text-gray-300">
                            <p>
                                In today&apos;s fast-paced digital world, the amount of information we consume can quickly lead to high
                                <span className="text-lime-300 font-semibold"> cognitive load</span>. This term refers to the mental
                                effort required to process and retain information. As we juggle multiple tasks, tabs, and sources of content, our
                                brains become overloaded.
                            </p>
                        </div>
                    </div>
                </BentoCard>

                {/* Works in Your Browser */}
                <BentoCard
                    title="Works in Your Browser"
                    description="No need to switch apps or copy-paste text — it just works wherever you read."
                >
                    <div className="mt-auto">
                        <div className="border border-gray-700 rounded-lg overflow-hidden mt-4">
                            <div className="bg-gray-900 flex items-center p-2">
                                <div className="flex space-x-2 mr-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="flex-1 flex items-center justify-center relative">
                                    <span className="text-gray-300 text-sm flex items-center">
                                        <svg className="w-4 h-4 mr-1 text-lime-400" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                        </svg>
                                        tachyo
                                    </span>
                                    <button className="absolute right-0 text-gray-400">×</button>
                                </div>
                            </div>
                            <div className="bg-gray-800 p-2 flex items-center">
                                <button className="text-gray-400 mx-1">◀</button>
                                <button className="text-gray-400 mx-1">▶</button>
                                <button className="text-gray-400 mx-1">⟳</button>
                                <div className="flex-1 bg-gray-900 mx-2 px-2 py-1 rounded text-gray-300 text-sm flex items-center">
                                    <span className="mr-1">🔒</span>
                                    https://www.tachyo.ai
                                </div>
                                <div className="text-lime-400">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </BentoCard>
            </div>
        </div>
    );
};

export default BentoLayout;