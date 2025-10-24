"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
    id: number;
    quote: string;
    name: string;
    title: string;
    image: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "It felt like a dream... like having another teacher in my classroom.",
        name: "Mr. Peter Lu",
        title: "Math Teacher at Hilltop High School | Stanford Alum",
        image: "/boy.svg",
    },
    {
        id: 2,
        quote: "Tegore helped me reach every student more effectively.",
        name: "Ms. Sarah Lee",
        title: "Science Teacher at Redwood Academy",
        image: "/boy.svg",
    },
    {
        id: 3,
        quote: "It’s like having a teaching assistant who knows my students deeply.",
        name: "Mr. Daniel Kim",
        title: "English Teacher | NYU Alum",
        image: "/boy.svg",
    },
];

export default function InClassSlider() {
    const [current, setCurrent] = useState(0);
    const [containerHeight, setContainerHeight] = useState<number | undefined>(undefined);
    const slideRef = useRef<HTMLDivElement>(null);

    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCurrent((prev) => (prev + 1) % testimonials.length);
    //     }, 5000);
    //     return () => clearInterval(interval);
    //   }, []);

    useEffect(() => {
        if (slideRef.current) {
            const resizeObserver = new ResizeObserver(() => {
                setContainerHeight(slideRef.current?.offsetHeight);
            });

            resizeObserver.observe(slideRef.current);
            setContainerHeight(slideRef.current.offsetHeight);

            return () => resizeObserver.disconnect();
        }
    }, [current]);

    return (
        <div className="relative w-full pt-2 min-h-[200px] ">
            {/* Full-width breakout container */}
            <div className="bg-white overflow-hidden">
                <div
                    className="px-0  transition-all duration-500 ease-in-out"
                    style={{ height: containerHeight ? `${containerHeight}px` : "auto" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonials[current].id}
                            ref={slideRef}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-row  items-center justify-center gap-6 sm:gap-6 md:gap-14 
                       text-center sm:text-left w-full "
                        >
                            {/* Text Section */}
                            <div className="flex-1 border-t text-center border-gray-300 pt-2 sm:px-2 md:px-8 changeFontMono">
                                <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg leading-relaxed  sm:mx-0">
                                    “{testimonials[current].quote}”
                                </p>
                                <p className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                                    {testimonials[current].name}
                                </p>
                                <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                                    {testimonials[current].title}
                                </p>
                            </div>

                            {/* Image Section */}
                            <div className="flex justify-end sm:justify-end mt-6 pr-2 sm:mt-0">
                                <Image
                                    src={testimonials[current].image}
                                    alt={testimonials[current].name}
                                    width={192}
                                    height={192}
                                    className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4 pb-6 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-7 h-1 rounded-full transition-all duration-300 ${current === index ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
