import type { Metadata, Viewport } from "next";
import { M_PLUS_1p } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StaticHeader } from "@/components/StaticHeader";
import { Footer } from "@/components/Footer";
import { BackdropHeader } from "@/components/BackdropHeader";
import { WithContext, Person, WebSite } from "schema-dts";
import { SITE_DOMAIN } from "@/constants/site";

const mPlus1p = M_PLUS_1p({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | すずねーうのウェブサイト",
    default: "すずねーう",
  },
  description:
    "すずねーうの公式サイトです。今後ブログやプロダクトを公開していく予定です。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: `https://${SITE_DOMAIN}`,
    siteName: "すずねーう",
    title: "すずねーう",
    description:
      "すずねーうの公式サイトです。今後ブログやプロダクトを公開していく予定です。",
    images: [
      {
        url: "/suzuneu.webp",
        width: 800,
        height: 800,
        alt: "すずねーう",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: [
      {
        url: "/suzuneu.webp",
        width: 800,
        height: 800,
        alt: "すずねーう",
      },
    ],
    creator: "@suzuneu_discord",
  },
  metadataBase: new URL(`https://${SITE_DOMAIN}`),
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
  },
  creator: "すずねーう",
  keywords: [
    "すずねーう",
    "suzuneu",
    "プログラマー",
    "Discord Bot",
    "ウェブサイト",
    "フロントエンド",
    "バックエンド",
  ],
  icons: [
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    }
  ]
};

export const viewport: Viewport = {
  themeColor: "#ef484a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const person: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "すずねーう",
    image: `https://${SITE_DOMAIN}/suzuneu.webp`,
    url: `https://${SITE_DOMAIN}`,
    jobTitle: "プログラマー",
    sameAs: ["https://twitter.com/suzuneu_discord"],
  };

  const website: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: `https://${SITE_DOMAIN}`,
    potentialAction: {
      "@type": "SearchAction",
      target: `https://${SITE_DOMAIN}/search?q={search_term_string}`,
      query: "required name=search_term_string",
    },
  };

  return (
    <html
      lang="ja"
      suppressHydrationWarning={process.env.NODE_ENV === "production"}
    >
      <body className={`${mPlus1p.className} antialiased leading-7`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <StaticHeader />
          <BackdropHeader />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
