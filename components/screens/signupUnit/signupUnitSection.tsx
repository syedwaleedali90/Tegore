// components/TestimonialSection.tsx

import SignupUnitSlider from './signupUnitSlider'

export default function SignupUnitSection() {
    return (
        <section className="bg-white py-16">
            <div className="px-6 grid md:grid-cols-2 gap-15 items-center">
                {/* Left Side */}
                <div>
                    <h2 className="text-4xl md:text-7xl font-extrabold  leading-19 text-orange-600">
                        Sign up for <br /> Algebra 1 <br /> today
                    </h2>
                    <p className="text-gray-700 mt-6 mb-4">
                        We’ll be releasing new courses in maths, chemistry, history, and even physics! Sign up on the waitlist to get access to exclusive courses first.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 text-sm font-semibold">
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
                <div className='px-8'>
                    <SignupUnitSlider />
                </div>
            </div>
        </section>
    )
}
