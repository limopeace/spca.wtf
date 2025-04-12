#!/bin/bash
set -e

# Install dependencies
NODE_ENV=development npm ci

# Build the application
npm run build

# Make sure the out directory exists
mkdir -p out

# Create the _redirects file
echo "/*    /index.html   200" > out/_redirects

echo "Build completed successfully!" 