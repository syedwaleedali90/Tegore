"use client";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LessonSidebar from "../LessonSidebar/LessonSidebar";
import ConfirmationModal from "@/components/modals/confirmationModal";
import FeedModal from "@/components/modals/feedModal";
import FeedBackSubmit from "@/components/modals/feedBackSubmit";
import LanguageSelector from "./LanguageSelector";



function CornerBrackets() {
    const base: React.CSSProperties = { position: 'absolute', width: 25, height: 25, pointerEvents: 'none' };
    return (
        <>
            <Image
                src="/tl.svg"
                alt="Tegore mascot"
                width={25}
                height={25}
                priority
                style={{ ...base, left: 0, top: 0 }}
            />
            <Image
                src="/tr.svg"
                alt="Tegore mascot"
                width={22}
                height={22}
                priority
                style={{ ...base, right: 0, top: 0 }}
            />
            <Image
                src="/bl.svg"
                alt="Tegore mascot"
                width={22}
                height={22}
                priority
                style={{ ...base, left: 0, bottom: 0 }}
            />
            <Image
                src="/br.svg"
                alt="Tegore mascot"
                width={22}
                height={22}
                priority
                style={{ ...base, right: 0, bottom: 0 }}
            />
        </>
    );
}


const LessonCard = ({
    title,
    time,
    buttonText = "Start +12 Gold",
    buttonColor = "bg-[#0099ff]",
    iconposition = "left"
}: any) => {
    return (
        <div className="w-80 relative   ml-3 shadow-lg">
            {/* Card Header */}
            {iconposition == "right" && <Image
                src="/angle.svg"
                alt="Tegore mascot"
                width={22}
                height={22}
                className="absolute  m-auto -left-[13px] top-[30%]"
                style={{ transform: 'rotate(180deg)' }}
                priority
            />}
            {iconposition == "left" && <Image
                src="/angle.svg"
                alt="Tegore mascot"
                width={22}
                height={22}
                className="absolute  m-auto -right-[13px] top-[30%]"
                style={{ transform: 'rotate(0deg)' }}
                priority
            />}
            {iconposition == "chit" && <Image
                src="/bluearrow.svg"
                alt="Tegore mascot"
                width={22}
                height={22}
                className="absolute  m-auto -right-[13px] top-[30%]"
                style={{ transform: 'rotate(0deg)' }}
                priority
            />}
            {iconposition == "chitright" && <Image
                src="/bluearrow.svg"
                alt="Tegore mascot"
                width={22}
                height={22}
                className="absolute  m-auto -left-[13px] top-[30%]"
                style={{ transform: 'rotate(180deg)' }}
                priority
            />}
            <div className="overflow-hidden border-4 border-black pt-2 pb-2 bg-white">
                <div className="bg-white px-4 ">
                    {title && <div className=" pt-2 text-md font-semibold text-black mb-1">
                        Lesson: <span className="font-light text-gray-800">{title}</span>
                    </div>}
                    {time && <div className="font-light text-gray-800">{time}</div>}
                </div>

                {/* Button Section */}

                <div className="h-[35px]">
                    <button className={`w-full ${buttonColor} absolute left-0 hover:opacity-90 text-white font-semibold py-1 px-6 text-xl transition-opacity`}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function HomeSection({ openConf, onCloseConf, openFeed, onCloseFeed, openFeedSubmit, onCloseFeedSubmit }: any) {
    const [activeindex, setActiveindex] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleClick = () => {
        setActiveindex(activeindex + 1)
    }
    const handlesideBar = () => {
        setIsSidebarOpen(true)
    }

    return (
        <div className="relative customheightHome">
            <div className="fixed h-[40%] z-1 bottom-[0%] left-8">
                <div className="relative w-full h-full">
                    <Image
                        src="/towerleft.svg"
                        alt="Tegore mascot"
                        width={120}          // default mobile size
                        height={120}
                        className="sm:w-[150px] sm:h-[150px] md:w-full md:h-full"
                    />
                </div>
            </div>
            <div className="fixed h-[40%] bottom-[0%] z-1 right-8">
                <div className="relative w-full h-full">

                    <Image
                        src="/towerright.svg"
                        alt="Tegore mascot"
                        width={120}          // default mobile size
                        height={120}
                        className="sm:w-[150px] sm:h-[150px] md:w-full md:h-full"
                    />
                </div>
            </div>

            <div className="w-full h-full">
                <div className="flex mt-5 items-center">
                    <div className="bg-blue-400 mt-5 w-[40%] px-4 py-3">
                        <h2 className="text-2xl text-white font-bold">Stage 1: Algebraic Terms</h2>
                    </div>
                    <div className="w-[60%] text-end pr-4">
                        <LanguageSelector />
                    </div>
                </div>
                <div className="mt-[80px] relative">
                    <span className={`w-[30%] h-[4px] inline-flex ${activeindex >= 1 ? "bg-orange-400" : "bg-gray-400"
                        }`}></span>
                    <div className="ml-[30%] relative min-h-[60px]">
                        <span className="absolute -top-[66px] p-1 ">
                            <div className="flex items-center">
                                {activeindex == 1 && <CornerBrackets />}
                                <Image
                                    src="/lesson.svg"
                                    alt="Tegore mascot"
                                    width={100}
                                    height={100}
                                    priority
                                    style={{ opacity: activeindex >= 1 ? 1 : 0.5 }}
                                    onClick={activeindex === 1 ? handleClick : undefined}
                                />
                                {activeindex > 1 && <div className="p-2 bg-white z-1">
                                    <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                </div>}
                                {activeindex == 1 && <div className="absolute top-0 left-[135px]">
                                    <LessonCard
                                        title="What is a variable?"
                                        time="8 minutes"
                                        buttonText="Start +12 Gold"
                                        iconposition="right"
                                    />
                                </div>}
                            </div>
                        </span>
                    </div>
                </div>

                <div className="mt-[0px] relative">
                    <div className="ml-[30%]">
                        <span className={`ml-[50px] w-[4px] h-[175px] inline-flex ${activeindex >= 2 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <span className={`w-[20%] h-[4px] inline-flex ${activeindex >= 2 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <div className="ml-[18%] relative min-h-[60px]">
                            <span className="absolute bg-white z-1 -top-[66px] p-1 ">
                                <div className="flex bg-white  items-center">
                                    {activeindex == 2 && <CornerBrackets />}
                                    <Image
                                        src="/lesson.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        style={{ opacity: activeindex >= 2 ? 1 : 0.5 }}
                                        onClick={activeindex === 2 ? handleClick : undefined}

                                    />
                                    {activeindex > 2 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 2 && <div className="absolute top-0 right-[150px]">
                                        <LessonCard
                                            title="What is a variable?"
                                            time="8 minutes"
                                            buttonText="Start +12 Gold"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>
                            <span className={`w-[40%] h-[4px] absolute -top-[12px] left-[100px] inline-flex ${activeindex >= 3 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span>
                            <span className={` w-[4px] h-[300px] absolute -top-[12px] left-[calc(40%+100px)] inline-flex ${activeindex >= 3 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span>
                        </div>
                    </div>
                </div>




                <div className="mt-[212px] relative">
                    <div className="ml-[30%]">
                        <div className="relative">
                            {/* <span className={` w-[4px] h-[200px] absolute -top-[12px] left-[30%] inline-flex ${activeindex >= 3 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span> */}
                        </div>
                        <span className={`w-[51%] ml-[98px] h-[4px] inline-flex ${activeindex >= 3 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <div className="ml-[0px] relative min-h-[60px]">
                            <span className="absolute bg-white -top-[66px] p-1 ml-8">
                                <div className="flex items-center">
                                    {activeindex == 3 && <CornerBrackets />}
                                    <Image
                                        src="/arrow.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        style={{ opacity: activeindex >= 3 ? 1 : 0.5 }}
                                        onClick={activeindex === 3 ? handleClick : undefined}

                                    />
                                    {activeindex > 3 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 3 && <div className="absolute top-0 right-[150px]">
                                        <LessonCard
                                            title="What is a variable?"
                                            time="8 minutes"
                                            buttonText="Start +12 Gold"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>
                        </div>
                    </div>
                </div>



                <div className="-mt-[20px] relative">
                    <div className="ml-[calc(30%_-_80px)]">
                        <span className={`w-[4px] ml-[158px] h-[150px] inline-flex ${activeindex >= 4 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <span className={`w-[20%]  h-[4px] inline-flex ${activeindex >= 4 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <div className="ml-[0px] relative min-h-[60px]">
                            <span className="absolute bg-white -top-[66px] left-[31%] p-1  bg-white">
                                <div className="flex items-center">
                                    {activeindex == 4 && <CornerBrackets />}
                                    <Image
                                        src="/elec.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        className="p-3"
                                        style={{ opacity: activeindex >= 4 ? 1 : 0.5 }}
                                        onClick={activeindex === 4 ? handleClick : undefined}

                                    />
                                    {activeindex > 4 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 4 && <div className="absolute top-0 z-11 right-[150px]">
                                        <LessonCard
                                            title="What is a variable?"
                                            time="8 minutes"
                                            buttonText="Start +12 Gold"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>
                            <span className={`w-[15%] h-[4px] absolute -top-[12px] left-[calc(31%+105px)] inline-flex ${activeindex >= 5 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span>
                            <span className={` w-[4px] h-[200px] absolute -top-[12px] left-[calc(46%+105px)] inline-flex ${activeindex >= 5 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span>
                        </div>
                    </div>
                    <div className="bg-blue-400 z-11 absolute mt-5 w-[40%] px-4 py-3">
                        <h2 className="text-2xl text-white font-bold">Stage 2: Real World Expressions</h2>
                    </div>
                </div>


                <div className="mt-[200px] relative">
                    <div className="ml-[calc(49%)]">
                        {/* <span className={`w-[4px] ml-[158px] h-[150px] inline-flex ${activeindex >= 4 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <span className={`w-[18%]  h-[4px] inline-flex ${activeindex >= 4 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span> */}
                        <div className="ml-[0px] relative min-h-[60px]">
                            <span className="absolute -top-[66px] left-[27%] p-1  bg-white">
                                <div className="flex items-center">
                                    {activeindex == 5 && <CornerBrackets />}
                                    <Image
                                        src="/lesson.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        style={{ opacity: activeindex >= 5 ? 1 : 0.5 }}
                                        onClick={activeindex === 5 ? handleClick : undefined}

                                    />
                                    {activeindex > 5 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 5 && <div className="absolute top-4 right-[150px]">
                                        <LessonCard
                                            iconposition="chit"
                                            buttonText="Start +12 Gold"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-[0px] relative">
                    <div className="ml-[calc(43%-10px)]">
                        <div className=" ml-[calc(31%+90px)]">
                            <span className={`w-[4px] h-[200px] inline-flex ${activeindex >= 6 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span>
                        </div>
                        <span className={`w-[31%] -mt-[13px] ml-[calc(90px)] h-[4px] flex ${activeindex >= 6 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <div className="ml-[0px] relative min-h-[60px]">
                            <span className="absolute -top-[66px] left-[0%] z-111 p-1 ml-8 bg-white">
                                <div className="flex items-center">
                                    {activeindex == 6 && <CornerBrackets />}
                                    <Image
                                        src="/lesson.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        style={{ opacity: activeindex >= 6 ? 1 : 0.5 }}
                                        onClick={activeindex === 6 ? handleClick : undefined}

                                    />
                                    {activeindex > 6 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 6 && <div className="absolute top-0 right-[150px]">
                                        <LessonCard
                                            title="What is a variable?"
                                            time="8 minutes"
                                            buttonText="Start +12 Gold"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>
                        </div>
                    </div>
                </div>



                <div className="-mt-[80px] relative">
                    <div className="ml-[calc(30%)]">
                        <span className={`w-[30%] h-[4px] inline-flex ${activeindex >= 7 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>

                        <span className={`w-[4px] -mt-[10px] h-[200px] flex ${activeindex >= 7 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <span className={`w-[100px] h-[4px] flex ${activeindex >= 7 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <div className="ml-[120px] relative min-h-[60px]">
                            <span className="absolute -top-[66px] left-[0] z-11 p-1 ml-0 bg-white">
                                <div className="flex items-center">
                                    {activeindex == 7 && <CornerBrackets />}
                                    <Image
                                        src="/arrow.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        style={{ opacity: activeindex >= 7 ? 1 : 0.5 }}
                                        onClick={activeindex === 7 ? handleClick : undefined}

                                    />
                                    {activeindex > 7 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 7 && <div className="absolute top-0 right-[150px]">
                                        <LessonCard
                                            title="What is a variable?"
                                            time="8 minutes"
                                            buttonText="Start +12 Gold"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="-mt-[80px] pb-15 ml-[350px] relative">
                    <div className="ml-[calc(30%)]">
                        <span className={`w-[100px] h-[4px] inline-flex ${activeindex >= 8 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <div className="ml-[120px] relative min-h-[60px]">
                            <span className="absolute -top-[46px] left-[0] z-11 p-1 ml-0 bg-white">
                                <div className="flex items-center">
                                    {activeindex == 8 && <CornerBrackets />}
                                    <Image
                                        src="/elec.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        className="p-3"
                                        style={{ opacity: activeindex >= 8 ? 1 : 0.5 }}
                                        onClick={activeindex === 8 ? handleClick : undefined}

                                    />
                                    {activeindex > 8 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 8 && <div className="absolute top-0 -right-[350px]">
                                        <LessonCard
                                            title="What is a variable?"
                                            time="8 minutes"
                                            buttonText="Start +12 Gold"
                                            iconposition="right"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>
                            <span className={`w-[90%] ml-[10%] -mt-[10px] h-[4px] flex ${activeindex >= 9 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span>
                        </div>
                    </div>
                </div>


                <div className="bg-blue-400 relative z-1 mt-8 mb-8 w-[40%] px-4 py-3">
                    <h2 className="text-2xl text-white font-bold">Stage 3: Combine Like Terms</h2>
                </div>


                <div className="pt-20 pb-20 relative">
                    <div className="">
                        <span className={`w-[30%] h-[4px] inline-flex ${activeindex >= 9 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <div className="ml-[31%] relative min-h-[60px]">
                            <span className="absolute -top-[66px] left-[0] z-0 p-1 ml-0 bg-white">
                                <div className="flex items-center">
                                    {activeindex == 9 && <CornerBrackets />}
                                    <Image
                                        src="/lesson.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        style={{ opacity: activeindex >= 9 ? 1 : 0.5 }}
                                        onClick={activeindex === 9 ? handleClick : undefined}

                                    />
                                    {activeindex > 9 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 9 && <div className="absolute top-4 left-[130px]">
                                        <LessonCard
                                            buttonText="Fast Forward ?"
                                            iconposition="chitright"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>
                            <span className={`ml-[calc(50px)]  -mt-[10px] h-[4px] flex ${activeindex >= 10 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span>
                        </div>
                    </div>
                </div>





                <div className="pt-10 pb-0 relative">
                    <div className="">
                        <span className={`w-[50%] h-[4px] inline-flex ${activeindex >= 10 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <div className="ml-[51%] relative min-h-[60px]">
                            <span className="absolute -top-[46px] left-[0] z-0 p-1 ml-0 bg-white">
                                <div className="flex items-center">
                                    {activeindex == 10 && <CornerBrackets />}
                                    <Image
                                        src="/arrow.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        // className="pt-3"
                                        style={{ opacity: activeindex >= 10 ? 1 : 0.5 }}
                                        onClick={activeindex === 10 ? handleClick : undefined}

                                    />
                                    {activeindex > 10 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 10 && <div className="absolute top-0 right-[150px]">
                                        <LessonCard
                                            title="What is a variable?"
                                            time="8 minutes"
                                            buttonText="Start +12 Gold"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>
                            <span className={`ml-[calc(50px)] max-w-[150px] -mt-[10px] h-[4px] flex ${activeindex >= 11 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span>
                            <span className={`w-[4px] ml-[200px]  -mt-[4px] h-[200px] flex ${activeindex >= 11 ? "bg-orange-400" : "bg-gray-400"
                                }`}></span>
                        </div>
                    </div>
                </div>
                <div className="pt-0 pb-20 relative">
                    <div className="">
                        <span className={`w-[60%] h-[4px] inline-flex ${activeindex >= 12 ? "bg-orange-400" : "bg-gray-400"
                            }`}></span>
                        <div className="ml-[61%] relative min-h-[60px]">
                            <span className="absolute -top-[46px] left-[0] z-0 p-1 ml-0 bg-white">
                                <div className="flex items-center">
                                    {activeindex == 11 && <CornerBrackets />}
                                    <Image
                                        src="/elec.svg"
                                        alt="Tegore mascot"
                                        width={100}
                                        height={100}
                                        priority
                                        className="p-3"
                                        style={{ opacity: activeindex >= 11 ? 1 : 0.5 }}
                                        onClick={activeindex === 11 ? handleClick : undefined}

                                    />
                                    {activeindex > 11 && <div className="p-2 bg-white z-1">
                                        <Plus className="bg-gray-300 rounded-lg p-1 font-bold" onClick={() => handlesideBar()} strokeWidth={3} />
                                    </div>}
                                    {activeindex == 11 && <div className="absolute top-0 right-[150px]">
                                        <LessonCard
                                            title="What is a variable?"
                                            time="8 minutes"
                                            buttonText="Start +12 Gold"
                                        />
                                    </div>
                                    }
                                </div>
                            </span>

                        </div>
                    </div>
                </div>
            </div>


            <ConfirmationModal open={openConf} onClose={onCloseConf} />
            <FeedModal open={openFeed} onClose={onCloseFeed} />
            <FeedBackSubmit open={openFeedSubmit} onClose={onCloseFeedSubmit} />
            <LessonSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </div>
    );
}
