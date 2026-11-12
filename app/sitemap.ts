import type { MetadataRoute } from 'next';
import { SITE, dict } from './content';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { ru: SITE + dict.ru.path, en: SITE + dict.en.path };
  return [
    { url: SITE + dict.ru.path, alternates: { languages } },
    { url: SITE + dict.en.path, alternates: { languages } },
  ];
}
