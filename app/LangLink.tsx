'use client';

// Ссылка-переключатель языка: запоминает выбор в cookie, чтобы автоопределение
// по языку системы больше не перебивало ручной выбор.
export default function LangLink({
  lang,
  href,
  className,
  children,
}: {
  lang: string;
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={className}
      href={href}
      hrefLang={lang}
      lang={lang}
      onClick={() => {
        try {
          document.cookie = `lang=${lang}; path=/; max-age=31536000; SameSite=Lax`;
        } catch {}
      }}
    >
      {children}
    </a>
  );
}
