import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business-data";
import { commercialCaseStudies, serviceAreaLandings, serviceLandings } from "@/lib/marketing-data";

const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.8, changeFrequency: "monthly" },
  { path: "/commercial", priority: 0.8, changeFrequency: "monthly" },
  { path: "/residential", priority: 0.8, changeFrequency: "monthly" },
  { path: "/suppliers", priority: 0.5, changeFrequency: "monthly" },
  { path: "/service-area", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/estimate", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const dynamicRoutes = [
    ...serviceLandings.map((service) => ({
      path: `/services/${service.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...commercialCaseStudies.map((project) => ({
      path: `/projects/${project.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...serviceAreaLandings.map((area) => ({
      path: `/service-area/${area.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
