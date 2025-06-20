import { Card, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import {
    Cloud,
    Code,
    ServerCog,
    GraduationCap,
    GanttChartSquare,
    LifeBuoy,
} from "lucide-react"

export const Services = () => {
    const services = [
        {
            title: "Cloud Solutions",
            icon: Cloud,
            description: "We design and deploy resilient, cost-effective cloud infrastructure using AWS. From container orchestration and CI/CD pipelines to high-availability systems and observability — we ensure your systems scale reliably and stay efficient under pressure. No guesswork, no waste — just solid cloud engineering.",
            features: ["AWS & Azure", "DevOps automation", "Serverless architecture"],
        },
        {
            title: "Software Development",
            icon: Code,
            description: "We build production-grade applications using modern, proven technologies. Whether it's greenfield or legacy, our engineers prioritize clarity, performance, and extensibility. From backend APIs to polished frontends, we deliver clean, maintainable code your future team will appreciate and build on with confidence.",
            features: ["Full-stack development", "API integration", "Database design"],
        },
        {
            title: "DevOps & Infrastructure",
            icon: ServerCog,
            description: "We streamline your deployment pipeline from code to production. Our DevOps expertise covers automated CI/CD, infrastructure as code, monitoring, and scalable cloud architectures. We eliminate deployment friction and ensure your releases are predictable, fast, and reliable every time.",
            features: ["CI/CD pipelines", "Infrastructure as Code", "Container orchestration"],
        },
        {
            title: "Technical Training & Consulting",
            icon: GraduationCap,
            description: "We transfer knowledge that sticks. Our technical training programs and consulting services help your team master cloud technologies, DevOps practices, and modern development workflows. From workshops to ongoing mentorship — we build internal capability that lasts.",
            features: ["Team workshops", "Best practices consulting", "Technology adoption guidance"],
        },
        {
            title: "Project Planning & Strategy",
            icon: GanttChartSquare,
            description: "We turn technical vision into executable roadmaps. Our project planning services include architecture design, technology selection, timeline estimation, and risk assessment. We help you make informed decisions and avoid costly mistakes before the first line of code is written.",
            features: ["Technical architecture", "Technology roadmaps", "Risk assessment"],
        },
        {
            title: "MSP & Support Services",
            icon: LifeBuoy,
            description: "We provide rapid technical assistance when you need it most. Our managed service and support offerings include troubleshooting, performance optimization, security monitoring, and emergency response. Consider us your extended technical team — always ready, always reliable.",
            features: ["24/7 monitoring", "Rapid incident response", "Performance optimization"],
        },
    ]

    return (
        <section id="services" className="mx-auto grid max-w-6xl items-start gap-6 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
                const Icon = service.icon
                return (
                    <Card key={index} className="relative overflow-hidden text-left">
                        <CardHeader>
                            <div className="flex items-center space-x-4">
                                 <Icon className="h-6 w-6 text-primary" />
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </div>
                            <CardDescription className="text-base">{service.description}</CardDescription>
                        </CardHeader>
                    </Card>
                )
            })}
        </section>
    )
}