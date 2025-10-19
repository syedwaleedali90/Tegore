import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface CustomFrequencyDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave?: (settings: FrequencySettings) => void;
}

interface FrequencySettings {
    repeatEvery: number;
    repeatUnit: string;
    repeatOn: string[];
    endsType: 'never' | 'on';
    endsAfter?: number;
}

const CustomFrequencyDialog: React.FC<CustomFrequencyDialogProps> = ({
    open,
    onOpenChange,
    onSave
}) => {
    const [repeatEvery, setRepeatEvery] = useState<number>(3);
    const [repeatUnit, setRepeatUnit] = useState<string>('Days');
    const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Fri']);
    const [endsType, setEndsType] = useState<'never' | 'on'>('never');
    const [endsAfter, setEndsAfter] = useState<number>(1);

    const weekDays = [
        { value: 'Mon', label: 'M', full: 'Monday' },
        { value: 'Tue', label: 'T', full: 'Tuesday' },
        { value: 'Wed', label: 'W', full: 'Wednesday' },
        { value: 'Thu', label: 'T', full: 'Thursday' },
        { value: 'Fri', label: 'F', full: 'Friday' },
        { value: 'Sat', label: 'S', full: 'Saturday' },
        { value: 'Sun', label: 'S', full: 'Sunday' }
    ];

    const toggleDay = (day: string) => {
        setSelectedDays(prev =>
            prev.includes(day)
                ? prev.filter(d => d !== day)
                : [...prev, day]
        );
    };

    const handleDone = () => {
        if (onSave) {
            onSave({
                repeatEvery,
                repeatUnit,
                repeatOn: selectedDays,
                endsType,
                endsAfter: endsType === 'on' ? endsAfter : undefined
            });
        }
        onOpenChange(false);
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 " />
                <Dialog.Content asChild>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 top-1/2 z-50 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl p-6"
                    >
                        <div className="px-2 pt-2 pb-2 text-center">
                            <Dialog.Title className="text-xl font-medium text-gray-900 mb-1">
                                Custom frequency
                            </Dialog.Title>
                            <p className="text-sm text-gray-600">
                                An email will be sent to all attendees with this event.
                            </p>
                        </div>

                        <div className="px-6 py-6 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-3">
                                    Repeat every
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <Select.Root value={repeatEvery.toString()} onValueChange={(val) => setRepeatEvery(Number(val))}>
                                        <Select.Trigger className="flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <Select.Value />
                                            <ChevronDown className="w-4 h-4 text-gray-500" />
                                        </Select.Trigger>
                                        <Select.Portal>
                                            <Select.Content className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
                                                <Select.Viewport>
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                                        <Select.Item
                                                            key={num}
                                                            value={num.toString()}
                                                            className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 focus:bg-gray-100 outline-none"
                                                        >
                                                            <Select.ItemText>{num}</Select.ItemText>
                                                        </Select.Item>
                                                    ))}
                                                </Select.Viewport>
                                            </Select.Content>
                                        </Select.Portal>
                                    </Select.Root>

                                    <Select.Root value={repeatUnit} onValueChange={setRepeatUnit}>
                                        <Select.Trigger className="flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <Select.Value />
                                            <ChevronDown className="w-4 h-4 text-gray-500" />
                                        </Select.Trigger>
                                        <Select.Portal>
                                            <Select.Content className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
                                                <Select.Viewport>
                                                    {['Days', 'Weeks', 'Months', 'Years'].map(unit => (
                                                        <Select.Item
                                                            key={unit}
                                                            value={unit}
                                                            className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 focus:bg-gray-100 outline-none"
                                                        >
                                                            <Select.ItemText>{unit}</Select.ItemText>
                                                        </Select.Item>
                                                    ))}
                                                </Select.Viewport>
                                            </Select.Content>
                                        </Select.Portal>
                                    </Select.Root>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-3">
                                    Repeat on
                                </label>
                                <div className="flex gap-2">
                                    {weekDays.map((day, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => toggleDay(day.value)}
                                            className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${selectedDays.includes(day.value)
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                                }`}
                                            title={day.full}
                                        >
                                            {day.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Ends */}
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-3">
                                    Ends
                                </label>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="ends"
                                            checked={endsType === 'never'}
                                            onChange={() => setEndsType('never')}
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-900">Never</span>
                                    </label>

                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="ends"
                                            checked={endsType === 'on'}
                                            onChange={() => setEndsType('on')}
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <span className="text-sm text-gray-900">On</span>
                                    </label>

                                    {endsType === 'on' && (
                                        <div className="w-50">
                                            <label className="block text-sm  text-gray-600 mb-2">Ends</label>
                                            <Select.Root disabled value={endsAfter.toString()} onValueChange={(val) => setEndsAfter(Number(val))}>
                                                <Select.Trigger className="flex items-center justify-between w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    <Select.Value />
                                                    <ChevronDown className="w-4 h-4 text-gray-500" />
                                                </Select.Trigger>
                                                <Select.Portal>
                                                    <Select.Content className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
                                                        <Select.Viewport>
                                                            {[1, 2, 3, 4, 5, 10, 15, 20, 25, 30].map(num => (
                                                                <Select.Item
                                                                    key={num}
                                                                    value={num.toString()}
                                                                    className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 focus:bg-gray-100 outline-none"
                                                                >
                                                                    <Select.ItemText>{num}</Select.ItemText>
                                                                </Select.Item>
                                                            ))}
                                                        </Select.Viewport>
                                                    </Select.Content>
                                                </Select.Portal>
                                            </Select.Root>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3 ">
                            <Button className="flex-1" variant="outline" size="lg" onClick={() => onOpenChange(false)} >
                                <span className="hidden sm:inline">Cancel</span>
                            </Button>
                            <Button className="flex-1" size="lg" onClick={handleDone}>
                                <span className="hidden sm:inline">Done</span>
                            </Button>
                        </div>
                    </motion.div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default CustomFrequencyDialog;
