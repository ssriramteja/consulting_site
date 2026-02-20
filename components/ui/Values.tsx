"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users2, Target } from "lucide-react";

const values = [
    { icon: ShieldCheck, title: "Integrity", desc: "We promise dedication in being totally ethical, cogent and fair in all actions." },
    { icon: Zap, title: "Innovation", desc: "Relentless dedication to retooling our staff to be on the leading edge of technology." },
    { icon: Users2, title: "Partnership", desc: "Maintaining long-term relationships with clients through trust and results." },
    { icon: Target, title: "Excellence", desc: "Producing highest quality results in a cost-efficient and expedient manner." },
];

export default function Values() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-slate-50 rounded-xl border border-slate-100"
                >
                    <item.icon className="h-8 w-8 text-secondary mb-4" />
                    <h3 className="font-bold text-lg text-primary-dark mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}
