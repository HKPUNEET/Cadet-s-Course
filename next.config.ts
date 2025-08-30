import type { NextConfig } from "next";

const nextConfig: NextConfig = {

    images: {
        domains: ['cadet-s-course.vercel.app'],
    },

    // Disable ESLint checks during production build
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;