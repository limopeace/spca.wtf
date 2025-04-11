/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Point to the correct pages directory
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Ensure images work properly
  images: {
    domains: ['highcourtchd.gov.in'],
    formats: ['image/avif', 'image/webp'],
    unoptimized: process.env.NODE_ENV === 'development'
  },
  // Only use trailing slash in production
  trailingSlash: process.env.NODE_ENV === 'production',
  // Set environment variables
  env: {
    NEXT_PUBLIC_DEPLOYMENT_ENV: process.env.NODE_ENV || 'development',
    NEXT_PUBLIC_NETLIFY_CONTEXT: process.env.CONTEXT || '',
  },
  // Handle redirects for development mode
  async redirects() {
    return process.env.NODE_ENV === 'production' 
      ? []
      : [
          {
            source: '/404',
            destination: '/',
            permanent: false,
          },
        ];
  },
  // Properly configure output for Netlify
  output: 'standalone',
};

// Debug output to help diagnose configuration issues
console.log('Next.js Config:', { 
  NODE_ENV: process.env.NODE_ENV,
  output: nextConfig.output,
  trailingSlash: nextConfig.trailingSlash
});

module.exports = nextConfig; 