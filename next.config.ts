import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
      images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "*",
          },
        ],
      },
    experimental: {
     //  ppr: "incremental",
      // after: true,
     //  serverActions: true, 
    },
    
    devIndicators: {
      appIsrStatus: true,
      buildActivity: true,
      buildActivityPosition: "bottom-right",
     },
};

export default nextConfig;
