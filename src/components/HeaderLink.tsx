"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { memo } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export const HeaderLink = memo(function HeaderLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  const current = useSelectedLayoutSegment();
  const isActive = (current || "") === href.replace("/", "");
  return <Link href={href} className={`relative ${isActive ? styles["active-link"]:styles["slide-anime"]}`}>{children}</Link>;
});