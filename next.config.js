/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Generate a static site for Firebase Hosting
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true, // Required for static export with external images
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
module.exports = nextConfig;
