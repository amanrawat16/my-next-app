/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/upload',
        destination: '/api/upload.js',
      },
    ];
  },
}

module.exports = nextConfig
