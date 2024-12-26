import { Breadcrumb } from "@/components/Breadcrumb";
import { PageTitle } from "@/components/structure/PageTitle";
import { Section } from "@/components/structure/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "検索",
  description: "検索ページです。",
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: false,
  }
}

export default function Profile() {
  return (
    <main className="content">
      <Breadcrumb breadcrumbs={[{ label: "検索"}]} />

      <div className="max-w-[1200px] w-full mx-auto p-4">
        <PageTitle title="検索" />
        <Section className="mt-4">
          見つかりませんでした。
        </Section>
      </div>
    </main>
  );
}
