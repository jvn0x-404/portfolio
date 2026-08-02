"use client";

import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { Cursor } from "@/components/cursor";
import { Preloader } from "@/components/preloader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollProgress />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
}
