"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-12 ${centered ? 'text-center' : ''}`}
        >
            <h2 className="text-3xl font-bold text-primary-dark md:text-4xl mb-4">{title}</h2>
            <div className={`h-1 w-20 bg-secondary rounded-full mb-4 ${centered ? 'mx-auto' : ''}`}></div>
            {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
    );
}
