import Header from "@/components/header";
import Layout from "@/components/Layout";
import PhilosophySection from "@/components/screens/PhilosophySection";
import PricingSection from "@/components/screens/pricingSection/pricingSection";
import Screen0 from "@/components/screens/screen0";
import Screen1 from "@/components/screens/Screen1";
import Screen2 from "@/components/screens/Screen2";
import Screen3 from "@/components/screens/Screen3";
import Screen4 from "@/components/screens/Screen4";
import SignupUnitSection from "@/components/screens/signupUnit/signupUnitSection";
import TestimonialSection from "@/components/screens/testimonials/TestimonialSection";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="px-6 pb-6 max-w-7xl mx-auto">
        <Screen0 />
        <Layout>
          <Screen1 />
          <Screen2 />
          <Screen3 />
          <Screen4 />
        </Layout>
        <TestimonialSection />
        <SignupUnitSection />
        <PricingSection />
        <PhilosophySection />
      </div>
    </div>
  );
}
