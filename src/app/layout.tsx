import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lewis Donovan - Tech Consultant & Software Engineer",
  description: "Award-winning tech entrepreneur from London, creating awesome products and experiences for the digital age!",
  keywords: ["tech consultant", "software engineer", "CTO", "solutions architect", "Lewis Donovan"],
  authors: [{ name: "Lewis Donovan" }],
  openGraph: {
    title: "Lewis Donovan - Tech Consultant & Software Engineer",
    description: "Award-winning tech entrepreneur from London, creating awesome products and experiences for the digital age!",
    url: "https://lewisdonovan.dev",
    siteName: "Lewis Donovan",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lewis Donovan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewis Donovan - Tech Consultant & Software Engineer",
    description: "Award-winning tech entrepreneur from London, creating awesome products and experiences for the digital age!",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/images/favicon.png",
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
        className={`${inter.variable} ${firaCode.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
