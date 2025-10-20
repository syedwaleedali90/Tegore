"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    message:
      "Hold the spacebar to speak to me. Tell me your name. I’ll show you how Tegore works.",
    image: "/Group6.svg",
  },
  {
    id: 2,
    message: "I use custom tools to teach you each new concept.",
    image: "/Group8.svg",
  },
  {
    id: 3,
    message:
      "I personalize content to your interests, like we can learn about variables through skating.",
    image: "/Group7.svg",
  },
  {
    id: 4,
    message:
      "I use real-world context to ensure you know the why behind each concept.",
    image: "/Group9.svg",
  },
];

export default function InteractiveSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle scroll updates
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY - containerRef.current.offsetTop;
      const screenHeight = window.innerHeight;
      const index = Math.min(
        slides.length - 1,
        Math.max(0, Math.floor(scrollY / screenHeight))
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-white">
      {/* Sticky Container */}
      <div className="sticky top-0 flex h-screen items-center justify-center">
        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <Image
            src="/panda.svg"
            alt="Tegore Mascot"
            width={180}
            height={180}
            priority
          />

          <div className="mt-6 relative min-h-[80px] boxWidth text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="border border-2 border-orange-500 rounded-sm px-4 py-3 text-md font-semibold text-gray-800 bg-white shadow"
              >
                {slides[activeIndex].message}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex flex-col items-center justify-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[activeIndex].id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="w-full flex items-center justify-center"
            >
              <div className="relative w-[80%] aspect-square">
                <Image
                  src={slides[activeIndex].image}
                  alt="Slide"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          {/* <div className="mt-10 flex space-x-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!containerRef.current) return;
                  const y =
                    containerRef.current.offsetTop + i * window.innerHeight;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className={`w-7 h-1 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "bg-orange-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
