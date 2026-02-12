import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kiro_nextjs",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
