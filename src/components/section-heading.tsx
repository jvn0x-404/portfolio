"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  CharStaggerTitle,
  CountUpSequence,
  ScrambleText,
  TypewriterLabel,
} from "@/components/motion/dynamic-headings";

export function SectionHeading({
  number,
  label,
  title,
  className,
}: {
  number: string;
  label: string;
  title: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={cn("flex flex-col gap-4", className)}>
      {/* Number + Label row — animated with count-up + typewriter + scramble */}
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-muted">
        <CountUpSequence
          value={number}
          className="text-foreground font-medium"
          delay={0.1}
          duration={0.9}
        />
        <span className="h-px w-8 bg-foreground/30" aria-hidden />
        <span className="relative overflow-hidden">
          <TypewriterLabel
            text={label}
            trigger={inView}
            delay={0.3}
            speed={40}
            showCursor={false}
            className="text-muted"
          />
        </span>
        {/* Tiny binary flicker */}
        <span className="ml-2 hidden items-center gap-1 font-mono text-[10px] text-foreground/20 sm:flex">
          <span className="inline-block animate-pulse">●</span>
          <ScrambleText
            text="SYS_READY"
            binary
            trigger={inView}
            delay={0.8}
            duration={0.6}
            scrambleSpeed={50}
            className="tracking-[0.2em]"
          />
        </span>
      </div>

      {/* Title – CharStagger with optional scramble on hover */}
      <div className="group relative inline-block">
        <CharStaggerTitle
          text={title.toUpperCase()}
          as="h2"
          className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]"
          stagger={0.03}
          delay={0.15}
          y={120}
          rotate
        />

        {/* Hover decrypt layer – appears over the title */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ScrambleText
            text={title.toUpperCase()}
            as="h2"
            className="font-display text-[clamp(2.4rem,7vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-accent"
            trigger={false}
          />
        </div>
      </div>
    </div>
  );
}
