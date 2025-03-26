import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'github.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'raw.githubusercontent.com' },
    ],
  },
};

export default nextConfig;
