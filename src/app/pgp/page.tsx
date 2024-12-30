import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/structure/PageTitle";
import { Section } from "@/components/structure/Section";

import PGPCover from "../../../public/cover/pgp.webp";
import Image from "next/image";
import { H } from "@/components/structure/H";
import { Metadata } from "next";
import { Article, BreadcrumbList, WithContext } from "schema-dts";
import { Pre } from "@/components/Pre";
import { TextLink } from "@/components/TextLink";
import { ARTICLE_DEFAULT_SCHEMA, BREADCRUMB_DEFAULT_SCHEMA, SITE_DOMAIN } from "@/constants/site";

export const metadata: Metadata = {
  title: "PGP 公開鍵",
  description: "すずねーうの PGP 公開鍵を参照できます。",
  alternates: {
    canonical: "/pgp",
  },
  openGraph: {
    title: "PGP 公開鍵",
    description: "すずねーうの PGP 公開鍵を参照できます。",
  },
};

export default function PGP() {
  const article: WithContext<Article> = {
    ...ARTICLE_DEFAULT_SCHEMA,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://suzuneu.com/pgp",
    },
    headline: "PGP 公開鍵",
    image: "https://suzuneu.com/cover/pgp.webp",
    datePublished: "2024-12-29T16:52:54+09:00",
    dateModified: "2024-12-29T16:52:54+09:00",
  };

  const breadcrumb: WithContext<BreadcrumbList> = {
    ...BREADCRUMB_DEFAULT_SCHEMA,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: "https://suzuneu.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "プロフィール",
        item: "https://suzuneu.com/profile",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "PGP 公開鍵",
        item: "https://suzuneu.com/pgp",
      },
    ],
  };

  return (
    <main className="content">
      <Breadcrumb
        breadcrumbs={[
          { label: "プロフィール", href: "/profile" },
          { label: "PGP 公開鍵" },
        ]}
      />

      <div className="max-w-[1200px] w-full mx-auto p-4">
        <PageTitle title="PGP 公開鍵" />
        <Section className="mt-4">
          <Image src={PGPCover} alt="" width={600} priority />
          <H className="mb-2">鍵 ID</H>
          <Section>
            <H className="mb-2">主鍵</H>
            <Section>
              <Pre withCopyButton>10BAE6A408BB881EA0088C396C257F617B640D5A</Pre>
              (省略形 <code>6C257F617B640D5A</code>)
            </Section>
            <H className="mb-2">副鍵 (暗号化用)</H>
            <Section>
              <Pre withCopyButton>92BCE5CDEC8C23910FE0482E45650A6B563479A3</Pre>
              (省略形 <code>45650A6B563479A3</code>)
            </Section>
            <H className="mb-2">副鍵 (署名用)</H>
            <Section>
              <Pre withCopyButton>858F0468675602B8E098A6B7CC4F77CEA9F964E5</Pre>
              (省略形 <code>CC4F77CEA9F964E5</code>)
            </Section>
          </Section>
          <H className="mb-2">ユーザー ID</H>
          <Section>
            <Pre withCopyButton>waki285 &lt;suzuneu@suzuneu.com&gt;</Pre>
          </Section>
          <H className="mb-2">アルゴリズム</H>
          <Section>RSA (4096 ビット)</Section>
          <H className="mb-2">フィンガープリント</H>
          <Section>
            <Pre
              withCopyButton
              copyContent="10BAE6A408BB881EA0088C396C257F617B640D5A"
            >
              10BA E6A4 08BB 881E A008 8C39 6C25 7F61 7B64 0D5A
            </Pre>
          </Section>
          <H className="mb-2">公開鍵</H>
          <Section>
            <Pre withCopyButton>
              {`-----BEGIN PGP PUBLIC KEY BLOCK-----

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
3ZpzTQou1acStp/V1Zkbg9MWNKRLujgXcJa3
=jm6C
-----END PGP PUBLIC KEY BLOCK-----
`}
            </Pre>
            <p>公開鍵は <TextLink href="/pgp-public-key.asc">https://{SITE_DOMAIN}/pgp-public-key.asc</TextLink> (ASCII Armor 形式) もしくは <TextLink href="/pgp-public-key.gpg">https://{SITE_DOMAIN}/pgp-public-key.gpg</TextLink> (バイナリ形式) からも取得できます。</p>
          </Section>
          <H className="mb-2">キーサーバー</H>
          <Section>
            <ul className="ml-5 list-disc">
              <li>
                <TextLink href="https://keys.openpgp.org/vks/v1/by-fingerprint/10BAE6A408BB881EA0088C396C257F617B640D5A">keys.openpgp.org</TextLink>
              </li>
              <li>
                <TextLink href="https://keyserver.ubuntu.com/pks/lookup?search=10BAE6A408BB881EA0088C396C257F617B640D5A&fingerprint=on&op=index">keyserver.ubuntu.com</TextLink>
              </li>
              <li>
                <TextLink href="https://pgp.surfnet.nl/pks/lookup?search=10BAE6A408BB881EA0088C396C257F617B640D5A&fingerprint=on&op=index">pgp.surfnet.nl</TextLink>
              </li>
            </ul>
          </Section>
          <H className="mb-2">署名</H>
          <Section>
            <p>原文と分遣署名を <TextLink href="/pgp-signature.txt">https://{SITE_DOMAIN}/pgp-signature.txt</TextLink> と <TextLink href="/pgp-signature.txt.asc">https://{SITE_DOMAIN}/pgp-signature.txt.asc</TextLink> から取得できます。</p>
            <Pre withCopyButton>
              {`-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA256

私、すずねーう (Waki285) は、鍵 6C257F617B640D5A, 45650A6B563479A3, CC4F77CEA9F964E5 が私の鍵であると宣言します。
I, すずねーう (Waki285), declare that key 6C257F617B640D5A, 45650A6B563479A3, CC4F77CEA9F964E5 is my key.
-----BEGIN PGP SIGNATURE-----

iQIzBAEBCAAdFiEEhY8EaGdWArjgmKa3zE93zqn5ZOUFAmdxjAAACgkQzE93zqn5
ZOUncA/9EbXiKXdPUrvv/YizV2rMl0V7NwnacsN4btsOSZDdAXEF86LL2H+tmQQQ
gtyhOSWBt1G0KfMjHL/eNhU8/Kgy9c6/j2SmSyMw1XHa6A9OVMvfN0iMmPd8YFZD
SzKZQExz9bDT0YjEBDPfYGRUOjdvwNqy9rTluDORj/bifiXiZXw55CcXYjV7xTvN
wk+DJHpzMNs91+oTfJfrMbWnv3dqXF8pCP2OI5JEPttLD5jA19fFDufXxEyTFyYn
ikz2A0ETZNFVrU/uqj7NCeqrDRVwhYVzvTs0C+D7Kn5HTDbvNEg+GAdECYrnyFvM
a1YqnOjDTiyF51sCBS1jMThwk0i37tMKCsRJoqzaed81VNQjB7E/ILFhD374MI7a
yp8UwAr6STXkO6uQ8L9pT5lXh+Wt+Nup6xaQjn0Ys68lhVpCxEGKl21htcrYUecG
sCvJECA+mDOI7I1veoWhWPavSQl5f1sUPLiuDQXmsImzfKQ6IX1NQOb1NMRZCHkP
XcyyG975E2XU7e12AUm0We2nGl4+4VXqdmqP76UVsn8JkgFwB3FoGFO9Jxn6PiUc
/FqBU5XByTJWWOlYO035pHucxjtj12AK54CQ7xHZTEXxK+gt34KYn0VLQb/XtdW6
m74BeRy7nTnY0xBMZzuORMvXNcR8WUposzM/E94jlk4AU9M8yEY=
=z0Qr
-----END PGP SIGNATURE-----
`}
            </Pre>
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
