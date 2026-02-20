"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import ServiceCard from '@/components/ui/ServiceCard';
import { Database, Cloud, Shield, Layout, Server, Settings } from 'lucide-react';

const solutions = [
    {
        title: "System Integration",
        desc: "Seamlessly connecting disparate systems to ensure data flow and operational efficiency across your enterprise.",
        icon: Database,
        href: "/contact"
    },
    {
        title: "Cloud Migration",
        desc: "Expert strategies for moving your on-premise infrastructure to Azure, AWS, or Google Cloud.",
        icon: Cloud,
        href: "/contact"
    },
    {
        title: "Cybersecurity",
        desc: "Comprehensive security audits, threat monitoring, and compliance solutions to protect your assets.",
        icon: Shield,
        href: "/contact"
    },
    {
        title: "Legacy Modernization",
        desc: "Transforming outdated software into modern, web-based applications without losing critical data.",
        icon: Server,
        href: "/contact"
    },
    {
        title: "UI/UX Design",
        desc: "Creating intuitive and engaging user experiences that drive customer satisfaction and retention.",
        icon: Layout,
        href: "/contact"
    },
    {
        title: "DevOps Automation",
        desc: "Streamlining your development lifecycle with CI/CD pipelines and infrastructure as code.",
        icon: Settings,
        href: "/contact"
    }
];

export default function SolutionsPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-primary-dark py-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        End-to-end technology solutions designed to solve your most complex business challenges.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-3xl font-bold text-primary-dark mb-6">Innovative Strategies for Growth</h2>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Innovative IT Solutions Inc. is a global provider of IT services and end-to-end solutions designed
                        to help clients improve their competitiveness and efficiency. Our portfolio includes system integration,
                        custom application development, and IT consulting. We are committed to producing the highest quality
                        results in a cost-efficient and expedient manner.
                    </p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-24 bg-surface relative">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Explore Our Capabilities" centered />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((item, idx) => (
                            <ServiceCard key={idx} title={item.title} description={item.desc} icon={item.icon} href={item.href} delay={idx * 0.1} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
