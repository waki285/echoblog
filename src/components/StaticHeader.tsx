import Image from "next/image";
import Link from "next/link";

import Suzuneu from "../../public/suzuneu.webp";
import { ModeToggle } from "./ModeToggle";
import React, { memo } from "react";
import { HeaderLink } from "./HeaderLink";
import { twMerge } from "tailwind-merge";

export const HeaderContent = memo(function HeaderContent() {
  return (
    <>
      <Link className="flex items-center gap-2" href="/">
        <Image
          src={Suzuneu}
          alt=""
          className="rounded-full"
          width={48}
          height={48}
        />
        <span>すずねーう</span>
      </Link>
      <ul
        className="hidden sm:bg-transparent sm:p-0 sm:rounded-none absolute sm:flex-row top-[4.5rem] left-0 sm:flex sm:static sm:items-center gap-4"
        id="menu"
      >
        <li>
          <HeaderLink href="/">ホーム</HeaderLink>
        </li>
        <li>
          <HeaderLink href="/profile">プロフィール</HeaderLink>
        </li>
        {/*<li>
          <HeaderLink href="/donate">寄付</HeaderLink>
        </li>
        <li>
          <HeaderLink href="/contact">お問い合わせ</HeaderLink>
        </li>*/}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </>
  );
});

export function StaticHeader({ className }: { className?: string }) {
  return (
    <header
      className={twMerge(
        "w-full h-16 bg-[#1a1a1a91] dark:bg-[#c1c1c191] text-white border-b border-b-slate-500 flex justify-center items-stretch",
        className || ""
      )}
    >
      <nav className="max-w-[1200px] w-full mx-auto flex items-center justify-between px-2 relative">
        <HeaderContent />
      </nav>
    </header>
  );
}
