/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // IMPORTANT: Only use export for production builds, never in development
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  // Ensure images work properly
  images: {
    domains: ['highcourtchd.gov.in'],
    unoptimized: true
  },
  // Only use trailing slash in production
  trailingSlash: process.env.NODE_ENV === 'production',
  // Set environment variables
  env: {
    NEXT_PUBLIC_DEPLOYMENT_ENV: process.env.NODE_ENV || 'development',
    NEXT_PUBLIC_NETLIFY_CONTEXT: process.env.CONTEXT || '',
  },
};

// Debug output to help diagnose configuration issues
console.log('Next.js Config:', { 
  NODE_ENV: process.env.NODE_ENV,
  output: nextConfig.output,
  trailingSlash: nextConfig.trailingSlash
});

module.exports = nextConfig; 