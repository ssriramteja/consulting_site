"use client";

import { motion } from 'framer-motion';
import { Cloud, Shield, Code, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeIn from '@/components/ui/FadeIn';

const services = [
    {
        id: "cloud",
        title: "Cloud Migration & Infrastructure",
        icon: Cloud,
        description: "Scale your business with secure, high-performance cloud solutions tailored to your enterprise needs.",
        features: ["Multi-cloud Strategy", "Cloud Native Development", "Infrastructure as Code", "Cost Optimization"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        color: "blue"
    },
    {
        id: "cyber",
        title: "Cybersecurity & Compliance",
        icon: Shield,
        description: "Protect your digital assets with enterprise-grade security and proactive threat monitoring.",
        features: ["Zero Trust Security", "Threat Intelligence", "Compliance Auditing", "Managed Detection & Response"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        color: "slate"
    },
    {
        id: "dev",
        title: "Software Development",
        icon: Code,
        description: "Custom-built, scalable applications designed to solve complex business challenges and drive growth.",
        features: ["Enterprise Architecture", "Mobile & Web Apps", "API Integration", "Modernization of Legacy Systems"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        color: "secondary"
    },
    {
        id: "ai",
        title: "AI & ML Consulting",
        icon: Brain,
        description: "Leverage data-driven insights and artificial intelligence to automate processes and unlock new opportunities.",
        features: ["Predictive Analytics", "Generative AI Solutions", "Machine Learning Ops", "Natural Language Processing"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        color: "purple"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Our Expertise</h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light">
                            Comprehensive IT services designed to scale your business and secure your future in the digital age.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Services Detail List */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="space-y-32">
                        {services.map((service, idx) => (
                            <div key={service.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                                <div className="flex-1 space-y-8">
                                    <FadeIn direction={idx % 2 === 0 ? 'left' : 'right'}>
                                        <div className="flex items-center gap-4 mb-6 text-secondary">
                                            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                                                <service.icon className="w-6 h-6" />
                                            </div>
                                            <span className="font-bold tracking-widest uppercase text-sm">Service 0{idx + 1}</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                                            {service.title}
                                        </h2>
                                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                                            {service.description}
                                        </p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                            {service.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                                                    <span className="text-slate-700 font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-10">
                                            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-full font-bold transition-all hover:bg-secondary hover:shadow-xl group">
                                                Enquire Now
                                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </FadeIn>
                                </div>
                                <div className="flex-1 w-full">
                                    <FadeIn direction={idx % 2 === 0 ? 'right' : 'left'}>
                                        <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to transform your infrastructure?</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
                            Our team of experts is ready to help you navigate the complexities of modern IT.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact?type=quote" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:shadow-lg transition-all">
                                Get a Free Quote
                            </Link>
                            <Link href="/contact?type=call" className="px-10 py-5 bg-secondary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-secondary/20">
                                Book a Strategy Call
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
