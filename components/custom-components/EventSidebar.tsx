"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { X, Calendar, Clock, Link as LinkIcon, Users, Expand, RefreshCcw, Bell, MapPin, Plus, FileIcon, FileText, Info } from "lucide-react";
import { useCalendar } from "@/components/calendar/calendar-provider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";

export function EventSidebar() {
    const { selectedEvent, isSidebarOpen, closeSidebar } = useCalendar();
    const [priority, setPriority] = useState('High')

    const router = useRouter();
    const [files, setFiles] = useState<{ [key: number]: File | null }>({
        1: new File(["Sample content 1"], "document1.txt", { type: "text/plain" }),
        2: new File(["<html><body>Test HTML</body></html>"], "page.html", { type: "text/html" }),
        3: new File(["Sample image data"], "photo.png", { type: "image/png" }),
    });
    const [agendaItems, setAgendaItems] = useState([
        "Project updates",
        "Design review",
        "Task prioritization",
    ]);
    const [attendees, setAttendees] = useState([
        "Abdel Nasser",
        "Khadija Baroum",
        "Khadija Baroum (optional)",
        "Zain Ahmed",
        "Areeba Fatima",
    ]);
    const [showAllAttendees, setShowAllAttendees] = useState(false);
    const [frequency, setFrequency] = useState("Does not repeat");
    const [reminderTime, setReminderTime] = useState('10 minutes before');
    const [showReminder, setShowReminder] = useState(true);
    const [attachments, setAttachments] = useState<any[]>([
        { name: "project-report.pdf", size: 234567 },
        { name: "notes.txt", size: 10240 },
        { name: "design.png", size: 54321 },
    ]);


    const handleEdit = () => {
        router.push("/review");
    };
    const handleSave = () => {
        router.push("/review");
        
    };

    const formatFileSize = (bytes: any) => {
        if (bytes >= 1024 * 1024) {
            return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
        }
        return `${(bytes / 1024).toFixed(1)} KB`;
    };

    return (
        <Dialog.Root open={isSidebarOpen} onOpenChange={closeSidebar}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
                <Dialog.Content asChild>
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.25 }}
                        className="fixed top-0 right-0 z-50 w-[550px] h-full bg-white shadow-2xl rounded-l-2xl overflow-y-auto"
                    >
                        <div className="flex items-center sticky top-0 bg-white justify-between px-6 py-4 border-b">
                            <h2 className="text-lg font-semibold text-gray-900">Event</h2>

                            <div className="flex gap-3 mt-3">
                                <Expand className="w-5 h-5" onClick={() => handleEdit()} />
                                <X className="w-5 h-5" onClick={closeSidebar} />

                            </div>
                        </div>

                        {selectedEvent && (
                            <div className="px-6 py-5 space-y-6">
                                {/* Title & Priority */}
                                <div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-sidebar rounded-sm flex items-center justify-center flex-shrink-0">
                                            <Users className="w-4 h-4 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {selectedEvent.title}
                                        </h3>
                                        <span
                                            className={`inline-flex text-white items-center px-2 py-0.5 rounded-full text-xs font-semibold 
                                                    ${priority === "High"
                                                    ? "bg-red-100 text-red-700"
                                                    : priority === "Medium"
                                                        ? "bg-yellow-100 text-yellow-700"
                                                        : "bg-green-100 text-green-700"
                                                }`}
                                        >
                                            {'High'}
                                        </span>
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div className="space-y-2 text-md text-gray-700">

                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 mr-2 text-blue-500" />
                                        <span className="font-medium">
                                            {selectedEvent.start.toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}{" "}
                                            -{" "}
                                            {selectedEvent.end.toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <RefreshCcw className="w-5 h-5 mr-2 text-blue-500" />
                                        <span className="font-medium">
                                            {selectedEvent.start.toLocaleDateString(undefined, {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bell className="w-5 h-5 mr-2 text-blue-500" />
                                        <span className="font-medium">
                                            {selectedEvent.start.toLocaleDateString(undefined, {
                                                weekday: "long",
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                                        <span className="font-medium">
                                            Internal -  <Button variant={'link'} className="ml-0 p-0 h-auto">meet.google.com/xyz</Button>
                                        </span>
                                    </div>
                                </div>


                                {/* Attendees */}
                                <div>
                                    <Label className="gap-0">Attendees<span className="text-red-600">*</span></Label>
                                    <div className="flex items-center mt-2">
                                        <Input
                                            placeholder="contact@gmail.com"
                                            className="border-gray-300 text-sm"
                                        />
                                    </div>
                                    <ul className="mt-3 text-sm text-gray-800 space-y-3">
                                        {(showAllAttendees ? attendees : attendees.slice(0, 3)).map((a, i) => (
                                            <li key={i} className="flex justify-between items-center p-2 ">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                                                        <span className="text-blue-600">{a[0]}</span> {/* Initials for user icon */}
                                                    </div>
                                                    <div className="text-sm">
                                                        <div className="font-bold">{a}</div>
                                                        <div className="text-xs text-gray-500">{`${a.toLowerCase()}@example.com`}</div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <Users className="size-4 text-gray-400 mr-3 cursor-pointer" />
                                                    {/* <X
                                                        onClick={() =>
                                                            setAttendees((prev) => prev.filter((_, index) => index !== i))
                                                        }
                                                        className="size-4 text-gray-400 cursor-pointer"
                                                    /> */}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    {attendees.length > 3 && (
                                        <button
                                            onClick={() => setShowAllAttendees(!showAllAttendees)}
                                            className="text-blue-600 mt-2 text-sm hover:underline"
                                        >
                                            {showAllAttendees ? "Show less" : "Show more attendees"}
                                        </button>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <Label>Agenda</Label>
                                    </div>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        {agendaItems.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-center justify-between  px-3 py-2 rounded-lg border border-gray-100"
                                            >
                                                <span>{item}</span>
                                                <div className="flex items-center space-x-2">
                                                    {files[i] && (
                                                        <div className="flex items-center space-x-2 bg-white border border-gray-200 px-3 py-1.5 rounded-md">
                                                            <FileIcon className="w-4 h-4 text-blue-500" />
                                                            <span className="text-sm font-medium truncate max-w-[120px]">
                                                                {files[i]?.name}
                                                            </span>

                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <Label>Message</Label>
                                    <Textarea
                                        disabled
                                        rows={5}
                                        className="mt-2 resize-none"
                                        defaultValue={`Hello Mr. Thompson,\n\nI hope you are doing well. As we prepare for our upcoming event, I would like to discuss ways to improve our collaboration.`}
                                    />
                                </div>

                                <div>
                                    <Label> Attachments ({attachments.length})</Label>
                                    <div className="flex flex-col gap-3 mt-4">
                                        <div className="flex flex-wrap gap-3">
                                            {attachments.map((file: any, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors min-w-[200px]"
                                                >
                                                    <div className="flex-shrink-0 w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center">
                                                        <FileText className="w-5 h-5 text-amber-600" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            {file?.name}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            {formatFileSize(file?.size)}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="  space-y-6 ">
                                    <div>
                                        <Label>Frequency</Label>
                                        <Select value={frequency} >
                                            <SelectTrigger className="mt-2 w-full">
                                                <SelectValue placeholder="Select frequency" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Does not repeat">Does not repeat</SelectItem>
                                                <SelectItem value="Daily">Daily</SelectItem>
                                                <SelectItem value="Weekly on Tuesday">
                                                    Weekly on Tuesday
                                                </SelectItem>
                                                <SelectItem value="Monthly on first Friday">
                                                    Monthly on first Friday
                                                </SelectItem>
                                                <SelectItem value="Every weekday (Mon-Fri)">
                                                    Every weekday (Mon–Fri)
                                                </SelectItem>
                                                <SelectItem value="Custom">Custom</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <Label>Set Reminder</Label>

                                        <div className="flex items-center mt-3 gap-2 flex-wrap px-3 py-2 rounded-lg border border-gray-100">
                                            {showReminder && (
                                                <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
                                                    <span className="text-sm text-blue-700">{reminderTime}</span>
                                                    <button
                                                        onClick={() => setShowReminder(false)}
                                                        className="ml-1.5 text-blue-700 hover:text-blue-900 transition-colors"
                                                    >
                                                        <X className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            )}

                                            <Select value={reminderTime} onValueChange={(value) => {
                                                setReminderTime(value);
                                                setShowReminder(true);
                                            }}>
                                                <SelectTrigger className="w-auto inline-flex px-4 py-1.5 h-auto border-0 shadow-none text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                                                    <SelectValue placeholder="Select" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="5 minutes before">5 minutes before</SelectItem>
                                                    <SelectItem value="10 minutes before">10 minutes before</SelectItem>
                                                    <SelectItem value="15 minutes before">15 minutes before</SelectItem>
                                                    <SelectItem value="30 minutes before">30 minutes before</SelectItem>
                                                    <SelectItem value="1 hour before">1 hour before</SelectItem>
                                                    <SelectItem value="1 day before">1 day before</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t justify-between flex py-2">
                                    <div className="text-gray-400 flex items-center  text-sm">
                                        <Info className="mr-2" /> <span>Draft event</span>
                                    </div>

                                    <Button onClick={() => handleSave()}>
                                        Save event and send request
                                    </Button>
                                </div>
                            </div>
                        )}
                    </motion.aside>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
