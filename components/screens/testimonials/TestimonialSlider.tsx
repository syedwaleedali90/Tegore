"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
type Testimonial = {
  id: number;
  text: string;
  name: string;
  grade: string;
  imageUrl: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Tegore helped me understand concepts I missed in class",
    name: "Max Jose",
    grade: "8th grade student",
    imageUrl: "/user.svg",
  },
  {
    id: 2,
    text: "I feel more confident solving math problems now!",
    name: "Sara Lee",
    grade: "6th grade student",
    imageUrl: "/user.svg",
  },
  {
    id: 3,
    text: "Math used to stress me out, now it’s fun!",
    name: "Tommy Wu",
    grade: "5th grade student",
    imageUrl: "/user.svg",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => setCurrentIndex(index);

  // 🔥 Move per-slide based on how many total slides exist
  // const movePercent = 100 / testimonials.length;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [testimonials.length]);



  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    const swipeThreshold = 50; // Minimum distance to trigger swipe

    if (swipeDistance > swipeThreshold) {
      // Swiped left → next slide
      goToSlide(currentIndex + 1);
    } else if (swipeDistance < -swipeThreshold) {
      // Swiped right → previous slide
      goToSlide(currentIndex - 1);
    }
  };


  return (
    <div className="w-full">
      {/* Slider container */}
      <div className="overflow-hidden relative flex items-center justify-center h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col sm:flex-row gap-4 items-center justify-center px-6 text-center border-2 border-orange-500 rounded-lg"
          >
            <div className="max-w-sm">
              <p className="text-gray-700 mb-4 text-lg changeFontMono">{`"${testimonials[currentIndex].text}"`}</p>
              <p className="text-md font-semibold changeFontMono">{testimonials[currentIndex].name}</p>
              <p className="text-md text-gray-500 changeFontMono">{testimonials[currentIndex].grade}</p>
            </div>
            <img
              src={testimonials[currentIndex].imageUrl}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-7 h-1 rounded-full transition-all duration-300 ${currentIndex === index
              ? "bg-orange-500 "
              : "bg-gray-300 hover:bg-gray-400"
              }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
