"use client";

import SectionHeader from '@/components/ui/SectionHeader';
import Benefits from '@/components/ui/Benefits';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CareersForm from '@/components/ui/CareersForm';

export default function CareersPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="bg-primary-dark py-24 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-secondary/10 skew-x-12 transform origin-top-right"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold tracking-wider uppercase mb-4 block">Join Our Team</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Build the Future of IT</h1>
                        <p className="text-xl text-slate-300 mb-8">
                            We are looking for passionate innovators to help us solve complex challenges for the world's leading companies.
                        </p>
                        <a href="#openings" className="inline-block bg-secondary text-white font-bold px-8 py-3 rounded-full hover:bg-secondary-light transition-colors">
                            View Open Positions
                        </a>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Why Join IITS?" subtitle="Perks that matter" centered />
                    <Benefits />
                </div>
            </section>

            {/* Open Positions */}
            <section id="openings" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Current Openings" />

                    <div className="space-y-6">
                        {/* Job Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border border-slate-200 rounded-xl p-8 hover:border-secondary transition-colors group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary-dark group-hover:text-secondary transition-colors">Systems Engineer (Azure)</h3>
                                    <div className="flex gap-4 text-sm text-slate-500 mt-2">
                                        <span>Bethlehem, PA (Hybrid)</span>
                                        <span>•</span>
                                        <span>Full-time</span>
                                    </div>
                                </div>
                                <a href="#application-form" className="px-6 py-2 rounded-lg border border-slate-200 font-semibold text-slate-700 hover:bg-secondary hover:text-white hover:border-secondary transition-all">
                                    Apply Now
                                </a>
                            </div>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Architect and implement Azure services such as Azure Cloud Services, Azure Storage, IIS, SQL database, and Azure functions.
                                Design and configure Virtual Networks, Subnets, network settings and DNS Settings.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {['Azure', 'GitHub', 'Jenkins', 'Terraform', 'Docker', 'Kubernetes'].map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Application Section */}
                    <section id="application-form" className="py-24 bg-surface">
                        <div className="container mx-auto px-4">
                            <SectionHeader title="Join the Team" subtitle="Start your journey with us" centered />
                            <CareersForm />
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}
