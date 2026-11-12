import Stage from './Stage';

const CONSULTING = 'https://consulting.voleriyah.com/';

const links = [
  { label: 'Кейсы / портфолио', href: CONSULTING + 'cases/', left: 493, top: 452, gap: 16 },
  { label: 'Консалтинг', href: CONSULTING, left: 565, top: 510, gap: 8 },
  { label: 'E-mail', href: 'mailto:valeriya.kostyuchenko@gmail.com', left: 594, top: 568, gap: 16 },
  { label: 'Telegram', href: 'https://t.me/voleriyah', left: 551, top: 626, gap: 16 },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/v-kostyuchenko/', left: 541, top: 684, gap: 16 },
  { label: 'CV', href: 'https://drive.google.com/file/d/173F2W6vdlEgdFgIMJs5ZrYasTNb6WTZU/view?usp=sharing', left: 578, top: 737, gap: 16 },
];

const mobileLinks = [
  { label: 'Портфолио', href: CONSULTING + 'cases/', left: 231, top: 241 },
  { label: 'Консалтинг', href: CONSULTING, left: 215, top: 311 },
  { label: 'E-mail', href: 'mailto:valeriya.kostyuchenko@gmail.com', left: 199, top: 381 },
  { label: 'Telegram', href: 'https://t.me/voleriyah', left: 183, top: 451 },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/v-kostyuchenko/', left: 167, top: 521 },
  { label: 'CV', href: 'https://drive.google.com/file/d/173F2W6vdlEgdFgIMJs5ZrYasTNb6WTZU/view?usp=sharing', left: 151, top: 586 },
];

// [текст до, подчёркнутая часть, текст после]
const facts: [string, string, string][] = [
  ['', '16', ' лет в IT'],
  ['', '7', ' лет fullstack разработки'],
  ['', '200+', ' проведенных собеседований'],
  ['команды ', '40+', ' человек'],
  ['ROI дизайн систем ', '200%+', ''],
  ['', '3', ' дизайн-функции с нуля'],
];

function Facts() {
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

export default function Page() {
  return (
    <main>
      <div className="desktop"><Stage width={1440} height={1024} fit="contain">
        {/* бегущая строка с достижениями */}
        <div className="marquee" aria-label="Достижения">
          <div className="marquee-track">
            <div className="marquee-group"><Facts /></div>
            <div className="marquee-group" aria-hidden="true"><Facts /></div>
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
          <img src="/stub/portrait.jpg" alt="Валерия Костюченко" />
        </div>
        <div className="portrait-frame">
          <div className="portrait-frame-rot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/stub/portrait-frame.svg" alt="" />
          </div>
        </div>

        <h1 className="name">Валерия Костюченко</h1>
        <p className="role">AI-native Design &amp; Product Leader</p>

        {links.map((l) => (
          <a
            key={l.label}
            className="link"
            href={l.href}
            style={{ left: l.left, top: l.top, gap: l.gap }}
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
        <img className="divider" src="/stub/divider.svg" alt="" />
        <p className="copy">© Valeriya Kostyuchenko, 2026</p>
      </Stage></div>

      <div className="mobile">
        <Stage width={393} height={852} fit="contain" cropTop={80} cropBottom={20}>
          <div className="m-marquee" aria-hidden="true">
            <div className="marquee-track">
              <div className="marquee-group"><Facts /></div>
              <div className="marquee-group"><Facts /></div>
            </div>
          </div>

          <div className="m-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/stub/portrait.jpg" alt="Валерия Костюченко" />
          </div>
          <div className="m-frame">
            <div className="m-frame-rot">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/stub/m-portrait-frame.svg" alt="" />
            </div>
          </div>

          <p className="m-name">Валерия Костюченко</p>
          <p className="m-role">AI-native Design &amp; Product Leader</p>

          {mobileLinks.map((l) => (
            <a
              key={l.label}
              className="link"
              href={l.href}
              style={{ left: l.left, top: l.top, gap: 16 }}
              {...(l.href.startsWith('http') && !l.href.startsWith(CONSULTING)
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              <Chevron />
              {l.label}
            </a>
          ))}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="m-divider" src="/stub/m-divider.svg" alt="" />
          <p className="m-copy">© Valeriya Kostyuchenko, 2026</p>
        </Stage>
      </div>
    </main>
  );
}
