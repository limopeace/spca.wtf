/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // For Netlify deployment with newer Next.js
  output: 'export', 
  // Ensure images work properly
  images: {
    domains: ['highcourtchd.gov.in'],
    unoptimized: true
  },
};

module.exports = nextConfig; 