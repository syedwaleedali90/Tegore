import Header from "@/components/header";
import Layout from "@/components/Layout";
import InClassSection from "@/components/screens/inclass/inclass";
import LearnWith from "@/components/screens/learnWith/learnWith";
import PhilosophySection from "@/components/screens/PhilosophySection";
import PricingSection from "@/components/screens/pricingSection/pricingSection";
import Screen0 from "@/components/screens/screen0";
import SignupUnitSection from "@/components/screens/signupUnit/signupUnitSection";
import TestimonialSection from "@/components/screens/testimonials/TestimonialSection";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="px-6 pb-6 max-w-7xl mx-auto">
        <Screen0 />
        <Layout />
        <TestimonialSection />
        <SignupUnitSection />
        <PricingSection />
        <PhilosophySection />
        <InClassSection />
      </div>
      <div>
        <div
          className={`flex flex-col md:flex-row gap-4 items-center justify-center h-60  py-4 text-center  transition-opacity duration-700  "opacity-100"
            }`}
        >
          <div className="flex-1 text-md border-t border-gray-500 pt-4">
            <p className="text-gray-700 mb-4">“It felt like a dream...like having another teacher in my classroom”</p>
            <p className="font-semibold">Mr. Peter Lu</p>
            <p className=" text-gray-500">Mr. Peter Lu
              Math Teacher at Hilltop High School | Stanford Alum </p>
          </div>

          <img
            src="/boy.svg"
            alt='boy'
            className="w-40 h-40 object-fit"
          />
        </div>
      </div>


      <div className="max-w-7xl mx-auto">
        <LearnWith />
      </div>
    </div>
  );
}
