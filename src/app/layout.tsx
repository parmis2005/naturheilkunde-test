import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Naturheilpraxis Meschede | Heilpraktiker Köln",
    template: "%s | Naturheilpraxis Meschede",
  },
  description:
    "Naturheilpraxis Meschede in Köln: natürliche Schmerzbehandlung mit Blutegeltherapie, Laserakupunktur, Osteopathie, Raucherentwöhnung, Abnehmen und Beckenbodentraining beim erfahrenen Heilpraktiker Michael Meschede.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${geist.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream-100 text-foreground antialiased">
        <Header />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
