"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Check, ChevronRight, Briefcase } from 'lucide-react';

export default function CareersForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        resume: null as File | null,
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Backend logic would go here
        console.log("Application Submitted:", formData);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-2xl shadow-xl border border-slate-100 text-center max-w-2xl mx-auto"
            >
                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Application Received!</h3>
                <p className="text-slate-600 mb-8">
                    Thanks for your interest in joining our team. We have received your details and will review your profile shortly.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary-dark font-bold hover:underline"
                >
                    Submit another application
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden max-w-4xl mx-auto">
            <div className="bg-slate-900 p-8 text-white text-center">
                <Briefcase className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Join Our Talent Network</h3>
                <p className="text-slate-400 mt-2">Apply for a position or drop your resume for future opportunities.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                            placeholder="John Doe"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                            placeholder="john@example.com"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                            placeholder="+1 (555) 000-0000"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">LinkedIn / Portfolio URL</label>
                        <input
                            type="url"
                            name="linkedin"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                            placeholder="https://linkedin.com/in/..."
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Resume / CV</label>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                        <input
                            type="file"
                            required
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                        <Upload className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-slate-600 font-medium">
                            {formData.resume ? formData.resume.name : "Drag & drop or click to upload PDF/Word"}
                        </p>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Cover Letter / Message</label>
                    <textarea
                        name="message"
                        rows={4}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                        placeholder="Tell us why you'd be a great fit..."
                        onChange={handleInputChange}
                    ></textarea>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-primary-dark text-white font-bold px-12 py-4 rounded-full hover:bg-primary transition-colors inline-flex items-center gap-2"
                    >
                        Submit Application <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </form>
        </div>
    );
}
