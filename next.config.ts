import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.tokio-sushi.de",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tokio-sushi.de",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
