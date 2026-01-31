"use client"

import { useEffect, useState } from "react";
import { AnimatePresence ,motion} from "framer-motion";

    const title =[
    "Crafting fluid interfaces",
    "Turning Figma into Functions",
    "Obsessing over 60fps",
    "Building the Web, bit by bit",
    "Bridging Code & Creativity"
    ]

export default function FlipSentence(){
        const [index,setIndex] = useState(0);
        useEffect(()=>{
            const interval =setInterval(()=>{
                setIndex((prev)=>(prev+1)%title.length)
            },2000)
            return ()=>clearInterval(interval);
        },[])

        return (
            <div className="flex items-center gap-2 text-xl font-medium">
        
                <div className="relative h-[1.5em] overflow-hidden py-1 -mx-1.5">
                        <AnimatePresence mode ="wait">
                                <motion.p
                                key={title[index]}
                                initial={{y:-20,opacity:0}}
                                animate={{y:0,opacity:1}}
                                transition={{duration:0.4,ease:"easeInOut"}}
                                className="text-black font-sans text-sm  tracking-tight dark:text-white/50 font-medium"
                                >
                                    {title[index]}
                                </motion.p>
                        </AnimatePresence>
                </div>
            </div>
        )


}