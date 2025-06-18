import { motion } from "framer-motion"

export const Stories = () => {
    return (
        <section id='stories' className="bg-gray-100 py-16 px-8 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Work
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg max-w-sm mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Migrations to the Cloud</h3>
            <p className="text-gray-700 text-sm">
              Nuestras migraciones incluyen configuración de infraestructura como código, 
              monitoreo avanzado y alta disponibilidad. Además de garantizar la seguridad, nos ocupamos de trasladar el conocimiento y formar al cliente.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg max-w-sm mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">NewsPaper AI App</h3>
            <p className="text-gray-700 text-sm">
              Desarrollamos una aplicación completa basada en IA que resume noticias automáticamente usando GPT-4. 
              La app está desplegada en AWS con arquitectura serverless, maneja miles de usuarios diarios y 
              procesa contenido en tiempo real de forma eficiente.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg max-w-sm mx-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Fast Development of MVPs</h3>
            <p className="text-gray-700 text-sm">
              Especializados en crear aplicaciones funcionales y atractivas en tiempo récord. 
              Desde landing pages hasta aplicaciones web completas, entregamos soluciones que permiten 
              a nuestros clientes validar ideas rápidamente y captar sus primeros usuarios.
            </p>
          </motion.div>
        </div>
      </section>
    )
}