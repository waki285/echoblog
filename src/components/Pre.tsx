"use client";
import { memo, useState } from "react";

export const Pre = memo(function Pre({
  children,
  withCopyButton,
  copyContent,
}: {
  children: string;
  withCopyButton?: boolean;
  copyContent?: string;
}) {
  const [copiedTimeout, setCopiedTimeout] = useState<number | null>(null);
  return (
    <pre className="p-3 overflow-x-auto bg-slate-200 dark:bg-slate-800 dark:text-white rounded-md relative">
      {children}
      {withCopyButton && (
        <button
          onClick={() => {
            navigator.clipboard.writeText(copyContent || children);
            if (copiedTimeout) clearTimeout(copiedTimeout);
            setCopiedTimeout(
              setTimeout(
                () => setCopiedTimeout(null),
                2000
              ) as unknown as number
            );
          }}
          className="absolute top-0 right-0 p-2 text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          {copiedTimeout ? "Copied!" : "Copy"}
        </button>
      )}
    </pre>
  );
});
