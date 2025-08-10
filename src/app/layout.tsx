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
  description: "CS/Econ student and brain tumor survivor who turned personal healthcare challenges into building MediSync, a HIPAA-compliant platform now piloting at 2 hospitals—while researching how to mitigate social biases in GPT-4",
  keywords: ["software engineer", "product manager", "dartmouth", "medisync", "worldquant", "brain", "quantitative research"],
  authors: [{ name: "Priscilla Ong" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Priscilla Ong | Software Engineer & Product Manager",
    description: "CS/Econ student and brain tumor survivor building healthcare technology and ML solutions",
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
