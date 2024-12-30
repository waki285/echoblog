"use client";
import { memo, useState, useCallback } from "react";

export const Pre = memo(function Pre({
  children,
  withCopyButton,
  copyContent,
}: {
  children: string;
  withCopyButton?: boolean;
  copyContent?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(copyContent || children);
    setIsCopied(true);
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [children, copyContent]);

  return (
    <pre className="p-3 overflow-x-auto bg-slate-200 dark:bg-slate-800 dark:text-white rounded-md relative">
      {children}
      {withCopyButton && (
        <button
          onClick={handleCopy}
          className="absolute top-0 right-0 p-2 text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      )}
    </pre>
  );
});