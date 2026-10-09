

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  turbopack: {
    root: __dirname,
  },
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: true,  
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


