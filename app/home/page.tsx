"use client";
import Headerlogin from "@/components/headerlogin";
import HomeSection from "@/components/screens/homesection/homesection";
import { useState } from "react";


export default function Home() {
  return (
    <main className="min-h-screen ">
      <Headerlogin />
      <HomeSection />
    </main>
  );
}
