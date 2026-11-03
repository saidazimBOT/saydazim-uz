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
  title: "Saydullaxo'jayev Saidazim | Creative Developer & IT Innovator",
  description:
    "Personal portfolio of Saydullaxo'jayev Saidazim — Creative Developer & IT Innovator specializing in Next.js, speed coding mastery, and modern full-stack development.",
  keywords: [
    "Creative Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Speed Coder",
  ],
  authors: [{ name: "Saydullaxo'jayev Saidazim" }],
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
