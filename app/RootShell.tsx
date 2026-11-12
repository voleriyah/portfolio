import { Onest } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  variable: "--font-onest",
});

export const viewport = { themeColor: "#ae00e8" };

export default function RootShell({
  lang,
  children,
}: Readonly<{ lang: string; children: React.ReactNode }>) {
  return (
    <html lang={lang}>
      <body className={onest.variable}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BV2S1MX3CP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BV2S1MX3CP');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
