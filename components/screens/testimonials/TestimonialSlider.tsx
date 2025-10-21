"use client";

import { useState } from "react";

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
  const movePercent = 100 / testimonials.length;

  return (
    <div className="w-full">
      {/* Slider container */}
      <div className="overflow-hidden h-60 relative">
        <div
          className="flex flex-col transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateY(-${currentIndex * movePercent}%)`,
          }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`flex flex-row sm:flex-row gap-4 items-center justify-center h-60 px-4 py-4 text-center border-3 border-orange-500 transition-opacity duration-700 ${
                currentIndex === i ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="max-w-sm">
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.grade}</p>
              </div>

              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="w-30 h-30 object-fit"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-7 h-1 rounded-full transition-all duration-300 ${
              currentIndex === index
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
