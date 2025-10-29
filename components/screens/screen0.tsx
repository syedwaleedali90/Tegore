import Image from "next/image";
// import { useRive } from "@rive-app/react-canvas";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Client-side session cookie management
function setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function getOrCreateSessionId(): string {
    let sessionId = getCookie('session_id');
    if (!sessionId) {
        sessionId = crypto.randomUUID();
        // Set cookie that will be sent to api.tegore.ai
        document.cookie = `session_id=${sessionId}; path=/; max-age=31536000; SameSite=Lax`;
    }
    return sessionId;
}

export default function Screen0() {
    const [isClicked, setIsClicked] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [typedText, setTypedText] = useState("");
    const [saidYes, setSaidYes] = useState(false);
    const [noYesResponse, setNoYesResponse] = useState(false);
    const [firstClick, setFirstClick] = useState(false);
    const [isSpacePressed, setIsSpacePressed] = useState(false);
    const [sessionId, setSessionId] = useState<string>("");
    const [userName, setUserName] = useState("");
    const [greetingName, setGreetingName] = useState(false);
    const [conversationMode, setConversationMode] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [aiResponse, setAiResponse] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const fullText = isProcessing
        ? "Let me think about that..."
        : aiResponse
        ? aiResponse
        : conversationMode
        ? "Hold the spacebar to talk to me!"
        : greetingName
        ? `Hi ${userName} - I'd love to tell you more about myself. Before that, can you press the space bar for me?`
        : saidYes
        ? "Hello! Glad to meet you, what's your name?"
        : noYesResponse
        ? "Oh, you didn't type yes. You must like thinking outside of the box! What's your name by the way?"
        : "Hey there! I'm Tegore - Type yes if you can hear me!";

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === " " && !userInput.trim()) {
            e.preventDefault();
            return;
        }
        if (e.key === "Enter" && userInput.trim()) {
            const input = userInput.trim();

            // First interaction: yes/no detection
            if (!saidYes && !noYesResponse) {
                const lowerInput = input.toLowerCase();
                if (lowerInput === "yes") {
                    setSaidYes(true);
                    setTypedText("");
                    const audio = new Audio('/yes-response.mp3');
                    audio.play().catch(error => console.log('Audio play failed:', error));
                } else {
                    setNoYesResponse(true);
                    setTypedText("");
                    const audio = new Audio('/no-yes-response.mp3');
                    audio.play().catch(error => console.log('Audio play failed:', error));
                }
                setUserInput("");
            }
            // Second interaction: name entry
            else if (saidYes || noYesResponse) {
                setUserName(input);
                setGreetingName(true);
                setTypedText("");
                setUserInput("");

                // Call TTS endpoint (session_id sent as cookie automatically)
                const playGreeting = async () => {
                    try {
                        const params = new URLSearchParams({ name: input });
                        const response = await fetch(`https://api.tegore.ai/api/tts/greeting?${params.toString()}`, {
                            credentials: 'include'  // Send cookies with request
                        });

                        if (!response.ok) {
                            console.log('TTS greeting failed:', response.status);
                            // Still enable conversation mode even if greeting fails
                            setTimeout(() => {
                                setConversationMode(true);
                                setTypedText("");
                            }, 2000);
                            return;
                        }

                        const audioBlob = await response.blob();
                        const audioUrl = URL.createObjectURL(audioBlob);
                        const audio = new Audio(audioUrl);

                        await audio.play();

                        // Enable conversation mode as soon as audio starts
                        setConversationMode(true);

                        audio.onended = () => {
                            setTypedText("");
                        };
                    } catch (error) {
                        console.log('TTS greeting failed:', error);
                        // Enable conversation mode after delay if audio fails
                        setTimeout(() => {
                            setConversationMode(true);
                            setTypedText("");
                        }, 2000);
                    }
                };

                playGreeting();
            }
        }
    };

    const sendToConversation = async (audioBlob: Blob) => {
        setIsProcessing(true);
        setTypedText("");

        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.webm');

        try {
            const response = await fetch('https://api.tegore.ai/api/conversation/respond', {
                method: 'POST',
                body: formData,
                credentials: 'include'  // Send cookies with request
            });

            if (response.status === 429) {
                setAiResponse('⚠️ Rate limit exceeded. Please wait a moment and try again.');
                setIsProcessing(false);
                return;
            }

            if (!response.ok) {
                throw new Error('Conversation failed');
            }

            // Get AI text from header
            const aiText = response.headers.get('X-AI-Response') || 'Sorry, I didn\'t catch that.';
            setAiResponse(aiText);
            setIsProcessing(false);

            // Play AI audio
            const aiAudioBlob = await response.blob();
            const aiAudioUrl = URL.createObjectURL(aiAudioBlob);
            const aiAudio = new Audio(aiAudioUrl);
            aiAudio.play().catch(error => console.log('AI audio play failed:', error));

            // Reset for next interaction
            aiAudio.onended = () => {
                setAiResponse("");
                setTypedText("");
            };

        } catch (error) {
            console.error('Conversation error:', error);
            setAiResponse('❌ Something went wrong. Please try again.');
            setIsProcessing(false);
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
            const delay = (typedText.length === 0 && !noYesResponse && !saidYes && !greetingName) ? 500 : 50;
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [isClicked, typedText, fullText, noYesResponse, saidYes, greetingName]);

    useEffect(() => {
        // Initialize microphone when conversation mode is enabled
        if (conversationMode) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    const options = MediaRecorder.isTypeSupported('audio/webm')
                        ? { mimeType: 'audio/webm' }
                        : {};
                    const recorder = new MediaRecorder(stream, options);

                    recorder.ondataavailable = (e) => {
                        if (e.data.size > 0) {
                            audioChunksRef.current.push(e.data);
                        }
                    };

                    recorder.onstop = async () => {
                        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                        audioChunksRef.current = [];
                        await sendToConversation(audioBlob);
                    };

                    mediaRecorderRef.current = recorder;
                })
                .catch(error => console.log('Microphone access failed:', error));

            return () => {
                if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                    mediaRecorderRef.current.stop();
                    mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
                }
            };
        }
    }, [conversationMode]);

    useEffect(() => {
        if (conversationMode) {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.code === 'Space') {
                    e.preventDefault(); // Always prevent scroll in conversation mode
                    if (!isSpacePressed && !isRecording && !isProcessing) {
                        setIsSpacePressed(true);
                        setIsRecording(true);
                        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'inactive') {
                            audioChunksRef.current = [];
                            mediaRecorderRef.current.start();
                        }
                    }
                }
            };
            const handleKeyUp = (e: KeyboardEvent) => {
                if (e.code === 'Space') {
                    e.preventDefault(); // Always prevent scroll in conversation mode
                    if (isSpacePressed) {
                        setIsSpacePressed(false);
                        setIsRecording(false);
                        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
                            mediaRecorderRef.current.stop();
                        }
                    }
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            };
        } else if (noYesResponse) {
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.code === 'Space') {
                    e.preventDefault(); // Prevent scroll
                    if (!isSpacePressed) {
                        setIsSpacePressed(true);
                    }
                }
            };
            const handleKeyUp = (e: KeyboardEvent) => {
                if (e.code === 'Space') {
                    e.preventDefault(); // Prevent scroll
                    setIsSpacePressed(false);
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            window.addEventListener('keyup', handleKeyUp);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                window.removeEventListener('keyup', handleKeyUp);
            };
        }
    }, [conversationMode, noYesResponse, isSpacePressed, isRecording, isProcessing]);

    useEffect(() => {
        // Initialize session on mount
        setSessionId(getOrCreateSessionId());
    }, []);
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
                    {isClicked && !conversationMode && (
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
                className=" flex-1 flex flex-col items-center md:items-start md:ml-8 justify-between"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {!noYesResponse && !conversationMode ? (
                    <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
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
                    </div>
                ) : (
                    <motion.div
                        className="flex flex-col items-center justify-center gap-6 w-full pt-20 md:pt-32 pb-16 md:pb-24"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isRecording && (
                            <motion.div
                                className="text-red-500 font-semibold text-lg flex items-center gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.span
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    🔴
                                </motion.span>
                                Recording...
                            </motion.div>
                        )}
                        <motion.div
                            animate={{ y: isSpacePressed ? 4 : 0 }}
                            transition={{ duration: 0.1, ease: "easeOut" }}
                        >
                            <Image
                                src={isSpacePressed ? "/spacebar-pressed.svg" : "/spacebar-unpressed.svg"}
                                alt="Spacebar"
                                width={271}
                                height={isSpacePressed ? 56 : 61}
                                className="w-[300px] sm:w-[350px] md:w-[400px]"
                            />
                        </motion.div>
                    </motion.div>
                )}

                <button className={`bg-[#0099FF] text-white
    px-6 py-2 text-base font-semibold
    sm:px-8 sm:py-2 sm:text-lg
    md:px-10 md:py-2.5 md:text-xl
    rounded-lg
    shadow-[4px_4px_0_0_#0066CC]
    hover:shadow-[2px_2px_0_0_#0066CC] hover:translate-x-[2px] hover:translate-y-[2px]
    active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
    transition-all duration-150 ${(noYesResponse || conversationMode) ? 'mt-auto' : 'mt-4 sm:mt-6 md:mt-8'}`}>
                    Start Learning
                </button>
            </motion.div>
        </section>
    );
}
