"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Headerlogin from "@/components/headerlogin";

type Item = {
    id: number;
    name: string;
    image: string;
    rightMon: string;
    price: number;
};
const items: Item[] = [
    { id: 1, rightMon: '/rightMonkey.svg', name: "1 Life", image: "/item1.svg", price: 25 },
    { id: 2, rightMon: '/rightMonkey.svg', name: "1 Streak Freeze", image: "/item2.svg", price: 50 },
    { id: 3, rightMon: '/shirtMon.svg', name: "Basketball Jersey", image: "/item3.svg", price: 95 },
    { id: 4, rightMon: '/paintMon.svg', name: "Artist Tools", image: "/item4.svg", price: 185 },
    { id: 5, rightMon: '/beardMon.svg', name: "Beard", image: "/item5.svg", price: 65 },
    { id: 6, rightMon: '/pantMon.svg', name: "Pop-star outfit", image: "/item6.svg", price: 230 },
];

export default function ItemsPage() {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    return (
        <main className="min-h-screen bg-white">
            <Headerlogin />
            <div className="flex customheightHome">
                <div
                    className={`flex-1 px-12 py-8 transition-all duration-300 ${selectedItem ? "blur-md" : ""
                        }`}
                >
                    <div className="grid gap-10 items-start grid-cols-3">
                        {items.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                onClick={() => setSelectedItem(item)}
                                className="cursor-pointer bg-white border border-black rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg"
                            >
                                {/* 🖼 Item Image */}
                                <div className="mb-3">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Item Name */}
                                <h3 className="font-semibold border-t w-full border-black pt-2  text-gray-800 mb-2">
                                    {item.name}
                                </h3>

                                {/* Price Tag */}
                                <div className="bg-[#0099FF] text-black font-semibold px-4 py-1 w-[80%] margin-auto flex items-center gap-1 justify-center ">
                                    <Image
                                        src="/dollarsign.svg"
                                        alt="Medal"
                                        width={14}
                                        height={14}
                                        priority
                                    />
                                    <span>{item.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className=" customheightHome w-[296px] bg-[#D9D9D9] flex flex-col items-center justify-center border-l border-gray-200">
                    <div className="flex flex-col space-y-4 px-6">

                        <h2 className="text-3xl text-center font-bold text-black">Bunty</h2>
                        <Image
                            src={selectedItem && selectedItem.rightMon ? selectedItem.rightMon : '/rightMonkey.svg'}
                            alt="Bunty"
                            width={250}
                            height={250}
                            className="rounded-full"
                        />
                        <div className="w-[60%] m-auto">
                            <p className="text-xl text-black font-extralight mb-2 border-b border-gray-500">Bunty’s <br /> total gold:</p>
                            <div className="flex items-center gap-2 text-5xl font-extralight text-black">
                                <Image
                                    src="/bigdol.svg"
                                    alt="Medal"
                                    width={34}
                                    height={34}
                                    priority
                                />
                                <span>241</span>
                            </div></div>
                    </div>
                </div>

            </div>
            {/* Purchase Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="fixed w-[calc(100%-296px)] inset-0 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 "></div>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white border-3 border-black  rounded-xl shadow-lg p-6 text-center z-10 w-[300px]"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-[90px] left-5 text-xl font-bold text-gray-700"
                            >
                                ✕
                            </button>
                            <div className="flex flex-col items-center mt-6">
                                <p className="text-black text-xl mb-4 font-semibold">
                                    Purchase {selectedItem.name.toLowerCase()} for{" "}
                                    {selectedItem.price} gold?
                                </p>
                                <Image
                                    src={selectedItem.image}
                                    alt={"Items"}
                                    width={90}
                                    height={90}
                                    className="object-contain"
                                />

                                <div className="flex  flex-col border-t items-center border-black mt-2 pt-5 justify-center gap-3 w-full">
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="border border-black px-5 py-1 w-[120px]  font-bold  transition"
                                    >
                                        No
                                    </button>
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="bg-[#0099FF] text-black px-5 py-1 w-[120px] font-bold hover:bg-[#2563eb] transition"
                                    >
                                        Yes
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
