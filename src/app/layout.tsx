import type { Metadata, Viewport } from "next";
import { Montserrat, Lora, Barlow, Barlow_Condensed } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RevealObserver } from "@/components/layout/RevealObserver";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["300", "400", "500"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://talenopia.com"),
  title: {
    default: "Talenopia — Utopia of Talent Sourcing",
    template: "%s | Talenopia",
  },
  description:
    "Enterprise-Ready Talent. Deployed When You Need It. Talenopia helps enterprises and growing businesses scale with hyper-specialized IT and non-IT professionals.",
  keywords: [
    "resource augmentation",
    "IT staffing",
    "staff augmentation",
    "talent sourcing",
    "enterprise staffing",
    "contract hiring",
    "Talenopia",
  ],
  authors: [{ name: "Talenopia" }],
  creator: "Talenopia",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Talenopia",
    title: "Talenopia — Utopia of Talent Sourcing",
    description:
      "Enterprise-Ready Talent. Deployed When You Need It. Scale with hyper-specialized IT and non-IT professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talenopia — Utopia of Talent Sourcing",
    description:
      "Enterprise-Ready Talent. Deployed When You Need It. Scale with hyper-specialized IT and non-IT professionals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C01C1C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body
        className={`${montserrat.variable} ${lora.variable} ${barlow.variable} ${barlowCondensed.variable} antialiased`}
        style={{ fontFamily: "var(--font-montserrat, Montserrat), sans-serif" }}
      >
        <RevealObserver />
        <Header />
        <main style={{ paddingTop: "var(--nav-h)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
