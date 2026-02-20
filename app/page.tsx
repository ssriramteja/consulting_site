"use client";

import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Stats from '@/components/ui/Stats';
import Testimonials from '@/components/ui/Testimonials';
import ServicePillars from '@/components/ui/ServicePillars';
import TechBand from '@/components/ui/TechBand';
import IndustriesMarquee from '@/components/ui/IndustriesMarquee';
import SectionHeader from '@/components/ui/SectionHeader';
import FadeIn from '@/components/ui/FadeIn';

export default function Home() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
                {/* Immersive Background */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 opacity-30">
                    <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
                </motion.div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>

                <div className="container relative z-10 px-4 pt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-secondary font-medium tracking-[0.2em] uppercase mb-6 text-sm md:text-base">
                            The Future of Enterprise IT
                        </h2>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-none"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Architecting<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Digital Excellence</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        We deliver high-impact technology consulting, from modernization to AI-driven transformation, empowering global leaders to outpace the competition.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Link
                            href="/contact?type=quote"
                            className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg overflow-hidden transition-all hover:px-10"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors">Get a Quote</span>
                            <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                        </Link>
                        <Link
                            href="/contact?type=call"
                            className="group relative px-8 py-4 bg-slate-800 text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:bg-slate-700 border border-white/10"
                        >
                            <span>Book a Call</span>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <ChevronDown className="h-6 w-6" />
                </motion.div>
            </section>

            {/* Service Pillars */}
            <section className="py-32 bg-slate-50 relative z-10 rounded-t-[3rem] -mt-20 shadow-[0_-20px_60px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up">
                        <SectionHeader title="Our Expertise" subtitle="Comprehensive solutions for the digital age" centered />
                    </FadeIn>
                    <ServicePillars />
                </div>
            </section>

            {/* Tech Band */}
            <TechBand />

            {/* Industries Marquee (New) */}
            <IndustriesMarquee />

            {/* Featured Work / Case Study Highlight */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeIn direction="right">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                                Digital Transformation <br />
                                <span className="text-secondary">At Scale</span>
                            </h2>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                We worked with a Fortune 500 banking giant to modernize their legacy IBMi infrastructure, resulting in a 300% increase in transaction speed.
                            </p>
                            <div className="flex gap-4 mb-10">
                                <div className="px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold text-slate-700">FinTech</div>
                                <div className="px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold text-slate-700">Cloud Migration</div>
                                <div className="px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold text-slate-700">System Architecture</div>
                            </div>
                            <Link href="/services" className="inline-flex items-center text-lg font-bold text-primary-dark border-b-2 border-secondary pb-1 hover:text-secondary transition-colors">
                                View Case Study <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </FadeIn>

                        <motion.div
                            style={{ y: y2 }}
                            className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center hover:scale-105 transition-transform duration-1000"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats & Trust */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5"></div>
                {/* Subtle gradient glow */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-5 gap-16 items-start">
                        {/* Left Side: Header & Stats */}
                        <div className="lg:col-span-2 space-y-12">
                            <FadeIn direction="left">
                                <div className="space-y-4">
                                    <div className="w-16 h-1 bg-secondary rounded-full mb-6"></div>
                                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">Trusted by Industry Leaders</h2>
                                    <p className="text-xl text-slate-400">Delivering impact where it matters most</p>
                                </div>
                                <div className="grid grid-cols-2 gap-6 mt-12">
                                    <div className="bg-slate-800/30 border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
                                        <div className="text-5xl font-bold text-secondary mb-2">98%</div>
                                        <div className="text-slate-400 font-medium">Client Retention Rate</div>
                                    </div>
                                    <div className="bg-slate-800/30 border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
                                        <div className="text-5xl font-bold text-secondary mb-2">15+</div>
                                        <div className="text-slate-400 font-medium">Years of Innovation</div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right Side: Logo Grid */}
                        <FadeIn direction="right" className="lg:col-span-3">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "Cognizant", "Infosys", "J&J",
                                    "DISYS", "Microsoft", "AWS",
                                    "Oracle", "IBM", "Salesforce",
                                    "Google Cloud", "SAP", "Cisco",
                                    "Deloitte", "Accenture", "Capgemini"
                                ].map((company) => (
                                    <div key={company} className="h-24 bg-slate-800/40 border border-white/5 rounded-xl flex items-center justify-center font-bold text-lg hover:bg-slate-700/50 hover:border-white/10 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300 cursor-default text-slate-300 hover:text-white group">
                                        <span className="group-hover:scale-110 transition-transform duration-300">{company}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-surface">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up">
                        <SectionHeader title="Client Voices" centered />
                        <Testimonials />
                    </FadeIn>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-white text-center">
                <FadeIn direction="up" className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
                        Ready to make <br /> <span className="text-secondary">history?</span>
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-5 bg-primary-dark text-white rounded-full font-bold text-xl hover:bg-primary transition-colors hover:shadow-2xl hover:-translate-y-1 transform duration-300"
                    >
                        Let's Talk
                    </Link>
                </FadeIn>
            </section>
        </div>
    );
}
