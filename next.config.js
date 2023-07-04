/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.pexels.com", "pexels.com", "api.slingacademy.com"],
  },
};

module.exports = nextConfig;
