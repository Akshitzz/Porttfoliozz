"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techStack = [
  { name: "TypeScript", icon: "typescript", color: "#3178C6" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
  { name: "Tailwind", icon: "tailwindcss", color: "#06B6D4" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248" },
  { name: "Prisma", icon: "prisma", color: "#2D3748" },
  { name: "Redis", icon: "redis", color: "#DC382D" },
  { name: "Docker", icon: "docker", color: "#2496ED" },
  { name: "Kubernetes", icon: "kubernetes", color: "#326CE5" },
  { name: "TanStack", icon: "reactquery", color: "#FF4154" },
  { name: "Framer", icon: "framer", color: "#0055FF" },
  { name: "Git", icon: "git", color: "#F05032" },
];

export default function Stack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="p-3 mx-2 flex flex-col gap-6">
      <h1 className="text-4xl font-semibold tracking-tighter">Stack</h1>

      <div className="flex flex-row flex-wrap gap-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
            className="group relative flex flex-col items-center"
          >
            {/* The KBD Message - Now positioned absolutely per icon */}
            <AnimatePresence>
              {hoveredTech === tech.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  className="absolute -top-10 z-50 whitespace-nowrap"
                >
                  <kbd className="pointer-events-none inline-flex h-6 select-none items-center rounded border border-gray-200 bg-gray-100 px-2 font-mono text-[10px] font-medium text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200">
                    {tech.name}
                  </kbd>
                </motion.div>
              )}
            </AnimatePresence>

            {/* The Icon */}
            <motion.img
              whileHover={{ scale: 1.2, rotate: 5 }}
              src={`https://cdn.simpleicons.org/${tech.icon}/${tech.color.replace('#', '')}`}
              alt={tech.name}
              className="h-8 w-8 transition-all"
            />
            
            {/* Background Glow */}
            <div 
              className="absolute inset-0 -z-10 blur-xl opacity-0 transition-opacity group-hover:opacity-30"
              style={{ backgroundColor: tech.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}