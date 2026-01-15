import { Alegreya_Sans, Erica_One } from "next/font/google";
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
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}