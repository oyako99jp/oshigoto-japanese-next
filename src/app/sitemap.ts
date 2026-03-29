import { MetadataRoute } from "next";

const LAST_MODIFIED_DEFAULT = new Date("2026-03-29");
const LAST_MODIFIED_INTERVIEW = new Date("2026-03-29");

export default function sitemap(): MetadataRoute.Sitemap {
  const unitIds = Array.from({ length: 20 }, (_, i) => i + 1);
  const interviewIds = Array.from({ length: 10 }, (_, i) => i + 1);

  return [
    {
      url: "https://oshigoto-japanese.com",
      lastModified: LAST_MODIFIED_DEFAULT,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://oshigoto-japanese.com/it",
      lastModified: LAST_MODIFIED_DEFAULT,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...unitIds.map((id) => ({
      url: `https://oshigoto-japanese.com/it/${id}`,
      lastModified: LAST_MODIFIED_DEFAULT,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: "https://oshigoto-japanese.com/interview",
      lastModified: LAST_MODIFIED_INTERVIEW,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...interviewIds.map((id) => ({
      url: `https://oshigoto-japanese.com/interview/${id}`,
      lastModified: LAST_MODIFIED_INTERVIEW,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: "https://oshigoto-japanese.com/privacy",
      lastModified: LAST_MODIFIED_DEFAULT,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://oshigoto-japanese.com/contact",
      lastModified: LAST_MODIFIED_DEFAULT,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://oshigoto-japanese.com/about",
      lastModified: LAST_MODIFIED_DEFAULT,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
