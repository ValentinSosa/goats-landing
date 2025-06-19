// import { motion } from "framer-motion"
import AnimatedBeamDemo from "../../components/AnimatedBeams"

export const Tech = () => {
  return (
    <section id='tech' className="mx-auto max-w-6xl items-center justify-center gap-6 py-12 px-4 md:px-8 text-center">
      {/* <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Tech Stack
      </motion.h2> */}

      <AnimatedBeamDemo />
    </section>
  )
}