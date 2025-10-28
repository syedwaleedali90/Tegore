"use client";
import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Headerlogin from "@/components/headerlogin";
import Image from "next/image";

type Player = {
    rank: number;
    name: string;
    score: number;
    bgcolor: string;
    medal?: string;
};

const players: Player[] = [
    { rank: 1, name: "Eat this", score: 342, bgcolor: "#0099FF", medal: "/first.svg" },
    { rank: 2, name: "Stu west", score: 287, bgcolor: "#2FACFF", medal: "/second.svg" },
    { rank: 3, name: "Sino", score: 233, bgcolor: "#57BCFF", medal: "/third.svg" },
    { rank: 4, name: "Ende Shen", score: 201, bgcolor: "#81CDFF" },
    { rank: 5, name: "Karna Jos", score: 182, bgcolor: "#89D0FF" },
    { rank: 6, name: "Madhav Mohan", score: 121, bgcolor: "#A0D9FF" },
    { rank: 7, name: "Madhav Mohan", score: 87, bgcolor: "#B9E3FF" },
    { rank: 8, name: "Madhav Mohan", score: 53, bgcolor: "#D5EEFE" },
    { rank: 9, name: "Madhav Mohan", score: 27, bgcolor: "#E4F4FF" },
    { rank: 10, name: "Madhav Mohan", score: 12, bgcolor: "#FFFFFF" },
];

export default function Leaderboard() {
    return (
        <main className="min-h-screen bg-white">
            <Headerlogin />
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col w-full items-center justify-center text-gray-900 p-6">
                    <div className="flex items-center w-full gap-6 mb-2">
                        <h1 className="text-5xl font-semibold text-orange-600 mr-4 leading-tight">
                            Welcome to the <br />
                            Champions <br /> League!
                        </h1>
                        <Image
                            src="/steps.svg"
                            alt="Medal"
                            width={250}
                            height={250}
                            priority
                        />
                    </div>
                    <div className="border-b border-gray-500 w-full text-end mb-6 font-extralight  ">
                        Resets in 3 days...
                    </div>

                    {/* Leaderboard */}
                    <div className="w-full max-w-md space-y-3">
                        {players.map((player) => (
                            <div className="flex items-center gap-2" key={player.rank}>
                                <div className="flex items-center">
                                    {player.medal ?
                                        <Image
                                            src={player.medal}
                                            alt="Medal"
                                            width={50}
                                            height={50}
                                            priority
                                        />
                                    : 
                                    <span className="w-[42.89px]"></span>}
                                </div>
                                <motion.div

                                    whileHover={{
                                        scale: 1.05,
                                        rotateX: 4,
                                        rotateY: -2,
                                        boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
                                    }}
                                    transition={{ type: "spring", stiffness: 250, damping: 20 }}
                                    className="flex items-center justify-between w-full cursor-pointer rounded-md border border-gray-200 p-4 ml-2"
                                    style={{ backgroundColor: player.bgcolor }}  >
                                    <div className={`${player.rank <= 6 ? 'text-white' : 'text-black'}`}>
                                        <span className="text-lg pr-2 text-xl font-bold">{player.rank}.</span>
                                        <span className="font-bold text-xl">{player.name}</span>
                                    </div>
                                    <div className="flex bg-white rounded-lg w-[80px]  px-2 justify-center items-center gap-1 text-sm font-semibold">
                                        <Image
                                            src="/dollarsign.svg"
                                            alt="Medal"
                                            width={14}
                                            height={14}
                                            priority
                                        />
                                        <span className="pt-1 pl-1 text-xl"> {player.score}</span>
                                    </div>

                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
