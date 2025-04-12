/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // This setting helps with Netlify deployments
  trailingSlash: true,
  // Ensures Next.js outputs HTML files for each page
  output: 'export',
}

module.exports = nextConfig 