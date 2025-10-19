"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex sticky top-0 bg-white z-[11] items-center justify-between px-6 py-3">
      {/* Left logo */}
      <div className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          alt="Tegore logo"
          width={44}
          height={44}
          className="object-contain"
        />
        <h1 className="text-[30px] font-bold text-orange-600">Tegore</h1>
      </div>

      {/* Right links */}
      <div className="flex items-center gap-6 text-sm">
        <button className="hidden md:block font-semibold text-gray-700 hover:underline">
          Log In
        </button>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-blue-500 text-white px-4 py-2 font-semibold hover:bg-blue-600"
          >
            Get Started
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute -right-1 mt-1 w-30 bg-white ">
              {["Students", "Parents", "Teachers", "Districts"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block border m-1 font-semiold border-gray-700  px-2 py-1 text-gray-700 hover:bg-gray-100"
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
