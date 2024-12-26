"use client";

import { ChevronsDown } from "lucide-react";
import { memo, useCallback } from "react";
import { twMerge } from "tailwind-merge";

export const DownScroll = memo(function DownScroll({
  className,
}: {
  className?: string;
}) {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }, []);
  return (
    <div className={twMerge("flex flex-col items-center", className)} aria-hidden onClick={handleClick}>
      <ChevronsDown className="animate-bounce" />
      <span className="text-xs text-gray-600 dark:text-gray-400 select-none">Scroll</span>
    </div>
  );
});
