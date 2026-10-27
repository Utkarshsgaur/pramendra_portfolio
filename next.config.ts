import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve static images with optimized headers
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  // Compress responses
  compress: true,
  // Strict mode for better React practices
  reactStrictMode: true,
};

export default nextConfig;
