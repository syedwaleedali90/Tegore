"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex sticky top-0 bg-white z-[11] items-center justify-between px-4 py-3 md:px-6">
      {/* Left logo */}
      <div className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          alt="Tegore logo"
          width={36}
          height={36}
          className="object-contain sm:w-[44px] sm:h-[44px]"
        />
        <h1 className="text-[24px] sm:text-[30px] font-bold text-orange-600">
          Tegore
        </h1>
      </div>

      {/* Right links */}
      <div className="flex items-center gap-4 text-sm">
        <button className="hidden md:block font-semibold text-gray-700 hover:underline">
          Log In
        </button>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-blue-500 text-white px-3 py-2 sm:px-4 sm:py-2 font-semibold  hover:bg-blue-600 text-xs sm:text-sm"
          >
            Get Started
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute -right-1 mt-1 w-28 sm:w-32 bg-white shadow-lg border border-gray-200">
              {["Students", "Parents", "Teachers", "Districts"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-center text-xs sm:text-sm border-b last:border-0 border-gray-200 px-2 py-1 hover:bg-gray-100"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
