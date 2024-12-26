"use client";

import { twMerge } from "tailwind-merge";
import { HeaderContent } from "./StaticHeader";
import { useCallback, useEffect, useState } from "react";

export function BackdropHeader({ className }: { className?: string }) {
  const [show, setShow] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header className={twMerge(`fixed w-full z-40 transition-all duration-300 ease-in-out ${show ? "top-0":"-top-16"}`, className || "")}>
      <nav className="max-w-[1200px] w-full mx-auto my-0 h-16 flex items-center justify-between px-2 bg-[#1a1a1a91] dark:bg-[#c1c1c191] text-white rounded-b-xl backdrop-blur relative">
        <HeaderContent />
      </nav>
    </header>
  );
}
