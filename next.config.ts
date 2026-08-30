/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tseelevators',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
   env: {
    NEXT_PUBLIC_BASE_PATH: '/tseelevators',
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;