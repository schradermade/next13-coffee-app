/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_DB_URL: process.env.NEXT_PUBLIC_DB_URL,
    FOURSQUARE_API_KEY: process.env.FOURSQUARE_API_KEY,
  },
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
    ],
  },
};
module.exports = nextConfig;
