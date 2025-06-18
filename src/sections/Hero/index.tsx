import { motion } from "framer-motion";
import { FloatingText } from "../../components/ui/FloatingText";
// import { SparklesEffect } from "../../components/ui/SparklesEffect";
import { NavbarButton } from "../../components/ui/resizable-navbar";
import { FlipWords } from "../../components/ui/flip-words";

const words = [
  'Solutions',
  'Services',
  'Products',
]

export const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-10 bg-cover bg-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="z-10 text-white flex flex-col items-center justify-center space-y-4"
    >

      <span className="inline-flex items-center rounded-xl bg-gray-100 px-3 py-1 text-[10px] sm:text-xs font-small text-gray-600">
        POWER AND ATTITUDE, JUST LIKE A REAL GOAT
      </span>

      {/* <SparklesEffect id="hero-title"> */}
        <div className="text-5xl font-bold dark:text-goatText">
          GOAT
          <FlipWords words={words} className="dark:text-goatText" />
        </div>
      {/* </SparklesEffect> */}


      <FloatingText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        className="text-md text-goatText break-words max-w-lg mx-auto"
        delay={0.5}
      />

      <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0 mt-6">
        <NavbarButton
          variant="primary"
        >
          Book a call
        </NavbarButton>
        <NavbarButton
          variant="secondary"
        >
          Power Up
        </NavbarButton>
      </div>

    </motion.div>
  </section>
)