/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during the build
  },
};

module.exports = nextConfig;

// comment below wala to locally run the site

// // next.config.js
// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true, // Disable ESLint during the build
//   },
// };
