"use client"

import { ArrowRightIcon, ChevronRightSquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { realData } from "@/lib/realData";

function Hero() {
  return (
    <div className="w-full mt-8 px-8 relative">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0"
      />
      <div className="container mx-auto rounded-4xl">
        <div className="flex gap-8 py-12 lg:py-20 items-center justify-center flex-col">
          <div
            className={cn(
              "group rounded-full border border-black/5 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center text-sm justify-center px-6 py-1 text-gray-400 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>{realData.hero.banner}</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">{realData.hero.title}</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              {realData.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button
              className={cn(
                "gap-4 text-black rounded-full relative px-8 cursor-pointer overflow-hidden shadow-2xl shadow-zinc-900/40 border border-zinc-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200",
                "bg-white/90 backdrop-blur-[2px]"
              )}
              variant="outline"
            >
              {/* Mirror-like silver shine animation overlay */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10"
              >
                <span
                  className="block absolute -left-1/3 -top-1/3 w-2/3 h-[180%] animate-shine"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(192,192,192,0.0) 0%, rgba(224,224,224,0.7) 40%, rgba(255,255,255,0.95) 50%, rgba(192,192,192,0.0) 60%)",
                    filter: "blur(2px)",
                  }}
                />
              </span>
              <span className="relative flex items-center z-20">
                {realData.hero.cta} <ChevronRightSquareIcon className="w-4 h-4 ml-2" />
              </span>
              <style jsx global>{`
                @keyframes shine {
                  0% {
                    transform: translateX(-100%) rotate(12deg);
                    opacity: 0.2;
                  }
                  40% {
                    opacity: 0.7;
                  }
                  60% {
                    opacity: 0.9;
                  }
                  100% {
                    transform: translateX(220%) rotate(12deg);
                    opacity: 0.2;
                  }
                }
                .animate-shine {
                  animation: shine 2.2s cubic-bezier(0.4,0,0.2,1) infinite;
                }
              `}</style>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
