// components/TestimonialSection.tsx

import { Check } from "lucide-react"
import Image from "next/image";

export default function InClassSection() {




    return (
        <section className="bg-white py-16">
            <div className="px-6 grid md:grid-cols-2 gap-15 items-center">
                <div>
                    <h2 className="text-4xl md:text-7xl font-extrabold  leading-19 text-orange-600">
                        Meet every <br /> student’s <br /> needs in-class
                    </h2>
                    <p className="text-gray-700 mt-6 mb-4">
                        Tegore gives teachers specific insights into each student’s gaps and a class-level overview so they know where to spend their energy.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 text-sm font-semibold">
                        See it in Action
                    </button>
                </div>
                <div className='px-8 h-full'>
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
        </section>
    )
}
