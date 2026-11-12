import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Язык по умолчанию определяем по Accept-Language (его браузер берёт из языка системы).
// Работает только на «/»: прямая ссылка на /en всегда открывает английскую версию.
// Ручной выбор через переключатель сохраняется в cookie `lang` и важнее заголовка.
// Если язык определить не удалось — английский.

// Русскоязычные и близкие языки оставляем на русской версии, остальным — английская.
const RU_LANGS = new Set(['ru', 'uk', 'be', 'kk', 'ky', 'uz', 'tg', 'hy', 'az', 'ka', 'tt', 'ba']);
const BOT = /bot|crawl|spider|slurp|facebookexternalhit|preview|lighthouse|headless/i;

function preferredLang(header: string | null): 'ru' | 'en' | null {
  if (!header) return null;
  const first = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q.trim().slice(2)) : 1 };
    })
    .filter((x) => x.tag && x.tag !== '*' && x.q > 0)
    .sort((a, b) => b.q - a.q)[0];
  if (!first) return null;
  return RU_LANGS.has(first.tag.split('-')[0]) ? 'ru' : 'en';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname !== '/') return NextResponse.next();

  // Поисковым ботам и превью соцсетей всегда отдаём русскую версию (x-default)
  if (BOT.test(request.headers.get('user-agent') ?? '')) return NextResponse.next();

  const saved = request.cookies.get('lang')?.value;
  const lang =
    saved === 'ru' || saved === 'en'
      ? saved
      : // язык не определился (нет заголовка, только «*» и т.п.) — по умолчанию английский
        (preferredLang(request.headers.get('accept-language')) ?? 'en');

  if (lang === 'en') {
    const url = request.nextUrl.clone();
    url.pathname = '/en';
    const res = NextResponse.redirect(url, 307);
    res.headers.set('Vary', 'Accept-Language, Cookie');
    return res;
  }
  const res = NextResponse.next();
  res.headers.set('Vary', 'Accept-Language, Cookie');
  return res;
}

export const config = { matcher: ['/'] };
