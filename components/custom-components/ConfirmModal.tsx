"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

interface ConfirmModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    confirmText?: string;
    onConfirm: () => void;
}

export default function ConfirmModal({
    open,
    onOpenChange,
    title,
    description,
    confirmText = "Confirm",
    onConfirm,
}: ConfirmModalProps) {
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 " />
                        <Dialog.Content asChild>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="fixed left-1/2 top-1/2 z-50 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl p-6"
                            >
                                <div className="text-center mb-4">
                                    <Dialog.Title className="text-2xl  font-semibold mb-4 text-gray-900">
                                        {title}
                                    </Dialog.Title>
                                    {description && (
                                        <Dialog.Description className="mt-2 pb-4 text-sm text-gray-500">
                                            {description}
                                        </Dialog.Description>
                                    )}
                                </div>
                                <div className="flex gap-3 px-6 mt-3">
                                    <Button className="flex-1 border-blue-500" variant="outline" size="lg" onClick={() => onOpenChange(false)} >
                                        <span className="hidden sm:inline">Cancel</span>
                                    </Button>
                                    <Button className="flex-1" size="lg" onClick={() => {
                                        onConfirm();
                                        onOpenChange(false);
                                    }}>
                                        <span className="hidden sm:inline">{confirmText}</span>
                                    </Button>
                                </div>
                            </motion.div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    );
}
