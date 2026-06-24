import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/layout/navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rubel Mart",
  description:
    "Rubel Mart is a modern online marketplace offering quality products, secure shopping, fast delivery, and a seamless e-commerce experience for modern living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col container mx-auto">
        <ThemeProviders>
          <Navbar />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
