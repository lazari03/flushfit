import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

// One family throughout: Hanken Grotesk (latin-ext covers Albanian ë/ç and Italian accents).
const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flush Fit — Recessed bathroom hardware",
  description:
    "Flush plates, sockets, switches, paper holders and towel bars built into the wall instead of onto it. One recess depth, one finish family, no visible fixings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hanken.variable}>
      <body style={{ fontFamily: "var(--font-hanken), system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
