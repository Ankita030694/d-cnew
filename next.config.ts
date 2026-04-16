import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow devices on the same local wifi network to load Javascript and HMR updates
  allowedDevOrigins: ["192.168.0.191", "localhost"],
};

export default nextConfig;
