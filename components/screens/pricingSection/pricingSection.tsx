"use client";

import { Check } from "lucide-react";

   const learningPoints = [
        "Available 24/7",
        "Less then $2/day",
        "Judgement free zone",
        "Advance at your pace",
        "Endless examples "
    ]

function RightSection() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out">
            <div className="min-w-full px-0 md:px-4">
              <div className="relative bg-white rounded-lg border-4 border-orange-500 shadow-lg overflow-hidden">
                <div className="pt-6 pb-6 px-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Tegore
                  </h2>

                  <div className="space-y-3 mb-3">
                    {learningPoints.map((point, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 transition-colors duration-200">
                    $50/month
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-white py-2 md:py-16">
      <div className="px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-snug sm:leading-tight md:leading-[1.1] lg:leading-[1.05] text-orange-600 text-left">
            Learn for <br className="hidden md:block" /> less than <br /> $2 a
            day
          </h2>

          {/* 👇 CARD appears here only on mobile */}
          <div className="block md:hidden my-6">
            <RightSection />
          </div>

          <p className="text-gray-700 mt-6 mb-4">
            Our mission is to make Tegore accessible to every family — and we’re
            just getting started. We offer a full money-back guarantee anytime
            within the month.
          </p>

          <button className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold sm:px-6 sm:py-3 sm:text-base hover:bg-blue-600 w-fit">
            Sign up for Algebra 1
          </button>
        </div>

        {/* RIGHT SIDE (hidden on mobile) */}
        <div className="px-0 md:px-8 hidden md:block">
          <RightSection />
        </div>
      </div>
    </section>
  );
}
