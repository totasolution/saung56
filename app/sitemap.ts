import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();
  return [
    { url: `${site.url}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/artikel`, lastModified: articles[0]?.date, changeFrequency: 'weekly', priority: 0.8 },
    ...articles.map((a) => ({
      url: `${site.url}/artikel/${a.slug}`,
      lastModified: a.updated ?? a.date,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
