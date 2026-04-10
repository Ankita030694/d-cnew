import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navbarLogoSrc =
  "https://www.figma.com/api/mcp/asset/c856f3af-a4f0-4206-93d6-fd9b1b2e7e99";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.designncode.studio",
  ),
  title: {
    default: "Designncode | Website Development Company in India",
    template: "%s | Designncode",
  },
  description:
    "Designncode is a website development company in India delivering custom website design, UI/UX, ecommerce development, and SEO-ready web experiences.",
  keywords: [
    "website development company in India",
    "web development services India",
    "custom website development India",
    "web design company India",
    "responsive website design India",
    "ecommerce website development India",
    "UI UX design agency India",
    "Designncode",
  ],
  applicationName: "Designncode",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: navbarLogoSrc }],
    shortcut: [{ url: navbarLogoSrc }],
    apple: [{ url: navbarLogoSrc }],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Designncode",
    title: "Designncode | Website Development Company in India",
    description:
      "Designncode is a website development company in India delivering custom website design, UI/UX, ecommerce development, and SEO-ready web experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Designncode | Website Development Company in India",
    description:
      "Designncode is a website development company in India delivering custom website design, UI/UX, ecommerce development, and SEO-ready web experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
