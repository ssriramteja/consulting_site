"use client";

import { motion } from "framer-motion";
import { Heart, DollarSign, Laptop, GraduationCap, Coffee, Globe } from "lucide-react";

const benefits = [
    { icon: Heart, label: "Comprehensive Health", desc: "Medical, dental, and vision coverage for you and your family." },
    { icon: DollarSign, label: "Competitive Pay", desc: "Above-market salaries and performance-based bonuses." },
    { icon: Laptop, label: "Remote Options", desc: "Flexible work arrangements to balance life and career." },
    { icon: GraduationCap, label: "Learning Budget", desc: "Stipends for certifications, courses, and conferences." },
    { icon: Coffee, label: "Work-Life Balance", desc: "Generous PTO and paid holidays." },
    { icon: Globe, label: "Global Exposure", desc: "Opportunity to work with Fortune 500 clients worldwide." },
];

export default function Benefits() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100"
                >
                    <div className="p-2 bg-blue-50 text-secondary rounded-lg shrink-0">
                        <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.label}</h3>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
