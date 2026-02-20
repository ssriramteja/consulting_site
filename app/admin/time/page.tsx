import { Play, Square, History, Plus } from "lucide-react"

export default function TimeTrackingPage() {
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Time Tracking</h1>
                    <p className="text-slate-600">Log billable hours, monitor team capacity, and generate timesheets.</p>
                </div>
            </div>

            {/* Active Timer */}
            <div className="bg-slate-900 rounded-3xl p-8 mb-8 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center shadow-2xl">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover mix-blend-overlay"></div>
                <div className="relative z-10 mb-6 md:mb-0">
                    <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Currently Working On</p>
                    <h2 className="text-3xl font-bold leading-tight">Apex Financial: Database Migration</h2>
                    <p className="text-slate-400 mt-2">Task: Data Mapping & Normalization</p>
                </div>
                <div className="relative z-10 flex items-center gap-8">
                    <div className="text-5xl font-bold font-mono tracking-tighter">
                        02:45:13
                    </div>
                    <div className="flex gap-4">
                        <button className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors shadow-lg shadow-red-500/20">
                            <Square className="w-6 h-6 fill-current" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Recent Time Entries</h2>
                <button className="text-secondary font-bold hover:underline flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Manual Entry
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <div className="space-y-4">
                    {[
                        { client: 'Global Traders', task: 'Architecture Review', date: 'Today', duration: '3h 15m', billable: true },
                        { client: 'HealthPlus Inc', task: 'Security Compliance Audit', date: 'Yesterday', duration: '5h 30m', billable: true },
                        { client: 'Internal', task: 'Team Weekly Sync', date: 'Yesterday', duration: '1h 00m', billable: false },
                        { client: 'Nexus Logistics', task: 'CI/CD Pipeline Setup', date: 'Oct 14', duration: '6h 45m', billable: true },
                    ].map((entry, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-secondary/30 hover:bg-secondary/5 transition-all">
                            <div className="flex items-start md:items-center gap-4 mb-4 md:mb-0">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                    <History className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{entry.task}</h4>
                                    <p className="text-sm text-slate-500">{entry.client} &bull; {entry.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 justify-between md:justify-end border-t md:border-none pt-4 md:pt-0">
                                {entry.billable ? (
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">Billable</span>
                                ) : (
                                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">Non-Billable</span>
                                )}
                                <span className="text-xl font-bold font-mono text-slate-900">{entry.duration}</span>
                                <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                                    <Play className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
