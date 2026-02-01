"use client";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub, SiInstagram } from "react-icons/si";
import { motion } from "framer-motion";
import { ProfileHeader } from "./profile-header";
import { useState } from "react";
import { ProfileView } from "./profile-view";
import Stack from "./stack";
import GitHubContributions from "./github-activity";
import Projects from "./projects";
import Contact from "./about";

function Home() {
 

  const [transitionComplete] = useState(true);


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
      {/* Horizontal Lines (Full Viewport Width) */}
      <div className="absolute top-9 left-1/2 w-[300vw] -translate-x-1/2 h-px bg-gray-200 dark:bg-gray-800 -z-50" />
      <div className="absolute top-47 left-1/2 w-[300vw] -translate-x-1/2 h-px bg-gray-200 dark:bg-gray-800 -z-50" />

      <div className="absolute top-78.5 left-1/2 w-[300vw] -translate-x-1/2 h-px bg-gray-200 dark:bg-gray-800 -z-50" />
      {/* Vertical Lines (Full Viewport Height) */}
      <div className="absolute top-[-500px] left-1/2 w-px h-[200vh] -translate-x-[263px] bg-gray-200 dark:bg-gray-800 -z-50" />
      <div className="absolute top-[-500px] left-1/2 w-px h-[200vh] translate-x-[263px] bg-gray-200 dark:bg-gray-800 -z-50" />

      {/* Diagonal Backgrounds for Empty Spaces (Side Gutters) */}
      <div className="absolute top-9 right-1/2 translate-x-[-263px] w-[300vw] h-[9.5rem] diagonal-bg opacity-50 dark:opacity-20 pointer-events-none -z-50" />
      <div className="absolute top-9 left-1/2 translate-x-[263px] w-[300vw] h-[9.5rem] diagonal-bg opacity-50 dark:opacity-20 pointer-events-none -z-50" />
      <motion.main
        className="px-6 py-8 max-w-[600px] mx-auto  relative z-10 "
        variants={containerVariants}
        initial="hidden"
        animate={transitionComplete ? "visible" : "hidden"}
      >
        <ProfileHeader />
        <ProfileView />
        <GitHubContributions/>
        <Stack/>
        <Projects/>
        <Contact/>
      </motion.main>
    </>
  );
}


export default Home;