"use client";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import InClassSection from "@/components/screens/inclass/inclass";
import LearnWith from "@/components/screens/learnWith/learnWith";
import MobileAppComing from "@/components/screens/mobileAppComing/mobileAppComing";
import PhilosophySection from "@/components/screens/PhilosophySection";
import PricingSection from "@/components/screens/pricingSection/pricingSection";
import Screen0 from "@/components/screens/screen0";
import SignupUnitSection from "@/components/screens/signupUnit/signupUnitSection";
import TestimonialSection from "@/components/screens/testimonials/TestimonialSection";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white">
      <div className="snap-start">
        <Header />
      </div>

      {/* Screen 0 */}

      <div className="px-6 pb-6">

        <div className="max-w-7xl mx-auto">

          <motion.section
            className="min-h-screen flex items-start justify-center pt-8 md:pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <Screen0 />
          </motion.section>
        </div>
        <div className="max-w-7xl mx-auto">

          {[1, 2, 3, 4].map((id) => (
            <motion.section
              key={id}
              className="customeHeight hidden sm:flex flex items-center justify-center snap-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: false, amount: 0.6 }}
            >
              <Layout id={id} />
            </motion.section>
          ))}
        </div>


        {/* Layout section (scrollable internally) */}


        {/* Testimonial */}
        <div className="max-w-7xl mx-auto">

          <motion.section
            className="customeHeight flex items-center justify-center snap-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <TestimonialSection />
          </motion.section>
        </div>

        {/* Signup */}
        <div className="max-w-7xl mx-auto">

          <motion.section
            className="customeHeight flex items-center justify-center snap-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <SignupUnitSection />
          </motion.section>
        </div>

        {/* Pricing */}
        <div className="max-w-7xl mx-auto">

          <motion.section
            className="customeHeight flex items-center justify-center snap-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <PricingSection />
          </motion.section>
        </div>

        {/* Philosophy (scrolls internally) */}
        <div className="max-w-7xl mx-auto">

          {[1, 2, 3].map((id) => (
            <motion.section
              key={id}
              className="customeHeight flex items-center justify-center snap-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: false, amount: 0.6 }}
            >
              <PhilosophySection id={id} />
            </motion.section>
          ))}
        </div>


        {/* InClass */}
        <div className="">

          <motion.section
            className="min-h-screen flex items-center justify-center snap-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <InClassSection />
          </motion.section>
        </div>

        {/* LearnWith */}
        <div className="max-w-7xl mx-auto">

          <motion.section
            className="customeHeight flex items-center justify-center snap-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <LearnWith />
          </motion.section>
        </div>
        <div className="max-w-7xl mx-auto">

          <motion.section
            className="customeHeight pb-4 flex items-center justify-center snap-start block md:hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <MobileAppComing />
          </motion.section>
        </div>
      </div>
    </div>
  );
}
