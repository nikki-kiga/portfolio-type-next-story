/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
