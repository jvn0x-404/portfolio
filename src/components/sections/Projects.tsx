"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Construction } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  CharStaggerTitle,
  ScrambleText,
  CountUpSequence,
  LineMaskReveal,
  HoverDecryptHeading,
  BlurWordReveal,
} from "@/components/motion/dynamic-headings";

const PROJECTS = [
  {
    category: "Web Application",
    status: "In Development",
    title: "Secure Dev Platform",
    year: "2025",
    index: "01",
    description:
      "A developer-focused dashboard strengthening cybersecurity awareness through interactive labs, CTF challenges, and real-time vulnerability insights.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    accent: "from-[#3562e3] to-[#6ba0ff]",
  },
  {
    category: "IoT / Embedded",
    status: "In Development",
    title: "Smart Home Security",
    year: "2025",
    index: "02",
    description:
      "An embedded system project exploring connected home security — sensor modules, microcontrollers, and a live monitoring interface working together.",
    tech: ["C", "Python", "ESP32", "MQTT", "Raspberry Pi"],
    accent: "from-[#0ea5e9] to-[#22d3ee]",
  },
  {
    category: "AI Automation",
    status: "In Development",
    title: "Automation Workflows",
    year: "2025",
    index: "03",
    description:
      "Leveraging AI to automate repetitive developer and security workflows — intelligent assistants, scanning pipelines, and smarter tooling.",
    tech: ["Python", "OpenAI API", "Node.js", "LangChain"],
    accent: "from-[#8b5cf6] to-[#a78bfa]",
  },
];

function ImagePlaceholder({ accent, title, index }: { accent: string; title: string; index: string }) {
  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${accent}`}>
      <div className="dot-grid absolute inset-0 opacity-30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/30">
        <Construction className="h-10 w-10 text-foreground" />
        <CharStaggerTitle
          text={title.toUpperCase()}
          as="div"
          className="font-display text-2xl font-black uppercase tracking-tight text-foreground"
          stagger={0.04}
          y={100}
        />
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">
          <ScrambleText text="SHOWCASE_COMING_SOON" binary trigger duration={0.6} />
        </p>
        <div className="mt-2 font-mono text-[10px] text-foreground/50">
          <CountUpSequence value={`PRJ_${index}`} duration={0.8} />
        </div>
      </div>

      {/* Scanning line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-white/70"
        initial={{ top: "0%" }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-foreground/10 bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading number="(03)" label="Projects" title="Coming Soon" />

        <div className="mt-6 max-w-2xl">
          <BlurWordReveal
            text="I'm currently building my first major projects. This space is being prepared to feature my work — here's a preview of what's heading your way."
            className="text-base leading-relaxed text-muted"
            stagger={0.015}
          />
          <div className="mt-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/40">
            <span className="h-px w-10 bg-foreground/20" />
            <ScrambleText text={`${PROJECTS.length} PROJECTS / QUEUED`} trigger duration={0.6} />
            <span className="flex items-center gap-1">
              <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
              BUILDING
            </span>
          </div>
        </div>

        <Stagger className="mt-16 flex flex-col gap-16 lg:gap-24">
          {PROJECTS.map((project) => (
            <StaggerItem key={project.index}>
              <article className="group grid items-center gap-8 lg:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 220, damping: 24 }}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl"
                >
                  <ImagePlaceholder accent={project.accent} title={project.title} index={project.index} />
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-foreground backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <ScrambleText text={project.status.toUpperCase()} trigger duration={0.4} />
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
                      <ScrambleText text="View Case Study" trigger onHover /> <ArrowUpRight size={16} />
                    </span>
                  </div>
                </motion.div>

                <div className="lg:pl-4">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    <span className="flex items-center gap-2 text-foreground">
                      <CountUpSequence value={`(${project.index})`} duration={0.6} />·
                      <ScrambleText text={project.category.toUpperCase()} trigger duration={0.5} onHover />
                    </span>
                    <CountUpSequence value={project.year} duration={0.8} />
                  </div>

                  {/* Project title with char stagger + hover decrypt */}
                  <div className="mt-4">
                    <CharStaggerTitle
                      text={project.title.toUpperCase()}
                      as="h3"
                      className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]"
                      stagger={0.03}
                      y={120}
                      rotate
                    />
                  </div>

                  <LineMaskReveal
                    text={project.description}
                    as="p"
                    className="mt-5 max-w-md text-base leading-relaxed text-muted"
                    stagger={0.02}
                    delay={0.2}
                  />

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="rounded-full border border-foreground/15 bg-white px-3 py-1 text-xs text-foreground/75"
                      >
                        <ScrambleText text={t} trigger={false} onHover duration={0.35} />
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button className="group/btn inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-5 py-2.5 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground">
                      <GithubIcon className="h-4 w-4" />
                      <HoverDecryptHeading text="GITHUB" as="span" className="text-sm" staticClassName="text-sm" />
                      <span className="font-mono text-[10px] text-muted/60">Soon</span>
                    </button>
                    <button className="group/btn inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white px-5 py-2.5 text-sm text-muted transition-colors hover:border-foreground hover:text-foreground">
                      <ExternalLink size={16} />
                      <HoverDecryptHeading text="LIVE DEMO" as="span" className="text-sm" staticClassName="text-sm" />
                      <span className="font-mono text-[10px] text-muted/60">Soon</span>
                    </button>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
