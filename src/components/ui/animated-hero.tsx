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
      // style={{
      //   background:
      //     "radial-gradient(circle, rgba(180, 236, 81, 0.8) 0%, rgba(66, 147, 33, 0.4) 40%, transparent 70%)",
      //   filter: "blur(20px)",
      // }}
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
              size="lg"
              className="gap-4 text-black rounded-full relative overflow-hidden shadow-lg shadow-zinc-900/20 border border-zinc-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:to-transparent before:opacity-60 before:pointer-events-none"
              variant="outline"
            >
              <span className="relative z-10 flex items-center">
                {realData.hero.cta} <ChevronRightSquareIcon className="w-4 h-4 ml-2" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
