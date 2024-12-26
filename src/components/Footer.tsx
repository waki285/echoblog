import { memo } from "react";

export const Footer = memo(function Footer() {
  return (
    <footer className="text-center py-4 text-gray-600 dark:text-gray-400">
      <p suppressHydrationWarning>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://suzuneu.com"
          className="underline"
        >
          すずねーう
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
});
