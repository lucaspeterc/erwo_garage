import type { MetadataRoute } from 'next'

const SITE_URL = 'https://erwo-garage.pl'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/uslugi', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/uslugi/serwis-samochodowy', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/uslugi/chip-tuning', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/uslugi/hamownia', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/uslugi/geometria-3d', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/uslugi/klimatyzacja', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/uslugi/elektronika-warsztatowa', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/katalog-mocy', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/realizacje', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/o-nas', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/kontakt', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
    { path: '/blog/chip-tuning-co-musisz-wiedziec', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/blog/wymiana-rozrzadu-bmw', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/blog/diagnostyka-komputerowa', changeFrequency: 'monthly', priority: 0.6 },
    { path: '/polityka-prywatnosci', changeFrequency: 'yearly', priority: 0.2 },
    { path: '/regulamin', changeFrequency: 'yearly', priority: 0.2 },
  ]

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
