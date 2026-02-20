"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import TechStack from '@/components/ui/TechStack';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function SoftwarePage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-primary-dark py-20 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Software Development</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Building scalable, secure, and high-performance applications for the modern enterprise.
                    </p>
                </div>
            </section>

            <TechStack />

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SectionHeader title="Custom Solutions" />
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Innovative IT Solutions is providing a wide range of services to all type of industries.
                                Our Software Development includes functional and technical solutions with a goal to provide
                                our clients quality services in order to assist them to implement cost effective software
                                solutions that will improve their business productivity.
                            </p>
                            <ul className="space-y-4">
                                {['Web Application Development', 'Mobile App Development', 'Enterprise Software', 'API Integration', 'Cloud Native Solutions'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <Check className="h-4 w-4" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                                    <h4 className="font-bold text-xl mb-2">Agile Methodology</h4>
                                    <p className="text-sm text-slate-200">
                                        We follow agile best practices to ensure rapid delivery, adaptability to change, and continuous improvement throughout the development lifecycle.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
