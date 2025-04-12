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
  // Add redirects for Netlify
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/index.html',
        permanent: false,
        // This works with Netlify's processing of _redirects
        has: [
          {
            type: 'header',
            key: 'x-netlify-original-path',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 