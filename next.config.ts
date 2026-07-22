import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The Vercel account's shared Image Optimization quota (Hobby plan) is
    // already exhausted account-wide, which makes /_next/image return 402
    // and breaks every <Image> on the site. All images here are already
    // reasonably-sized static webp/png/jpg, so on-the-fly optimization isn't
    // needed — serve them as-is instead.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
