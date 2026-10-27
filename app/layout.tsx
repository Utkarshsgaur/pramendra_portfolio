import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://main-bannu.vercel.app"),
  title: "main_bannu — Video Editor & Visual Storyteller | Pramendra Singh",
  description:
    "I'm Bannu (Pramendra Singh) — a video editor, filmmaker, and visual storyteller from Meerut, India. I turn raw footage and ideas into stories worth watching.",
  keywords: [
    "video editor",
    "filmmaker",
    "visual storyteller",
    "cinematic editing",
    "short film",
    "color grading",
    "reels editor",
    "Adobe Premiere Pro",
    "Meerut",
    "India",
    "main_bannu",
    "bannu_films",
    "Pramendra Singh",
    "freelance video editor",
  ],
  authors: [{ name: "Pramendra Singh (Bannu)", url: "https://main-bannu.vercel.app" }],
  creator: "main_bannu",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://main-bannu.vercel.app",
    title: "main_bannu — Video Editor & Visual Storyteller",
    description:
      "I turn raw footage and ideas into stories worth watching. Freelance video editor & filmmaker from Meerut, India.",
    siteName: "main_bannu",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1440,
        height: 810,
        alt: "main_bannu — Cinematic Portfolio by Pramendra Singh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "main_bannu — Video Editor & Visual Storyteller",
    description:
      "I turn raw footage and ideas into stories worth watching. Freelance video editor & filmmaker from Meerut, India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
