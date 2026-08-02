import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeevan Kumar — Cybersecurity & Creative Developer",
  description:
    "Computer Science Engineering student specializing in Cybersecurity, Ethical Hacking, Web Development, IoT, Embedded Systems, and AI Automation. Open to internships.",
  keywords: [
    "Jeevan Kumar",
    "Cybersecurity",
    "Ethical Hacking",
    "Web Developer",
    "IoT",
    "Embedded Systems",
    "AI Automation",
    "Portfolio",
  ],
  authors: [{ name: "Jeevan Kumar" }],
  creator: "Jeevan Kumar",
  openGraph: {
    title: "Jeevan Kumar — Cybersecurity & Creative Developer",
    description:
      "Computer Science student specializing in Cybersecurity, Ethical Hacking, Web Development, IoT, and AI Automation.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeevan Kumar — Cybersecurity & Creative Developer",
    description:
      "Computer Science student specializing in Cybersecurity, Ethical Hacking, Web Development, IoT, and AI Automation.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${archivo.variable} ${jetbrains.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
