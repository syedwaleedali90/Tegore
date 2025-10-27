"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);


  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <header className="flex sticky top-0 bg-[#FFF8F0]/70 backdrop-blur-sm z-[50] items-center justify-between px-4 py-5 md:px-6 md:py-6">
      {/* Left logo */}
      <div className="flex items-center gap-1">
        <Image
          src="/tegore-logo-transparent.png"
          alt="Tegore logo"
          width={44}
          height={44}
          className="object-contain sm:w-[52px] sm:h-[52px] -mt-2"
        />
        <h1 className="text-[28px] sm:text-[36px] font-medium text-orange-600">
          Tegore
        </h1>
      </div>

      {/* Right links */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleLogin()}
          className="hidden md:block font-semibold text-gray-700 hover:underline text-base">
          Log In
        </button>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#0099FF] text-white px-4 py-1.5 sm:px-5 sm:py-2 font-semibold text-sm sm:text-base
            rounded-lg
            shadow-[4px_4px_0_0_#0066CC]
            hover:shadow-[2px_2px_0_0_#0066CC] hover:translate-x-[2px] hover:translate-y-[2px]
            active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
            transition-all duration-150"
          >
            Get Started
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="absolute -right-1 mt-1 w-28 sm:w-32 bg-white shadow-lg border border-gray-200 z-[20]">
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
