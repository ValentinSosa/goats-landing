import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"

export const Services = () => {
    const services = [
        {
            title: "Custom Development",
            description: "Tailored software solutions built to meet your specific business requirements and goals.",
            features: ["Full-stack development", "API integration", "Database design"],
        },
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure and migration services for modern businesses.",
            features: ["AWS & Azure", "DevOps automation", "Serverless architecture"],
        },
        {
            title: "24/7 Support & Maintenance",
            description:
                "Round-the-clock technical support, monitoring, and maintenance for your applications with dedicated team assistance.",
            features: ["Monitoring & alerts", "Bug fixes", "Performance optimization", "Dedicated support team"],
        },
    ]
    return (
        <section id="services" className="mx-auto grid max-w-6xl items-start gap-6 py-8 grid-cols-1 md:grid-cols-2">
            {/* <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 grid-cols-1 md:grid-cols-2"> */}
                {services.map((service, index) => {
                    return (
                        <Card key={index} className={`relative overflow-hidden ${index === 2 ? "md:col-span-2" : ""}`}>
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </div>
                                <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center space-x-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )
                })}
            {/* </div> */}
        </section>
    )
}