/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    staticFolder: "public",
    API_URL: "localhost:3000",
  },
};

module.exports = nextConfig;
