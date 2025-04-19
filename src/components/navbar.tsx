'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoonIcon } from 'lucide-react';

export default function Navbar() {
    return (
        <header className='flex w-full justify-center pt-4'>
            <nav className="flex items-center justify-between px-6 rounded-3xl py-2 bg-white text-black w-[70vw]">
                <div className="flex items-center">
                    <Link href="/">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold">
                                Malfoy
                            </span>
                        </div>
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/why-tachyo" className="">
                        Home
                    </Link>
                    <Link href="/features" className="">
                        Features
                    </Link>
                    <Link href="/testimonials" className="">
                        Integrations
                    </Link>
                    <Link href="/pricing" className="">
                        Pricing
                    </Link>
                    <Link href="/faqs" className="">
                        FAQs
                    </Link>
                </div>

                <Button className="bg-lime-400 hover:bg-lime-500 text-black rounded-full px-6">
                    <MoonIcon className='w-4 h-4' />
                </Button>
            </nav>
        </header>
    );
};