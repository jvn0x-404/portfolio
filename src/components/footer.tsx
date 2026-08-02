"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { ScrambleText, CountUpSequence } from "@/components/motion/dynamic-headings";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#home" className="group inline-flex flex-col font-display text-2xl font-black uppercase leading-[0.85] tracking-tighter">
              <span>
                <ScrambleText text="JEEVAN" trigger onHover duration={0.4} className="text-2xl font-black" />
              </span>
              <span className="ml-4">
                <ScrambleText text="KUMAR" trigger delay={0.1} onHover duration={0.4} className="text-2xl font-black" />
                <span className="text-accent">.</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Computer Science student exploring cybersecurity, web development, and IoT. Building secure, elegant software.
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40">
              <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
              <ScrambleText text="SYSTEM ONLINE • SECURE" binary trigger />
              <span>•</span>
              <CountUpSequence value="100% UPTIME" duration={1} />
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60">
              <ScrambleText text="NAVIGATE" trigger duration={0.4} />
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV.map((item, i) => (
                <li key={item.href}>
                  <a href={item.href} className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
                    <span className="font-mono text-[10px] text-foreground/20">0{i + 1}</span>
                    <span className="relative">
                      <ScrambleText text={item.label.toUpperCase()} trigger={false} onHover duration={0.35} className="text-sm" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60">
              <ScrambleText text="CONNECT" trigger />
            </p>
            <a href="mailto:hello@jeevankumar.dev" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground">
              <Mail size={15} />
              <ScrambleText text="hello@jeevankumar.dev" trigger onHover />
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 text-muted transition-colors hover:border-foreground hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 text-muted transition-colors hover:border-foreground hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href="#home"
                aria-label="Back to top"
                className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/15 text-muted transition-colors hover:border-foreground hover:text-foreground"
              >
                <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-foreground/10 pt-6 sm:flex-row">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            © <CountUpSequence value={String(year)} duration={0.6} /> <ScrambleText text="JEEVAN KUMAR" trigger />
          </p>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <ScrambleText text="DESIGNED & BUILT WITH CARE — KARNATAKA, INDIA" trigger delay={0.3} duration={0.7} binary />
          </p>
        </div>
      </div>
    </footer>
  );
}
