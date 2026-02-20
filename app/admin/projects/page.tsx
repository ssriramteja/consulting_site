import { Briefcase, Activity, CheckCircle2, Clock } from "lucide-react"

export default function ProjectAdminPage() {
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Project Portfolio</h1>
                    <p className="text-slate-600">Admin overview of all client engagements and internal initiatives.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Active Engagements</h3>
                    <p className="text-3xl font-bold text-slate-900">42</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">At Risk</h3>
                    <p className="text-3xl font-bold text-orange-600">3</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Awaiting Client</h3>
                    <p className="text-3xl font-bold text-blue-600">8</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Completed (YTD)</h3>
                    <p className="text-3xl font-bold text-green-600">105</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden p-16 text-center">
                <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Project Portfolio Matrix</h2>
                <p className="text-slate-500 max-w-xl mx-auto mb-8">
                    The advanced portfolio matrix visualization is being generated. This view allows administrators to drill down into specific timeline bottlenecks and allocate resources dynamically.
                </p>
                <button className="px-8 py-3 bg-secondary text-white font-bold rounded-full hover:bg-primary transition-colors">
                    View Standard List
                </button>
            </div>
        </div>
    )
}
