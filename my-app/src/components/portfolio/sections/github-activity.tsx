"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";
export default function GitHubContributions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-3 mx-2 flex flex-col gap-6">
        <h1 className="text-4xl font-semibold tracking-tighter">Contributions</h1>
        <div className="rounded-xl border border-gray-200 bg-white/50 p-6 dark:border-gray-800 dark:bg-black/50 backdrop-blur-sm h-[180px] animate-pulse" />
      </div>
    );
  }
  return (
    <div className="p-3 mx-2 flex flex-col gap-6">
      <h1 className="text-4xl font-semibold tracking-tighter">Contributions</h1>

      <div className="rounded-xl border border-gray-200 bg-white/50 p-6 dark:border-gray-800 dark:bg-black/50 backdrop-blur-sm">
        <GitHubCalendar
          username="Akshitzz"
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          // Customizing colors to match your dark/light theme
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
          }}
        />
      </div>
    </div>
  );
}