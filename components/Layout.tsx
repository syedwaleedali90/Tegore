"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function Layout({ id }: { id: number }) {
  const slide = slides.find((s) => s.id === id);

  if (!slide) return null;

  return (
    <div key={id} className="flex items-center justify-center  w-full bg-gradient-to-br from-[#FFF8F0] via-[#FFFAF5] to-white">
      {/* LEFT SIDE */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <Image
          src="/panda.svg"
          alt="Tegore Mascot"
          width={120}          // default mobile size
          height={120}
          className="sm:w-[150px] sm:h-[150px] md:w-[220px] md:h-[220px]"
        />

        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mt-6 border    border-3 boxWidth border-orange-500 rounded-sm px-4 py-3 text-md font-bold text-black-700"
        >
          {slide.message}
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex flex-col items-center justify-center px-8">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex items-center justify-center"
        >
          <div className="relative w-[70%] aspect-square">
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
