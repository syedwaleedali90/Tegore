// components/TestimonialSection.tsx

import { Check } from "lucide-react"
import Image from "next/image";

export default function LearnWith() {


    const buttons = [
        { label: 'Students', href: '#students' },
        { label: 'Parents', href: '#parents' },
        { label: 'Teachers', href: '#teachers' },
        { label: 'Districts', href: '#districts' }
    ];

    return (
        <section className="bg-white py-2 flex items-center justify-center flex-col">
            <h2 className="  text-2xl sm:text-3xl md:text-6xl lg:text-7xl 
    font-extrabold 
    leading-snug sm:leading-tight md:leading-[1.1] lg:leading-[1.05] 
    text-orange-600
    text-center md:text-left">
                Learn with Tegore today
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center w-full px-6 md:px-12 py-10 md:py-0">
                {/* RIGHT (Buttons) — appears first on mobile */}
                <div className="order-1 md:order-2 flex justify-center md:justify-start">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                        {buttons.map((button, index) => (
                            <div key={index} className="relative">
                                <button className="specifibtn bg-blue-500 text-white px-6 py-2 w-[180px] sm:w-[200px] hover:bg-blue-600 text-sm sm:text-base font-semibold rounded-md transition">
                                    {button.label}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LEFT (Image) — appears second on mobile */}
                <div className="order-2 md:order-1 flex justify-center md:justify-end">
                    <div className="w-full max-w-sm md:max-w-md mx-auto">
                        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center">
                            <Image
                                src="/image33.svg"
                                alt="Tegore"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
