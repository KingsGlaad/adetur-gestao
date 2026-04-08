import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ignora erros de TypeScript durante o build
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // Opcional: também ignora erros de ESLint
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },

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
