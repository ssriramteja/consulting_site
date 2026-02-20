"use client";

import { useState } from 'react';
import { Calendar, Clock, Video, Users, CheckCircle2 } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

export default function Scheduler() {
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isBooked, setIsBooked] = useState(false);

    const handleBook = () => {
        setIsBooked(true);
    };

    if (isBooked) {
        return (
            <div className="bg-white p-12 rounded-3xl text-center shadow-lg border border-slate-100 max-w-xl mx-auto">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Meeting Confirmed</h2>
                <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                    Your consultation has been booked. A calendar invitation with a video link has been sent to your email.
                </p>
                <div className="p-6 bg-slate-50 rounded-2xl text-left border border-slate-100 mb-8">
                    <p className="font-bold text-slate-900 mb-2">Strategy Consultation</p>
                    <p className="text-slate-500 mb-1 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Selected Date (Simulation)
                    </p>
                    <p className="text-slate-500 flex items-center gap-2">
                        <Clock className="w-4 h-4" /> {selectedTime}
                    </p>
                </div>
                <button onClick={() => { setIsBooked(false); setSelectedTime(null); setSelectedDate(null); }} className="text-secondary font-bold hover:underline">
                    Book Another Session
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto">
            {/* Left Side: Meeting Details */}
            <div className="md:w-1/3 bg-slate-50 p-8 border-r border-slate-100 hidden md:block">
                <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-4">Innovative IT</p>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Strategy Session</h2>
                <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-slate-600">
                        <Clock className="w-5 h-5 text-slate-400" /> 30 min
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                        <Video className="w-5 h-5 text-slate-400" /> Web conferencing details provided upon confirmation.
                    </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                    Book a consultation with our enterprise architects to map out your digital transformation roadmap.
                </p>
            </div>

            {/* Right Side: Calendar Selection */}
            <div className="md:w-2/3 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Select a Date & Time</h3>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Fake Calendar */}
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-slate-900">October 2026</span>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">&lt;</button>
                                <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-900">&gt;</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                                <span key={d} className="text-slate-400 font-medium">{d}</span>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                            {Array.from({ length: 30 }).map((_, i) => {
                                const day = i + 1;
                                const isWeekend = (day + 3) % 7 === 0 || (day + 4) % 7 === 0; // rough simulation 
                                return (
                                    <button
                                        key={i}
                                        disabled={isWeekend}
                                        onClick={() => setSelectedDate(day)}
                                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${isWeekend ? 'text-slate-300 cursor-not-allowed'
                                                : selectedDate === day ? 'bg-secondary text-white shadow-md'
                                                    : 'bg-slate-50 text-slate-700 hover:border-secondary border border-transparent'
                                            }`}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Time Slots */}
                    <div>
                        {selectedDate ? (
                            <FadeIn direction="up">
                                <p className="mb-4 text-slate-600 font-medium">Available times for Oct {selectedDate}:</p>
                                <div className="space-y-2 h-[280px] overflow-y-auto pr-2">
                                    {['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:30 PM', '04:00 PM'].map(time => (
                                        <div key={time} className="flex gap-2">
                                            <button
                                                onClick={() => setSelectedTime(time)}
                                                className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${selectedTime === time ? 'bg-slate-800 border-slate-800 text-white' : 'bg-white border-secondary text-secondary hover:bg-secondary/5'
                                                    }`}
                                            >
                                                {time}
                                            </button>
                                            {selectedTime === time && (
                                                <button onClick={handleBook} className="px-6 rounded-xl bg-secondary text-white font-bold text-sm hover:bg-primary transition-colors">
                                                    Confirm
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        ) : (
                            <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                                Please select a date first
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
