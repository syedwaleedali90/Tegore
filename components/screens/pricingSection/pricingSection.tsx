// components/TestimonialSection.tsx

import { Check } from "lucide-react"


export default function PricingSection() {

    const learningPoints = [
        "Available 24/7",
        "Less then $2/day",
        "Judgement free zone",
        "Advance at your pace",
        "Endless examples "
    ]


    return (
        <section className="bg-white py-16">
            <div className="px-6 grid md:grid-cols-2 gap-15 items-center">
                <div>
                    <h2 className="text-4xl md:text-7xl font-extrabold  leading-19 text-orange-600">
                        Learn for <br /> less than <br /> $2 a day
                    </h2>
                    <p className="text-gray-700 mt-6 mb-4">
                        Our mission is to make Tegore accessible to every family - and we’re just getting started. We offer a full money-back guarantee anytime within the month.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 text-sm font-semibold">
                        Sign up for Algebra 1
                    </button>
                </div>
                <div className='px-8'>
                    <div className="w-full max-w-md mx-auto">
                        <div className="relative">
                            <div className="overflow-hidden ">
                                <div
                                    className="flex transition-transform duration-700 ease-in-out">
                                    <div className="min-w-full px-4" >
                                        <div className="relative btngray rounded-lg border-4 border-orange-500 shadow-lg overflow-hidden">
                                            <div className="pt-6 pb-6 px-6">
                                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                                    Tegore
                                                </h2>
                                                <div className="space-y-3 mb-3">
                                                    {learningPoints.map((point, index) => (
                                                        <div key={index} className="flex items-start gap-2">
                                                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                            <span className="text-gray-700">{point}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6  transition-colors duration-200">
                                                    $50/month
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
