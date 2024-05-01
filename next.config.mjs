/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/home/links", permanent: true },
      { source: "/home", destination: "/home/links", permanent: true },
    ];
  },
};

export default nextConfig;
