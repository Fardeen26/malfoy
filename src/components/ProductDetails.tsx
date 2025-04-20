"use client"

// PortfolioSection.tsx
import React from 'react';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const cardBase =
    'relative rounded-2xl border border-lime-300/15 bg-gradient-to-br from-black/60 via-neutral-900/70 to-black/80 shadow-xl shadow-lime-900/10 backdrop-blur-md p-6 flex flex-col overflow-hidden group transition-all duration-300';
const cardHover =
    'hover:shadow-2xl hover:scale-[1.025]';
const overlayBase =
    'pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500';

export default function ProductDetails() {
    return (
        <div className="w-full max-w-6xl mx-auto py-10 mt-12 px-4">
            <h2 className='text-center text-4xl md:text-5xl font-medium mb-12'>AI Based <span className='text-lime-100'> Pricing strategy & automation </span> that provides value to your entire team</h2>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`mb-8 max-h-[50vh] flex flex-col lg:flex-row gap-8 ${cardBase} ${cardHover}`}
            >
                <div className={overlayBase + ' z-0'}>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-32 sm:h-40 md:h-48 lg:h-56 rounded-b-2xl"
                        style={{
                            background: "radial-gradient(ellipse at center bottom, #b4ec51 0%, #429321 40%, transparent 80%)",
                            opacity: 0.45,
                            filter: "blur(8px)"
                        }}
                    />
                </div>
                <div className="relative z-10 w-full lg:w-1/2">
                    <Image
                        src="https://framerusercontent.com/images/03xxzX7tFg0pOAnRQNPl0JkpYQ.jpg?scale-down-to=2048"
                        alt="Cluely AI Assistant Website"
                        width={600}
                        height={400}
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>
                <div className="relative z-10 w-full lg:w-1/2">
                    <h2 className="text-3xl font-medium text-white mb-4">Competitive Intelligence & Agentic AI Workflows</h2>
                    <p className="text-gray-300 text-sm text-shadow-amber-600 mb-6">
                        Outprice competitors with insights and fully automated pricing workflows in real-time.
                    </p>
                    <ul className="space-y-3 mb-6">
                        {[
                            "AI monitors competitors & adjusts prices without manual effort",
                            "AI tracks prices, stock levels & discounts 24/7 to keep you ahead",
                            "Marketplace AI optimizes pricing for Amazon, Flipkart & Shopify"
                        ].map((text, idx) => {
                            const match = text.match(/^(.*?)( without| to | for |$)/);
                            const bold = match ? match[1] : text;
                            const rest = match ? text.slice(bold.length) : '';
                            return (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="mt-0.5 text-lime-400 flex-shrink-0" size={22} />
                                    <span className="text-sm text-gray-900 dark:text-gray-100">
                                        <span className="font-semibold text-white dark:text-white">{bold}</span>
                                        <span className="text-white dark:text-gray-300">{rest}</span>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-auto">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">REAL-TIME PRICING</Badge>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                className={`flex max-h-[50vh] flex-col lg:flex-row gap-8 ${cardBase} ${cardHover}`}
            >
                <div className={overlayBase + ' z-0'}>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-32 sm:h-40 md:h-48 lg:h-56 rounded-b-2xl"
                        style={{
                            background: "radial-gradient(ellipse at center bottom, #b4ec51 0%, #429321 40%, transparent 80%)",
                            opacity: 0.45,
                            filter: "blur(8px)"
                        }}
                    />
                </div>
                <div className="relative z-10 w-full lg:w-5/12">
                    <h2 className="text-3xl font-medium text-white mb-4">Competitive pricing</h2>
                    <p className="text-gray-300 text-sm mb-6">
                        Instantly recover lost revenue from pricing misalignment. &quot;A competitor cut prices and our conversions halved in 48 hours before we could react.&quot; &ldquo;Last week, we missed an 8% price hike by competitors and left $45K in revenue unclaimed.&quot;
                    </p>
                    <ul className="space-y-3 mb-6">
                        {[
                            "AI forecasts needs and proposes ideal rates based on patterns",
                            "Radically shorten decision cycles by replacing slow, manual pilots"
                        ].map((text, idx) => {
                            const match = text.match(/^(.*?)( eliminating| by |$)/);
                            const bold = match ? match[1] : text;
                            const rest = match ? text.slice(bold.length) : '';
                            return (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="mt-0.5 text-lime-400 flex-shrink-0" size={22} />
                                    <span className="text-sm text-white dark:text-white">
                                        <span className="font-semibold text-white dark:text-white">{bold}</span>
                                        <span className="text-white dark:text-gray-300">{rest}</span>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-auto">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">SIMULATION SANDBOX</Badge>
                    </div>
                </div>
                <div className="relative z-10 w-full lg:w-7/12 flex items-stretch">
                    <div className="rounded-2xl w-full h-64 lg:h-auto overflow-hidden flex">
                        <Image
                            src="https://framerusercontent.com/images/1EY5dm2pCffnWp7vri4BSg4DRw.jpg?scale-down-to=1024"
                            alt="Helicon App Mockups"
                            width={700}
                            height={500}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center' }}
                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                className={`mt-8 max-h-[50vh] flex flex-col lg:flex-row gap-8 ${cardBase} ${cardHover}`}
            >
                <div className={overlayBase + ' z-0'}>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] h-32 sm:h-40 md:h-48 lg:h-56 rounded-b-2xl"
                        style={{
                            background: "radial-gradient(ellipse at center bottom, #b4ec51 0%, #429321 40%, transparent 80%)",
                            opacity: 0.45,
                            filter: "blur(8px)"
                        }}
                    />
                </div>
                <div className="relative z-10 w-full lg:w-1/2">
                    <Image
                        src="https://framerusercontent.com/images/03xxzX7tFg0pOAnRQNPl0JkpYQ.jpg?scale-down-to=2048"
                        alt="Cluely AI Assistant Website"
                        width={600}
                        height={400}
                        className="rounded-2xl w-full h-auto object-cover"
                    />
                </div>
                <div className="relative z-10 w-full lg:w-1/2">
                    <h2 className="text-3xl font-medium text-white mb-4">AI‑Led Demand Forecasting</h2>
                    <p className="text-gray-300 text-sm mb-6">
                        Predict how price changes will affect sales volume and revenue before they happen. Struggling with Elasticity Uncertainty? &quot;We don&apos;t know if a 10% price increase on our flagship product will reduce volume by 5% or 25%. That uncertainty makes revenue planning nearly impossible.&quot;
                    </p>
                    <ul className="space-y-3 mb-6">
                        {[
                            "Automated reports highlight pricing trends and revenue leaks",
                            "Custom AI alerts predict market shifts before they happen",
                            "AI flags unauthorized sellers & discounts before they impact revenue"
                        ].map((text, idx) => {
                            const match = text.match(/^(.*?)( before| and |$)/);
                            const bold = match ? match[1] : text;
                            const rest = match ? text.slice(bold.length) : '';
                            return (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="mt-0.5 text-lime-400 flex-shrink-0" size={22} />
                                    <span className="text-sm text-white dark:text-white">
                                        <span className="font-semibold text-white dark:text-white">{bold}</span>
                                        <span className="text-white dark:text-gray-300">{rest}</span>
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-auto">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">CUSTOM DASHBOARDS</Badge>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}