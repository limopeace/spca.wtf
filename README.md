# SPCA.wtf - Transparency Initiative

A website dedicated to documenting and providing transparency about animal welfare issues at SPCA Chandigarh.

## Project Overview

This project uses Next.js to provide a comprehensive documentation portal for sharing evidence, documents, legal cases, and timelines related to animal welfare issues at SPCA Chandigarh.

## 🔧 Technology Stack

- **Framework**: Next.js 14.x
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Netlify
- **Additional Tools**: React Icons, Recharts

## 📂 Project Structure

```
/
├── components/           # React components
│   └── layout/           # Layout components like Header and Footer
├── lib/                  # Utility functions and helpers
├── netlify/              # Netlify specific files and functions
├── pages/                # Next.js pages (JavaScript re-exports)
├── public/               # Static assets
├── src/                  
│   └── pages/            # Main page components (TypeScript)
│   └── styles/           # Global styles
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── netlify.toml          # Netlify deployment configuration
```

## 🚀 Local Development

1. Ensure you have Node.js 18+ installed
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Key Routes

- `/` - Homepage with overview
- `/documents` - Document repository
- `/legal` - Legal cases and court records
- `/timeline` - Timeline of key events
- `/faq` - Frequently asked questions
- `/contact` - Contact form for reporting issues

## 🖥️ Deployment to Netlify

This project is configured for seamless deployment on Netlify. 

### Automatic Deployment

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the Next.js configuration
3. Deploy settings are already configured in `netlify.toml`

### Manual Deployment

You can also deploy manually using the Netlify CLI:

```bash
# Install Netlify CLI
npm install netlify-cli -g

# Login to your Netlify account
netlify login

# Deploy the site
netlify deploy --prod
```

## 💡 Important Configuration Notes

- The project uses the official `@netlify/plugin-nextjs` for optimal Netlify integration
- Next.js `output: 'standalone'` is configured for optimal Netlify deployment
- Environment variables are set in `netlify.toml` for production
- Image optimization is configured to work with Netlify Image CDN

## 📚 Contributing

1. Create a new branch for your changes
2. Make your changes
3. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ❓ Troubleshooting

- **404 Errors**: Make sure your Netlify redirects are properly configured in `netlify.toml`
- **Image Loading Issues**: Ensure images use the Next.js Image component and proper paths
- **Deployment Issues**: Check Netlify build logs for specific errors

## Purpose of the Website

This website aims to:
- Raise awareness about animal welfare issues
- Document the conditions at animal welfare facilities
- Promote transparency in public institutions
- Exercise the constitutional right to freedom of speech and expression
- Facilitate community engagement for animal welfare improvement

## Legal Information

This website is a private initiative dedicated to documenting animal welfare issues. The content provided here is for informational purposes only and represents personal observations, experiences, and documentation of public interest matters.

For more information, please see the [Disclaimer and Terms of Use](/terms-of-use) and [Privacy Policy](/privacy-policy) pages.

## Contact

For inquiries: info@spca.wtf 