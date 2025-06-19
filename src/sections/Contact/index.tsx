import { motion } from "framer-motion"
import { TeamSpotlight } from "../../components/ui/TeamSpotlight"

export const Contact = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Valentín Sosa",
            role: "DevOps & Developer",
            content: "Practicante en tecnologías cloud, motivado por aprender y con una gran capacidad de autogestión. En proceso de formación constante, aportando valor resolviendo desafíos técnicos de forma independiente.",
            linkedin: "https://www.linkedin.com/in/valentin-sosa",
            github: "https://github.com/ValentinSosa",
            image: 'Valentin.jpg'
        },
        {
            id: 2,
            name: "Stefano Zino Colanino",
            role: "Cloud Engineer",
            content: "DevOps Engineer con enfoque en seguridad y escalabilidad. Especialista en AWS, Kubernetes y soluciones serverless. Experiencia en desarrollo backend, automatización con Python y scripting en Go para infraestructura como código.",
            linkedin: "https://linkedin.com/in/stefano-ziino-colanino",
            github: "https://github.com/StefanoZiinoC",
            image: 'Stefano.jpg'
        },
    ];

    return (
        <section id='about' className="py-16 bg-white">
            <motion.h2
                className="text-3xl font-bold text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Meet the Team
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
        </section>
    )
}