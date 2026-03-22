import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const unitIds = Array.from({ length: 20 }, (_, i) => i + 1);

  return [
    {
      url: "https://oshigoto-japanese.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://oshigoto-japanese.com/it",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...unitIds.map((id) => ({
      url: `https://oshigoto-japanese.com/it/unit/${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
