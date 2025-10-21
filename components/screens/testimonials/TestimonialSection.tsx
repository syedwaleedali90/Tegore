// components/TestimonialSection.tsx

import TestimonialSlider from './TestimonialSlider'

export default function TestimonialSection() {
    return (
        <section className="bg-white py-16">
            <div className="px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side (Heading + Text + Button) */}
                <div className="flex flex-col">
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-snug sm:leading-tight md:leading-[1.1] lg:leading-[1.05] text-orange-600 text-left">
                        Enjoyed by <br className="hidden md:block" /> every <br /> student
                    </h2>

                    {/* 👇 Slider (Visible only on mobile) */}
                    <div className="block md:hidden mt-8">
                        <TestimonialSlider />
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 mt-6 mb-4">
                        From 4th graders just starting fractions to high schoolers tackling algebra, students say Tegore makes them feel confident, less stressed, and even excited about math.
                    </p>

                    {/* Button */}
                    <button className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold sm:px-6 sm:py-3 sm:text-base hover:bg-blue-600 w-fit">
                        See it in Action
                    </button>
                </div>

                {/* Right Side - Slider (Hidden on mobile) */}
                <div className="hidden md:block px-8 md:pr-0">
                    <TestimonialSlider />
                </div>
            </div>
        </section>
    )
}
