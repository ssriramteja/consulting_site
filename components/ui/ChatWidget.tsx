"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! I'm Nova, Innovative IT's AI assistant. How can I help you accelerate your digital transformation today?", sender: "bot" }
    ]);
    const [inputText, setInputText] = useState("");

    const handleSend = () => {
        if (!inputText.trim()) return;

        const newMsg = { id: Date.now(), text: inputText, sender: "user" };
        setMessages([...messages, newMsg]);
        setInputText("");

        // Simulated AI response
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: "I understand you're looking for solutions. Our consulting team specializes in exactly that. Would you like me to schedule a strategy session for you?",
                sender: "bot"
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 w-[380px] h-[550px] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-slate-900 text-white p-4 flex justify-between items-center z-10">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                                        <Bot className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Nova AI</h3>
                                    <p className="text-xs text-slate-400">Usually replies instantly</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 custom-scrollbar">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-slate-800 text-white' : 'bg-blue-100 text-secondary'}`}>
                                        {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </div>
                                    <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-slate-900 text-white rounded-tr-none'
                                            : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your message..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-full pl-5 pr-12 py-3 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 transition-all font-medium"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputText.trim()}
                                    className="absolute right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                </button>
                            </div>
                            <p className="text-center text-[10px] text-slate-400 mt-3 font-medium">
                                Powered by <span className="font-bold text-slate-500">Innovative IT Intelligence</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-primary transition-colors border-4 border-white"
            >
                {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
            </motion.button>
        </div>
    );
}
