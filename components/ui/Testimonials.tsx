"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Innovative IT Solutions transformed our legacy systems into a modern, efficient infrastructure. Their expertise is unmatched.",
        author: "CTO, Fortune 500 Financial Firm",
    },
    {
        quote: "The team's dedication to quality and timely delivery made our critical project a massive success.",
        author: "Director of Operations, Logistics Giant",
    },
    {
        quote: "Their IBMi modernization services saved us millions in potential rewrite costs while giving us a modern web interface.",
        author: "VP of Engineering, Manufacturing Corp",
    },
];

export default function Testimonials() {
    return (
        <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="relative rounded-2xl bg-white p-8 shadow-lg border border-slate-100 flex flex-col h-full"
                >
                    <Quote className="h-10 w-10 text-secondary/20 absolute top-6 right-6" />
                    <p className="text-slate-600 mb-6 italic relative z-10">"{item.quote}"</p>
                    <div className="mt-auto">
                        <div className="h-1 w-12 bg-secondary rounded-full mb-4"></div>
                        <p className="font-bold text-primary-dark text-sm">{item.author}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
