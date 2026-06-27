import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/layout/navbar";
import { generateSeoMetadata } from "@/SEO";
import Footer from "@/layout/footer";
import MobileBottomNavbar from "@/layout/bottombar";
import BottomToTopScrollButton from "@/common/BottomToTopScrollButton";
import ReduxProvider from "@/redux/provider";
import { Toaster } from "@/components/ui/sonner";

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

export const metadata: Metadata = seo as Metadata;

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
      <head>
        <meta name="application-name" content="Rubel Mart" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Rubel Mart" />
        <meta
          name="description"
          content="Rubel Mart is a modern e-commerce platform offering electronics, fashion, home essentials, beauty products, and more with secure payments and fast delivery."
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#6d28d9" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#6d28d9" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/icon-48x48.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rubel Mart" />
        <meta
          name="twitter:description"
          content="Shop electronics, fashion, home essentials, beauty products, and more at Rubel Mart."
        />
        <meta
          name="twitter:image"
          content="https://rubelmart.com/og-image.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rubel Mart" />
        <meta property="og:title" content="Rubel Mart" />
        <meta
          property="og:description"
          content="Shop electronics, fashion, home essentials, beauty products, and more at Rubel Mart."
        />
        <meta property="og:url" content="https://rubelmart.com" />
        <meta
          property="og:image"
          content="https://rubelmart.com/og-image.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schemas, null, 2),
          }}
        />
        <meta name="apple-mobile-web-app-title" content="Rubel" />
        <meta name="application-name" content="Rubel" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-full flex flex-col container mx-auto">
        <ReduxProvider>
          <ThemeProviders>
            <Navbar />
            <MobileBottomNavbar />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <BottomToTopScrollButton />
          </ThemeProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
