"use client";
// import { UserProfile } from "?@/app/page";
import { LanyardResponse } from "react-use-lanyard";
import OptimizedImage from "./image";
import ActivityCard from "../components/acitvity-card";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import { itemVariants } from "../lib/utils";
import { useState, useEffect } from "react";

function Home({
 
  activity,
}: {
    
//   respon?se: UserProfile;
  activity: LanyardResponse | undefined;
}) {
    const projects = [
        {
          id: "100XDates",
          title: "100XDates",
          description: "A Dating app for Developers and recruiters .Matchmaking on skills",
        },
        {
          id: "Moder-Web",
          title: "Modern-blog",
          description: "A Modern blogging full-stack web-app for blogs",
        },
        {
          id: "vibe",
          title: "Genie-AI",
          description: "SaaS for automatically generating slides by auto prompting",
        },
        {
          id: "X-boost",
          title: "X-boost",
          description: "Auto-generation of Tweets to market founders product ",
        },
       
      ]
  const [hoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transitionComplete] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const userLinks = [
    { href: "https://x.com/0xAkshit", icon: FaXTwitter, label: "Twitter" },
    { href: "https://github.com/Akshitzz", icon: SiGithub, label: "GitHub" },
    { href: "https://www.instagram.com/akshit0x01", icon: SiInstagram, label: "Instagram" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
      <>
      {/* Mouse follower */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-sky-500 opacity-20 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          scale: hoveredProject ? 4 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
    
     

      <motion.main
        className="px-6 py-8 max-w-[600px] mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={transitionComplete ? "visible" : "hidden"}
      >
        <motion.header
          className="flex w-full items-center justify-between"
          variants={itemVariants}
        >
          <motion.div
            className="size-11"
            variants={scaleVariants}
            whileHover={{ scale: 1.05 }}
          >
            <OptimizedImage
              src="https://i.pinimg.com/736x/ef/d7/e5/efd7e56d66dd5ffb038d6f7d8303ef0b.jpg"
              height={5000}
              width={5000}
              alt="profile image"
              loading="eager"
              className="object-cover h-full w-full object-center rounded-full"
            />
          </motion.div>
          <motion.div className="w-1/2 md:w-1/3 h-10" variants={itemVariants}>
            <Link href={"/777"} target="_blank">
              <OptimizedImage
                src="https://i.pinimg.com/originals/b3/18/b1/b318b151b31e5f99fe92690110683630.gif"
                height={5000}
                width={5000}
                alt="gif"
                loading="eager"
                className="object-cover rounded-none h-full object-center"
              />
            </Link>
          </motion.div>
        </motion.header>

        <motion.div
          className="flex w-full items-start justify-start"
          variants={itemVariants}
        >
          <h1 className="text-xl font-semibold">Akshit</h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-sm text-neutral-400">Hey! I&apos;m Akshit, a software developer.</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="font-semibold text-xl">Projects</h2>
          <div className="flex flex-col mt-2 -mb-1.5 divide-y divide-zinc-900">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <div className="group block px-4 pl-2 py-3 -mx-2 rounded-md text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-neutral-200">
                  <p className="text-sm underline underline-offset-2 text-neutral-100 font-medium">
                    {project.title}
                  </p>
                  <p className="text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <ActivityCard userId="762947755924258832" initialData={activity} />

        <motion.div
          className="flex border-t pt-4 gap-2 border-neutral-800"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            {userLinks.map(
              ({ href, icon: Icon, label }, index) =>
                href && (
                  <motion.a
                    key={index}
                    href={href}
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1 font-medium text-xs transition-colors text-neutral-400 hover:text-neutral-200"
                    variants={itemVariants}
                  >
                    <Icon size={14}>
                      <title>{label}</title>
                    </Icon>
                    {label}
                  </motion.a>
                )
            )}
          </div>
        </motion.div>
      </motion.main>
    </>
  );
}


export default Home;