import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amrutham | South Indian Cuisine | Santa Clara, CA",
  description:
    "100% Pure Vegetarian South Indian cuisine in Santa Clara. Authentic tiffins, dosas, biryanis, curries & more. Catering available for all occasions.",
  keywords: ["Indian restaurant", "South Indian food", "pure vegetarian", "Santa Clara", "biryani", "dosa", "Amrutham", "tiffin"],
  openGraph: {
    title: "Amrutham | South Indian Cuisine",
    description: "100% Pure Vegetarian. Authentic South Indian Taste. Made with Love & Care.",
    url: "https://hamarakitchen.com",
    siteName: "Amrutham",
    type: "website",
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
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body
        className="min-h-screen flex flex-col"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <ScrollProgress />
        <AnnouncementBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
