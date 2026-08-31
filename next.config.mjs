/**import type { NextConfig } from "next";*/
/**@type {import("next").NextConfig}*/

const nextConfig= {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "itfgfvgzdnicjlhgibkz.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100mb",
    },
  },
  reactStrictMode: true,
};

export default nextConfig;
