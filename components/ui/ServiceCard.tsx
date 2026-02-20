"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    href: string;
    delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, href, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl border border-slate-100"
        >
            <div>
                {Icon && (
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                        <Icon className="h-6 w-6" />
                    </div>
                )}
                <h3 className="mb-3 text-xl font-bold text-slate-900 group-hover:text-secondary transition-colors">{title}</h3>
                <p className="mb-6 text-slate-600 leading-relaxed">{description}</p>
            </div>

            <Link
                href={href}
                className="inline-flex items-center text-sm font-semibold text-secondary-dark group-hover:text-secondary"
            >
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
        </motion.div>
    );
}
