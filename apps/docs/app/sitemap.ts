import type { MetadataRoute } from "next"
import { baseUrl } from "@/lib/metadata"
import { source } from "@/app/source"

export const revalidate = false

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString()

  return [
    {
      url: url("/react"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/react/blocks"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: url("/react/docs"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...(await Promise.all(
      source.getPages().map((page) => {
        const lastModified = page.data.lastModified
        return {
          url: url(page.url),
          lastModified: lastModified ? new Date(lastModified) : undefined,
          changeFrequency: "weekly",
          priority: 0.5,
        } as MetadataRoute.Sitemap[number]
      }),
    )),
  ]
}