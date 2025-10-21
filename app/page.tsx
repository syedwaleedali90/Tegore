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
        <div className="flex items-center justify-center customeHeight">
          <Screen0 />
        </div>
        <Layout />
        <div className="flex items-center justify-center customeHeight">
          <TestimonialSection />
        </div>
        <div className="flex items-center justify-center customeHeight">
          <SignupUnitSection />
        </div>
        <div className="flex items-center justify-center customeHeight">
          <PricingSection />
        </div>
        <PhilosophySection />
        <div className="flex items-center justify-center customeHeight">
          <InClassSection />
        </div>
      </div>
    


      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center customeHeight">
          <LearnWith />
        </div>
      </div>
    </div>
  );
}
