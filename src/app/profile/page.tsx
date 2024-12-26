import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/structure/PageTitle";
import { Section } from "@/components/structure/Section";

import SuzuneuCover from "../../../public/cover/profile.webp";
import Image from "next/image";
import { Toc } from "@/components/TOC";
import { H } from "@/components/structure/H";
import { Metadata } from "next";
import { Article, BreadcrumbList, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "すずねーうです。自称プログラマーです。主に Discord Bot やウェブサイト (フロントエンド/バックエンド) の開発をしています。",
  alternates: {
    canonical: "/profile",
  },
};

export default function Profile() {
  const article: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://suzuneu.com/profile"
    },
    "author": {
      "@type": "Person",
      "name": "すずねーう"
    },
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "headline": "プロフィール",
    "image": "https://suzuneu.com/cover/profile.webp",
    "datePublished": "2024-12-27",
    "dateModified": "2024-12-27"
  };

  const breadcrumb: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
            すずねーうです。自称プログラマーです。主に Discord Bot やウェブサイト (フロントエンド/バックエンド) の開発をしています。
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
