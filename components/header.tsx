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
    <header className="flex sticky top-0 bg-white z-[11] items-center justify-between px-4 py-5 md:px-6 md:py-6">
      {/* Left logo */}
      <div className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          alt="Tegore logo"
          width={44}
          height={44}
          className="object-contain sm:w-[52px] sm:h-[52px]"
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
            className="bg-[#0099FF] text-white px-4 py-1.5 sm:px-5 sm:py-2 font-semibold hover:bg-[#0088EE] text-sm sm:text-base relative overflow-visible after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-screen after:bg-[#0099FF] after:translate-x-full after:-z-10 hover:after:bg-[#0088EE]"
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
