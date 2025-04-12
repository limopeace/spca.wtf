# Netlify Deployment Considerations for Next.js TypeScript Projects

## Common Issues and Fixes

### TypeScript Build Failures

When deploying Next.js TypeScript projects to Netlify, you may encounter these common issues:

1. **Missing TypeScript Dependencies**
   - By default, Netlify uses `NODE_ENV=production` which skips installing devDependencies
   - TypeScript and type definitions are often in devDependencies

2. **Node.js Version Mismatches**
   - Local development might use a different Node version than Netlify's build environment
   - Always specify the Node version explicitly

### Solutions for TypeScript Build Issues

1. **Move TypeScript dependencies to regular dependencies**:
   ```json
   "dependencies": {
     // other dependencies
     "typescript": "^5.8.3",
     "@types/node": "^20.17.30",
     "@types/react": "^18.3.20",
     "@types/react-dom": "^18.3.6"
   }
   ```

2. **Set NODE_ENV to development in build command**:
   - In the Netlify UI: `NODE_ENV=development npm ci && npm run build`
   - Or add a prebuild script that ensures TypeScript dependencies are installed:
     ```json
     "scripts": {
       "prebuild": "npm i typescript @types/react @types/node --no-save || true",
       "build": "next build"
     }
     ```

3. **Create proper configuration files**:

   `netlify.toml`:
   ```toml
   [build]
     command = "NODE_ENV=development npm ci && npm run build && echo '/*    /index.html   200' > out/_redirects"
     publish = "out"

   [build.environment]
     NETLIFY_NEXT_PLUGIN_SKIP = "true"
     NODE_VERSION = "22"
     NODE_ENV = "development"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

   `.env` file (for local development):
   ```
   NODE_ENV=development
   ```

   `.node-version` file:
   ```
   22
   ```

### Fixing 404 Errors with Next.js

Next.js apps deployed to Netlify may experience 404 errors for several reasons:

1. **Missing @netlify/plugin-nextjs**:
   - The Next.js plugin handles SSR and routing compatibility
   - Add it to your devDependencies:
     ```json
     "devDependencies": {
       "@netlify/plugin-nextjs": "^4.41.3"
     }
     ```
   - Include it in netlify.toml plugins section

2. **Incorrect publish directory**:
   - When using `output: 'export'` in Next.js config, files are output to the `out` directory
   - Set publish directory to `out` in Netlify UI and config files
   - Without static export, use `.next` as the publish directory

3. **Client-side routing issues**:
   - Create a `_redirects` file in the output directory with:
     ```
     /*    /index.html   200
     ```
   - You can generate this file during build with:
     ```
     echo '/*    /index.html   200' > out/_redirects
     ```
   - This tells Netlify to serve your index.html for all routes, allowing client-side routing to handle them

4. **Next.js configuration**:
   - Update `next.config.js` with:
     ```js
     const nextConfig = {
       // existing config
       trailingSlash: true,
       output: 'export', // For static site generation
     }
     ```

5. **Node version compatibility**:
   - Modern Next.js requires Node 16+
   - Use `.node-version` file or NODE_VERSION env variable

## Important Netlify UI Settings

When deploying, check these settings in the Netlify dashboard:

1. **Build Settings**:
   - Site configuration > Build & deploy > Continuous deployment > Build settings
   - Set build command to: `NODE_ENV=development npm ci && npm run build && echo '/*    /index.html   200' > out/_redirects`
   - Set publish directory to: `out` (when using static export) or `.next` (for SSR)

2. **Environment Variables**:
   - Site configuration > Build & deploy > Environment variables
   - Consider adding: `NODE_ENV=development`

3. **Dependency Management**:
   - Site configuration > Build & deploy > Continuous deployment > Dependency management
   - Set Node.js version to match your development environment 

## Configuration File Priorities

Netlify processes configuration in this order:
1. UI settings
2. netlify.toml
3. Environment variables

When troubleshooting, check build logs to see which settings are being used. 