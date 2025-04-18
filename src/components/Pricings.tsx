import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PricingSection() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 py-10 text-white px-4">
            {/* Starter Plan */}
            <div className="w-full md:w-80 bg-gray-800 rounded-3xl p-6 flex flex-col">
                <h2 className="text-xl font-bold mb-2">Starter</h2>
                <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">$129</span>
                    <span className="text-gray-400 ml-1">/month</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>700 minutes</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>$0.16 / extra minute</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>5 assistants</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>5 outbound campaigns</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>10 calls in parallel</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>5 cloned voices</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>10,000 no-code runs monthly</span>
                    </li>
                </ul>

                <button className="bg-blue-500 text-white py-3 px-6 rounded-full flex items-center justify-center">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            </div>

            {/* Agency Plan - Highlighted */}
            <div className="w-full md:w-80 bg-blue-600 rounded-3xl p-6 flex flex-col transform md:scale-105 z-10">
                <h2 className="text-xl font-bold mb-2">Agency</h2>
                <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">$249</span>
                    <span className="text-blue-200 ml-1">/month</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-white rounded-full mr-2"></div>
                        <span>1700 included minutes</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-white rounded-full mr-2"></div>
                        <span>$0.09 / extra minute</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-white rounded-full mr-2"></div>
                        <span>Unlimited assistants</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-white rounded-full mr-2"></div>
                        <span>Unlimited outbound campaigns</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-white rounded-full mr-2"></div>
                        <span>500 calls in parallel</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-white rounded-full mr-2"></div>
                        <span>10 cloned voices</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-white rounded-full mr-2"></div>
                        <span>10,000 no-code runs monthly</span>
                    </li>
                </ul>

                <button className="bg-white text-blue-600 py-3 px-6 rounded-full flex items-center justify-center">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            </div>

            {/* Enterprise Plan */}
            <div className="w-full md:w-80 bg-gray-800 rounded-3xl p-6 flex flex-col">
                <h2 className="text-xl font-bold mb-2">Enterprise</h2>
                <div className="flex items-baseline mb-4">
                    <span className="text-5xl font-bold">$499</span>
                    <span className="text-gray-400 ml-1">/month</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>3500 minutes</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>$0.09 / extra minute</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>Unlimited assistants</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>Unlimited outbound campaigns</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>1,000 calls in parallel</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>Unlimited cloned voices</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>Unlimited no-code runs</span>
                    </li>
                    <li className="flex items-center">
                        <div className="w-5 h-5 bg-blue-500 rounded-full mr-2"></div>
                        <span>White labeled</span>
                    </li>
                </ul>

                <button className="bg-blue-500 text-white py-3 px-6 rounded-full flex items-center justify-center">
                    Start Your Free Trial
                    <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            </div>
        </div>
    );
}