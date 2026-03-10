import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  async rewrites() {
    return [
      {
        destination: 'https://eu-assets.i.posthog.com/static/:path*',
        source: '/ludo/static/:path*',
      },
      {
        destination: 'https://eu.i.posthog.com/:path*',
        source: '/ludo/:path*',
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
