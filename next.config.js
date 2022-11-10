/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
    images: {
    domains: ["media.graphassets.com"],
    unoptimized: true
  },
}

module.exports = nextConfig
