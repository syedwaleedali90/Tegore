"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "A great teacher finds your blindspots",
    text: "Tegore identifies exactly where student understanding breaks down—then rebuilds it from the ground up at their pace.",
    image: "/images/panda1.png",
  },
  {
    id: 2,
    title: "A great teacher motivates you",
    text: "Tegore learns what motivates each student, celebrates their progress, and adapts to their style—whether they need sass or patience.",
    image: "/images/panda2.png",
  },
  {
    id: 3,
    title: "A great teacher challenges you",
    text: "Develops critical thinking and judgment through questioning and real-world problem-solving—teaching students the why, not just the how.",
    image: "/images/panda3.png",
  },
];

export default function PhilosophySection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll handler to change slides
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const sectionTop = containerRef.current.offsetTop;
      const scrollY = window.scrollY - sectionTop;
      const height = window.innerHeight;
      const index = Math.min(
        slides.length - 1,
        Math.max(0, Math.floor(scrollY / height))
      );
      setCurrentSlide(index);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      {/* Sticky container */}
      <div className="sticky top-0 flex h-screen items-center justify-center bg-white">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <Image
                src={slides[currentSlide].image}
                alt="Mascot"
                width={250}
                height={250}
              />
              <button className="mt-4 bg-blue-500 text-white text-sm px-4 py-2 rounded">
                See it in Action
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side */}
        <div className="w-1/2 px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id + "-text"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm italic mb-2 text-gray-500">
                Tegore’s Philosophy
              </p>
              <h2 className="text-5xl font-bold text-orange-600 leading-tight">
                {slides[currentSlide].title}
              </h2>
              <p className="mt-4 text-gray-700 text-lg">
                {slides[currentSlide].text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="mt-10 flex space-x-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const y =
                    containerRef.current!.offsetTop + i * window.innerHeight;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
                className={`w-3 h-3 rounded-full transition ${
                  currentSlide === i ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
