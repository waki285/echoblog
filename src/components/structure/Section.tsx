"use client";

import { type ComponentProps } from "react";

import { HeadingLevelContext, useLevel } from "@/components/structure/context";

export const Section = ({ children, ...props }: ComponentProps<"section">) => {
  const level = useLevel();
  const nextLevel = Math.min(6, level + 1);
  return (
    <HeadingLevelContext.Provider value={{ level: nextLevel }}>
      <section {...props}>{children}</section>
    </HeadingLevelContext.Provider>
  );
};