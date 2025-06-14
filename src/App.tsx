import './App.css';
import Valentin from './assets/Valentin.jpg';
import Stefano from './assets/Stefano.jpg';
import Roco from './assets/Roco.jpg';
import { motion } from 'framer-motion';
import { GlowingCard } from './components/ui/GlowingCard';
import { BackgroundGradient } from './components/ui/BackgroundGradient';
import { TeamSpotlight } from './components/ui/TeamSpotlight';
import { HeroSection } from './sections/Hero';
import { GoatNavbar } from './components/GoatNavbar';

function App() {
  const teamMembers = [
    {
      id: 1,
      name: "Valentín Sosa",
      role: "DevOps & Developer",
      content: "Practicante en tecnologías cloud, motivado por aprender y con una gran capacidad de autogestión. En proceso de formación constante, aportando valor resolviendo desafíos técnicos de forma independiente.",
      linkedin: "https://www.linkedin.com/in/valentin-sosa",
      github: "https://github.com/ValentinSosa",
      image: Valentin
    },
    {
      id: 2,
      name: "Stefano Zino Colanino",
      role: "CTO - Cloud Engineer",
      content: "DevOps Engineer con enfoque en seguridad y escalabilidad. Especialista en AWS, Kubernetes y soluciones serverless. Experiencia en desarrollo backend, automatización con Python y scripting en Go para infraestructura como código.",
      linkedin: "https://linkedin.com/in/stefano-ziino-colanino",
      github: "https://github.com/StefanoZiinoC/StefanoZiinoC",
      image: Stefano
    },
    {
      id: 3,
      name: "Roco Sittoni",
      role: "Software Engineer - IA specialist",
      content: "Ingeniero en software con foco en inteligencia artificial, machine learning y ciencia de datos. Fuerte dominio de soluciones cloud y arquitecturas serverless. Apasionado por aplicar IA en proyectos reales.",
      linkedin: "https://www.linkedin.com/in/roco-sittoni-a353141b2",
      github: "https://github.com/rocoSittoni/rocoSittoni",
      image: Roco
    }
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <GoatNavbar />
      <HeroSection />
      <section id='aboutus' className="bg-white text-center">
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Sobre Nosotros
        </motion.h2>
        <GlowingCard className="max-w-3xl mx-auto bg-blue-50 mb-10">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Nuestras Capacidades Profesionales</h3>
          <p className="text-lg">
            Somos un equipo profesional formado en <span className="font-medium">AWS, Terraform, Kubernetes, Docker y desarrollo de scripts en Python</span>.
            Tenemos la capacidad de resolver problemas tecnológicos integrales, desde el software hasta la infraestructura,
            ofreciendo soluciones completas y eficientes para sus necesidades tecnológicas.
          </p>
        </GlowingCard>
      </section>
      {/* Success stories */}
      <section id='success' className="bg-gray-100 py-16 px-8 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Casos de Éxito
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
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Migración a la Cloud de AWS</h3>
            <p className="text-gray-700 text-sm">
              Ayudamos a una startup a migrar su stack completo desde Heroku a AWS, optimizando costos,
              escalabilidad y disponibilidad. Ahora operan con una infraestructura robusta y segura en la nube.
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
              Desarrollamos una aplicación basada en IA que resume noticias automáticamente.
              Actualmente está desplegada en AWS, funciona productivamente y recibe usuarios activos diariamente.
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
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Landing Page para Startup</h3>
            <p className="text-gray-700 text-sm">
              Creamos una landing page moderna y responsive para una empresa de tres personas, que les permitió
              presentar su proyecto profesionalmente y captar sus primeros clientes.
            </p>
          </motion.div>
        </div>
      </section>
      <section id='tech' className="py-12 bg-gray-100">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tecnologías utilizadas
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          {/* Tarjeta 1 - React */}
          <BackgroundGradient containerClassName="h-full">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center h-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
                className="h-16 mx-auto mb-4"
              />
              <p className="mt-2 text-gray-600">Librería de JavaScript para construir interfaces de usuario modernas y dinámicas.</p>
            </div>
          </BackgroundGradient>

          {/* Tarjeta 2 - Tailwind */}
          <BackgroundGradient containerClassName="h-full">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center h-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                alt="Tailwind CSS"
                className="h-16 mx-auto mb-4"
              />
              <p className="mt-2 text-gray-600">Framework de CSS con clases utilitarias para construir rápidamente diseños elegantes.</p>
            </div>
          </BackgroundGradient>

          {/* Tarjeta 3 - Vercel */}
          <BackgroundGradient containerClassName="h-full">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center h-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg"
                alt="Vercel"
                className="h-16 mx-auto mb-4"
              />
              <p className="mt-2 text-gray-600">Plataforma para desplegar sitios web frontend de forma rápida, fácil y gratuita.</p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="h-full">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center h-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                alt="AWS"
                className="h-16 mx-auto mb-4"
              />
              <p className="mt-2 text-gray-600">
                Plataforma líder de servicios en la nube con soluciones escalables para empresas de todos los tamaños.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="h-full">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center h-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg"
                alt="Terraform"
                className="h-16 mx-auto mb-4"
              />
              <p className="mt-2 text-gray-600">
                Herramienta de infraestructura como código para automatizar el aprovisionamiento de recursos en la nube.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="h-full">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center h-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg"
                alt="Kubernetes"
                className="h-16 mx-auto mb-4"
              />
              <p className="mt-2 text-gray-600">
                Sistema de orquestación de contenedores para desplegar, escalar y administrar aplicaciones modernas.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="h-full">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center h-full">
              <img
                src="https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png"
                alt="MongoDB Atlas"
                className="h-16 mx-auto mb-4"
              />
              <p className="mt-2 text-gray-600">
                Base de datos NoSQL como servicio, ideal para aplicaciones escalables y en tiempo real.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="h-full">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center h-full">
              <img
                src="https://argo-cd.readthedocs.io/en/stable/assets/logo.png"
                alt="ArgoCD"
                className="h-16 mx-auto mb-4"
              />
              <p className="mt-2 text-gray-600">
                Herramienta de entrega continua declarativa basada en Git para Kubernetes, ideal para GitOps.
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient containerClassName="h-full">
            <div className="bg-white shadow-xl rounded-2xl p-6 text-center h-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg"
                alt="Grafana"
                className="h-16 mx-auto mb-4"
              />
              <p className="mt-2 text-gray-600">
                Plataforma de visualización y monitoreo de métricas, compatible con Prometheus, Loki y más.
              </p>
            </div>
          </BackgroundGradient>
        </div>
      </section>
      <section id='contact' className="py-16 bg-white">

        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Cuerpo Técnico
        </motion.h2>

        <TeamSpotlight members={teamMembers.map(member => ({
          id: member.id,
          name: member.name,
          role: member.role,
          image: member.image,
          bio: member.content,
          linkedin: member.linkedin,
          github: member.github,
        }))} />
        {/* <AnimatedCards items={teamMembers} />  VIEJA VERSION*/}
      </section>
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
    </div>
  );
}

export default App;