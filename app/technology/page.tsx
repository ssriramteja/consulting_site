"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { Brain, Database, Cpu, Network, Bot, BarChart } from 'lucide-react';

const technologies = [
    {
        icon: Brain,
        title: "Artificial Intelligence",
        desc: "Leverage the power of AI to automate complex processes, predict trends, and enhance decision-making capabilities.",
        features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
        icon: Bot,
        title: "Machine Learning",
        desc: "Build self-learning algorithms that improve over time, delivering personalized experiences and optimized operations.",
        features: ["Deep Learning", "Neural Networks", "Reinforcement Learning"]
    },
    {
        icon: Database,
        title: "Data Science",
        desc: "Transform raw data into actionable insights. We help you unlock the true value of your information assets.",
        features: ["Big Data Processing", "Data Visualization", "Statistical Modeling"]
    },
    {
        icon: Cpu,
        title: "Generative AI",
        desc: "Harness the latest in Generative AI to create content, code, and designs at scale, boosting productivity.",
        features: ["LLM Integration", "Content Generation", "Code Copilots"]
    },
    {
        icon: Network,
        title: "IoT & Edge Computing",
        desc: "Connect the physical and digital worlds with robust IoT solutions and low-latency edge computing architectures.",
        features: ["Smart Sensors", "Real-time Telemetry", "Edge AI"]
    },
    {
        icon: BarChart,
        title: "Business Intelligence",
        desc: "Empower your organization with real-time dashboards and reports that drive strategic growth.",
        features: ["Power BI / Tableau", "Data Warehousing", "ETL Pipelines"]
    }
];

export default function TechnologyPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/90 via-slate-900/80 to-secondary/20"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold mb-6 backdrop-blur-sm">
                            Future-Ready Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            Next-Gen Technologies
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            We stay on the cutting edge so you don’t have to. Explore how we use AI, Machine Learning, and Data Science to revolutionize businesses.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tech Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Our Capability Stack" centered />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technologies.map((tech, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <tech.icon className="h-24 w-24 text-primary-dark" />
                                </div>

                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-primary-dark mb-6 group-hover:scale-110 transition-transform">
                                    <tech.icon className="h-6 w-6" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">
                                    {tech.title}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {tech.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {tech.features.map(feat => (
                                        <span key={feat} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                                            {feat}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to innovate?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can integrate these technologies into your business strategy today.
                    </p>
                    <a href="/contact" className="inline-block bg-secondary hover:bg-secondary-light text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg shadow-secondary/25 transform hover:-translate-y-1">
                        Start a Conversation
                    </a>
                </div>
            </section>
        </div>
    );
}
