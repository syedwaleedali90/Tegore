"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Plus, Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { useCalendarContext } from "@/components/calendar/calendar-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function AddEventModal() {
    const { newEventDialogOpen, setNewEventDialogOpen } = useCalendarContext();

    const router = useRouter();

    const handleClick = () => {
        router.push("/newEvent");
    };



    return (
        <Dialog.Root open={newEventDialogOpen} onOpenChange={setNewEventDialogOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40 p-4" />

                <Dialog.Content asChild>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 top-1/2 z-50 w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl p-6"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <Dialog.Title className="text-lg font-semibold text-gray-900">
                                    Add event
                                </Dialog.Title>
                                <Dialog.Description className="text-sm text-gray-500 mt-1">
                                    Select an option to add your event
                                </Dialog.Description>
                            </div>

                            <Dialog.Close asChild>
                                <button className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition">
                                    <X className="w-5 h-5" />
                                </button>
                            </Dialog.Close>
                        </div>

                        <div className="flex gap-3 mt-6">

                            <Button className="flex-1" size="lg" onClick={handleClick}>
                                <Plus className="size-5" />
                                <span className="hidden sm:inline">Add Event</span>
                            </Button>
                            <Button className="flex-1" variant="outline" size="lg">
                                <Search className="size-5 text-primary" />
                                <span className="hidden sm:inline">Find Slot</span>
                            </Button>
                        </div>
                    </motion.div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
