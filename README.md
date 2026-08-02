# Jeevan Kumar — Portfolio

A premium, dark-themed personal portfolio for **Jeevan Kumar**, a Computer Science
Engineering student specializing in **Cybersecurity, Ethical Hacking, Web Development,
IoT, Embedded Systems, and AI Automation.**

Inspired by the interaction quality and visual sophistication of creative-developer
portfolios — original design, code, and content throughout.

## ✨ Features

- ⚡ **Next.js 15 / React 19 + TypeScript** — modern App Router architecture
- 🎨 **Tailwind CSS v4** design system with a dark luxury theme (electric blue `#3562E3`)
- 🎬 **Framer Motion** — reveal-on-scroll, stagger, split-text, magnetic buttons, page transitions
- 🌀 **Lenis** — buttery smooth scrolling
- 🖱️ **Custom cursor** with magnetic trailing ring (disabled on touch)
- 📊 **Scroll progress indicator**
- ⏳ **Animated preloader / loading screen**
- 🧭 **Sticky nav** with animated active indicator + responsive mobile menu
- 📱 Fully responsive (mobile → large screens)
- ♿ Accessible + SEO optimized (metadata, semantic HTML, reduced-motion support)

## 🗂️ Sections

| Section | Content |
|---------|---------|
| **Hero** | Name, role, location/availability badges, marquee roles, CTA |
| **About** | Professional bio + focus areas |
| **Skills** | Languages, technologies, security tools, learning paths |
| **Projects** | "Projects Coming Soon" placeholder cards (swap in real work later) |
| **Experience** | "Currently Learning" — honest, no fake companies |
| **Education** | PES College, BE in Computer Science |
| **Contact** | Animated form + social links + resume button |
| **Footer** | Minimal, copyright, socials |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Create environment variables
cp .env.example .env
# set DATABASE_URL to your PostgreSQL instance

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 📦 Production build

```bash
npm run build
npm run start
```

## 🗃️ Folder Structure

```
src/
├── app/
│   ├── api/health/route.ts
│   ├── globals.css          # Tailwind theme + custom utilities
│   ├── layout.tsx           # Fonts, SEO metadata, providers
│   └── page.tsx             # Composes all sections
├── components/
│   ├── icons/               # GitHub / LinkedIn brand icons
│   ├── motion/              # Reveal, SplitText, MagneticButton primitives
│   ├── sections/            # Hero, About, Skills, Projects, Experience, Education, Contact
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── preloader.tsx        # Animated loading screen
│   ├── cursor.tsx           # Custom cursor
│   ├── scroll-progress.tsx
│   ├── smooth-scroll.tsx    # Lenis wrapper
│   └── section-heading.tsx
├── db/                      # Drizzle ORM + PostgreSQL
├── lib/utils.ts             # cn() helper
```

## 🛠️ Tech Stack

- Next.js 15 · React 19 · TypeScript
- Tailwind CSS · Framer Motion · GSAP-ready · Lenis
- Lucide icons + custom brand icons
- PostgreSQL via Drizzle ORM (optional — not required for static content)

## 🔜 Adding Real Projects

In `src/components/sections/Projects.tsx`, replace the placeholder objects in the
`PROJECTS` array — update `title`, `description`, `tech`, and swap
`<ImagePlaceholder>` for a real `next/image` `<Image>` component. No layout changes
needed.

## 📄 License

© 2026 Jeevan Kumar. All rights reserved.
