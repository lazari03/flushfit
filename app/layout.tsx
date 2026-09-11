import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flush Fit — Recessed bathroom hardware",
  description:
    "Flush plates, sockets, switches, paper holders and towel bars built into the wall instead of onto it. One recess depth, one finish family, no visible fixings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jost.variable}>
      <body style={{ fontFamily: "var(--font-jost), system-ui, sans-serif", background: "var(--bg)" }}>{children}</body>
    </html>
  );
}
