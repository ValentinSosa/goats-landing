import { motion } from "framer-motion"

export const GoatFooter = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Goat Solutions. All rights reserved.
          </p>
        </motion.div>
      </footer>
    )
}