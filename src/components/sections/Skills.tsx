"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  CountUpSequence,
  ScrambleText,
  HoverDecryptHeading,
  BlurWordReveal,
} from "@/components/motion/dynamic-headings";

const GROUPS = [
  {
    title: "Languages",
    icon: "⌘",
    count: "05",
    items: ["Python", "Java", "C", "JavaScript", "TypeScript"],
  },
  {
    title: "Technologies",
    icon: "◈",
    count: "09",
    items: ["React", "Next.js", "Node.js", "Tailwind", "Git", "GitHub", "Linux", "Docker", "VS Code"],
  },
  {
    title: "Security Tools",
    icon: "🛡",
    count: "06",
    items: ["Burp Suite", "Postman", "Wireshark", "Kali Linux", "Nmap", "OWASP"],
  },
  {
    title: "Currently Learning",
    icon: "✦",
    count: "04",
    items: ["Cloud", "DevSecOps", "AI", "Reverse Engineering"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-foreground/10 bg-background py-28 lg:py-40">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50 mask-fade-b" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading number="(02)" label="Skills" title="My Toolkit" />

        <BlurWordReveal
          text="A living stack — constantly evolving, audited, and sharpened. Every tool here is hands-on, not just listed."
          className="mt-6 max-w-xl text-base text-muted"
          delay={0.2}
          stagger={0.02}
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map(({ title, icon, items, count }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-white p-7 transition-colors duration-500 hover:border-foreground/30"
              >
                {/* Watermark icon with subtle parallax count */}
                <div className="absolute -right-6 -top-6 text-[6rem] leading-none text-foreground/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-foreground/10">
                  {icon}
                </div>

                {/* Animated count */}
                <div className="relative flex items-center justify-between">
                  <HoverDecryptHeading
                    text={title.toUpperCase()}
                    as="h3"
                    className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-foreground"
                    staticClassName="font-mono text-xs font-medium uppercase tracking-[0.25em] text-foreground"
                  />
                  <span className="flex items-center gap-1 font-mono text-[10px] text-foreground/40">
                    <CountUpSequence value={count} duration={0.8} /> STACK
                  </span>
                </div>

                {/* Binary stream under title */}
                <div className="relative mt-2 h-px w-full overflow-hidden bg-foreground/10">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-1/3 bg-accent"
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "300%" }}
                    transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3, repeat: Infinity, repeatDelay: 2 }}
                    viewport={{ once: false }}
                  />
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                      className="group/item relative overflow-hidden rounded-full border border-foreground/15 bg-background px-3.5 py-1.5 text-sm text-foreground/85 transition-colors duration-300 hover:border-foreground hover:text-foreground"
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        <ScrambleText
                          text={item}
                          className="text-sm"
                          trigger={false}
                          onHover
                          duration={0.35}
                          scrambleSpeed={20}
                        />
                      </span>
                    </motion.span>
                  ))}
                </div>

                {/* Footer data */}
                <div className="relative mt-6 flex items-center justify-between border-t border-foreground/5 pt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/30">
                  <span className="flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    VERIFIED
                  </span>
                  <ScrambleText text="OK" binary trigger delay={0.5} className="text-[10px]" />
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
