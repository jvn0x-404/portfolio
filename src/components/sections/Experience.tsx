"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/Reveal";
import {
  ScrambleText,
  CharStaggerTitle,
  CountUpSequence,
  BlurWordReveal,
  HoverDecryptHeading,
} from "@/components/motion/dynamic-headings";
import { GraduationCap } from "lucide-react";

const LEARNING_PATHS = [
  {
    title: "Cybersecurity",
    desc: "Fundamentals, networking, security tools, and practical defensive & offensive techniques.",
    level: "84%",
  },
  {
    title: "Ethical Hacking",
    desc: "Reconnaissance, vulnerability assessment, penetration testing mindset & methodology.",
    level: "72%",
  },
  {
    title: "Web Development",
    desc: "Building responsive, accessible, and performant applications across the stack.",
    level: "90%",
  },
  {
    title: "IoT Development",
    desc: "Connecting devices, microcontrollers, and sensor systems into working products.",
    level: "68%",
  },
  {
    title: "AI",
    desc: "Applying machine learning and intelligent automation to real problems.",
    level: "61%",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-foreground/10 bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading number="(04)" label="Journey" title="Currently Learning" />

        <div className="mt-12 lg:mt-16">
          <Reveal>
            <div className="flex flex-col gap-4 rounded-3xl border border-foreground/10 bg-white p-8 lg:p-10">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                    <ScrambleText text="CURRENT_FOCUS" binary trigger duration={0.6} />
                  </p>
                  <CharStaggerTitle
                    text="BUILDING A SECURITY-FIRST FOUNDATION"
                    as="h3"
                    className="mt-1 font-display text-2xl font-black uppercase leading-[0.9] tracking-tight"
                    stagger={0.02}
                    y={100}
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                {LEARNING_PATHS.map(({ title, desc, level }, i) => (
                  <div
                    key={title}
                    className="group relative flex-1 basis-40 rounded-2xl border border-foreground/10 bg-background p-5 transition-colors duration-500 hover:border-foreground/30"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-xs text-foreground">
                        <CountUpSequence value={`/0${i + 1}`} duration={0.5} delay={i * 0.1} />
                      </p>
                      <span className="rounded-full bg-foreground px-2 py-0.5 font-mono text-[10px] text-background">
                        <CountUpSequence value={level} duration={1} delay={0.3 + i * 0.1} />
                      </span>
                    </div>
                    <HoverDecryptHeading
                      text={title.toUpperCase()}
                      as="h4"
                      className="mt-3 font-display text-lg font-black uppercase leading-none"
                      staticClassName="font-display text-lg font-black uppercase leading-none"
                    />
                    <BlurWordReveal text={desc} className="mt-2 text-sm leading-relaxed text-muted" delay={0.2 + i * 0.05} stagger={0.015} />

                    {/* Level bar with count animation */}
                    <div className="relative mt-4 h-1 w-full overflow-hidden rounded-full bg-foreground/10">
                      <div className="absolute inset-y-0 left-0 bg-foreground transition-all duration-1000" style={{ width: level }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-foreground/10 pt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                <span>Honest, current, and evolving — no inflated roles or invented companies.</span>
                <span className="hidden items-center gap-2 sm:flex">
                  <span className="h-px w-6 bg-foreground/20" />
                  <ScrambleText text="PROGRESS_LOG • VERIFIED" trigger binary duration={0.6} />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
