import { motion } from "framer-motion";
import { FloatingText } from "../../components/ui/FloatingText";
import { SparklesEffect } from "../../components/ui/SparklesEffect";


export const HeroSection = () => (
     <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-10 bg-cover bg-center" style={{
        backgroundImage: "url('./src/assets/background.png')"
        // backgroundImage: "url('https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0604%2Fr379658_2_1296x729_16%2D9.jpg')"
      }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-white"
        >
          <SparklesEffect id="hero-title">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Welcome to GOAT Solutions 
            </h1>
          </SparklesEffect>

          <FloatingText
            text="Power, simplicity and attitude—just like a real goat."
            className="text-xl mb-6"
            delay={0.5}
          />

          <motion.button
            className="bg-white text-black px-6 py-3 rounded-lg shadow-md transition hover:bg-gray-200 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Optional animated color halo behind */}
        {/* <div className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1.2, 1.1, 1],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear"
            }}
            className="absolute -inset-[10%] opacity-20 bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-600 rounded-full blur-3xl"
          />
        </div> */}
      </section>
)