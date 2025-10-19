"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
    "Hold the spacebar to speak to me. Tell me your name. I’ll show you how Tegore works.",
    "I use custom tools to teach you each new concept",
    "I personalize content to your interests, like we can learn about variables through skating",
    "I use real-world context to ensure you know the why behind each concept."
];

export default function LeftSticky() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const sections = document.querySelectorAll(".screen-section");
        const handleScroll = () => {
            let index = 0;
            sections.forEach((sec, i) => {
                const rect = sec.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2) index = i;
            });
            setActiveIndex(index);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="md:sticky md:top-0 md:h-screen flex flex-col items-center justify-center relative bg-white">
            <Image
                src="/panda.svg"
                alt="Tegore Mascot"
                width={180}
                height={180}
                priority
            />
              <div className="mt-6 relative boxWidth min-h-[80px]">
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={activeIndex}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       transition={{ duration: 0.5, ease: "easeInOut" }}
                       className="border border-2 border-orange-500 rounded-sm px-4 py-3 text-md font-semibold text-gray-800 text-center "
                     >
                       {messages[activeIndex]}
                     </motion.div>
                   </AnimatePresence>
                 </div>
        </div>
    );
}
