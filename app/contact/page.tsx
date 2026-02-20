"use client";

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, MessageSquare, Clock } from 'lucide-react';
import MultiStepForm from '@/components/ui/MultiStepForm';
import FadeIn from '@/components/ui/FadeIn';

const contactInfo = [
    {
        icon: Phone,
        label: "Call Us",
        value: "+1 (555) 123-4567",
        desc: "Mon-Fri from 9am to 6pm.",
        color: "blue"
    },
    {
        icon: Mail,
        label: "Email Us",
        value: "hello@innovativeit.com",
        desc: "We reply within 24 hours.",
        color: "secondary"
    },
    {
        icon: MessageSquare,
        label: "Live Chat",
        value: "Start a Conversation",
        desc: "Average response time: 2 mins.",
        color: "green"
    }
];

const offices = [
    {
        city: "San Francisco",
        address: "123 Tech Park Blvd, Suite 500, San Francisco, CA 94105",
        phone: "+1 (415) 555-0192"
    },
    {
        city: "New York",
        address: "789 Madison Ave, 12th Floor, New York, NY 10021",
        phone: "+1 (212) 555-0128"
    },
    {
        city: "London",
        address: "45 Canary Wharf, Level 22, London E14 5AB, UK",
        phone: "+44 20 7946 0123"
    }
];

export default function ContactPage() {
    return (
        <div className="bg-white pt-24 min-h-screen">
            {/* Header Section */}
            <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn direction="up">
                        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Let's Engineering Success</h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                            Have a complex challenge or a bold vision? Our team of enterprise architects and strategists is ready to help you navigate the future.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 -mt-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        {/* Left: Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <FadeIn direction="left">
                                <div className="space-y-6">
                                    {contactInfo.map((info, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                            <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-secondary group-hover:text-white transition-colors mb-6">
                                                <info.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">{info.label}</h3>
                                            <p className="text-xl font-bold text-slate-900 mb-2">{info.value}</p>
                                            <p className="text-slate-500">{info.desc}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="pt-12">
                                    <h3 className="text-lg font-bold text-slate-900 mb-6">Follow Our Global Impact</h3>
                                    <div className="flex gap-4">
                                        {[Linkedin, Github, Twitter].map((Icon, i) => (
                                            <a key={i} href="#" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all">
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* Right: MultiStep Form */}
                        <div className="lg:col-span-2">
                            <FadeIn direction="right">
                                <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-50 overflow-hidden">
                                    <div className="px-8 md:px-12 py-10 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900">Project Inquiry Form</h2>
                                            <p className="text-slate-500">Step through our brief questionnaire</p>
                                        </div>
                                        <div className="hidden md:flex items-center gap-2 text-slate-400 text-sm">
                                            <Clock className="w-4 h-4" />
                                            <span>Takes ~2 mins</span>
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-12">
                                        <MultiStepForm />
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offices Section */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Global Offices</h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
                                Strategically located to serve our Fortune 500 partners across time zones and continents.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {offices.map((office, idx) => (
                            <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                                <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-8">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{office.city}</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{office.address}</p>
                                    <div className="flex items-center gap-2 text-secondary font-bold">
                                        <Phone className="w-4 h-4" />
                                        {office.phone}
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-slate-200 relative grayscale contrast-125 opacity-50">
                <img
                    src="https://images.unsplash.com/photo-1526778545894-df811c3e1253?q=80&w=2067&auto=format&fit=crop"
                    alt="World Map"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-gradient-to-t from-slate-900 to-transparent">
                    <p className="text-white font-bold tracking-widest uppercase">Connecting Dots Across The Globe</p>
                </div>
            </section>
        </div>
    );
}
