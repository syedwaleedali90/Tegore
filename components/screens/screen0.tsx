import Image from "next/image";
// import { useRive } from "@rive-app/react-canvas";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Screen0() {
    const [isClicked, setIsClicked] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [typedText, setTypedText] = useState("");
    const [saidYes, setSaidYes] = useState(false);
    const [noYesResponse, setNoYesResponse] = useState(false);
    const [firstClick, setFirstClick] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const fullText = noYesResponse
        ? "Oh, you didn't type yes. You must like thinking outside of the box! Try holding the SPACE BAR to talk to me."
        : "Hey there! I'm Tegore - Type yes if you can hear me!";

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && userInput.trim()) {
            const input = userInput.toLowerCase().trim();
            if (input === "yes") {
                setSaidYes(true);
            } else {
                setNoYesResponse(true);
                setTypedText("");
                const audio = new Audio('/no-yes-response.mp3');
                audio.play().catch(error => console.log('Audio play failed:', error));
            }
            setUserInput("");
        }
    };

    const handleDialogueClick = () => {
        if (!firstClick) {
            const clickSound = new Audio('/computer-mouse-click-351398.mp3');
            clickSound.play().catch(error => console.log('Click sound failed:', error));
            setFirstClick(true);
        }
        setIsClicked(true);
    };

    useEffect(() => {
        if (isClicked && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isClicked]);

    useEffect(() => {
        const handleClick = () => {
            if (isClicked && inputRef.current) {
                inputRef.current.focus();
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [isClicked]);

    useEffect(() => {
        if (isClicked) {
            const timeout = setTimeout(() => {
                const audio = new Audio('/welcome-message.mp3');
                audio.play().catch(error => console.log('Audio play failed:', error));
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [isClicked]);

    useEffect(() => {
        if (isClicked && typedText.length < fullText.length) {
            const delay = (typedText.length === 0 && !noYesResponse) ? 500 : 50;
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [isClicked, typedText, fullText, noYesResponse]);
    // const { RiveComponent } = useRive({
    //     src: "/bear_hi.riv",
    //     autoplay: true,
    // });
    return (
        <section className=" md:flex-row flex md:items-start items-center justify-between
         flex-col justify-between gap-16">
            <div className="relative flex-1 flex flex-col ">
                <div className="items-center flex flex-col md:items-center text-center md:text-left">

                    <motion.div
                        className="w-[180px] h-[180px] sm:w-[180px] sm:h-[180px] md:w-[320px] md:h-[320px] mt-10 md:-ml-12"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* <RiveComponent /> */}
                        <Image
                            src="/panda.svg"
                            alt="Tegore Mascot"
                            width={320}
                            height={320}
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                    <motion.div
                        className={`mt-12 hidden md:block border-3 w-[400px] min-h-[80px] border-orange-500 rounded-lg px-6 py-4 text-xl font-normal text-black-700 bg-white/40 ${
                            isClicked ? 'border-solid' : 'border-dashed cursor-pointer'
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileHover={!isClicked ? { y: -8, boxShadow: "0px 12px 24px rgba(249, 115, 22, 0.3)", transition: { duration: 0.15 } } : {}}
                        style={{ transition: 'transform 0.15s, box-shadow 0.15s' }}
                        onClick={handleDialogueClick}
                    >
                        {isClicked
                            ? typedText
                            : <>
                                When your sound is on,{" "}
                                <span className="text-orange-600 font-bold">
                                    {"click here".split("").map((letter, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ y: 0 }}
                                            animate={{ y: [0, -4, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: [0.34, 1.56, 0.64, 1],
                                                repeatDelay: 1.5,
                                                delay: index * 0.12
                                            }}
                                            style={{ display: 'inline-block' }}
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </motion.span>
                                    ))}
                                </span>{" "}
                                to hear me speak!
                            </>
                        }
                    </motion.div>
                    {isClicked && (
                        <motion.div
                            className="mt-4 flex items-center justify-center w-[400px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="bg-transparent border-none outline-none text-xl text-gray-700 font-normal text-center w-full"
                                style={{ caretColor: '#374151' }}
                                autoFocus
                                placeholder=""
                            />
                        </motion.div>
                    )}
                </div>
            </div>

            <motion.div
                className=" flex-1 flex flex-col items-center md:items-start md:ml-8 gap-4 sm:gap-6 md:gap-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <div className="flex items-center gap-2 sm:mt-2 md:mt-0 md:self-start">
                    <span className="text-sm text-gray-700 flex-inline items-center flex rounded-lg px-5 py-2">Backed by <span className="w-4 items-center flex justify-center mx-1 h-4 pt-1  bg-orange-600 text-white" style={{fontSize:'12px'}}>Y </span> Combinator</span>
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
            </motion.div>
        </section>
    );
}
