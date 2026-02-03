"use client";
import Link from "next/link";
import ThemeToggleButton from "@/components/portfolio/ui/theme-toggle-button";
import { SiGithub } from "react-icons/si";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";


export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return cn(
      "transition-colors",
      isActive
        ? "text-black dark:text-white font-semibold"
        : "text-black dark:text-gray-400 hover:text-black dark:hover:text-white"
    );
  };

  return (
    <div className="relative z-50 p-6 w-full min-h-[100px]">
      {/* Horizontal Lines */}
      <div className="absolute top-20 left-0 h-px w-full bg-gray-200 dark:bg-gray-800" />
      <div className="absolute top-2 left-0 h-px w-full bg-gray-200 dark:bg-gray-800" />
      <div className="absolute top-2 left-0 w-full h-[4.5rem] diagonal-bg opacity-50 dark:opacity-20 pointer-events-none z-10" />
      <header className=" z-[100] flex justify-between fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-full items-center p-2 px-6 border border-gray-200 dark:border-gray-800 rounded-full bg-white dark:bg-[#0a0a0a] max-w-[600px] lg:max-w-[1000px] transition-all duration-500 ease-in-out">
        <nav className="flex gap-5 w-full justify-end items-center">
          <ul className="flex gap-6">
            <li>
              <Link href="/portfolio" className={getLinkClass("/portfolio")}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className={getLinkClass("/blog")}>
                Blog
              </Link>
            </li>
          </ul>

          <div className="w-[1px] h-4 bg-gray-200 dark:bg-gray-800" />

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Akshitzz"
              target="_blank"
              className="text-black dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <SiGithub size={20} />
            </Link>

            <ThemeToggleButton />
          </div>
        </nav>
      </header>
    </div>
  );
}