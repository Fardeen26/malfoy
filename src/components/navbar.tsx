'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-black">
            <div className="flex items-center">
                <Link href="/">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold text-white">
                            <span className="text-lime-400">t</span>achyo
                        </span>
                    </div>
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                <Link href="/why-tachyo" className="text-gray-300 hover:text-white transition-colors">
                    Why Tachyo?
                </Link>
                <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
                    Features
                </Link>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Testimonials
                </Link>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                </Link>
                <Link href="/faqs" className="text-gray-300 hover:text-white transition-colors">
                    FAQs
                </Link>
            </div>

            <Button className="bg-lime-400 hover:bg-lime-500 text-black rounded-full px-6">
                <Download className="mr-2 h-4 w-4" />
                Add To Chrome
            </Button>
        </nav>
    );
};