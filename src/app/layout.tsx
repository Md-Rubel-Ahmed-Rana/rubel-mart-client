import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/layout/navbar";
import { generateSeoMetadata } from "@/SEO";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const seo = generateSeoMetadata({
  title: "Rubel Mart | Online Shopping in Bangladesh",
  description:
    "Rubel Mart is a modern and trusted e-commerce marketplace in Bangladesh, offering a seamless online shopping experience with electronics, fashion, beauty products, home essentials, groceries, gadgets, lifestyle products, secure payments, fast delivery, and exceptional customer support.",
  schemaTypes: ["Organization", "WebSite", "OnlineStore"],
});

export const metadata: Metadata = seo;

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
