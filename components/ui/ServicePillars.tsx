"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, BarChart3, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const pillars = [
    {
        icon: BarChart3,
        title: "Strategic IT Consultancy",
        desc: "Aligning technology architectures with ambitious business goals.",
        link: "/services"
    },
    {
        icon: Code2,
        title: "Software Development",
        desc: "Building scalable, cloud-native applications for the modern web.",
        link: "/software-development"
    },
    {
        icon: Database,
        title: "IBMi Modernization",
        desc: "Bridging legacy reliability with future-ready flexibility.",
        link: "/ibmi"
    },
    {
        icon: ShieldCheck,
        title: "Managed Services",
        desc: "Proactive support and security for peace of mind.",
        link: "/services"
    }
];

export default function ServicePillars() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => (
                <Link href={pillar.link} key={idx} className="block group">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="h-full bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-secondary/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <pillar.icon className="h-24 w-24 text-primary-dark" />
                        </div>

                        <div className="h-12 w-12 rounded-lg bg-slate-50 flex items-center justify-center text-primary-dark mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                            <pillar.icon className="h-6 w-6" />
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">
                            {pillar.title}
                        </h3>

                        <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                            {pillar.desc}
                        </p>

                        <div className="flex items-center text-sm font-bold text-slate-300 group-hover:text-secondary transition-colors">
                            <span className="mr-2">Explore</span>
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
