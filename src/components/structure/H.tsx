"use client";

import { type HTMLProps, type ReactNode } from "react";

import { useLevel } from "@/components/structure/context";
import { twMerge } from "tailwind-merge";

type Props = HTMLProps<HTMLHeadingElement> & {
  children: ReactNode;
};


export const H = ({ children, className, ...props }: Props) => {
  const level = useLevel();
  switch (level) {
    case 1:
      return <h1 className={twMerge("text-4xl mt-4 font-bold", className)} {...props}>{children}</h1>;
    case 2:
      return <h2 className={twMerge("text-3xl mt-4 mb-1 font-semibold", className)} {...props}>{children}</h2>;
    case 3:
      return <h3 className={twMerge("text-2xl mt-4 mb-1 font-medium", className)} {...props}>{children}</h3>;
    case 4:
      return <h4 className={twMerge("text-xl", className)} {...props}>{children}</h4>;
    case 5:
      return <h5 className={twMerge("text-lg", className)} {...props}>{children}</h5>;
    case 6:
      return <h6 className={twMerge("text-base", className)} {...props}>{children}</h6>;
    default:
      return <h1 {...props}>{children}</h1>;
  }
};