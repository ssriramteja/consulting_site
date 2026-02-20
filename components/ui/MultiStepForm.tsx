"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';

const steps = [
    {
        id: 'interest',
        question: "What can we help you with?",
        options: ["Strategic Consulting", "Software Development", "Modernization", "Staff Augmentation", "Other"]
    },
    {
        id: 'details',
        question: "Tell us a bit about yourself",
        fields: [
            { name: "name", label: "Your Name", type: "text" },
            { name: "email", label: "Email Address", type: "email" },
            { name: "company", label: "Company Name", type: "text" }
        ]
    },
    {
        id: 'budget',
        question: "Do you have a project budget?",
        options: ["<$50k", "$50k - $100k", "$100k - $500k", "$500k+", "Not sure yet"]
    }
];

export default function MultiStepForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<any>({});
    const [isCompleted, setIsCompleted] = useState(false);

    const handleOptionSelect = (option: string) => {
        setFormData({ ...formData, [steps[currentStep].id]: option });
        if (currentStep < steps.length - 1) {
            setTimeout(() => setCurrentStep(c => c + 1), 300);
        } else {
            handleSubmit();
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) setCurrentStep(c => c + 1);
        else handleSubmit();
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(c => c - 1);
    };

    const handleSubmit = () => {
        setIsCompleted(true);
        // Here you would send the data to your backend
        console.log(formData);
    };

    if (isCompleted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-12 text-center shadow-2xl max-w-2xl mx-auto"
            >
                <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <Check className="h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">Message Sent!</h2>
                <p className="text-slate-600 text-lg mb-8">
                    Thank you for starting the conversation. One of our strategists will be in touch within 24 hours.
                </p>
                <button
                    onClick={() => { setIsCompleted(false); setCurrentStep(0); setFormData({}); }}
                    className="text-primary-dark font-bold underline"
                >
                    Start New Inquiry
                </button>
            </motion.div>
        )
    }

    const step = steps[currentStep];

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="flex gap-2 mb-12 justify-center">
                {steps.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-2 rounded-full transition-all duration-500 ${idx <= currentStep ? 'w-12 bg-secondary' : 'w-4 bg-slate-200'}`}
                    ></div>
                ))}
            </div>

            <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-50"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 text-center">
                    {step.question}
                </h2>

                {step.options && (
                    <div className="grid gap-4">
                        {step.options.map(option => (
                            <button
                                key={option}
                                onClick={() => handleOptionSelect(option)}
                                className={`p-6 rounded-xl text-left font-medium text-lg transition-all border-2 
                            ${formData[step.id] === option
                                        ? 'border-secondary bg-secondary/5 text-secondary'
                                        : 'border-slate-100 bg-slate-50 hover:border-secondary/50 hover:bg-white text-slate-600'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    {option}
                                    {formData[step.id] === option && <Check className="h-5 w-5" />}
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {step.fields && (
                    <div className="space-y-6">
                        {step.fields.map(field => (
                            <div key={field.name}>
                                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{field.label}</label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name] || ''}
                                    onChange={handleInputChange}
                                    className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 text-xl focus:outline-none focus:border-secondary focus:bg-white transition-colors rounded-t-lg"
                                    placeholder="..."
                                />
                            </div>
                        ))}
                        <div className="flex justify-end pt-8">
                            <button
                                onClick={nextStep}
                                disabled={!formData.name || !formData.email}
                                className="bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary transition-colors flex items-center gap-2"
                            >
                                Continue <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>

            {currentStep > 0 && (
                <button
                    onClick={prevStep}
                    className="mt-8 flex items-center text-slate-500 hover:text-slate-900 transition-colors mx-auto font-medium"
                >
                    <ChevronLeft className="h-5 w-5 mr-1" /> Back
                </button>
            )}
        </div>
    );
}
