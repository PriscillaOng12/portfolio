import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Priscilla Ong | Software Engineer & Product Manager",
  description: "CS/Econ student who builds products end-to-end—from user insight to design to code. Co-founded MediSync (hospital pilots), quantitative trading at WorldQuant, seeking Summer 2025 SWE/PM internships at FAANG+.",
  keywords: ["software engineer", "product manager", "dartmouth", "medisync", "worldquant", "aegis health", "ai", "healthcare", "trading", "internship", "faang"],
  authors: [{ name: "Priscilla Ong" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Priscilla Ong | Building Products End-to-End",
    description: "Software Engineer & Product Manager building solutions from healthcare AI to high-performance trading systems. Open for Summer 2025 internships.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
