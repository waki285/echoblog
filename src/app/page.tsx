import Image from "next/image";

import Suzuneu from "../../public/suzuneu.webp";
import { DiscordButton, GitHubButton, TwitterButton } from "@/components/SocialButton";
import { DownScroll } from "@/components/DownScroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "すずねーうのウェブサイト",
  },
  openGraph: {
    title: {
      absolute: "すずねーうのウェブサイト",
    },
  },
}

export default function Home() {
  return (
    <main className="">
      <div className="w-100% h-[calc(100vh_-_4rem)] grid relative">
        <div className="flex flex-col gap-4 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={Suzuneu}
            alt=""
            className="rounded-full"
            width={96}
            height={96}
            priority
          />
          <h1 className="text-4xl font-bold">すずねーう</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            自称プログラマー
          </p>
          <div className="flex gap-2">
            <TwitterButton />
            <GitHubButton />
            <DiscordButton />
          </div>
          <Button variant="default" size="lg" asChild><Link href="/profile">プロフィール</Link></Button>
        </div>
        <DownScroll className="absolute bottom-4 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="flex flex-col items-center">
        <section>
          <h2 className="text-2xl font-bold">このサイトについて</h2>
          <p>
            せっかく suzuneu.com があるのに何もないのは寂しいので、何かしらのコンテンツを置いておこうと思い建ててます。
          </p>
          <p>
            今後ブログとかを書いたりしたいと思ってますが、まだまだ未完成なのでお待ちください。
          </p>
          <p>
            何かありましたら Twitter か Discord でお知らせください。
          </p>
          <p>
            サイト構成は Next.js で構築しています。
          </p>
        </section>
      </div>
    </main>
  );
}
