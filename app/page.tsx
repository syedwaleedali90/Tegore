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
      <Header />

      {/* Screen 0 */}

      <div className="px-6 pb-6 max-w-7xl mx-auto">


        <motion.section
          className="customeHeight flex items-center justify-center snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <Screen0 />
        </motion.section>
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


        {/* Layout section (scrollable internally) */}


        {/* Testimonial */}
        <motion.section
          className="customeHeight flex items-center justify-center snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <TestimonialSection />
        </motion.section>

        {/* Signup */}
        <motion.section
          className="customeHeight flex items-center justify-center snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <SignupUnitSection />
        </motion.section>

        {/* Pricing */}
        <motion.section
          className="customeHeight flex items-center justify-center snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <PricingSection />
        </motion.section>

        {/* Philosophy (scrolls internally) */}
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


        {/* InClass */}
        <motion.section
          className="customeHeight flex items-center justify-center snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <InClassSection />
        </motion.section>

        {/* LearnWith */}
        <motion.section
          className="customeHeight flex items-center justify-center snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <LearnWith />
        </motion.section>
        <motion.section
          className="customeHeight pb-4 flex items-center justify-center snap-start block md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <MobileAppComing />
        </motion.section>
      </div>
    </div>
  );
}
