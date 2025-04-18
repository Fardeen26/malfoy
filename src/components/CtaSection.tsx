import React from 'react';
import { Button } from "@/components/ui/button";

export default function CTASection() {
    return (
        <div className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 rounded-3xl px-4 py-20 text-center">
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
    );
};