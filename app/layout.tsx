import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: "Saidazim | Creative Developer & IT Innovator",
  description:
    "Personal portfolio of Saidazim — Creative Developer & IT Innovator specializing in Next.js, 3D WebGL interactive experiences, speed coding mastery, and modern full-stack development.",
  keywords: [
    "Creative Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Three.js",
    "Tailwind CSS",
    "TypeScript",
    "Framer Motion",
    "Speed Coder",
  ],
  authors: [{ name: "Saidazim" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-cyan-300">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
