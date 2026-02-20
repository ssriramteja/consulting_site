"use client";

import { motion } from "framer-motion";

const milestones = [
    { year: "2008", title: "Inception", description: "Innovative IT Solutions Inc. founded with a vision to transform IT consulting." },
    { year: "2012", title: "Nationwide Expansion", description: "Expanded operations to serve Fortune 500 clients across the United States." },
    { year: "2016", title: "IBMi Center of Excellence", description: "Established a dedicated division for AS/400 modernization and support." },
    { year: "2020", title: "Digital Transformation", description: "Launched comprehensive cloud and DevOps practice." },
    { year: "2026", title: "Future Ready", description: "Continuing to pioneer with AI and next-gen web solutions." }
];

export default function Timeline() {
    return (
        <div className="relative py-20">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>

            <div className="space-y-12">
                {milestones.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1 w-full text-center md:text-left">
                            <div className={`p-6 bg-white rounded-2xl shadow-lg border border-slate-100 relative ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                <span className="text-secondary font-bold text-lg block mb-2">{item.year}</span>
                                <h3 className="text-xl font-bold text-primary-dark mb-2">{item.title}</h3>
                                <p className="text-slate-600">{item.description}</p>
                            </div>
                        </div>

                        <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary ring-4 ring-white shadow-md">
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>

                        <div className="flex-1 w-full hidden md:block"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
