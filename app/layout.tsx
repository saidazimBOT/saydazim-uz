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
    default: "Saidazim Saydullaxo'jayev | saidazimxoja — Developer Portfolio",
    template: "%s | Saidazim Saydullaxo'jayev (saidazimxoja)",
  },
  description:
    "Official portfolio of Saidazim Saydullaxo'jayev (saidazimxoja). Frontend developer, creator of web projects, and IT innovator.",
  keywords: [
    "Saydullaxo'jayev Saidazim",
    "Saidazim Saydullaxojayev",
    "Saidazim",
    "saidazimxoja",
    "saidazimxoja.uz",
    "Saidazim portfolio",
    "dasturchi",
    "frontend developer",
  ],
  authors: [{ name: "Saidazim Saydullaxo'jayev", url: "https://saidazimxoja.uz" }],
  creator: "Saidazim Saydullaxo'jayev",
  publisher: "Saidazim Saydullaxo'jayev",
  alternates: {
    canonical: "https://saidazimxoja.uz",
  },
  openGraph: {
    title: "Saidazim Saydullaxo'jayev | saidazimxoja — Developer Portfolio",
    description:
      "Official portfolio of Saidazim Saydullaxo'jayev (saidazimxoja). Frontend developer, creator of web projects, and IT innovator.",
    url: "https://saidazimxoja.uz",
    siteName: "Saidazim Saydullaxo'jayev Portfolio",
    locale: "uz_UZ",
    type: "profile",
    images: [
      {
        url: "/saidazim.jpg",
        width: 1200,
        height: 630,
        alt: "Saidazim Saydullaxo'jayev - saidazimxoja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saidazim Saydullaxo'jayev | saidazimxoja — Developer Portfolio",
    description:
      "Official portfolio of Saidazim Saydullaxo'jayev (saidazimxoja). Frontend developer, creator of web projects, and IT innovator.",
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
      "name": "Saidazim Saydullaxo'jayev",
      "alternateName": [
        "Saydullaxojayev Saidazim",
        "saidazimxoja",
        "Saidazim"
      ],
      "url": "https://saidazimxoja.uz",
      "image": "https://saidazimxoja.uz/saidazim.jpg",
      "jobTitle": "Frontend Developer",
      "sameAs": [
        "https://t.me/saidazimxoja",
        "https://github.com/saidazimxoja"
      ],
      "description":
        "Official portfolio of Saidazim Saydullaxo'jayev (saidazimxoja). Frontend developer, creator of web projects, and IT innovator."
    },
    {
      "@type": "WebSite",
      "@id": "https://saidazimxoja.uz/#website",
      "url": "https://saidazimxoja.uz",
      "name": "Saidazim Saydullaxo'jayev | saidazimxoja — Developer Portfolio",
      "alternateName": "saidazimxoja",
      "description":
        "Official portfolio of Saidazim Saydullaxo'jayev (saidazimxoja). Frontend developer, creator of web projects, and IT innovator.",
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
