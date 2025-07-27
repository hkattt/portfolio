import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-pocketbase-preview.pockethost.io',
        pathname: '/api/files/**',
      },
      {
        protocol: 'https',
        hostname: 'portfolio-pocketbase-prod.pockethost.io',
        pathname: '/api/files/**',
      },
    ],
  },
};

export default nextConfig;
