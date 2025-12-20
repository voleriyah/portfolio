import type { Metadata } from "next";
import { Alegreya_Sans, Erica_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alegreyaSans.variable} ${ericaOne.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
