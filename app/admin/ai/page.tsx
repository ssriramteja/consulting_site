"use client"

import { useState } from "react"
import { Bot, Wand2, Sparkles, FileText, Download } from "lucide-react"

export default function AIHubPage() {
    const [generating, setGenerating] = useState(false)
    const [proposalReady, setProposalReady] = useState(false)
    const [clientName, setClientName] = useState("")
    const [projectType, setProjectType] = useState("")

    const handleGenerate = () => {
        setGenerating(true)
        setTimeout(() => {
            setGenerating(false)
            setProposalReady(true)
        }, 3000)
    }

    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                        <Bot className="w-8 h-8 text-secondary" /> AI & Automation Hub
                    </h1>
                    <p className="text-slate-600">Leverage large language models to automate sales and generate insights.</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Proposal Generator */}
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 text-secondary">
                        <Wand2 className="w-40 h-40" />
                    </div>

                    <h2 className="text-2xl font-bold text-slate-900 mb-6 relative z-10 flex items-center gap-2">
                        Proposal Generator <Sparkles className="w-5 h-5 text-secondary" />
                    </h2>

                    <div className="space-y-4 mb-8 relative z-10">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Client Name</label>
                            <input
                                type="text"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors"
                                placeholder="e.g. Apex Financial"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Project Type & Scope</label>
                            <textarea
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary transition-colors min-h-[100px]"
                                placeholder="e.g. Complete AWS cloud migration and modernized microservices architecture for core banking..."
                            />
                        </div>
                    </div>

                    {!proposalReady ? (
                        <button
                            onClick={handleGenerate}
                            disabled={generating || !clientName}
                            className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${generating ? 'bg-slate-300' : 'bg-primary-dark hover:bg-primary'}`}
                        >
                            {generating ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Generating Context-Aware Proposal...
                                </>
                            ) : (
                                <>Generate Intelligent Proposal</>
                            )}
                        </button>
                    ) : (
                        <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Proposal Ready!</h3>
                            <p className="text-sm text-slate-600 mb-4">The AI has analyzed past successful proposals for similar scopes and generated a 14-page document tailored to {clientName}.</p>
                            <div className="flex gap-2 justify-center">
                                <button className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm">
                                    <Download className="w-4 h-4" /> Download DOCX
                                </button>
                                <button onClick={() => setProposalReady(false)} className="px-4 py-2 border border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-50 transition-colors text-sm">
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Lead Scoring */}
                <div className="space-y-8">
                    <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary/50 to-transparent mix-blend-overlay"></div>
                        <h2 className="text-2xl font-bold mb-6 relative z-10 flex items-center gap-2">
                            Predictive Lead Scoring
                        </h2>
                        <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                            Our LLM pipeline continuously analyzes inbound requests against 45+ firmographic and firm-level data points to separate high-intent enterprise buyers from window shoppers.
                        </p>

                        <div className="space-y-4 relative z-10">
                            {[
                                { name: 'Acme Corp', score: 98, intent: 'Very High', signal: 'Browsed pricing page 5x, tech stack matches perfectly' },
                                { name: 'Global Tech', score: 85, intent: 'High', signal: 'Recent C-level hire, expanding cloud budget' },
                                { name: 'Local Shop', score: 24, intent: 'Low', signal: 'Budget <$10k, no enterprise footprint' },
                            ].map((lead, idx) => (
                                <div key={idx} className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-bold">{lead.name}</h4>
                                        <span className={`px-2 py-1 rounded font-bold text-xs ${lead.score > 80 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                            Score: {lead.score}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-400 font-mono text-xs">{lead.signal}</p>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 py-3 border border-white/20 hover:bg-white/10 rounded-xl font-bold transition-all relative z-10">
                            View Scored Pipeline
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
