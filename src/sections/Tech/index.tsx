import { motion } from "framer-motion"

export const Tech = () => {
  return (
    <section id='tech' className="py-12 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Our Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {/* Tarjeta 1 - React */}
        <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
            className="h-16 mx-auto mb-4"
          />
          <p className="mt-2 text-gray-600">Librería de JavaScript para construir interfaces de usuario modernas y dinámicas.</p>
        </div>

        {/* Tarjeta 2 - Tailwind */}
        <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="Tailwind CSS"
            className="h-16 mx-auto mb-4"
          />
          <p className="mt-2 text-gray-600">Framework de CSS con clases utilitarias para construir rápidamente diseños elegantes.</p>
        </div>

        {/* Tarjeta 3 - Vercel */}
        <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg"
            alt="Vercel"
            className="h-16 mx-auto mb-4"
          />
          <p className="mt-2 text-gray-600">Plataforma para desplegar sitios web frontend de forma rápida, fácil y gratuita.</p>
        </div>

        {/* Tarjeta 4 - AWS */}
        <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="AWS"
            className="h-16 mx-auto mb-4"
          />
          <p className="mt-2 text-gray-600">
            Plataforma líder de servicios en la nube con soluciones escalables para empresas de todos los tamaños.
          </p>
        </div>

        {/* Tarjeta 5 - Terraform */}
        <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg"
            alt="Terraform"
            className="h-16 mx-auto mb-4"
          />
          <p className="mt-2 text-gray-600">
            Herramienta de infraestructura como código para automatizar el aprovisionamiento de recursos en la nube.
          </p>
        </div>

        {/* Tarjeta 6 - Kubernetes */}
        <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg"
            alt="Kubernetes"
            className="h-16 mx-auto mb-4"
          />
          <p className="mt-2 text-gray-600">
            Sistema de orquestación de contenedores para desplegar, escalar y administrar aplicaciones modernas.
          </p>
        </div>

        {/* Tarjeta 7 - MongoDB Atlas */}
        <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-50">
          <img
            src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
            alt="MongoDB Atlas"
            className="h-16 mx-auto mb-4"
          />
          <p className="mt-2 text-gray-600">
            Base de datos NoSQL como servicio, ideal para aplicaciones escalables y en tiempo real.
          </p>
        </div>

        {/* Tarjeta 8 - ArgoCD */}
        <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-50">
          <img
            src="https://argo-cd.readthedocs.io/en/stable/assets/logo.png"
            alt="ArgoCD"
            className="h-16 mx-auto mb-4"
          />
          <p className="mt-2 text-gray-600">
            Herramienta de entrega continua declarativa basada en Git para Kubernetes, ideal para GitOps.
          </p>
        </div>

        {/* Tarjeta 9 - Grafana */}
        <div className="bg-white rounded-2xl p-6 text-center h-full shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-50">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg"
            alt="Grafana"
            className="h-16 mx-auto mb-4"
          />
          <p className="mt-2 text-gray-600">
            Plataforma de visualización y monitoreo de métricas, compatible con Prometheus, Loki y más.
          </p>
        </div>


      </div>
    </section>
  )
}