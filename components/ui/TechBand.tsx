"use client";

import { motion } from 'framer-motion';
import { Cloud, Lock, Zap, Smartphone, Globe, RefreshCcw } from 'lucide-react';

const skills = [
    { name: "Cloud Native", icon: Cloud },
    { name: "Cyber Security", icon: Lock },
    { name: "High Performance", icon: Zap },
    { name: "Mobile First", icon: Smartphone },
    { name: "Global Scale", icon: Globe },
    { name: "Continuous Integration", icon: RefreshCcw },
];

export default function TechBand() {
    return (
        <div className="w-full bg-slate-900 border-y border-slate-800 py-12 overflow-hidden flex relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <motion.div
                className="flex gap-16 items-center whitespace-nowrap min-w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
                {[...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-slate-400 group cursor-default">
                        <skill.icon className="h-6 w-6 group-hover:text-secondary transition-colors" />
                        <span className="text-2xl font-bold tracking-tight group-hover:text-white transition-colors">{skill.name}</span>
                        <div className="h-2 w-2 rounded-full bg-slate-700"></div>
                    </div>
                ))}
            </motion.div>

            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
        </div>
    );
}
