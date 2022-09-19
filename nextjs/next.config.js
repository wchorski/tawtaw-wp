const path = require('path');
const allowedImageWordPressDomain = new URL( process.env.NEXT_PUBLIC_WP_SITE_URL ).hostname;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.wp.com',
      },
      {
        protocol: 'https',
        hostname: allowedImageWordPressDomain,
      },
      {
        protocol: 'https',
        hostname: '**.placeholder.com',
      },
    ]
  },
}
