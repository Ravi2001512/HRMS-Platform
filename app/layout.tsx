import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NexusPay HR | Unified HRIS, Attendance & Payroll for Sri Lanka",
  description:
    "Run core HR, attendance, leave and statutory payroll (EPF/ETF/APIT) from one dashboard. Start your 14-day free trial — no card required.",
  metadataBase: new URL("https://www.nexuspayhr.lk"),
  openGraph: {
    title: "NexusPay HR — HR & Payroll built for Sri Lankan businesses",
    description:
      "Core HR, attendance, leave and statutory payroll in one platform, with local bank disbursement built in.",
    type: "website",
    locale: "en_LK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
