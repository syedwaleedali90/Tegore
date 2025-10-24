import React from "react";
import { X } from "lucide-react";

// ModalTailwindExample.tsx
// Single-file React component (Next.js compatible) that implements a polished modal using Tailwind CSS.
// Usage: import ModalTailwindExample from './ModalTailwindExample'; <ModalTailwindExample />

type ModalProps = {
    open?: boolean;
    onClose?: () => void;
};

export default function ConfirmationModal({ open = false, onClose }: ModalProps) {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white border border-black border-4 w-[420px] sm:w-[500px] p-6 relative">
                {/* Close Button */}
                <div className="flex items-start justify-between">
                    <h2  className="text-lg mb-2 changeFont pr-3" style={{fontWeight:'bold'}}>
                        Are you sure you want to cancel your plan? Your plan will remain active until the end of your current billing month
                    </h2>
                    <button
                        onClick={onClose}
                        className=" text-black "
                    >
                        <X />
                    </button>
                </div>
                <div className="flex mt-8 flex-col sm:flex-row gap-2">
                    <button
                        onClick={onClose}
                        className="border border-black changeFont border-3 text-black text-sm px-3  pt-1 pb-0  hover:bg-gray-100"
                    >
                        Yes, Cancel my plan.
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-blue-500 changeFont text-white text-sm px-3 pt-1 pb-0  hover:bg-blue-600"
                    >
                        No, keep my plan.
                    </button>
                </div>
            </div>
        </div>
    );
}
