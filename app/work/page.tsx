"use client";

import { motion } from 'framer-motion';
import { ArrowRight, BarChart, TrendingUp, Cpu, Globe } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import SectionHeader from '@/components/ui/SectionHeader';

const projects = [
    {
        client: "Global Finance Corp",
        title: "Legacy Infrastructure Modernization",
        desc: "Complete overhaul of IBMi systems and migration to a hybrid cloud environment.",
        metric: "300%",
        metricLabel: "Increase in Transaction Speed",
        icon: TrendingUp,
        tags: ["FinTech", "Cloud", "Modernization"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
        client: "Logistics Pro",
        title: "AI-Driven Route Optimization",
        desc: "Implemented machine learning algorithms to optimize last-mile delivery routes.",
        metric: "22%",
        metricLabel: "Reduction in Fuel Costs",
        icon: Cpu,
        tags: ["Logistics", "AI/ML", "Optimization"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        client: "HealthSync Systems",
        title: "Secure Patient Portal & Data Lake",
        desc: "Built a HIPAA-compliant data architecture and patient engagement mobile app.",
        metric: "1.2M",
        metricLabel: "Active Monthly Users",
        icon: Globe,
        tags: ["Healthcare", "Data", "Security"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        client: "RetailHub Global",
        title: "Omnichannel Commerce Platform",
        desc: "Integrated POS, Online, and Warehouse systems into a single source of truth.",
        metric: "45%",
        metricLabel: "Growth in Online Revenue",
        icon: BarChart,
        tags: ["Retail", "E-commerce", "Scaling"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function WorkPage() {
    return (
        <div className="bg-white pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Proven Results</h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
                            We don't just deliver technology; we deliver business outcomes that matter. Explore our portfolio of high-impact projects.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {projects.map((project, idx) => (
                            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                                <div className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                        <div className="absolute top-6 left-6 flex gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-10">
                                        <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">{project.client}</p>
                                        <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-secondary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                            {project.desc}
                                        </p>

                                        {/* Result Card */}
                                        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-6 mb-10">
                                            <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-secondary">
                                                <project.icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <p className="text-4xl font-bold text-slate-900">{project.metric}</p>
                                                <p className="text-slate-500 font-medium">{project.metricLabel}</p>
                                            </div>
                                        </div>

                                        <Link href="/contact" className="inline-flex items-center text-primary-dark font-bold hover:text-secondary transition-colors">
                                            Read Full Case Study <ArrowRight className="ml-2 w-5 h-5 pointer-events-none" />
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-4xl font-bold mb-8">Have a similar challenge?</h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Let's discuss how we can apply our expertise to your specific business needs and drive measurable results.
                        </p>
                        <Link href="/contact" className="px-12 py-5 bg-secondary text-white rounded-full font-bold text-xl hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-secondary/20">
                            Book a Consultation
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
