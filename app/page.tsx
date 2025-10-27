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
import Image from "next/image";

export default function Page() {
  return (
    <div className="h-screen w-full overflow-y-scroll overflow-x-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FFFAF5] to-white">
      <Header />

      {/* Banner */}
      <div className="w-full relative overflow-hidden z-[1]" style={{ height: '45px' }}>
        <Image
          src="/banner-long.svg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <motion.div
            className="text-white font-bold text-base whitespace-nowrap flex gap-32"
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span>TURN ON SOUND!</span>
            <span>Algebra I & II content OUT NOW</span>
            <span>TURN ON SOUND!</span>
            <span>Algebra I & II content OUT NOW</span>
            <span>TURN ON SOUND!</span>
            <span>Algebra I & II content OUT NOW</span>
            <span>TURN ON SOUND!</span>
            <span>Algebra I & II content OUT NOW</span>
          </motion.div>
        </div>
      </div>

      {/* Screen 0 */}

      <div className="px-6 pb-6 relative">
        {/* Floating geometric shapes - full width */}
        <motion.div
          className="fixed top-[20%] left-[5%] text-orange-300 text-6xl font-light opacity-40 z-0 pointer-events-none"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          +
        </motion.div>
        <motion.div
          className="fixed top-[30%] right-[5%] text-blue-300 text-5xl font-light opacity-35 z-0 pointer-events-none"
          animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          ×
        </motion.div>
        <motion.div
          className="fixed bottom-[15%] left-[10%] text-orange-300 text-7xl font-light opacity-40 z-0 pointer-events-none"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          π
        </motion.div>
        <motion.div
          className="fixed top-[50%] right-[8%] text-blue-300 text-5xl font-light opacity-35 z-0 pointer-events-none"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          ÷
        </motion.div>
        <motion.div
          className="fixed top-[45%] left-[15%] w-14 h-14 border-3 border-orange-300 opacity-25 rounded-full z-0 pointer-events-none"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="fixed bottom-[25%] right-[18%] w-10 h-10 border-3 border-blue-300 opacity-30 z-0 pointer-events-none"
          animate={{ rotate: [0, 90, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

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
