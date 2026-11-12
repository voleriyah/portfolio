import Stage from './Stage';
import LangLink from './LangLink';
import { CONSULTING, desktopLinks, dict, mobileLinks, type Lang } from './content';

const u = (n: number) => `calc(${n} * var(--u))`;

function Facts({ facts }: { facts: [string, string, string][] }) {
  return (
    <>
      {facts.map(([a, u, b]) => (
        <p className="fact" key={u}>
          {a}
          <span className="u">{u}</span>
          {b}
        </p>
      ))}
    </>
  );
}

function Chevron() {
  return (
    <span className="chev" aria-hidden="true">
      <span className="chev-inner" />
    </span>
  );
}

function LangSwitch({ lang, className }: { lang: Lang; className: string }) {
  const sw = dict[lang].switch;
  return (
    <LangLink className={`lang-switch ${className}`} href={sw.href} lang={sw.lang}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={sw.flag} alt="" width={28} height={20} />
      <span>{sw.label}</span>
    </LangLink>
  );
}

export default function Landing({ lang }: { lang: Lang }) {
  const d = dict[lang];
  const links = desktopLinks(lang);
  const mLinks = mobileLinks(lang);
  return (
    <main className={`lang-${lang}`}>
      <div className="desktop"><Stage variant="desktop" width={1440} height={1024} cropTop={60} cropBottom={34}>
        {/* бегущая строка с достижениями */}
        <div className="marquee" aria-label={d.factsLabel}>
          <div className="marquee-track">
            <div className="marquee-group"><Facts facts={d.facts} /></div>
            <div className="marquee-group" aria-hidden="true"><Facts facts={d.facts} /></div>
          </div>
        </div>

        {/* белая трапеция с рамкой */}
        <div className="card-frame">
          <div className="card-frame-rot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/stub/card-frame.svg" alt="" />
          </div>
        </div>

        {/* портрет */}
        <div className="portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/stub/portrait.jpg" alt={d.name} />
        </div>
        <div className="portrait-frame">
          <div className="portrait-frame-rot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/stub/portrait-frame.svg" alt="" />
          </div>
        </div>

        <h1 className="name">{d.name}</h1>
        <p className="role">AI-native Design &amp; Product Leader</p>

        {links.map((l) => (
          <a
            key={l.label}
            className="link"
            href={l.href}
            style={{ right: u(1440 - l.right), top: u(l.top), gap: u(16) }}
            {...(l.href.startsWith('http') && !l.href.startsWith(CONSULTING)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <Chevron />
            {l.label}
          </a>
        ))}

        {/* разделитель и копирайт */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <LangSwitch lang={lang} className="d-lang" />
        <img className="divider" src="/stub/divider.svg" alt="" />
        <p className="copy">© Valeriya Kostyuchenko, 2026</p>
      </Stage></div>

      <div className="mobile">
        <Stage variant="mobile" width={393} height={852} cropTop={40} cropBottom={88}>
          <div className="m-marquee" aria-hidden="true">
            <div className="marquee-track">
              <div className="marquee-group"><Facts facts={d.facts} /></div>
              <div className="marquee-group"><Facts facts={d.facts} /></div>
            </div>
          </div>

          <div className="m-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/stub/portrait.jpg" alt={d.name} />
          </div>
          <div className="m-frame">
            <div className="m-frame-rot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/stub/m-portrait-frame.svg" alt="" />
            </div>
          </div>

          <p className="m-name">{d.name}</p>
          <p className="m-role">AI-native Design &amp; Product Leader</p>

          {mLinks.map((l) => (
            <a
              key={l.label}
              className="link"
              href={l.href}
              style={{ left: u(l.left), top: u(l.top), gap: u(16) }}
              {...(l.href.startsWith('http') && !l.href.startsWith(CONSULTING)
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <Chevron />
              {l.label}
            </a>
          ))}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <LangSwitch lang={lang} className="m-lang" />
          <img className="m-divider" src="/stub/m-divider.svg" alt="" />
          <p className="m-copy">© Valeriya Kostyuchenko, 2026</p>
        </Stage>
      </div>
    </main>
  );
}
