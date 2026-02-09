/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/BCR",
  assetPrefix: "/BCR/",
  images: { unoptimized: true },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
