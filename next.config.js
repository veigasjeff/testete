
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // your Next.js configuration
  webpack: (config, { isServer }) => {
    // custom webpack configuration
    return config;
  },
});

const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  optimizeImagesInDev: true,
  // Other Next.js configurations
})


module.exports = {
    async headers() {
      return [
        {
          // Set the Content Security Policy header for all pages
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'self' uwatchfree.vercel.app *.uwatchfree.vercel.app;",
             
            },
          ],
        },
      ];
    },
  };
  

  