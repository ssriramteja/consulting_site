"use client";

import { motion } from 'framer-motion';
import { Clock, ArrowUpRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';

const categories = ["All", "Architecture", "AI/ML", "Cloud", "Cybersecurity", "Leadership"];

const posts = [
    {
        category: "Architecture",
        title: "The Death of Monolithic Systems in 2026",
        desc: "Why microservices are no longer just an option, but a survival strategy for enterprise IT scaling and resilience.",
        readTime: "5 min read",
        author: "James Wilson",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "AI/ML",
        title: "Generative AI: Beyond the Hype",
        desc: "Practical applications of Large Language Models in legacy code refactoring and automated system testing.",
        readTime: "8 min read",
        author: "Elena Rodriguez",
        date: "Feb 10, 2026",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Leadership",
        title: "Building Resilient Engineering Teams",
        desc: "How to foster a culture of innovation while maintaining operational stability in a globalized workforce.",
        readTime: "6 min read",
        author: "Michael Ross",
        date: "Feb 05, 2026",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Cloud",
        title: "Serverless at Scale: Lessons Learned",
        desc: "A deep dive into cost optimization and performance tuning for high-traffic enterprise applications.",
        readTime: "10 min read",
        author: "Sarah Chen",
        date: "Jan 28, 2026",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    },
    {
        category: "Cybersecurity",
        title: "Zero Trust: The New Standard",
        desc: "Implementing a Zero Trust architecture in a legacy IBMi environment without disrupting operations.",
        readTime: "7 min read",
        author: "James Wilson",
        date: "Jan 20, 2026",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Digital Transformation",
        title: "Modernizing with Confidence",
        desc: "A step-by-step framework for phased modernization of critical enterprise infrastructure.",
        readTime: "12 min read",
        author: "Sarah Chen",
        date: "Jan 12, 2026",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    }
];

export default function InsightsPage() {
    return (
        <div className="bg-white pt-24 min-h-screen">
            {/* Header */}
            <section className="py-24 border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="max-w-2xl">
                            <FadeIn direction="up">
                                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
                                    Insights <span className="text-secondary">&</span> Thinking
                                </h1>
                                <p className="text-xl text-slate-600 font-light">
                                    Exploring the intersection of technology, human potential, and business strategy.
                                </p>
                            </FadeIn>
                        </div>
                        <FadeIn direction="up" delay={0.2}>
                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 mt-16">
                        {categories.map((cat, idx) => (
                            <button
                                key={cat}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${idx === 0 ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200 hover:border-secondary hover:text-secondary'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, idx) => (
                            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                                <div className="group cursor-pointer flex flex-col h-full">
                                    <div className="relative h-64 mb-8 overflow-hidden rounded-3xl">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-6 left-6 flex gap-2">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-full uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </div>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                            <span>{post.date}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-secondary transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 mb-8 line-clamp-3">
                                            {post.desc}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                                                    <div className="w-full h-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-[10px]">
                                                        {post.author.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                </div>
                                                <span className="text-sm font-bold text-slate-700">{post.author}</span>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                                                <ArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-24 flex justify-center gap-4 text-center">
                        <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-400 cursor-not-allowed">1</button>
                        <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-900 hover:border-secondary hover:text-secondary transition-colors">2</button>
                        <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-900 hover:border-secondary hover:text-secondary transition-colors">3</button>
                        <button className="px-6 py-2 rounded-full border border-slate-200 flex items-center justify-center font-bold text-slate-900 hover:border-secondary hover:text-secondary transition-colors">Next</button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-32 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <FadeIn direction="up">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Stay Ahead of the Curve</h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Join 5,000+ technology leaders receiving our weekly insights on enterprise innovation.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="flex-grow px-8 py-4 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/20 shadow-sm"
                                required
                            />
                            <button type="submit" className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-secondary transition-all shadow-xl shadow-slate-900/10">
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-6 text-sm text-slate-400 italic">No spam, just pure signal. Unsubscribe anytime.</p>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
