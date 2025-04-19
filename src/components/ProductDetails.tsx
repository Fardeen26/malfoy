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
                    <h2 className="text-4xl font-bold text-white mb-4">Cluely</h2>
                    <p className="text-gray-300 mb-6">
                        We built Cluely&apos;s site from scratch with engaging animation and a visually compelling design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-auto">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">SaaS</Badge>
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">AI</Badge>
                    </div>
                    <div className="mt-16 pt-4">
                        <p className="text-gray-400 text-sm">
                            Web Design - Animation
                        </p>
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
                    <h2 className="text-4xl font-bold text-white mb-4">Helicon</h2>
                    <p className="text-gray-300 mb-6">
                        We designed Helicon&apos;s app and redesigned their site to improve usability and appeal.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-auto">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">Agency</Badge>
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">App Dev</Badge>
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">B2B</Badge>
                    </div>
                    <div className="mt-16 pt-4">
                        <p className="text-gray-400 text-sm">
                            Web Design - Copywriting - App Design
                        </p>
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
                    <h2 className="text-4xl font-bold text-white mb-4">Cluely</h2>
                    <p className="text-gray-300 mb-6">
                        We built Cluely&apos;s site from scratch with engaging animation and a visually compelling design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-auto">
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">SaaS</Badge>
                        <Badge variant="outline" className="rounded-full px-4 py-1 text-gray-300 bg-gray-800/60 border-gray-700">AI</Badge>
                    </div>
                    <div className="mt-16 pt-4">
                        <p className="text-gray-400 text-sm">
                            Web Design - Animation
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}