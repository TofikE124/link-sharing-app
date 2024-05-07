/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/home/links", permanent: true },
      { source: "/home", destination: "/home/links", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "http", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
