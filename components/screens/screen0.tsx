import Image from "next/image";
export default function Screen0() {
    return (
        <section className=" md:flex-row flex items-center justify-between
         flex-col items-center justify-between">
            <div className="relative flex-1 flex flex-col ">
                <div className=" hidden md:block  pl-[10%]">
                    <Image
                        src="/Group1.svg"
                        alt="Tegore mascot"
                        width={200}
                        height={200}
                        priority
                    />
                </div>

                <div className="items-center flex flex-col md:items-center text-center md:text-left">

                    <Image
                        src="/panda.svg"
                        alt="Tegore mascot"
                        width={150}          // default mobile size
                        height={150}
                        className="sm:w-[150px] sm:h-[150px] md:w-[220px] md:h-[220px]" // scale up
                    />
                    <div className="mt-6 border hidden md:block   border-3 boxWidth border-orange-500 rounded-sm px-4 py-3 text-md font-bold text-black-700">
                        Hey there! I’m Tegore - scroll down to begin the experience
                    </div>
                </div>
            </div>

            <div className=" flex-1 flex flex-col items-center md:items-start gap-3 sm:gap-4 md:gap-6">
                <div className="flex items-center gap-2 sm:mt-2  md:mt-0">
                    <span className="text-xs text-gray-700 flex-inline items-center flex rounded-lg btngray px-4 py-1">Backed by <span className="w-3 items-center flex justify-center mx-1 h-3 pt-1  bg-orange-600 text-white" style={{fontSize:'11px'}}>Y </span> Combinator</span>
                </div>

                <h2
                    className="
    text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
    font-extrabold 
    leading-snug sm:leading-tight md:leading-[1.1] lg:leading-[1.05] 
    text-gray-900
    text-center md:text-left
  "
                >
                    Meet your <br className="hidden md:block" /> new math <br /> teacher.
                </h2>

                <button className="  bg-blue-500 text-white 
    px-4 py-2 text-sm font-semibold 
    sm:px-6 sm:py-2 sm:text-base
    hover:bg-blue-600">
                    Start Learning
                </button>
            </div>
        </section>
    );
}
