"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function PhilosophySection({ id }: { id: number }) {
  const slide = slides.find((s) => s.id === id);
  if (!slide) return null;

  const scrollToSection = (targetId: number) => {
    const target = document.getElementById(`philosophy-${targetId}`);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id={`philosophy-${slide.id}`}
      className="flex flex-col md:flex-row items-center justify-center h-auto  w-full bg-gradient-to-br from-[#FFF8F0] via-[#FFFAF5] to-white px-6 md:px-10 pb-6 md:py-0"
    >
      {/* LEFT SIDE (Image) */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-0">
        <div className="customredSection hidden md:block mb-4">
          <Image
            src="/basedon.svg"
            alt="Tegore mascot"
            width={180}
            height={180}
            priority
          />
        </div>

        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src={slide.image}
            alt={`Slide ${slide.id}`}
            width={160}          // default mobile size
            height={160}
            className="sm:w-[160px] sm:h-[160px] md:w-[300] md:h-[300]" // scale up
          />

          {/* Show this button only on desktop */}
          <button className="hidden md:block mt-3 bg-blue-500 text-white text-sm px-5 py-2 rounded hover:bg-blue-600 transition">
            See it in Action
          </button>
        </motion.div>
      </div>

      {/* RIGHT SIDE (Text) */}
      <div className="w-full md:w-1/2 md:px-10">
        <motion.div
          key={slide.id + "-text"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm italic border-b border-black pb-1 mb-5 text-gray-500 text-center md:text-left">
            Tegore’s Philosophy
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug md:leading-[1.1] text-orange-600 text-center md:text-left">
            {slide.title}
          </h2>

          <p className="text-gray-700 mt-5 mb-6 text-center md:text-left changeFont text-sm sm:text-base md:text-lg lg:text-xl"   >
            {slide.text}
          </p>

          {/* 👇 Show button here only on mobile */}
          <div className="block md:hidden mb-6 text-center">
            <button className="bg-blue-500 text-white 
    px-4 py-2 text-sm font-semibold 
    sm:px-6 sm:py-2 sm:text-base
    hover:bg-blue-600">
              See it in Action
            </button>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center md:justify-start mt-4 md:mt-10 space-x-3">
          {slides.map((dot) => (
            <button
              key={dot.id}
              onClick={() => scrollToSection(dot.id)}
              className={`w-7 h-1 rounded-full transition-all duration-300 ${slide.id === dot.id
                  ? "bg-orange-500"
                  : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
