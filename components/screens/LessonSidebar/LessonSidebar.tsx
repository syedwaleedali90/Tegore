import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

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
      <div
        className="fixed  inset-0 bg-black-200  z-40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-[60px] h-[calc(100vh-60px)]  w-[350px] sidebarBg border-l-4 border-black shadow-2xl z-50 overflow-y-auto">
        <div className='h-full overflow-y-auto'>
       

          <div className="p-6 border-b-4 border-black flex items-start justify-between">
            <h2 className="text-xl font-bold mb-1">Lesson: <span className='font-light'> What is a variables?</span></h2>
            {/* <button
              onClick={onClose}
              className=" text-black "
            >
              <X />
            </button> */}
          </div>

          <div className="">
            <div className="space-y-4 mb-6 bg-select py-6">
              {completedItems.map((item, index) => (
                <div key={`completed-${index}`} className="flex gap-3 px-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 border-2 border-black flex items-center justify-center">
                    <Image
                      src="/checked.svg"
                      alt="Tegore mascot"
                      width={50}
                      height={50}
                      priority
                    />
                  </div>
                  <p className="text-sm changeFontRail leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pb-6">
              {lackingItems.map((item, index) => (
                <div key={`lacking-${index}`} className="flex gap-3 px-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-gray-300 border-2 border-black flex items-center justify-center">
                    <Image
                      src="/dash.svg"
                      alt="Tegore mascot"
                      width={50}
                      height={50}
                      priority
                    />
                  </div>
                  <p className="text-sm changeFontRail leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t-4 border-black">
            <div className="p-6">
              <h3 className="text-lg font-bold mb-4">Transcript</h3>

              <div className="space-y-3">
                <p className="text-sm bg-white w-70  p-3  font-semibold changeFontRail">You: Variables are unknown numbers</p>

                <p className="text-sm bg-blue-500 w-70 ml-auto mr-0 text-white p-3  font-semibold changeFontRail">
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

