import { H } from "@/components/structure/H";

type Props = {
  title: string;
};

/**
 * ページのはじめに表示するタイトル
 * 必ず直後にSectionコンポーネントを配置すること
 * @param title タイトル文字列
 */
export const PageTitle = ({ title }: Props) => (
  <H className="text-4xl font-bold">{title}</H>
);