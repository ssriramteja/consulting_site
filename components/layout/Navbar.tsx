"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Work', href: '/work' },
        { name: 'Technology', href: '/technology' },
        { name: 'Insights', href: '/insights' },
        { name: 'Careers', href: '/careers' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
                ? 'bg-slate-900/80 backdrop-blur-md border-white/5 py-3'
                : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative h-12 w-48">
                            <Image
                                src="/logo.png"
                                alt="Innovative IT Solutions"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/contact"
                            className="px-6 py-2 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-secondary hover:text-white transition-colors"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-slate-900 border-b border-white/10 overflow-hidden absolute top-full left-0 w-full"
                    >
                        <div className="container mx-auto px-4 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block text-2xl font-bold text-slate-300 hover:text-white transition-colors py-2 border-b border-white/5"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="flex justify-between items-center">
                                        {link.name}
                                        <ChevronRight className="h-5 w-5 opacity-50" />
                                    </div>
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="block w-full text-center px-6 py-4 bg-secondary text-white rounded-xl font-bold mt-8"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
