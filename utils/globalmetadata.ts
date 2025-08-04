// utils/metadata.ts
import { Metadata } from "next";

export const globalMeatdata: Metadata = {
  metadataBase: new URL("https://scripto-technology.com/"),
  title: {
    default: "Scripto Technology - Software & Design Solutions",
    template: "%s | Scripto Technology",
  },
  description:
    "Professional software development and design services. We create modern, scalable solutions for web and mobile applications.",
  keywords: [
    "software development",
    "web design",
    "mobile apps",
    "UI/UX design",
    "digital solutions",
    "web development",
  ],
  authors: [{ name: "Scripto Technology" }],
  creator: "Scripto Technology",
  publisher: "Scripto Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scripto-technology.com/",
    title: "Scripto Technology - Software & Design Solutions",
    description:
      "Professional software development and design services. We create modern, scalable solutions for web and mobile applications.",
    siteName: "Scripto Technology",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Scripto Technology - Software & Design Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scripto Technology - Software & Design Solutions",
    description:
      "Professional software development and design services. We create modern, scalable solutions for web and mobile applications.",
    creator: "@scriptotech",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
  manifest: "/icons/site.webmanifest",

};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
