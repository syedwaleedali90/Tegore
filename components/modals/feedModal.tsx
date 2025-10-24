import React, { useState } from "react";
import { X } from "lucide-react";

type ModalProps = {
    open?: boolean;
    onClose?: () => void;
};

export default function FeedModal({ open = false, onClose }: ModalProps) {
    const [feedback, setFeedback] = useState("");


    if (!open) return null;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white border border-black border-4 w-[420px] sm:w-[500px] p-6 relative">
                {/* Close Button */}

                <div className="flex items-start justify-between">
                    <h2 className="text-lg mb-2 changeFont pr-3" style={{ fontWeight: 'bold' }}>
                        Not Satisfied? Cancel your plan here
                    </h2>
                    <button
                        onClick={onClose}
                        className=" text-black "
                    >
                        <X />
                    </button>
                </div>

                <p className="text-xs sm:text-sm changeFont text-gray-600 mb-3">
                    Please give us feedback to cancel our plan. This helps us know how we can improve.
                </p>


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
                <div className="flex mt-8 flex-col sm:flex-row gap-2">
                    <button
                        onClick={onClose}
                        className="border border-black changeFont border-3 text-black text-sm px-3  pt-1 pb-0  hover:bg-gray-100"
                    >
                        Cancel Plan
                    </button>
                </div>
            </div>
        </div>
    );
}
