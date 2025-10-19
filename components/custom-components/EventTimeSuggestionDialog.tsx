import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Check } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Attendee {
    name: string;
    initial: string;
    color: string;
}

interface TimeOptionProps {
    time: string;
    date: string;
    status: 'available' | 'partial' | 'unavailable';
    attendees: Attendee[];
    isSelected: boolean;
    onSelect: () => void;
}

const TimeOption: React.FC<TimeOptionProps> = ({
    time,
    date,
    status,
    attendees,
    isSelected,
    onSelect
}) => {
    const getStatusColor = (): string => {
        if (status === 'available') return 'text-green-600';
        if (status === 'partial') return 'text-gray-600';
        return 'text-gray-600';
    };

    const getStatusText = (): string => {
        if (status === 'available') return 'All attendees available';
        if (status === 'partial') return 'Oliver Chen (optional) is not available';
        return 'Oliver Chen and Mia Thompson are not available';
    };

    return (
        <label className="flex items-start gap-3 py-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
            <input
                type="radio"
                name="timeSlot"
                checked={isSelected}
                onChange={onSelect}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <div className="flex-1">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-900">{date} - {time}</p>
                        <p className={`text-xs mt-0.5 ${getStatusColor()}`}>
                            {status === 'available' && <Check className="inline w-3 h-3 mr-1" />}
                            {getStatusText()}
                        </p>
                    </div>
                    <div className="flex -space-x-2">
                        {attendees.map((attendee, idx) => (
                            <div
                                key={idx}
                                className="w-6 h-6 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-xs text-white font-medium"
                                style={{ backgroundColor: attendee.color }}
                                title={attendee.name}
                            >
                                {attendee.initial}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </label>
    );
};

interface TimeSlot {
    date: string;
    time: string;
    status: 'available' | 'partial' | 'unavailable';
    attendees: Attendee[];
}

interface EventTimeSuggestionDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelectTime?: (timeSlot: TimeSlot) => void;
}

const EventTimeSuggestionDialog: React.FC<EventTimeSuggestionDialogProps> = ({
    open,
    onOpenChange,
    onSelectTime
}) => {
    const [selectedTime, setSelectedTime] = useState<number>(0);

    const timeOptions: TimeSlot[] = [
        {
            date: 'Tuesday, 17 Sep',
            time: '11:00 AM',
            status: 'available',
            attendees: [
                { name: 'User 1', initial: 'U', color: '#6B7280' },
                { name: 'User 2', initial: 'A', color: '#EF4444' },
                { name: 'User 3', initial: 'M', color: '#3B82F6' }
            ]
        },
        {
            date: 'Tuesday, 17 Sep',
            time: '12:00 PM',
            status: 'partial',
            attendees: [
                { name: 'User 1', initial: 'U', color: '#6B7280' },
                { name: 'User 2', initial: 'A', color: '#EF4444' },
                { name: 'User 3', initial: 'M', color: '#3B82F6' }
            ]
        },
        {
            date: 'Tuesday, 17 Sep',
            time: '1:00 PM',
            status: 'unavailable',
            attendees: [
                { name: 'User 1', initial: 'U', color: '#6B7280' },
                { name: 'User 2', initial: 'A', color: '#EF4444' },
                { name: 'User 3', initial: 'M', color: '#3B82F6' }
            ]
        }
    ];

    const handleSelectAndReplace = () => {
        if (onSelectTime) {
            onSelectTime(timeOptions[selectedTime]);
        }
        onOpenChange(false);
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40 p-4" />
                <Dialog.Content asChild>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 top-1/2 z-50 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <Dialog.Title className="text-lg font-semibold text-gray-900">
                                Suggested time for event
                            </Dialog.Title>
                            <Dialog.Close asChild>
                                <button
                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                    aria-label="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </Dialog.Close>
                        </div>

                        <div className="space-y-2 mb-6">
                            {timeOptions.map((option, idx) => (
                                <TimeOption
                                    key={idx}
                                    {...option}
                                    isSelected={selectedTime === idx}
                                    onSelect={() => setSelectedTime(idx)}
                                />
                            ))}
                        </div>

                    
                        <div className="flex gap-3 mt-6">

                            <Button className="flex-1" variant="outline" size="lg" onClick={() =>  onOpenChange(false)} >
                                <span className="hidden sm:inline">Cancel</span>
                            </Button>
                            <Button className="flex-1" size="lg" onClick={handleSelectAndReplace}>
                                <span className="hidden sm:inline">Select & replace current time</span>
                            </Button>
                        </div>

                    </motion.div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default EventTimeSuggestionDialog;
