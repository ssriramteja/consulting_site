"use client";

import { motion } from 'framer-motion';
import {
    Stethoscope,
    Landmark,
    ShoppingCart,
    Factory,
    Zap,
    GraduationCap,
    Plane,
    Building2
} from 'lucide-react';

const industries = [
    { name: "Healthcare", icon: Stethoscope },
    { name: "Finance & Banking", icon: Landmark },
    { name: "Retail & E-commerce", icon: ShoppingCart },
    { name: "Manufacturing", icon: Factory },
    { name: "Energy & Utilities", icon: Zap },
    { name: "Education", icon: GraduationCap },
    { name: "Logistics", icon: Plane },
    { name: "Government", icon: Building2 },
];

export default function IndustriesMarquee() {
    return (
        <div className="w-full bg-slate-50 border-y border-slate-200 py-16 overflow-hidden flex flex-col items-center">
            <div className="container mx-auto px-4 mb-10 text-center">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Industries We Serve</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">Powering Innovation Across Every Sector</h2>
            </div>

            <div className="relative w-full overflow-hidden flex">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

                <motion.div
                    className="flex gap-8 items-center whitespace-nowrap min-w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                >
                    {[...industries, ...industries, ...industries].map((industry, idx) => (
                        <div key={idx} className="group flex flex-col items-center justify-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 min-w-[200px] hover:shadow-lg hover:border-secondary/30 transition-all duration-300 cursor-default">
                            <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                <industry.icon className="h-8 w-8" />
                            </div>
                            <span className="text-lg font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{industry.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
