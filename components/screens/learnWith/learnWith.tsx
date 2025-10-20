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
        <section className="bg-white py-2">
            <h2 className="text-4xl md:text-7xl font-extrabold text-center leading-19 text-orange-600">
                Learn with Tegore today
            </h2>
            <div className=" grid md:grid-cols-2 mt-0 gap-15 items-center">

                <div className='pl-20 h-full'>
                    <div className="w-full max-w-md h-full mx-auto">
                        <div className="pt-0 pb-6 px-6 h-full">
                            <div className="relative w-full h-[350px] flex items-center justify-center">
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


                <div>

                    <div className="flex flex-col space-y-0">
                        {buttons.map((button, index) => (
                         <div  key={index} className="relative">
                            
                            <button className="specifibtn mb-3 bg-blue-500 text-white px-6 py-1 w-[200px] hover:bg-blue-600 text-ms font-semibold">{button.label}</button>
                         </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    )
}
