"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Unit = {
  id: number;
  spotsLeft: number;
  title: string;
  subtitle: string;
  learningPoints: string[];
  buttonText: string;
  iconUrl?: string;
};

const units: Unit[] = [
  {
    id: 1,
    spotsLeft: 3,
    title: "Unit 1: Algebra",
    subtitle: "Foundations",
    learningPoints: [
      "Learn about variables",
      "Solve equations",
      "Learn the 'why'",
    ],
    buttonText: "Join Algebra 1!",
  },
  {
    id: 2,
    spotsLeft: 5,
    title: "Unit 2: Geometry",
    subtitle: "Basics",
    learningPoints: [
      "Understand shapes",
      "Calculate angles",
      "Master theorems",
    ],
    buttonText: "Join Geometry!",
  },
  {
    id: 3,
    spotsLeft: 2,
    title: "Unit 3: Statistics",
    subtitle: "& Probability",
    learningPoints: [
      "Analyze data sets",
      "Calculate probability",
      "Interpret graphs",
    ],
    buttonText: "Join Statistics!",
  },
  {
    id: 4,
    spotsLeft: 3,
    title: "Unit 1: Algebra",
    subtitle: "Foundations",
    learningPoints: [
      "Learn about variables",
      "Solve equations",
      "Learn the 'why'",
    ],
    buttonText: "Join Algebra 1!",
  },
  {
    id: 5,
    spotsLeft: 5,
    title: "Unit 2: Geometry",
    subtitle: "Basics",
    learningPoints: [
      "Understand shapes",
      "Calculate angles",
      "Master theorems",
    ],
    buttonText: "Join Geometry!",
  },
  {
    id: 6,
    spotsLeft: 2,
    title: "Unit 3: Statistics",
    subtitle: "& Probability",
    learningPoints: [
      "Analyze data sets",
      "Calculate probability",
      "Interpret graphs",
    ],
    buttonText: "Join Statistics!",
  },
  {
    id: 7,
    spotsLeft: 3,
    title: "Unit 1: Algebra",
    subtitle: "Foundations",
    learningPoints: [
      "Learn about variables",
      "Solve equations",
      "Learn the 'why'",
    ],
    buttonText: "Join Algebra 1!",
  },
  {
    id: 8,
    spotsLeft: 5,
    title: "Unit 2: Geometry",
    subtitle: "Basics",
    learningPoints: [
      "Understand shapes",
      "Calculate angles",
      "Master theorems",
    ],
    buttonText: "Join Geometry!",
  },
  {
    id: 9,
    spotsLeft: 2,
    title: "Unit 3: Statistics",
    subtitle: "& Probability",
    learningPoints: [
      "Analyze data sets",
      "Calculate probability",
      "Interpret graphs",
    ],
    buttonText: "Join Statistics!",
  },
  {
    id: 10,
    spotsLeft: 3,
    title: "Unit 1: Algebra",
    subtitle: "Foundations",
    learningPoints: [
      "Learn about variables",
      "Solve equations",
      "Learn the 'why'",
    ],
    buttonText: "Join Algebra 1!",
  },
  {
    id: 11,
    spotsLeft: 5,
    title: "Unit 2: Geometry",
    subtitle: "Basics",
    learningPoints: [
      "Understand shapes",
      "Calculate angles",
      "Master theorems",
    ],
    buttonText: "Join Geometry!",
  },
  {
    id: 12,
    spotsLeft: 2,
    title: "Unit 3: Statistics",
    subtitle: "& Probability",
    learningPoints: [
      "Analyze data sets",
      "Calculate probability",
      "Interpret graphs",
    ],
    buttonText: "Join Statistics!",
  },
];

export default function SignupUnitSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? units.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === units.length - 1 ? 0 : prev + 1));
  };

  // 🧠 Swipe handling
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
      goToNext();
    } else if (swipeDistance < -swipeThreshold) {
      // Swiped right → previous slide
      goToPrevious();
    }
  };


  return (
    <div className="w-full max-w-md mx-auto py-2">
      <div className="relative">
        {/* Badge */}
        <div className="hidden md:block absolute -top-6 -left-22 transform -rotate-12 z-10 pointer-events-none">
          <Image
            src="/Group1.svg"
            alt="Spots left badge"
            width={220}
            height={220}
            priority
          />
        </div>

        {/* Fade Slider */}
        <div className="relative pt-0 md:pt-16 overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          <AnimatePresence mode="wait">
            <motion.div
              key={units[currentIndex].id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="px-4"
            >
              <div className="relative rounded-lg border-4 border-orange-500 shadow-lg overflow-hidden bgchange">
                <div className="pt-2 md:pt-2 pb-2 md:pb-6 px-6">
                  {/* Icon/Image Section */}
                  <div className="relative w-full mb-2 aspect-[4/3] sm:aspect-[16/9] md:h-[160px] lg:h-[180px]">
                    <Image
                      src="/insideimg.svg"
                      alt="Unit illustration"
                      fill
                      className="object-contain object-center"
                      priority
                    />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {units[currentIndex].title}
                  </h2>
                  <p className="text-2xl font-bold text-gray-900 mb-3">
                    {units[currentIndex].subtitle}
                  </p>

                  {/* Learning Points */}
                  <div className="space-y-2 mb-3">
                    {units[currentIndex].learningPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 changeFontMono">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 transition-colors duration-200">
                    {units[currentIndex].buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex pl-4 items-center gap-3 mt-3">
          <button
            onClick={goToPrevious}
            className="text-black hover:text-orange-600 font-medium text-xl"
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <span className="text-sm font-medium text-gray-700">
            {currentIndex + 1} of {units.length}
          </span>
          <button
            onClick={goToNext}
            className="text-black hover:text-orange-600 font-medium text-xl"
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
