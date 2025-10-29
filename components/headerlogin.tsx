"use client";
import { useState } from "react";
import Image from "next/image";
import ConfirmationModal from "./modals/confirmationModal";
import FeedModal from "./modals/feedModal";
import FeedBackSubmit from "./modals/feedBackSubmit";

export default function Headerlogin({IsShopIcon = false}:any) {
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenFeed, setIsModalOpenFeed] = useState(false);
    const [isModalOpenFeedSubmit, setIsModalOpenFeedSubmit] = useState(false);

    return (
        <>

            <header className="flex items-center justify-between pl-6 h-[70px] border-b border-b-3 border-black bg-white shadow-sm sticky top-0 z-1111">
                {/* Left */}
                <div className="flex items-center space-x-2">
                    <h1 className="text-4xl font-semibold text-orange-600 pr-4">Tegore</h1>
                    <span className="text-xl changeFontRail text-gray-500">Algebra I | Unit 1: Fundamentals</span>
                </div>

                {/* Right */}
                <div className="flex items-center space-x-4 h-full">
                    {IsShopIcon == false ? <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Image
                            src="/dash.svg"
                            alt="Tegore mascot"
                            width={40}
                            height={40}
                            priority
                        />
                    </button>
                        :
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Image
                                src="/bags.svg"
                                alt="Tegore mascot"
                                width={32}
                                height={32}
                                priority
                            />
                        </button>}
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <Image
                            src="/tropi.svg"
                            alt="Tegore mascot"
                            width={29}
                            height={29}
                            priority
                        />
                    </button>
                    <div className="border-l border-black pl-2 h-full flex items-center">
                        <button className="py-2 px-3 hover:bg-gray-100 flex items-center h-[50px]  rounded-full">
                            <Image
                                src="/flame.svg"
                                alt="Tegore mascot"
                                width={20}
                                height={20}
                                priority
                            />
                            <span className="pl-3 pt-2 text-xl">2</span>
                        </button>
                        <button className="pb-2 pt-3 px-3 hover:bg-gray-100 flex items-center h-[50px]  rounded-full">
                            <Image
                                src="/heart.svg"
                                alt="Tegore mascot"
                                width={27}
                                height={27}
                                priority
                            />
                            <span className="pl-3 pt-2 text-xl">3</span>
                        </button>
                        <button className="py-2 px-3 hover:bg-gray-100 flex items-center h-[50px]  rounded-full">
                            <Image
                                src="/bag.svg"
                                alt="Tegore mascot"
                                width={23}
                                height={23}
                                priority
                            />
                            <span className="pl-3 pt-2 text-xl">241</span>
                        </button>



                    </div>


                    {/* Avatar dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="py-2 px-2 bg-blue-500  flex items-center  ">
                            <Image
                                src="/monkey.svg"
                                alt="Tegore mascot"
                                width={27}
                                height={27}
                                priority
                            />
                        </button>
                        {open && (
                            <div className="absolute  right-0 mt-3 bg-white border border-black border-3 shadow-lg w-40 z-10">
                                <div className="relative">  <Image
                                    src="/angle.svg"
                                    alt="Tegore mascot"
                                    width={19}
                                    height={19}
                                    className="absolute  m-auto right-2 -top-4"
                                    style={{ transform: 'rotate(270deg)' }}
                                    priority
                                /></div>
                                <ul className="text-sm text-gray-700">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Sign out
                                    </li>
                                    <li onClick={() => setIsModalOpen(true)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Contact Support
                                    </li>
                                    <li onClick={() => setIsModalOpenFeed(true)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Manage Plan
                                    </li>
                                    <li onClick={() => setIsModalOpenFeedSubmit(true)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        Submit
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <ConfirmationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <FeedModal open={isModalOpenFeed} onClose={() => setIsModalOpenFeed(false)} />
            <FeedBackSubmit open={isModalOpenFeedSubmit} onClose={() => setIsModalOpenFeedSubmit(false)} />
        </>
    );
}
