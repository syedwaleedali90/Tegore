// components/TestimonialSection.tsx

import { Check } from "lucide-react"
import Image from "next/image";

export default function InClassSection() {




    return (
        <section className="bg-white py-16">
            <div className="px-6 grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-center">
                <div>
                    <h2 className="
    text-2xl sm:text-3xl md:text-6xl lg:text-7xl 
    font-extrabold 
    leading-snug sm:leading-tight md:leading-[1.1] lg:leading-[1.05] 
    text-orange-500
    text-left
  ">
                        Meet every <br className="hidden md:block" /> student’s <br /> needs in-class
                    </h2>
                    <p className="text-gray-700 mt-6 mb-4">
                        Tegore gives teachers specific insights into each student’s gaps and a class-level overview so they know where to spend their energy.
                    </p>
                    <button className=" bg-blue-500 text-white 
    px-4 py-2 text-sm font-semibold 
    sm:px-6 sm:py-3 sm:text-base
    hover:bg-blue-600">
                        See it in Action
                    </button>
                </div>
                <div className='hidden md:block px-8 h-full'>
                    <div className="w-full max-w-md h-full mx-auto">
                        <div className="pt-6 pb-6 px-6 h-full">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src="/inclass.svg"
                                    alt="Tegore"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 md:gap-10 py-4 text-center md:text-left transition-opacity duration-700`}
            >
                {/* Text Section */}
                <div className="flex-1 border-t border-gray-300 pt-6 px-4 md:px-0">
                    <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
                        “It felt like a dream... like having another teacher in my classroom.”
                    </p>
                    <p className="font-semibold text-gray-900 text-base sm:text-lg">
                        Mr. Peter Lu
                    </p>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Math Teacher at Hilltop High School | Stanford Alum
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/boy.svg"
                        alt="boy"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                    />
                </div>
            </div>

        </section>
    )
}
