// components/TestimonialSection.tsx

import Image from "next/image";
import InClassSlider from "./inclassSlider";

export default function InClassSection() {




    return (
        <section className="bg-gradient-to-br from-[#FFF8F0] via-[#FFFAF5] to-white pb-0 pt-2 w-full md:pt-16 flex flex-col justify-between">
            <div className="max-w-7xl mx-auto">
                <div className="px-6 grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-center">
                    <div>
                        <h2 className="
    text-4xl sm:text-4xl md:text-6xl lg:text-7xl 
    font-extrabold 
    leading-snug sm:leading-tight md:leading-[1.1] lg:leading-[1.05] 
    text-orange-500
    text-left
  ">
                            Meet every <br className="hidden md:block" /> student’s <br className="hidden md:block" /> needs in-class
                        </h2>
                        <p className="text-gray-700 mt-3 mb-5 changeFont text-sm sm:text-base md:text-lg lg:text-xl">
                            Tegore gives teachers specific insights into each student’s gaps and a class-level overview so they know where to spend their energy.
                        </p>
                        <button className=" bg-blue-500 text-white 
    px-4 py-2 text-sm font-semibold 
    sm:px-6 sm:py-2 sm:text-base
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
            </div>
            <div>
                <InClassSlider />
            </div>
        </section>
    )
}
