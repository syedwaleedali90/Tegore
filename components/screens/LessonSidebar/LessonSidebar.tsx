import React, { useState } from 'react';
import { Check, BarChart3, X } from 'lucide-react';

interface LessonSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LessonSidebar({ isOpen, onClose }: LessonSidebarProps) {
  if (!isOpen) return null;

  const completedItems = [
    "Conceptual understanding in Q1-3, you showed complete understanding of variables",
    "Conceptual understanding in Q1-3, you showed complete understanding of variables",
    "Conceptual understanding in Q1-3, you showed complete understanding of variables"
  ];

  const lackingItems = [
    "Lack of practical understanding in Q4, you were unable to identify the variable.",
    "Lack of practical understanding in Q4, you were unable to identify the variable.",
    "Lack of practical understanding in Q4, you were unable to identify the variable."
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed  inset-0 bg-black-200  z-40"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-[60px] customheightHome  w-[400px] sidebarBg border-l-4 border-black shadow-2xl z-50 overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-6 border-b-4 border-black">
          <h2 className="text-xl font-bold mb-1">Lesson: What is a</h2>
          <h2 className="text-xl font-bold">variable?</h2>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Completed Items */}
          <div className="space-y-4 mb-6">
            {completedItems.map((item, index) => (
              <div key={`completed-${index}`} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 border-2 border-black flex items-center justify-center">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
                <p className="text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>

          {/* Lacking Items */}
          <div className="space-y-4">
            {lackingItems.map((item, index) => (
              <div key={`lacking-${index}`} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gray-300 border-2 border-black flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-gray-600" />
                </div>
                <p className="text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transcript Section */}
        <div className="border-t-4 border-black">
          <div className="p-6">
            <h3 className="text-lg font-bold mb-4">Transcript</h3>

            <div className="space-y-3">
              <p className="text-sm font-semibold">You: Variables are unknown numbers</p>

              <div className="bg-blue-500 text-white p-3 rounded">
                <p className="text-sm font-semibold">
                  Tugore: <span className="font-normal">Variables are placeholders for unknown numbers.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

