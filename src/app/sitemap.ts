import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://suzuneu.com",
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: "https://suzuneu.com/profile",
      lastModified: "2024-12-29T16:46:54+09:00",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://suzuneu.com/pgp",
      lastModified: "2024-12-29T16:52:54+09:00",
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
