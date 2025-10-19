import Image from "next/image";
export default function Screen0() {
    return (
        <section className=" md:flex-row flex items-center justify-between
         flex-col items-center justify-between">
            <div className="relative flex-1 flex flex-col ">
                <div className=" pl-[10%]">
                    <Image
                        src="/Group1.svg"
                        alt="Tegore mascot"
                        width={220}
                        height={220}
                        priority
                    />
                </div>

                <div className="items-center flex flex-col md:items-center text-center md:text-left">
                    <Image
                        src="/panda.svg"
                        alt="Tegore mascot"
                        width={180}
                        height={180}
                        priority
                    />
                    <div className="mt-6 border border-2 boxWidth border-orange-500 rounded-sm px-4 py-3 text-md font-semibold text-black-700">
                        Hey there! I’m Tegore - scroll down to begin the experience
                    </div>
                </div>
            </div>

            <div className=" flex-1 flex flex-col items-center md:items-start gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-700 flex-inline items-center flex rounded-lg btngray px-4 py-2">Backed by <span className="w-6 items-center flex justify-center mx-1 h-6  bg-orange-600 text-white">Y </span> Combinator</span>
                </div>

                <h2 className="text-4xl md:text-7xl font-extrabold  leading-18 text-black-900">
                    Meet your <br /> new math <br /> teacher.
                </h2>

                <button className="bg-blue-500 text-white px-6 py-3 hover:bg-blue-600 text-sm font-semibold">
                    Start Learning
                </button>
            </div>
        </section>
    );
}
