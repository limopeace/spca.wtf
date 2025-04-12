/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Add redirects for Netlify
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/index.html',
        permanent: false,
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