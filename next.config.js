/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_DB_URL: process.env.NEXT_PUBLIC_DB_URL,
    FOURSQUARE_API_KEY: "fsq3Pdrat1Nhpo5WIDuD7XCkX3uiND/i/D5hEuQpeFSKdQ4=",
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
