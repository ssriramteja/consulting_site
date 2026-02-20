"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users2, Target, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Timeline from '@/components/ui/Timeline';
import Values from '@/components/ui/Values';
import FadeIn from '@/components/ui/FadeIn';
import Link from 'next/link';

const team = [
    {
        name: "James Wilson",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
        bio: "20+ years in enterprise IT architecture and strategy."
    },
    {
        name: "Sarah Chen",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        bio: "Former Lead Architect at major cloud services provider."
    },
    {
        name: "Michael Ross",
        role: "VP of Operations",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
        bio: "Expert in global delivery and managed services excellence."
    },
    {
        name: "Elena Rodriguez",
        role: "Head of AI Innovation",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
        bio: "PhD in Data Science with a focus on generative AI for enterprise."
    }
];

export default function AboutPage() {
    return (
        <div className="bg-white pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeIn direction="up">
                            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Pioneering IT Excellence</h1>
                            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                                Since 2008, we've been the trusted partner for Fortune 500 companies, bridging the gap between legacy reliability and future-ready innovation.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeIn direction="left">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Our Mission: <br />
                                <span className="text-secondary">Empowering Digital Giants</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                In a world where technology is the ultimate differentiator, our mission is to provide the architectural backbone and innovative spark that allows businesses to scale infinitely.
                            </p>
                            <div className="space-y-6">
                                <div className="p-8 bg-slate-50 border-l-4 border-secondary rounded-r-2xl">
                                    <p className="text-slate-800 text-lg italic font-medium">
                                        "We believe in staying ahead of the curve, retooling our team constantly to ensure our clients always have the competitive advantage."
                                    </p>
                                    <p className="mt-4 text-slate-500 font-bold">— James Wilson, CEO</p>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn direction="right">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <Values />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Our History" subtitle="Milestones that define us" centered />
                    <Timeline />
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32">
                <div className="container mx-auto px-4 text-center">
                    <SectionHeader title="Meet the Visionaries" subtitle="Decades of collective expertise at your service" centered />
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                        {team.map((member, idx) => (
                            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                                <div className="group relative">
                                    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 shadow-xl">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute inset-x-0 bottom-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-sm font-light opacity-90">{member.bio}</p>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors">{member.name}</h3>
                                    <p className="text-secondary font-medium">{member.role}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-slate-900 text-white text-center rounded-t-[3rem] overflow-hidden relative">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <FadeIn direction="up">
                    <div className="container mx-auto px-4 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12">Looking for a strategic partner?</h2>
                        <Link href="/contact" className="inline-flex items-center px-12 py-5 bg-white text-slate-900 rounded-full font-bold text-xl hover:bg-secondary hover:text-white transition-all shadow-2xl">
                            Join Our Client Roster
                            <ArrowRight className="ml-3 w-6 h-6" />
                        </Link>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
