import React from 'react';
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <div className="w-full my-10 relative flex justify-center">
            {/* Gradient Glow Background */}
            <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[#11120e]" />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[80%] h-48 sm:h-64 md:h-72 lg:h-80 rounded-b-3xl"
                    style={{
                        background: "radial-gradient(ellipse at center bottom, #b4ec51 0%, #429321 40%, transparent 80%)",
                        opacity: 0.45,
                        filter: "blur(8px)"
                    }}
                />
            </div>
            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl rounded-3xl px-4 py-20 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                    Ready to get started?
                </h2>

                <p className="text-white/90 mb-10 text-lg">
                    Book a personalized 1:1 demo with our team or sign up for a free 14-day trial.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="secondary"
                        className="bg-white/20 hover:bg-white/30 text-white rounded-full px-8 py-2 h-12"
                    >
                        Start trial
                    </Button>

                    <Button
                        variant="default"
                        className="bg-white hover:bg-white/90 text-gray-800 rounded-full px-8 py-2 h-12"
                    >
                        Book a demo
                    </Button>
                </div>
            </div>
        </div>
    );
};