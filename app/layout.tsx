import { Alegreya_Sans, Erica_One } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import RootLayoutClient from "@/components/RootLayoutClient";

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  variable: "--font-alegreya",
});

const ericaOne = Erica_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-erica",
});

export const metadata = {
  title: 'Valeriya Kostyuchenko',
  description: 'Director of Product Design & Research',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alegreyaSans.variable} ${ericaOne.variable} antialiased overflow-x-hidden`}
        style={{ overflowX: 'hidden' }}
      >
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
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}