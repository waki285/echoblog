"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTheme } from "next-themes";
import { memo, useCallback, useEffect, useState } from "react";

const X = memo(function X() {
  const { theme } = useTheme();
  return (
    <svg
      viewBox="0 0 2000 2000"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <circle
        cx="1000"
        cy="1000"
        r="1000"
        fill={theme === "dark" ? "#fff" : "#000"}
      />

      <g transform="translate(400, 386.5)">
        <path
          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          fill={theme === "dark" ? "#000" : "#fff"}
        />
      </g>
    </svg>
  );
});

const Twitter = memo(function Twitter() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 30 30"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="15" cy="15" r="15" fill="#1da1f2" />
      <g transform="translate(3, 3)">
        <path
          d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"
          fill="white"
        ></path>
      </g>
    </svg>
  );
});

export const TwitterButton = memo(function TwitterButton() {
  const [shiftPressed, setShiftPressed] = useState(false);
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Shift") {
      setShiftPressed(true);
    }
  }, []);
  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (e.key === "Shift") {
      setShiftPressed(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);
  return (
    <a
      href={`https://${shiftPressed ? "twitter" : "x"}.com/suzuneu_discord`}
      aria-label={shiftPressed ? "Twitter" : "X"}
      target="_blank"
      rel="noopener noreferrer"
    >
      {shiftPressed ? <Twitter /> : <X />}
    </a>
  );
});

const GitHub = memo(function GitHub() {
  const { theme } = useTheme();
  return (
    <svg width="24" height="24" viewBox="0 0 98 96" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill={theme === "dark" ? "#fff" : "#24292f"}
      />
    </svg>
  );
});

export const GitHubButton = memo(function GitHubButton() {
  return (
    <a
      href="https://github.com/waki285"
      aria-label="GitHub"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHub />
    </a>
  );
});

const Discord = memo(function Discord() {
  const { theme } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 127.14 96.36"
      width="24"
      height="24"
    >
      <path
        fill={theme === "dark" ? "#fff" : "#5865F2"}
        d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
      />
    </svg>
  );
});

export const DiscordButton = memo(function DiscordButton() {
  return (
    <HoverCard openDelay={1}>
      <HoverCardTrigger asChild>
        <div aria-label="Discord">
          <Discord />
        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        <span>@suzuneu</span>
      </HoverCardContent>
    </HoverCard>
  );
});
