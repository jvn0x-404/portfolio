"use client";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/Reveal";
import { MapPin, Building2, Scroll } from "lucide-react";
import { CharStaggerTitle, CountUpSequence, ScrambleText, HoverDecryptHeading } from "@/components/motion/dynamic-headings";

export function Education() {
  return (
    <section id="education" className="relative border-t border-foreground/10 bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading number="(05)" label="Education" title="Academic Path" />

        <div className="mt-14">
          <Reveal>
            <div className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-white p-8 lg:flex lg:items-center lg:justify-between lg:p-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-all duration-700 group-hover:bg-accent/20" />

              <div className="relative">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-foreground">
                  <Scroll size={14} />
                  <ScrambleText text="DEGREE" trigger duration={0.5} />
                  <span className="ml-2 h-px w-8 bg-foreground/20" />
                  <CountUpSequence value="2019-2023" duration={1.2} />
                </div>

                <div className="mt-4">
                  <CharStaggerTitle
                    text="BACHELOR OF ENGINEERING"
                    as="h3"
                    className="font-display text-[clamp(1.8rem,4vw,3rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]"
                    stagger={0.02}
                    y={100}
                    rotate
                  />
                </div>

                <div className="mt-2">
                  <HoverDecryptHeading
                    text="COMPUTER SCIENCE ENGINEERING"
                    as="p"
                    className="text-xl font-bold uppercase tracking-tight"
                    staticClassName="text-xl font-bold uppercase tracking-tight text-foreground/90"
                  />
                </div>

                <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
                  <span className="inline-flex h-1 w-1 rounded-full bg-emerald-500" />
                  <ScrambleText text="GRADUATED • VERIFIED" binary trigger duration={0.6} />
                </div>
              </div>

              <div className="relative mt-8 space-y-3 lg:mt-0 lg:text-right">
                <p className="flex items-center gap-2 text-muted lg:justify-end">
                  <Building2 size={16} className="text-foreground" />
                  <ScrambleText text="PES College" trigger onHover />
                </p>
                <p className="flex items-center gap-2 text-muted lg:justify-end">
                  <MapPin size={16} className="text-foreground" />
                  <ScrambleText text="Karnataka, India" trigger delay={0.2} />
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                  GPA
                  <CountUpSequence value="8.2" duration={1} />/10
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
