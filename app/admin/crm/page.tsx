import { Users, DollarSign, TrendingUp, Activity, Check, Search, Download } from "lucide-react"

const leads = [
    { id: 'LD-1021', company: 'Apex Financial', contact: 'Sarah Jenkins', value: '$120k', status: 'In Negotiation', probability: 85, lastContact: 'Oct 14, 2026' },
    { id: 'LD-1022', company: 'Starlight Retail', contact: 'Mike Cho', value: '$85k', status: 'Proposal Sent', probability: 60, lastContact: 'Oct 12, 2026' },
    { id: 'LD-1023', company: 'HealthPlus Inc', contact: 'Dr. Emily Ross', value: '$250k', status: 'Discovery Call', probability: 30, lastContact: 'Oct 15, 2026' },
    { id: 'LD-1024', company: 'Nexus Logistics', contact: 'Tom Hardy', value: '$45k', status: 'Qualified', probability: 45, lastContact: 'Oct 10, 2026' },
    { id: 'LD-1025', company: 'Global Traders', contact: 'Anna Schmidt', value: '$150k', status: 'Closed Won', probability: 100, lastContact: 'Oct 05, 2026' },
]

export default function CRMDashboard() {
    return (
        <div className="max-w-[1400px] mx-auto space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">CRM Dashboard</h1>
                    <p className="text-slate-600">Company performance, revenue metrics, and pipeline at a glance.</p>
                </div>
                <button className="px-6 py-2.5 bg-primary-dark font-bold text-white rounded-full hover:bg-primary transition-colors flex items-center gap-2 shadow-sm">
                    <Download className="w-4 h-4" /> Export Report
                </button>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-blue-50 text-secondary border border-blue-100 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-6 h-6" />
                        </div>
                        <span className="flex items-center text-green-600 text-sm font-bold bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                            <TrendingUp className="w-4 h-4 mr-1" /> +14.5%
                        </span>
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium mb-1">Total Revenue (Q4)</p>
                        <p className="text-3xl font-bold text-slate-900">$1,245,000</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-purple-50 text-purple-600 border border-purple-100 rounded-xl flex items-center justify-center">
                            <Activity className="w-6 h-6" />
                        </div>
                        <span className="flex items-center text-green-600 text-sm font-bold bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                            <TrendingUp className="w-4 h-4 mr-1" /> +5.2%
                        </span>
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium mb-1">Active Projects</p>
                        <p className="text-3xl font-bold text-slate-900">42</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 border border-amber-100 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6" />
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium mb-1">New Leads (This Month)</p>
                        <p className="text-3xl font-bold text-slate-900">128</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between h-40">
                    <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-xl flex items-center justify-center">
                            <Check className="w-6 h-6" />
                        </div>
                        <span className="flex items-center text-green-600 text-sm font-bold bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                            <TrendingUp className="w-4 h-4 mr-1" /> +2.1%
                        </span>
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium mb-1">Client Satisfaction</p>
                        <p className="text-3xl font-bold text-slate-900">98.5%</p>
                    </div>
                </div>
            </div>

            {/* Pipeline Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h2 className="text-xl font-bold text-slate-900">Active Deal Pipeline</h2>
                    <div className="relative w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search leads..."
                            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-secondary transition-all"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-slate-100">
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Lead ID</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Company & Contact</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Est. Value</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Status</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Win Probability</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Last Contact</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((lead, idx) => (
                                <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                                    <td className="py-4 px-6 text-sm font-medium text-slate-500">{lead.id}</td>
                                    <td className="py-4 px-6">
                                        <p className="font-bold text-slate-900 mb-0.5 group-hover:text-secondary">{lead.company}</p>
                                        <p className="text-sm text-slate-500">{lead.contact}</p>
                                    </td>
                                    <td className="py-4 px-6 font-bold text-slate-900">{lead.value}</td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full 
                                            ${lead.status === 'Closed Won' ? 'bg-green-100 text-green-700' :
                                                lead.status === 'In Negotiation' ? 'bg-blue-100 text-blue-700' :
                                                    lead.status === 'Proposal Sent' ? 'bg-amber-100 text-amber-700' :
                                                        'bg-slate-100 text-slate-700'}`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-full bg-slate-100 rounded-full h-2 max-w-[100px]">
                                                <div
                                                    className={`h-2 rounded-full ${lead.probability > 75 ? 'bg-green-500' : lead.probability > 40 ? 'bg-amber-500' : 'bg-red-500'}`}
                                                    style={{ width: `${lead.probability}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm font-bold text-slate-600">{lead.probability}%</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-sm text-slate-500 font-medium">{lead.lastContact}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
