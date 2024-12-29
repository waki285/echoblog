import { Article, BreadcrumbList, WithContext } from "schema-dts";

export const SITE_DOMAIN = "suzuneu.com";

export const ARTICLE_DEFAULT_SCHEMA =  {
  "@context": "https://schema.org",
  "@type": "Article",
  author: {
    "@type": "Person",
    name: "すずねーう",
    url: "https://suzuneu.com/profile",
  },
  publisher: {
    "@type": "Organization",
    name: "",
    logo: {
      "@type": "ImageObject",
      url: "",
    },
  },
} as const satisfies WithContext<Article>;

export const BREADCRUMB_DEFAULT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: `https://${SITE_DOMAIN}`,
    },
  ],
} as const satisfies WithContext<BreadcrumbList>;