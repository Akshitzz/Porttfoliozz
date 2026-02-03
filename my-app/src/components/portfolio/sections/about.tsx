"use client";

import { FaXTwitter, FaSpotify, FaYoutube } from "react-icons/fa6";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Contact() {
  const email = "akshitsachdeva21@gmail.com";

  const socialLinks = [
    {
      name: "Twitter",
      icon: <FaXTwitter className="h-5 w-5" />,
      url: "https://x.com/0xAkshit",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/akshit-sachdeva-130854241/",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: `mailto:${email}`,
    },
    {
      name: "GitHub",
      icon: <SiGithub className="h-5 w-5" />,
      url: "https://github.com/Akshitzz",
    },
    {
      name: "Spotify",
      icon: <FaSpotify className="h-5 w-5" />,
      url: "https://open.spotify.com/user/31s6vl6ndlkwuktrpfsks5dhutey",
    },
    {
      name: "YouTube",
      icon: <FaYoutube className="h-5 w-5" />,
      url: "https://www.youtube.com/channel/UCPoeyRkNgxVe8HV4Tup_4yQ",
    },
  ];

  return (
    <div className="relative p-4.5 mx-2 flex flex-col gap-12">

      {/* Horizontal Separators (Full Viewport) */}
      <div className="absolute top-20 left-1/2 w-[300vw] -translate-x-1/2 h-px bg-gray-200 dark:bg-gray-800 -z-50" />
      <div className="absolute top-2 left-1/2 w-[300vw] -translate-x-1/2 h-px bg-gray-200 dark:bg-gray-800 -z-50" />

      {/* Vertical Separators (Full Viewport Height) */}
      <div className="absolute top-0 -bottom-8 left-1/2 w-px -translate-x-[263px] lg:-translate-x-[463px] bg-gray-200 dark:bg-gray-800 -z-50" />
      <div className="absolute top-0 -bottom-8 left-1/2 w-px translate-x-[263px] lg:translate-x-[463px] bg-gray-200 dark:bg-gray-800 -z-50" />


      <div className="absolute top-[82px] -bottom-8 right-1/2 translate-x-[-263px] lg:translate-x-[-463px] w-[300vw] diagonal-bg opacity-50 dark:opacity-20 pointer-events-none -z-50" />
      <div className="absolute top-[82px] -bottom-8 left-1/2 translate-x-[263px] lg:translate-x-[463px] w-[300vw] diagonal-bg opacity-50 dark:opacity-20 pointer-events-none -z-50" />

      <h1 className="-mx-1.5 text-4xl font-semibold tracking-tighter pt-3">Hit me up!</h1>

      <div className="relative left-1/2 -translate-x-1/2 w-[526px] lg:w-[926px] max-w-[90vw] grid grid-cols-2 md:grid-cols-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.name === "Email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`
              group relative flex h-24 items-center justify-center gap-3
              border border-gray-200 bg-white/50 
              transition-all duration-300 
              dark:border-gray-800 dark:bg-black/50 
              hover:z-10 focus:z-10
              -ml-px -mt-px 
              first:ml-0
            `}
          >
            <span className="relative z-10 text-gray-900 dark:text-gray-100 transition-transform duration-300 group-hover:scale-110">
              {link.icon}
            </span>
            <kbd className="hidden md:inline-flex font-mono text-xs text-gray-500 group-hover:underline decoration-gray-400 underline-offset-4">
              {link.name}
            </kbd>
          </a>
        ))}
      </div>

      {/*  Credits :) */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-gray-200 pt-10 dark:border-gray-800">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
          Inspired by <span className="text-gray-900 dark:text-white">shadcn</span> & <span className="text-gray-900 dark:text-white">mannupaaji</span>
        </p>
        <div className="flex gap-4">
          <kbd className="px-2 py-1 text-[10px] rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 font-mono">Next.js</kbd>
          <kbd className="px-2 py-1 text-[10px] rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 font-mono">Tailwind v4</kbd>
        </div>
        <span className="text-gray-900 dark:text-white underline decoration-gray-400 underline-offset-4">Built with ❤️ by Akshit Sachdeva</span>
      </div>
    </div>
  );
}