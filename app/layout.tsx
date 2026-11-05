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
  metadataBase: new URL("https://saidazimxoja.uz"),
  title: {
    default: "Saydazim Saydullaxojayev | Dasturchi & Portfolio",
    template: "%s | Saydazim Saydullaxojayev (saidazimxoja)",
  },
  description:
    "Saydazim Saydullaxojayev (saidazimxoja.uz) — Frontend, 3D veb dasturchi va styping.uz loyihasi muallifining shaxsiy portfoliyasi.",
  keywords: [
    "Saydazim Saydullaxojayev",
    "Saydullaxojayev Saydazim",
    "saidazimxoja",
    "saidazimxoja.uz",
    "Saydazim",
    "Saidazim",
    "styping.uz",
    "frontend developer",
    "3d web developer",
  ],
  authors: [{ name: "Saydazim Saydullaxojayev", url: "https://saidazimxoja.uz" }],
  creator: "Saydazim Saydullaxojayev",
  publisher: "Saydazim Saydullaxojayev",
  alternates: {
    canonical: "https://saidazimxoja.uz",
  },
  openGraph: {
    title: "Saydazim Saydullaxojayev | Dasturchi & Portfolio",
    description:
      "Saydazim Saydullaxojayev (saidazimxoja.uz) — Frontend, 3D veb dasturchi va styping.uz loyihasi muallifining shaxsiy portfoliyasi.",
    url: "https://saidazimxoja.uz",
    siteName: "Saydazim Saydullaxojayev Portfolio",
    locale: "uz_UZ",
    type: "profile",
    images: [
      {
        url: "/saidazim.jpg",
        width: 1200,
        height: 630,
        alt: "Saydazim Saydullaxojayev - saidazimxoja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saydazim Saydullaxojayev | Dasturchi & Portfolio",
    description:
      "Saydazim Saydullaxojayev (saidazimxoja.uz) — Frontend, 3D veb dasturchi va styping.uz loyihasi muallifining shaxsiy portfoliyasi.",
    creator: "@saidazimxoja",
    images: ["/saidazim.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://saidazimxoja.uz/#person",
      "name": "Saydazim Saydullaxojayev",
      "alternateName": [
        "Saydullaxojayev Saydazim",
        "saidazimxoja",
        "Saydazim",
        "Saidazim",
        "saidazimxoja.uz"
      ],
      "url": "https://saidazimxoja.uz",
      "image": "https://saidazimxoja.uz/saidazim.jpg",
      "jobTitle": "Frontend Developer, 3D Web Developer",
      "knowsAbout": [
        "Frontend Development",
        "React",
        "Next.js",
        "TypeScript",
        "Three.js",
        "3D Web",
        "Web Development",
        "styping.uz"
      ],
      "sameAs": [
        "https://t.me/saidazimxoja",
        "https://github.com/saidazimxoja"
      ],
      "description":
        "Saydazim Saydullaxojayev (saidazimxoja.uz) — Frontend, 3D veb dasturchi va styping.uz loyihasi muallifining shaxsiy portfoliyasi."
    },
    {
      "@type": "WebSite",
      "@id": "https://saidazimxoja.uz/#website",
      "url": "https://saidazimxoja.uz",
      "name": "Saydazim Saydullaxojayev | Dasturchi & Portfolio",
      "alternateName": [
        "saidazimxoja",
        "saidazimxoja.uz",
        "Saydazim Saydullaxojayev"
      ],
      "description":
        "Saydazim Saydullaxojayev (saidazimxoja.uz) — Frontend, 3D veb dasturchi va styping.uz loyihasi muallifining shaxsiy portfoliyasi.",
      "publisher": {
        "@id": "https://saidazimxoja.uz/#person"
      }
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-cyan-300">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
