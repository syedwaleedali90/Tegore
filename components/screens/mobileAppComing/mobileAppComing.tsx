// components/TestimonialSection.tsx

import Image from "next/image";

export default function MobileAppComing() {




    return (
        <section className="rounded-lg border-4 border-orange-500 shadow-lg  bgchange md:flex-row flex items-center justify-between
              flex-col items-center justify-between p-4">
            <div className="relative flex-1 flex flex-col ">
                <div className="items-center flex flex-col md:items-center text-center md:text-left">
                    <Image
                        src="/panda.svg"
                        alt="Tegore mascot"
                        width={150}          // default mobile size
                        height={150}
                        className="sm:w-[150px] sm:h-[150px] md:w-[220px] md:h-[220px]" // scale up
                    />
                </div>
            </div>

            <div className=" flex-1 mt-4 flex flex-col items-center md:items-start gap-3 sm:gap-4 md:gap-6">
                <h2
                    className="
         text-4xl sm:text-4xl md:text-6xl lg:text-7xl 
         font-extrabold 
         leading-snug sm:leading-tight md:leading-[1.1] lg:leading-[1.05] 
         text-gray-900
         text-center md:text-left 
       "
                >
                    Open us on the browser for the complete experience.
                </h2>

                <div className="flex items-center justify-center w-full my-6">
                    <div className="flex items-center w-fit">
                        <span className="flex-1 h-px bg-gray-400 mr-4 w-12"></span>
                        <p className="italic text-gray-700 text-base sm:text-lg font-[var(--font-raleway)]">
                            Mobile app coming soon!
                        </p>
                        <span className="flex-1 h-px bg-gray-400 ml-4 w-12"></span>
                    </div>
                </div>

                <button className="  bg-blue-500 text-white 
         px-4 py-2 text-sm font-semibold 
         sm:px-6 sm:py-2 sm:text-base
         hover:bg-blue-600">
                    Thank you!
                </button>
            </div>
        </section>
    )
}
