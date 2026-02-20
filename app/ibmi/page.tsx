"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { Server, Database, Code, GraduationCap, ShieldCheck, Headphones } from 'lucide-react';

const offerings = [
    { icon: Server, title: "Modernization Services", desc: "Leverage our expertise to modernize your legacy AS/400 systems, integrating them with newer technologies." },
    { icon: Code, title: "Custom Development", desc: "Creating custom applications using RPGLE, COBOL, JSON, and Web Services on the IBMi platform." },
    { icon: Database, title: "SYNON Development", desc: "Specialized in creating custom applications using the SYNON CASE tool to generate RPGLE and COBOL code." },
    { icon: GraduationCap, title: "Corporate Training", desc: "Our experts provide SYNON corporate training, and SYNON server access is available." },
    { icon: ShieldCheck, title: "Administration", desc: "Continuous optimization, security, and management to ensure smooth and uninterrupted operations." },
    { icon: Headphones, title: "Support Services", desc: "Troubleshooting, proactive monitoring, and patch management for peak performance." }
];

export default function IBMiPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative py-24 bg-primary-dark text-white overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 mb-6 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        AS/400 Center of Excellence
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">IBMi Solutions</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Optimizing and modernizing critical legacy infrastructure for Banking, Finance, and Logistics.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary-dark mb-6">Deep Expertise in Legacy Systems</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We have a well-established IBMi (AS/400) practice, backed by a team of skilled system administrators
                            and developers with deep experience in managing likely regulated environments. Whether you’re looking to
                            modernize legacy systems or ensure compliance, we have the expertise you need.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all"
                            >
                                <item.icon className="h-10 w-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
