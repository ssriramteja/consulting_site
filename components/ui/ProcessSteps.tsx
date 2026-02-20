"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
    { icon: Search, title: "Discovery", desc: "We analyze your requirements and existing infrastructure." },
    { icon: Lightbulb, title: "Strategy", desc: "Designing a tailored roadmap and architecture." },
    { icon: Code2, title: "Implementation", desc: "Agile development with regular feedback loops." },
    { icon: Rocket, title: "Launch & Support", desc: "Seamless deployment and 24/7 post-launch maintenance." },
];

export default function ProcessSteps() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="relative group"
                >
                    <div className="h-full p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:border-secondary/30 transition-all">
                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                            <step.icon className="h-7 w-7" />
                        </div>
                        <div className="absolute top-8 right-8 text-6xl font-black text-slate-100 -z-10 group-hover:text-slate-200 transition-colors">
                            0{idx + 1}
                        </div>
                        <h3 className="text-xl font-bold text-primary-dark mb-3">{step.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
