import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  title: "Hamaara Indian Kitchen | Santa Clara, CA",
  description:
    "Authentic South Indian cuisine in Santa Clara. One India, Many Cultures, One Table. Order online or visit us at 4300 Great America Pkwy.",
  keywords: ["Indian restaurant", "South Indian food", "Santa Clara", "biryani", "dosa", "Hamaara Kitchen"],
  openGraph: {
    title: "Hamaara Indian Kitchen",
    description: "One India, Many Cultures, One Table.",
    url: "https://hamarakitchen.com",
    siteName: "Hamaara Indian Kitchen",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
