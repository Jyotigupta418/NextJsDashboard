import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  /* config options here */
  eslint  : {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
