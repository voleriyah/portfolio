export type Lang = 'ru' | 'en';

export const SITE = 'https://voleriyah.com';
export const CONSULTING = 'https://consulting.voleriyah.com/';
const EMAIL = 'mailto:valeriya.kostyuchenko@gmail.com';
const TELEGRAM = 'https://t.me/voleriyah';
const LINKEDIN = 'https://www.linkedin.com/in/v-kostyuchenko/';
const CV = 'https://drive.google.com/file/d/173F2W6vdlEgdFgIMJs5ZrYasTNb6WTZU/view?usp=sharing';

// Положение ссылок взято из макета (они выложены «лесенкой» вдоль косого края трапеции)
const desktopPos = [
  { left: 493, top: 452, gap: 16 },
  { left: 565, top: 510, gap: 8 },
  { left: 594, top: 568, gap: 16 },
  { left: 551, top: 626, gap: 16 },
  { left: 541, top: 684, gap: 16 },
  { left: 578, top: 737, gap: 16 },
];
const mobilePos = [
  { left: 231, top: 241 },
  { left: 215, top: 311 },
  { left: 199, top: 381 },
  { left: 183, top: 451 },
  { left: 167, top: 521 },
  { left: 151, top: 586 },
];

type Dict = {
  htmlLang: string;
  path: string; // путь этой версии
  title: string;
  description: string;
  name: string;
  role: string;
  factsLabel: string;
  // [текст до, подчёркнутая часть, текст после]
  facts: [string, string, string][];
  // [название на десктопе, название на мобильной, ссылка]
  links: [string, string, string][];
  switch: { label: string; href: string; lang: string; flag: string };
};

export const dict: Record<Lang, Dict> = {
  ru: {
    htmlLang: 'ru',
    path: '/',
    title: 'Валерия Костюченко — AI-native Design & Product Leader',
    description:
      'Валерия Костюченко — AI-native Design & Product Leader. Консалтинг, кейсы, контакты.',
    name: 'Валерия Костюченко',
    role: 'AI-native Design & Product Leader',
    factsLabel: 'Достижения',
    facts: [
      ['', '16', ' лет в IT'],
      ['', '7', ' лет fullstack разработки'],
      ['', '200+', ' проведенных собеседований'],
      ['команды ', '40+', ' человек'],
      ['ROI дизайн систем ', '200%+', ''],
      ['', '3', ' дизайн-функции с нуля'],
    ],
    links: [
      ['Кейсы / портфолио', 'Портфолио', CONSULTING + 'cases/'],
      ['Консалтинг', 'Консалтинг', CONSULTING],
      ['E-mail', 'E-mail', EMAIL],
      ['Telegram', 'Telegram', TELEGRAM],
      ['Linkedin', 'Linkedin', LINKEDIN],
      ['CV', 'CV', CV],
    ],
    switch: { label: 'English', href: '/en', lang: 'en', flag: '/stub/flag-us.svg' },
  },
  en: {
    htmlLang: 'en',
    path: '/en',
    title: 'Valeriya Kostyuchenko — AI-native Design & Product Leader',
    description:
      'Valeriya Kostyuchenko — AI-native Design & Product Leader. Consulting, case studies, contacts.',
    name: 'Valeriya Kostyuchenko',
    role: 'AI-native Design & Product Leader',
    factsLabel: 'Highlights',
    facts: [
      ['', '16', ' years in IT'],
      ['', '7', ' years of fullstack development'],
      ['', '200+', ' interviews conducted'],
      ['teams of ', '40+', ' people'],
      ['Design systems ROI ', '200%+', ''],
      ['', '3', ' design functions built from scratch'],
    ],
    links: [
      ['Cases / portfolio', 'Portfolio', CONSULTING + 'en/cases/'],
      ['Consulting', 'Consulting', CONSULTING + 'en/'],
      ['E-mail', 'E-mail', EMAIL],
      ['Telegram', 'Telegram', TELEGRAM],
      ['Linkedin', 'Linkedin', LINKEDIN],
      ['CV', 'CV', CV],
    ],
    switch: { label: 'Русский', href: '/', lang: 'ru', flag: '/stub/flag-ru.svg' },
  },
};

export function desktopLinks(lang: Lang) {
  return dict[lang].links.map(([label, , href], i) => ({ label, href, ...desktopPos[i] }));
}
export function mobileLinks(lang: Lang) {
  return dict[lang].links.map(([, label, href], i) => ({ label, href, ...mobilePos[i] }));
}

export function metadataFor(lang: Lang) {
  const d = dict[lang];
  return {
    metadataBase: new URL(SITE),
    title: d.title,
    description: d.description,
    alternates: {
      canonical: d.path,
      languages: {
        ru: dict.ru.path,
        en: dict.en.path,
        'x-default': dict.ru.path,
      },
    },
    openGraph: {
      title: d.title,
      description: d.description,
      url: d.path,
      siteName: d.name,
      locale: lang === 'ru' ? 'ru_RU' : 'en_US',
      alternateLocale: lang === 'ru' ? ['en_US'] : ['ru_RU'],
      type: 'website',
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', sizes: '48x48' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}
