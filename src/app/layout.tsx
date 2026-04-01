import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "おしごとJapanese | ビジネス日本語 Practical Business Japanese",
  description: "職場で即使えるビジネス日本語を、業界別に学べるコースです。Learn business Japanese for your industry. Real workplace expressions, ready to use.",
  alternates: {
    canonical: "https://oshigoto-japanese.com",
  },
  verification: {
    google: "osN5zt1aBHbevua90GjiZ4EXqMLk9Qhfu5kSa2rd8Nw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-3938476116806210" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3938476116806210"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <GoogleTagManager gtmId="GTM-WQS6STS8" />
        {children}
      </body>
    </html>
  );
}
