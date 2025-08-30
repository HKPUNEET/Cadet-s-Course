import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* Keep other config options here */

    // Disable ESLint checks during production build
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;