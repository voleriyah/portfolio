import { Onest } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-onest",
});

export const metadata = {
  title: "Валерия Костюченко — AI-native Design & Product Leader",
  description: "AI-native Design & Product Leader",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = { themeColor: "#ae00e8" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
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
