"use client";

import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleButton() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const handleToggle = () => {
    const currentTheme = resolvedTheme || theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setToggled(newTheme === "dark");
  };

  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      const isTyping =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement;

      if (e.key.toUpperCase() === "D" && !isTyping) {
        handleToggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [resolvedTheme, theme, setTheme]);

  useEffect(() => {
    if (mounted) {
      const currentTheme = resolvedTheme || theme;
      if (currentTheme) {
        setToggled(currentTheme === "dark");
      }
    }
  }, [resolvedTheme, theme, mounted]);

  if (!mounted) return null;

  return (
    <div className="group relative flex items-center justify-center">
      {/* @ts-expect-error - TypeScript false positive with complex Pick type */}
      <Expand
        duration={900}
        toggled={toggled}
        toggle={handleToggle}
      />

      {/* Floating Tooltip positioned below the button */}
      <div className="absolute top-full mt-2 scale-0 group-hover:scale-100 transition-all duration-200 origin-top pointer-events-none">
        <div className="bg-zinc-900 border border-zinc-700 text-white text-[10px] px-2 py-1 rounded shadow-xl whitespace-nowrap flex items-center gap-2">
          Toggle mode <kbd className="bg-zinc-800 px-1.5 py-0.5 rounded border border-zinc-600 font-sans text-xs">D</kbd>
        </div>
      </div>
    </div>
  );
}