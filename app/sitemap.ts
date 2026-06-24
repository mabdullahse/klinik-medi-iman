import { MetadataRoute } from "next";

const baseUrl = "https://klinikimedi.com";

const paths = [
  { path: "", priority: 1.0 },
  { path: "/tentang-kami", priority: 0.8 },
  { path: "/perkhidmatan", priority: 0.9 },
  { path: "/perkhidmatan/kesihatan-am", priority: 0.8 },
  { path: "/perkhidmatan/kesihatan-mental", priority: 0.8 },
  { path: "/perkhidmatan/lutut-tumit", priority: 0.7 },
  { path: "/perkhidmatan/pengurusan-berat", priority: 0.7 },
  { path: "/perkhidmatan/osh-fomema", priority: 0.8 },
  { path: "/temujanji", priority: 0.9 },
  { path: "/hubungi-kami", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const msEntries = paths.map(({ path, priority }) => ({
    url: `${baseUrl}${path || "/"}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority,
    alternates: {
      languages: {
        ms: `${baseUrl}${path || "/"}`,
        en: `${baseUrl}/en${path || ""}`,
      },
    },
  }));

  const enEntries = paths.map(({ path, priority }) => ({
    url: `${baseUrl}/en${path || ""}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: priority * 0.9,
    alternates: {
      languages: {
        ms: `${baseUrl}${path || "/"}`,
        en: `${baseUrl}/en${path || ""}`,
      },
    },
  }));

  return [...msEntries, ...enEntries];
}
