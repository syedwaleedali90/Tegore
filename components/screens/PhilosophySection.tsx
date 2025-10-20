"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "A great teacher finds your blindspots",
    text: "Tegore identifies exactly where student understanding breaks down—then rebuilds it from the ground up at their pace.",
    image: "/slider1.svg",
  },
  {
    id: 2,
    title: "A great teacher motivates you",
    text: "Tegore learns what motivates each student, celebrates their progress, and adapts to their style—whether they need sass or patience.",
    image: "/slider2.svg",
  },
  {
    id: 3,
    title: "A great teacher challenges you",
    text: "Develops critical thinking and judgment through questioning and real-world problem-solving—teaching students the why, not just the how.",
    image: "/slider3.svg",
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
              className="flex flex-col items-center w-full"
            >
              <div className="customredSection">
                <Image
                  src="/basedon.svg"
                  alt="Tegore mascot"
                  width={220}
                  height={220}
                  priority
                />
              </div>
              <div className="items-center flex flex-col md:items-center text-center md:text-left">
                <Image
                  src={slides[currentSlide].image}
                  alt="Mascot"
                  width={250}
                  height={250}
                />
                <button className="mt-1 bg-blue-500 text-white text-sm px-4 py-2 rounded">
                  See it in Action
                </button>
              </div>
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
              <p className="text-sm italic border-b border-black pb-1 mb-5 text-gray-500">
                Tegore’s Philosophy
              </p>
              <h2 className="text-4xl md:text-7xl font-extrabold  leading-19 text-orange-600">
                {slides[currentSlide].title}
              </h2>
              <p className="text-gray-700 mt-6 mb-4">
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
                className={`w-7 h-1 rounded-full transition-all duration-300 ${currentSlide === i ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
