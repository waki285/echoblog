import Link from "next/link";
import React, { memo, JSX } from "react";
import { twMerge } from "tailwind-merge";

export const TextLink = memo(function TextLink({
  href,
  children,
  className,
  ...props
}: JSX.IntrinsicElements["a"]) {
  if (!href) {
    return <>{children}</>;
  }
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={twMerge("text-blue-500 hover:text-blue-600 visited:text-purple-500 visited:hover:text-purple-600 hover:underline", className)} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href} className={twMerge("text-blue-500 hover:text-blue-600 visited:text-purple-500 visited:hover:text-purple-600 hover:underline", className)}  {...props}>
        {children}
      </Link>
    )
  }
});