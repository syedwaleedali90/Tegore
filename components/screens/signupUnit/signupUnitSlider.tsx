"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Image from "next/image";

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
      "Learn the 'why'"
    ],
    buttonText: "Join Algebra 1!"
  },
  {
    id: 2,
    spotsLeft: 5,
    title: "Unit 2: Geometry",
    subtitle: "Basics",
    learningPoints: [
      "Understand shapes",
      "Calculate angles",
      "Master theorems"
    ],
    buttonText: "Join Geometry!"
  },
  {
    id: 3,
    spotsLeft: 2,
    title: "Unit 3: Statistics",
    subtitle: "& Probability",
    learningPoints: [
      "Analyze data sets",
      "Calculate probability",
      "Interpret graphs"
    ],
    buttonText: "Join Statistics!"
  }
];

export default function SignupUnitSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => setCurrentIndex(index);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? units.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === units.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-md mx-auto py-2">
      {/* Slider container */}
      <div className="relative">
        {/* Badge positioned absolutely over the slider */}
        <div className="hidden md:block absolute -top-6 -left-22 transform -rotate-12 z-1 pointer-events-none">
          <Image
            src="/Group1.svg"
            alt="Spots left badge"
            width={220}
            height={220}
            priority
          />
        </div>

        <div className="overflow-hidden pt-16">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {units.map((unit) => (
              <div
                key={unit.id}
                className="min-w-full px-4"
              >
                <div className="relative btngray rounded-lg border-4 border-orange-500 shadow-lg overflow-hidden">
                  {/* Card Content */}
                  <div className="pt-6 pb-6 px-6">
                    {/* Icon/Image Section */}
                    <div className="relative w-full h-[200px] mb-6">
                      <Image
                        src="/insideimg.svg"
                        alt="Unit illustration"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                      {unit.title}
                    </h2>
                    <p className="text-2xl font-bold text-gray-900 mb-3">
                      {unit.subtitle}
                    </p>

                    {/* Learning Points */}
                    <div className="space-y-2 mb-3">
                      {unit.learningPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6  transition-colors duration-200">
                      {unit.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="px-5 mt-2">
          <button
            onClick={goToPrevious}
            className="text-black-600 hover:text-black-900 font-medium"
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <span className="text-sm font-medium text-black-600 mx-2">
            {currentIndex + 1} of {units.length}
          </span>
          <button
            onClick={goToNext}
            className="text-black-600 hover:text-black-900 font-medium"
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}