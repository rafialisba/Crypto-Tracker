import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["coin-images.coingecko.com"],
  },
};

export default nextConfig;
