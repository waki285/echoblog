"use client";

import { useEffect } from "react";
import * as tocbot from "tocbot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableOfContents } from "lucide-react";

export const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc", // 目次を追加する class 名
      contentSelector: ".content", // 目次を取得するコンテンツの class 名
      headingSelector: "h2, h3, h4", // 目次として取得する見出しタグ
      // ヘッダーの高さ分ズレてしまうため調整
      //headingsOffset: 70,
      //scrollSmoothOffset: -70,
      collapseDepth: 6,
    });

    const tocItems = document.querySelectorAll('.toc-link');
    const counters = [0, 0, 0]; // h1, h2, h3 のカウンター

    tocItems.forEach((item) => {
      const headingLevel = item.className.match(/node-name--H(\d)/);
      if (!headingLevel) return;

      const level = parseInt(headingLevel[1], 10) - 2; // h1 = 0, h2 = 1, h3 = 2

      // カウンターの更新
      counters[level]++;
      for (let i = level + 1; i < counters.length; i++) {
        counters[i] = 0; // 下位レベルのカウンターをリセット
      }

      // 番号の生成
      const number = counters.slice(0, level + 1).join('-'); // "1", "2-1" など
      item.textContent = `${number} | ${item.textContent}`;
      (item as HTMLElement).style.paddingLeft = `${level * 1.5}rem`;
      (item as HTMLElement).style.fontSize = `${1 - level * 0.1}rem`;
    });

    // 不要となったtocbotインスタンスを削除
    return () => tocbot.destroy();
  }, []);

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle className="inline-flex items-center gap-1"><TableOfContents />目次</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="toc">目次を読込中</nav>
      </CardContent>
    </Card>
  );
};
