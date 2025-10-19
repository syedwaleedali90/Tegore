// components/TestimonialSection.tsx

import TestimonialSlider from './TestimonialSlider'

export default function TestimonialSection() {
    return (
        <section className="bg-white py-16">
            <div className="px-6 grid md:grid-cols-2 gap-15 items-center">
                {/* Left Side */}
                <div>
                    <h2 className="text-4xl md:text-7xl font-extrabold  leading-19 text-orange-600">
                        Enjoyed by <br /> every <br /> student
                    </h2>
                    <p className="text-gray-700 mt-6 mb-4">
                        From 4th graders just starting fractions to high schoolers tackling algebra, students say Tegore makes them feel confident, less stressed, and even excited about math.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 text-sm font-semibold">
                        See it in Action
                    </button>
                </div>

                {/* Right Side - Slider */}
                <div className='px-8'>
                    <TestimonialSlider />
                </div>
            </div>
        </section>
    )
}
