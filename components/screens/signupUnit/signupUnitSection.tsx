// components/TestimonialSection.tsx

import SignupUnitSlider from './signupUnitSlider'

export default function SignupUnitSection() {
    return (
        <section className="bg-white py-16">
            <div className="px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div className='flex flex-col'>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-snug sm:leading-tight md:leading-[1.1] lg:leading-[1.05] text-orange-600 text-left">
                        Sign up for <br className="hidden md:block" /> Algebra 1 <br /> today
                    </h2>
                    <div className="block md:hidden mt-8">
                        <SignupUnitSlider />
                    </div>
                    <p className="text-gray-700 mt-6 mb-4">
                        We’ll be releasing new courses in maths, chemistry, history, and even physics! Sign up on the waitlist to get access to exclusive courses first.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold sm:px-6 sm:py-3 sm:text-base hover:bg-blue-600 w-fit">
                        Sign up for Algebra 1
                    </button>
                    <div className='mt-3'>
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-blue-500 translate-x-1 translate-y-1"></div>
                            <button className="relative bg-white text-black border border-blue-400 px-6 py-3 hover:bg-gray-300 text-sm font-semibold">
                                Or Join the Waitlist !
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Slider */}
                <div className='hidden md:block px-8 md:pr-0'>
                    <SignupUnitSlider />
                </div>
            </div>
        </section>
    )
}
