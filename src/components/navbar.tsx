'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon } from 'lucide-react';
import { realData } from "@/lib/realData";

export default function Navbar() {
    return (
        <header className='flex w-full justify-center pt-4'>
            <nav className="flex items-center justify-between px-6 rounded-3xl py-2 bg-white text-black w-[70vw]">
                <div className="flex items-center">
                    <span className="text-2xl font-bold">
                        {realData.footer.logo_text}
                    </span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {realData.navigation.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="">
                            {item}
                        </a>
                    ))}
                </div>
                <Button className="bg-lime-400 hover:bg-lime-500 text-black rounded-full px-6">
                    <MoonIcon className='w-4 h-4' />
                </Button>
            </nav>
        </header>
    );
};