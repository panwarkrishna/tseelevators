import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

export const dynamic = "force-static";

// always returns https://domain.com/path/ (root stays https://domain.com/)
const u = (path = "") => {
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: u(), lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: u("about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: u("products"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: u("services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: u("luxury-elevator"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("customized-elevator"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("gallery"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: u("blog001"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: u("contact"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: u("certificate-of-appreciation"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: u("electrical-license"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];

  const productRoutes: MetadataRoute.Sitemap = [
    "home-lift",
    "domestic-lift",
    "residential-lift",
    "passenger-lift",
    "commercial-lift",
    "pitless-lift",
    "goods-lift",
    "glass-lift",
    "hydraulic-lift",
  ].map((slug) => ({
    url: u(slug),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = [
    "lift-installation-services",
    "lift-repair-services",
    "lift-maintenance-services",
    "lift-amc-services",
    "lift-dismantling-services",
    "lift-ms-structure",
  ].map((slug) => ({
    url: u(slug),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationRoutes: MetadataRoute.Sitemap = [
    "noida",
    "haryana",
    "gurgaon",
    "sonipat",
    "panipat",
    "rewari",
    "manesar",
    "kundli",
    "murthal",
    "ambala",
    "panchkula",
    "mohali",
    "zirakpur",
    "chandigarh",
    "kharar",
    "ropar",
    "kurali",
  ].map((slug) => ({
    url: u(slug),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes, ...locationRoutes];
}