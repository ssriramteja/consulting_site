"use client";

import { motion } from "framer-motion";

interface StatProps {
    label: string;
    value: string;
    delay?: number;
}

const StatItem = ({ label, value, delay = 0 }: StatProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
    >
        <div className="text-4xl font-bold text-white mb-2">{value}</div>
        <div className="text-sm text-slate-300 font-medium tracking-wide uppercase">{label}</div>
    </motion.div>
);

export default function Stats() {
    const stats = [
        { label: "Years Experience", value: "15+" },
        { label: "Fortune 500 Clients", value: "50+" },
        { label: "Projects Delivered", value: "100+" },
        { label: "Expert Consultants", value: "20+" },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
                <StatItem key={index} {...stat} delay={index * 0.1} />
            ))}
        </div>
    );
}
