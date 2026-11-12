import Stage from './Stage';

const CONSULTING = 'https://consulting.voleriyah.com/';

const links = [
  { label: 'Кейсы / портфолио', href: CONSULTING + 'cases/', left: 493, top: 452, gap: 16 },
  { label: 'Консалтинг', href: CONSULTING, left: 565, top: 510, gap: 8, accent: true },
  { label: 'E-mail', href: 'mailto:valeriya.kostyuchenko@gmail.com', left: 594, top: 568, gap: 16 },
  { label: 'Telegram', href: 'https://t.me/voleriyah', left: 551, top: 626, gap: 16 },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/v-kostyuchenko/', left: 541, top: 684, gap: 16 },
  { label: 'CV', href: 'https://drive.google.com/file/d/173F2W6vdlEgdFgIMJs5ZrYasTNb6WTZU/view?usp=sharing', left: 578, top: 737, gap: 16 },
];

// [текст до, подчёркнутая часть, текст после]
const facts: [string, string, string][] = [
  ['', '16', ' лет в IT'],
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

function Chevron({ purple }: { purple?: boolean }) {
  return (
    <span className="chev" aria-hidden="true">
      <span className="chev-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={purple ? '/stub/chevron-purple.svg' : '/stub/chevron.svg'} alt="" />
      </span>
    </span>
  );
}

export default function Page() {
  return (
    <main>
      <div className="mobile">
        <div className="m-marquee" aria-hidden="true">
          <div className="marquee-track">
            <div className="marquee-group"><Facts /></div>
            <div className="marquee-group"><Facts /></div>
          </div>
        </div>
        <div className="m-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="m-photo" src="/stub/portrait.jpg" alt="Валерия Костюченко" />
          <h2 className="m-name">Валерия Костюченко</h2>
          <p className="m-role">AI-native Design &amp; Product Leader</p>
          <nav className="m-links">
            {links.map((l) => (
              <a
                key={l.label}
                className={`link${l.accent ? ' accent' : ''}`}
                href={l.href}
                {...(l.href.startsWith('http') && !l.href.startsWith(CONSULTING)
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                <Chevron purple={l.accent} />
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="m-copy">© Valeriya Kostyuchenko, 2026</p>
      </div>

      <div className="desktop"><Stage>
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
            className={`link${l.accent ? ' accent' : ''}`}
            href={l.href}
            style={{ left: l.left, top: l.top, gap: l.gap }}
            {...(l.href.startsWith('http') && !l.href.startsWith(CONSULTING)
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <Chevron purple={l.accent} />
            {l.label}
          </a>
        ))}

        {/* разделитель и копирайт */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="divider" src="/stub/divider.svg" alt="" />
        <p className="copy">© Valeriya Kostyuchenko, 2026</p>
      </Stage></div>
    </main>
  );
}
