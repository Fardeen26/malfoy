// components/FaqSection.tsx
'use client';

import { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface FaqItem {
    question: string;
    answer: string;
    defaultOpen?: boolean;
}

const FaqSection = () => {
    const faqItems: FaqItem[] = [
        {
            question: "What is Aligno, and how does it help with project management?",
            answer: "Aligno is a comprehensive project management tool designed to streamline collaboration, task tracking, and team coordination. It helps by centralizing project information, automating workflows, and providing real-time updates to keep everyone aligned."
        },
        {
            question: "Can Aligno be customized for different teams and projects?",
            answer: "Yes, Aligno offers extensive customization options to adapt to your specific team structure and project requirements. You can create custom workflows, fields, views, and automation rules tailored to your unique needs."
        },
        {
            question: "Does Aligno support real-time collaboration across multiple locations?",
            answer: "Absolutely! Aligno allows teams to collaborate in real-time, regardless of location, making it ideal for remote and global teams. You can track updates instantly, communicate with team members, and stay on top of project changes as they happen.",
            defaultOpen: true
        },
        {
            question: "What features does Aligno offer for managing sprints?",
            answer: "Aligno provides comprehensive sprint management tools including sprint planning, backlog management, burndown charts, capacity planning, and retrospective tools to help agile teams deliver consistently."
        },
        {
            question: "How does Aligno help with tracking project performance?",
            answer: "Aligno offers robust analytics and reporting features to monitor key metrics, track progress against goals, identify bottlenecks, and provide actionable insights to improve project performance over time."
        }
    ];

    const [openItem, setOpenItem] = useState<number | null>(2); // Index 2 is "Does Aligno support real-time collaboration..."

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-16 bg-black text-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    How <span className="font-serif italic text-amber-400">Aligno</span> helps you?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-center">
                    Aligno offers ready-made solutions to get you going fast. Easily
                    customize as your team&apos;s needs expand.
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