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
      <div className="p-3 mx-2 flex flex-col gap-6 -z-100">
        <h1 className="text-4xl font-semibold tracking-tighter">Contributions</h1>
        <div className="rounded-xl border border-gray-200 bg-white/50 p-6 dark:border-gray-800 dark:bg-black/50 backdrop-blur-sm h-[180px] animate-pulse" />
      </div>
    );
  }
  return (
    <div className="p-1 mx-1.5 flex flex-col gap-6 relative">

      <div className="p-1 mx-1.5 flex flex-col gap-6 relative">
        <div className="absolute top-18 left-1/2 w-[300vw] -translate-x-1/2 h-px bg-gray-200 dark:bg-gray-800 -z-50" />
        <div className="absolute top-2 left-1/2 w-[300vw] -translate-x-1/2 h-px bg-gray-200 dark:bg-gray-800 -z-50" />

        {/* Vertical Lines - Now z-0 to sit on top of background but below content */}
        <div className="absolute top-0 left-1/2 w-px bottom-0 -translate-x-[263px] lg:-translate-x-[463px] bg-gray-200 dark:bg-gray-800 pointer-events-none -z-50" />
        <div className="absolute top-0 left-1/2 w-px bottom-0 translate-x-[263px] lg:translate-x-[463px] bg-gray-200 dark:bg-gray-800 pointer-events-none -z-50" />

        {/* Diagonal Backgrounds for Side Gutters (Between top-18 here and top-2 of Stack) */}
        <div className="absolute top-[74px] -bottom-3 right-1/2 translate-x-[-263px] lg:translate-x-[-463px] w-[300vw] diagonal-bg opacity-50 dark:opacity-20 pointer-events-none -z-50" />
        <div className="absolute top-[74px] -bottom-3 left-1/2 translate-x-[263px] lg:translate-x-[463px] w-[300vw] diagonal-bg opacity-50 dark:opacity-20 pointer-events-none -z-50" />

        <h1 className=" -mx-0.5 mt-6  text-4xl font-semibold tracking-tighter relative z-10 ">Contributions</h1>

        <div className="relative p-6">

          <div className="absolute inset-0  -z-10 " />

          <div className="relative z-10 -mt-5 -mb-6 [&::-webkit-scrollbar]:hidden scrollbar-hide">
            <GitHubCalendar
              username="Akshitzz"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={{
                light: ['#e0e0e0', '#fbcfe8', '#f472b6', '#db2777', '#be185d'],
                dark: ['#161b22', '#831843', '#be185d', '#db2777', '#f472b6'],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}