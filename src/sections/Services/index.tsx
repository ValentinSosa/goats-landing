import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

export const Services = () => {
    const services = [
        {
            title: "Cloud Solutions",
            description: "We design and deploy resilient, cost-effective cloud infrastructure using AWS. From container orchestration and CI/CD pipelines to high-availability systems and observability — we ensure your systems scale reliably and stay efficient under pressure. No guesswork, no waste — just solid cloud engineering.",
            features: ["AWS & Azure", "DevOps automation", "Serverless architecture"],
        },
        {
            title: "Software Development",
            description: "We build production-grade applications using modern, proven technologies. Whether it’s greenfield or legacy, our engineers prioritize clarity, performance, and extensibility. From backend APIs to polished frontends, we deliver clean, maintainable code your future team will appreciate and build on with confidence.",
            features: ["Full-stack development", "API integration", "Database design"],
        },
        // {
        //     title: "AI Engineering",
        //     description:
        //         "We integrate machine learning where it actually delivers ROI. From custom LLM integrations and NLP pipelines to data engineering and model deployment — we focus on solutions that work in production. No hype, just useful AI that moves the needle.",
        //     features: ["Monitoring & alerts", "Bug fixes", "Performance optimization", "Dedicated support team"],
        // },
    ]
    return (
        <section id="services" className="mx-auto grid max-w-6xl items-start gap-6 py-8 grid-cols-1 md:grid-cols-2">
                {services.map((service, index) => {
                    return (
                        <Card key={index} className={`relative overflow-hidden ${index === 2 ? "md:col-span-2" : ""} text-left`}>
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </div>
                                <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardHeader>
                            {/* <CardContent>
                                <ul className="space-y-2">
                                    {service.features.map((featureIndex) => (
                                        <li key={featureIndex} className="flex items-center space-x-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent> */}
                        </Card>
                    )
                })}
        </section>
    )
}