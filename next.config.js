/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ibb.co', 'i.ibb.co'],
  },
};

module.exports = nextConfig;
