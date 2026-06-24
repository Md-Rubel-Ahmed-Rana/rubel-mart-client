import type { NextConfig } from "next";
import pwa from "next-pwa";

const withPWA = pwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  clientsClaim: true,
  disable: process.env.NODE_ENV === "development",
  fallbacks: {
    document: "/_offline",
    image: "",
    audio: "",
    video: "",
    font: "",
  },
  maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default withPWA(nextConfig as any);
