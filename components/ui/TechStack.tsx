"use client";

import { motion } from "framer-motion";

const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "AWS", "Azure", "Docker", "Kubernetes", "PostgreSQL",
    "MongoDB", "IBMi", "RPGLE", "COBOL", "TailwindCSS"
];

export default function TechStack() {
    return (
        <div className="w-full overflow-hidden py-10 bg-surface-dark border-y border-white/5 relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-dark to-transparent z-10 pointer-events-none"></div>

            <div className="flex">
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <span key={i} className="text-2xl font-bold text-slate-500 hover:text-white transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
