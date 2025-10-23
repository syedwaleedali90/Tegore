"use client";
import { useState } from "react";
import Image from "next/image";
import { BarChart3, Menu, Trophy } from "lucide-react";

export default function Headerlogin() {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex items-center justify-between px-6 h-[60px] border-b border-b-3 border-black bg-white shadow-sm relative">
            {/* Left */}
            <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-orange-600 pr-4">Tegore</h1>
                <span className="text-lg text-gray-500">Algebra I | Unit 1: Fundamentals</span>
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4 h-full">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Image
                        src="/dash.svg"
                        alt="Tegore mascot"
                        width={25}
                        height={25}
                        priority
                    />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Image
                        src="/tropi.svg"
                        alt="Tegore mascot"
                        width={22}
                        height={22}
                        priority
                    />
                </button>
                <div className="border-l border-black pl-2 h-full flex items-center">
                    <button className="py-2 px-3 hover:bg-gray-100 flex items-center  rounded-full">
                        <Image
                            src="/flame.svg"
                            alt="Tegore mascot"
                            width={15}
                            height={15}
                            priority
                        />
                        <span className="pl-3 text-lg">2</span>
                    </button>
                    <button className="py-2 px-3 hover:bg-gray-100 flex items-center  rounded-full">
                        <Image
                            src="/heart.svg"
                            alt="Tegore mascot"
                            width={20}
                            height={20}
                            priority
                        />
                        <span className="pl-3 text-lg">3</span>
                    </button>
                    <button className="py-2 px-3 hover:bg-gray-100 flex items-center  rounded-full">
                        <Image
                            src="/bag.svg"
                            alt="Tegore mascot"
                            width={18}
                            height={18}
                            priority
                        />
                        <span className="pl-3 text-lg">241</span>
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
                            width={22}
                            height={22}
                            priority
                        />
                    </button>
                    {open && (
                        <div className="absolute  right-0 mt-3 bg-white border border-black border-3 shadow-lg w-40 z-10">
                            <div className="relative">  <Image
                                src="/tri.svg"
                                alt="Tegore mascot"
                                width={22}
                                height={22}
                                className="absolute  m-auto right-2 -top-3"
                                priority
                            /></div>
                            <ul className="text-sm text-gray-700">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Sign out
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Contact Support
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                    Manage Plan
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
