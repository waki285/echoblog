import React, { memo } from "react";

import {
  Breadcrumb as BreadcrumbPrimitive,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { House } from "lucide-react";
import Link from "next/link";

type BreadcrumbInfo = {
  label: string;
  href?: string;
};

export const Breadcrumb = memo(function Breadcrumb({
  breadcrumbs,
}: {
  breadcrumbs: BreadcrumbInfo[];
}) {
  const page = breadcrumbs.pop();
  return (
    <BreadcrumbPrimitive className="w-full bg-slate-200 dark:bg-slate-800">
      <BreadcrumbList className="max-w-[1200px] w-full mx-auto text-sm py-1 px-4">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="inline-flex items-center gap-2">
              <House size="16" />
              <span>ホーム</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {page && <BreadcrumbSeparator />}
        {breadcrumbs.map(({ label, href }, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={href!}>{label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}
        {page && (
          <BreadcrumbItem>
            <BreadcrumbPage>{page.label}</BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </BreadcrumbPrimitive>
  );
});
