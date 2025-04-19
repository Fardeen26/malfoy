"use client"

// PortfolioSection.tsx
import React from 'react';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

const cardBase =
    'relative rounded-2xl border border-lime-300/15 bg-gradient-to-br from-black/60 via-neutral-900/70 to-black/80 shadow-xl shadow-lime-900/10 backdrop-blur-md p-6 flex flex-col overflow-hidden group transition-all duration-300';
const cardHover =
    'hover:shadow-2xl hover:scale-[1.025]';
const overlayBase =
    'pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500';

export default function ProductDetails() {
    return (
        <div className="w-full max-w-6xl mx-auto py-10 px-4">
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
                    <h2 className="text-4xl font-bold text-white mb-4">Cohort based pricing</h2>
                    <p className="text-gray-300 mb-6">
                        WDeploy different pricing strategies for different customer segments simultaneously. &quot;Our top 20% of customers generate 65% of our profit but receive the same discounts as one‑time buyers, risking our most valuable relationships.&quot;
                    </p>
                    <div className="flex flex-wrap gap-2 mb-auto">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">Build customer loyalty</Badge>
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
                    <h2 className="text-4xl font-bold text-white mb-4">Competitive pricing</h2>
                    <p className="text-gray-300 mb-6">
                        Automatically recapture revenue that would otherwise be lost due to pricing misalignment. &quot;When a competitor slashed prices, our conversion rate plummeted to half within 48 hours before we could manually adjust our pricing strategy.&quot; &quot;We noticed competitors increased prices on similar products by 8% last week, but we didn&apos;t adjust our premium line, potentially leaving $45K in monthly revenue on the table.&quot;
                    </p>
                    <div className="flex flex-wrap gap-2 mb-auto">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">Enable dynamic pricing</Badge>
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
                    <h2 className="text-4xl font-bold text-white mb-4">AI‑Led Demand Forecasting</h2>
                    <p className="text-gray-300 mb-6">
                        Predict how price changes will affect sales volume and revenue before they happen. Struggling with Elasticity Uncertainty? &quot;We don&apos;t know if a 10% price increase on our flagship product will reduce volume by 5% or 25%. That uncertainty makes revenue planning nearly impossible.&quot;
                    </p>
                    <div className="flex flex-wrap gap-2 mb-auto">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">Conquer price elasticity</Badge>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}