import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["jasmine-citric-sermon.ngrok-free.dev", "localhost", "127.0.0.1"],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;