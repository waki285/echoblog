import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/structure/PageTitle";
import { Section } from "@/components/structure/Section";

import SuzuneuCover from "../../../public/cover/profile.webp";
import Image from "next/image";
import { Toc } from "@/components/TOC";
import { H } from "@/components/structure/H";
import { Metadata } from "next";
import { Article, BreadcrumbList, WithContext } from "schema-dts";
import { ARTICLE_DEFAULT_SCHEMA, BREADCRUMB_DEFAULT_SCHEMA } from "@/constants/site";
import { TextLink } from "@/components/TextLink";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "すずねーうです。自称プログラマーです。主に Discord Bot やウェブサイト (フロントエンド/バックエンド) の開発をしています。",
  alternates: {
    canonical: "/profile",
  },
  openGraph: {
    title: "プロフィール",
    description: "すずねーうです。自称プログラマーです。主に Discord Bot やウェブサイト (フロントエンド/バックエンド) の開発をしています。",
  },
};

export default function Profile() {
  const article: WithContext<Article> = {
    ...ARTICLE_DEFAULT_SCHEMA,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://suzuneu.com/profile"
    },
    "headline": "プロフィール",
    "image": "https://suzuneu.com/cover/profile.webp",
    "datePublished": "2024-12-27T20:31:00+09:00",
    "dateModified": "2024-12-29T16:46:54+09:00"
  };

  const breadcrumb: WithContext<BreadcrumbList> = {
    ...BREADCRUMB_DEFAULT_SCHEMA,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://suzuneu.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "プロフィール",
        "item": "https://suzuneu.com/profile"
      }
    ]
  };

  return (
    <main className="content">
      <Breadcrumb breadcrumbs={[{ label: "プロフィール"}]} />

      <div className="max-w-[1200px] w-full mx-auto p-4">
        <PageTitle title="プロフィール" />
        <Section className="mt-4">
          <Image src={SuzuneuCover} alt="すずねーう suzuneu.com / @suzuneu" width={600} priority />
          <Toc />
          <H id="selfintro" className="mt-4">自己紹介</H>
          <Section>
            <p>すずねーうです。自称プログラマーです。主に Discord Bot やウェブサイト (フロントエンド/バックエンド) の開発をしています。</p>
            <p>私の PGP 公開鍵を<TextLink href="/pgp">ここから取得できます。</TextLink></p>
          </Section>
          <H id="skills">スキル</H>
          <Section>
            <H id="proglang">言語</H>
            <ul className="list-disc ml-5">
              <li>Rust</li>
              <li>JavaScript / TypeScript</li>
              <li>Python</li>
            </ul>
            <H id="framework">フレームワーク</H>
            <ul className="list-disc ml-5">
              <li>React</li>
              <li>Next.js</li>
              <li>Discord.js</li>
              <li>serenity-rs</li>
            </ul>
            <H id="otherskill">その他</H>
            <ul className="list-disc ml-5">
              <li>Prisma</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
            </ul>
          </Section>
        </Section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </main>
  );
}
