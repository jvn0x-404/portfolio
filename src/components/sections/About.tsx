"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  BlurWordReveal,
  HoverDecryptHeading,
  LineMaskReveal,
  ScrambleText,
} from "@/components/motion/dynamic-headings";
import { Code2, ShieldCheck, Cpu, BrainCircuit } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: ShieldCheck,
    title: "Security & Hacking",
    desc: "Learning offensive and defensive techniques with hands-on tools.",
  },
  {
    icon: Code2,
    title: "Full-stack Development",
    desc: "Building responsive, accessible applications across frontend and backend.",
  },
  {
    icon: Cpu,
    title: "IoT & Embedded",
    desc: "Bridging hardware and software with embedded systems and connected devices.",
  },
  {
    icon: BrainCircuit,
    title: "AI Automation",
    desc: "Exploring how AI can automate workflows and enhance intelligent systems.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-foreground/10 bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading number="(01)" label="About" title="Who I Am" />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/70">
                <span className="h-1 w-1 rounded-full bg-accent" />
                <ScrambleText text="ORIGIN_STORY.exe" binary trigger delay={0.2} duration={0.7} />
              </span>
            </Reveal>

            <LineMaskReveal
              text="I'm a Computer Science Engineering student focused on cybersecurity and ethical hacking, while also exploring web development, IoT, and embedded systems. I love the challenge of understanding how systems work — and, more importantly, how to secure and improve them."
              as="p"
              className="text-2xl leading-relaxed text-foreground lg:text-3xl"
              stagger={0.03}
              delay={0.1}
            />

            <Reveal delay={0.3}>
              <BlurWordReveal
                text="For me, building software is about problem solving first. Writing clean code and bringing a product from idea to reality — across hardware and the web — is what keeps me learning every single day. I'm driven by a genuine curiosity for how technology fits together and a passion for creating software that has a real, positive impact."
                className="mt-8 max-w-xl text-base leading-relaxed text-muted"
                stagger={0.02}
                delay={0.3}
              />
            </Reveal>

            <Reveal delay={0.4}>
              <BlurWordReveal
                text="I treat every project as a chance to push my boundaries, embrace continuous improvement, and turn curiosity into capability."
                className="mt-6 max-w-xl text-base leading-relaxed text-muted"
                stagger={0.02}
                delay={0.5}
              />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Stagger className="grid gap-4">
              {FOCUS_AREAS.map(({ icon: Icon, title, desc }, idx) => (
                <StaggerItem key={title}>
                  <div className="group flex gap-4 rounded-2xl border border-foreground/10 bg-white p-5 transition-all duration-500 hover:border-foreground/30 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-foreground text-background transition-all duration-500 group-hover:ring-[3px] group-hover:ring-accent/30">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <HoverDecryptHeading
                        text={title.toUpperCase()}
                        as="h3"
                        className="font-display text-lg font-bold tracking-tight"
                        staticClassName="font-display text-lg font-bold tracking-tight"
                      />
                      <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
                      <div className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30">
                        <span>0{idx + 1}</span>
                        <ScrambleText text="ACTIVE" binary trigger duration={0.4} delay={0.2 + idx * 0.1} className="text-[10px]" />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
