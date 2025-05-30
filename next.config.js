/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ Remove export output to allow API routes to run
  // output: 'export',

  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // or '10mb' if needed
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
