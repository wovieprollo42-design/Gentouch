import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

const routes = [
  '',
  '/about',
  '/ministry',
  '/sermons',
  '/events',
  '/connect',
  '/give',
  '/contact',
  '/plan-your-visit',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/plan-your-visit' ? 0.9 : 0.7,
  }));
}
