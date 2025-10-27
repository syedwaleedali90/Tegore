import Image from "next/image";
import { useRive } from "@rive-app/react-canvas";

export default function Screen0() {
    const { RiveComponent } = useRive({
        src: "/bear_hi.riv",
        autoplay: true,
    });
    return (
        <section className=" md:flex-row flex items-center justify-between
         flex-col items-center justify-between gap-8">
            <div className="relative flex-1 flex flex-col ">
                <div className=" hidden md:block  pl-[10%] -mt-8">
                    <Image
                        src="/Group1.svg"
                        alt="Tegore mascot"
                        width={250}
                        height={250}
                        priority
                    />
                </div>

                <div className="items-center flex flex-col md:items-center text-center md:text-left">

                    <div className="w-[160px] h-[160px] sm:w-[160px] sm:h-[160px] md:w-[280px] md:h-[280px]">
                        <RiveComponent />
                    </div>
                    <div className="mt-8 border hidden md:block border-3 w-[75%] border-orange-500 rounded-lg px-6 py-4 text-xl font-normal text-black-700 bg-white/40">
                        Hey there! I'm Tegore - scroll down to begin the experience
                    </div>
                </div>
            </div>

            <div className=" flex-1 flex flex-col items-center md:items-start gap-4 sm:gap-6 md:gap-8">
                <div className="flex items-center gap-2 sm:mt-2 md:mt-0 md:self-center">
                    <span className="text-sm text-gray-700 flex-inline items-center flex rounded-lg border border-orange-500 px-5 py-2">Backed by <span className="w-4 items-center flex justify-center mx-1 h-4 pt-1  bg-orange-600 text-white" style={{fontSize:'12px'}}>Y </span> Combinator</span>
                </div>

                <h2
                    className="
    text-5xl sm:text-5xl md:text-7xl lg:text-8xl
    font-bold
    leading-snug sm:leading-tight md:leading-[1.1] lg:leading-[1.05]
    text-gray-900
    text-center md:text-left
  "
                >
                    Meet your <br className="hidden md:block" /> new math <br /> teacher.
                </h2>

                <button className="bg-[#0099FF] text-white
    px-6 py-2 text-base font-semibold
    sm:px-8 sm:py-2 sm:text-lg
    md:px-10 md:py-2.5 md:text-xl
    rounded-lg
    shadow-[4px_4px_0_0_#0066CC]
    hover:shadow-[2px_2px_0_0_#0066CC] hover:translate-x-[2px] hover:translate-y-[2px]
    active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
    transition-all duration-150">
                    Start Learning
                </button>
            </div>
        </section>
    );
}
