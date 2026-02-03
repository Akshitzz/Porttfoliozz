"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "100XDates",
    title: "100XDates",
    description: "Dating for Developers. Matchmaking on skills.",
    link: "#",
  },
  {
    id: "Moder-Web",
    title: "Modern-blog",
    description: "Full-stack blogging platform for engineers.",
    link: "#",
  },
  {
    id: "vibe",
    title: "Genie-AI",
    description: "SaaS for auto-generating slides via prompting.",
    link: "#",
  },
  {
    id: "X-boost",
    title: "X-boost",
    description: "Auto-market products with AI-generated tweets.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="p-3 mx-2 flex flex-col gap-6 my-4 relative">
      <div className="absolute top-15 left-1/2 w-[300vw] -translate-x-1/2 h-px bg-gray-200 dark:bg-gray-800 -z-50" />
      <div className="absolute top-1 left-1/2 w-[300vw] -translate-x-1/2 h-px bg-gray-200 dark:bg-gray-800 -z-50" />

      <div className="absolute top-0 left-1/2 w-px bottom-0 -translate-x-[263px] lg:-translate-x-[463px] bg-gray-200 dark:bg-gray-800 -z-50" />
      <div className="absolute top-0 left-1/2 w-px bottom-0 translate-x-[263px] lg:translate-x-[463px] bg-gray-200 dark:bg-gray-800 -z-50" />


      <div className="absolute top-[62px] -bottom-6 right-1/2 translate-x-[-263px] lg:translate-x-[-463px] w-[300vw] diagonal-bg opacity-50 dark:opacity-20 pointer-events-none -z-50" />
      <div className="absolute top-[62px] -bottom-6 left-1/2 translate-x-[263px] lg:translate-x-[463px] w-[300vw] diagonal-bg opacity-50 dark:opacity-20 pointer-events-none -z-50" />
      <h1 className="text-4xl font-semibold tracking-tighter">
        Projects
        <span className="ml-2 align-super text-sm text-gray-200/50 font-mono">
          (4)
        </span>
      </h1>

      <div className="flex flex-col  border-gray-200 dark:border-gray-800">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            className="group relative flex items-center justify-between  py-6 dark:bg-black/44"
            initial="initial"
            whileHover="hover"
          >
            {/* Hover Background Slide Effect */}
            <motion.div
              className="absolute inset-0 -z-10 bg-gray-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/5"
              layoutId="hoverBackground"
            />

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium tracking-tight text-gray-900 dark:text-gray-100">
                  {project.title}
                </h2>
                <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
            </div>

            <div className="hidden md:block">
              <kbd className="pointer-events-none inline-flex h-6 select-none items-center gap-1 rounded border border-gray-200 bg-white px-2 font-mono text-[10px] font-medium text-gray-400 group-hover:text-blue-500 dark:border-gray-800 dark:bg-gray-950">
                View
              </kbd>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}