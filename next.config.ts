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
  async redirects() {
    return [
      // The stable Vercel-provided alias (cmf-masonry.vercel.app) serves the
      // same production deployment as the custom domain but has no host-level
      // redirect configured in Vercel, so it was resolving with 200s and
      // duplicating every page under a second indexable host. Preview
      // deployment URLs (cmf-masonry-<hash>-<team>.vercel.app,
      // cmf-masonry-git-<branch>-<team>.vercel.app) are untouched by this
      // exact-host match, so PR previews keep working normally.
      {
        source: "/:path*",
        has: [{ type: "host", value: "cmf-masonry.vercel.app" }],
        destination: "https://www.cmfmasonry.com/:path*",
        permanent: true,
      },
    ];
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
