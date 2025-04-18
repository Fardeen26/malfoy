// components/WhyChooseSection.tsx
'use client';

import { Check, X } from 'lucide-react';

interface ComparisonFeature {
    title: string;
    alignoHas: boolean;
}

const WhyChooseSection = () => {

    const features: ComparisonFeature[] = [
        { title: 'Real-time global collaboration', alignoHas: true },
        { title: 'Fully customizable & scalable', alignoHas: true },
        { title: 'Advanced sprint management', alignoHas: true },
        { title: 'Built-in advanced analytics', alignoHas: true },
        { title: 'User-friendly interface', alignoHas: true },
    ];

    const otherToolsIssues: ComparisonFeature[] = [
        { title: 'Delayed syncing or integrations', alignoHas: false },
        { title: 'Limited customization', alignoHas: false },
        { title: 'Lacks dedicated sprint tools', alignoHas: false },
        { title: 'Requires external add-ons', alignoHas: false },
        { title: 'Complicated onboarding', alignoHas: false },
    ];

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-16 text-white">
            <div className="text-center mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Why Choose <span className="font-serif italic text-amber-400">Aligno</span>?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-center text-sm md:text-base">
                    An immediate contrast of Aligno&apos;s functionalities against other
                    project coordination utilities. Discover why we excel.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                {/* Aligno Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-6 h-6 border border-amber-400/30 rounded flex items-center justify-center">
                            <div className="w-3 h-3 bg-amber-400 rounded-sm"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-amber-400">Aligno</h3>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 rounded-xl p-6 space-y-3">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <Check className="text-green-400 flex-shrink-0" />
                                <p className="text-gray-200">{feature.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Tools Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                        <h3 className="text-2xl font-bold text-white">Other tools</h3>
                    </div>

                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 rounded-xl p-6 space-y-3">
                        {otherToolsIssues.map((issue, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <X className="text-red-400 flex-shrink-0" />
                                <p className="text-gray-400">{issue.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;