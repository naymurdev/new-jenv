import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ViewTransitions } from "next-view-transitions";
import Headers from "@/components/view/home/headers";
import { siteConfig } from "@/lib/utils";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable:"--font-satoshi"
});
const appleGaramond = localFont({
  src: [
    {
      path: "./fonts/AppleGaramond.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AppleGaramond-Italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/AppleGaramond-Bold.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/AppleGaramond-BoldItalic.woff",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/AppleGaramond-Light.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/AppleGaramond-LightItalic.woff",
      weight: "normal",
      style: "italic",
    },
  ],
  variable:"--font-apple-garamond"
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "web development services",
    "app development services",
    "web and app developers",
    "custom software development",
    "frontend development",
    "backend development",
    "full-stack development",
    "mobile app development",
    "React developers",
    "Next.js developers",
    "Node.js developers",
    "software development company",
    "Jenv Tech",
    "Jenv Tech developers"
  ],
  authors: [
    {
      name: "naymur rahman",
      url: "https://naymur-rahman.com/",
    },
  ],
  creator: "naymur",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@naymur_dev",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${satoshi.variable} ${appleGaramond.variable} font-satoshi overflow-x-hidden`}>
          <svg
            width="1440"
            height="688"
            className="fixed top-0 left-0 w-full h-screen z-0"
            viewBox="0 0 1440 688"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.62">
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="356.269"
                  x2="1456"
                  y2="356.269"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="0.5"
                  x2="1456"
                  y2="0.5"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="379.926"
                  x2="1456"
                  y2="379.926"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="24.1572"
                  x2="1456"
                  y2="24.1572"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="403.582"
                  x2="1456"
                  y2="403.582"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="47.8145"
                  x2="1456"
                  y2="47.8145"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="427.239"
                  x2="1456"
                  y2="427.239"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="71.4717"
                  x2="1456"
                  y2="71.4717"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="450.896"
                  x2="1456"
                  y2="450.896"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="95.1289"
                  x2="1456"
                  y2="95.1289"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="474.554"
                  x2="1456"
                  y2="474.554"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="118.786"
                  x2="1456"
                  y2="118.786"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="498.211"
                  x2="1456"
                  y2="498.211"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="142.443"
                  x2="1456"
                  y2="142.443"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="521.868"
                  x2="1456"
                  y2="521.868"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="166.101"
                  x2="1456"
                  y2="166.101"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="545.525"
                  x2="1456"
                  y2="545.525"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="189.758"
                  x2="1456"
                  y2="189.758"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="569.183"
                  x2="1456"
                  y2="569.183"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="213.415"
                  x2="1456"
                  y2="213.415"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="592.84"
                  x2="1456"
                  y2="592.84"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="237.072"
                  x2="1456"
                  y2="237.072"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="616.497"
                  x2="1456"
                  y2="616.497"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="260.729"
                  x2="1456"
                  y2="260.729"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="640.154"
                  x2="1456"
                  y2="640.154"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="284.387"
                  x2="1456"
                  y2="284.387"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="663.812"
                  x2="1456"
                  y2="663.812"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="308.044"
                  x2="1456"
                  y2="308.044"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="687.469"
                  x2="1456"
                  y2="687.469"
                  stroke="#1A1A1A"
                />
              </g>
              <g style={{ mixBlendMode: "overlay" }}>
                <line
                  x1="-29.5015"
                  y1="331.701"
                  x2="1456"
                  y2="331.701"
                  stroke="#1A1A1A"
                />
              </g>
            </g>
          </svg>

          <Headers />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
