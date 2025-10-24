import React, { useState } from "react";
import { X } from "lucide-react";

// ModalTailwindExample.tsx
// Single-file React component (Next.js compatible) that implements a polished modal using Tailwind CSS.
// Usage: import ModalTailwindExample from './ModalTailwindExample'; <ModalTailwindExample />

type ModalProps = {
    open?: boolean;
    onClose?: () => void;
};

export default function FeedBackSubmit({ open = false, onClose }: ModalProps) {
    const [feedback, setFeedback] = useState("");


    if (!open) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white border border-black border-4 w-[420px] sm:w-[500px] p-6 relative">
                {/* Close Button */}

                <div className="flex items-start justify-between">
                    <h2 className="text-lg mb-2 changeFont pr-3" style={{ fontWeight: 'bold' }}>
                       Submit Feedback below:
                    </h2>
                    <button
                        onClick={onClose}
                        className=" text-black "
                    >
                        <X />
                    </button>
                </div>
                <div className="relative">
                    <textarea
                        placeholder="Type here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full border border-gray-300 pt-2 pl-2 pb-2 pr-16 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400 resize-none h-24"
                    />
                    <div className="absolute bottom-4 right-5">
                        <button
                            className="bg-blue-500 changeFont text-white text-sm px-3 pt-1 pb-0  hover:bg-blue-600"
                            onClick={() => { onClose }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="">
                    <p className="text-md sm:text-md mt-2 changeFont text-black mb-3">
                        Contact our Team
                    </p>
                    <div className="text-gray-500">
                        <span>WhatsApp: +91 9650076845</span>
                    </div>
                    <div className="text-gray-500">
                        <span>Text: 3204074850</span>
                    </div>
                    <div className="text-gray-500">
                        <span>Email: team@tegore.ai</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
