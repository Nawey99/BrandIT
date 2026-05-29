import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/CV.html", destination: "/profile", permanent: true },
      { source: "/generic.html", destination: "/expertise", permanent: true },
      { source: "/Gallary.html", destination: "/gallery", permanent: true },
    ];
  },
};

export default nextConfig;
