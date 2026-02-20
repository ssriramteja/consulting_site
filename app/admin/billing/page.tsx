import { Plus, Receipt, FileText, CheckCircle2, Clock } from "lucide-react"

const invoices = [
    { id: 'INV-2026-081', client: 'Apex Financial', date: 'Oct 01, 2026', due: 'Oct 31, 2026', amount: '$45,000.00', status: 'Paid' },
    { id: 'INV-2026-082', client: 'Global Traders', date: 'Oct 05, 2026', due: 'Nov 04, 2026', amount: '$12,500.00', status: 'Pending' },
    { id: 'INV-2026-083', client: 'Nexus Logistics', date: 'Sep 15, 2026', due: 'Oct 15, 2026', amount: '$8,250.00', status: 'Overdue' },
    { id: 'INV-2026-084', client: 'HealthPlus Inc', date: 'Oct 12, 2026', due: 'Nov 11, 2026', amount: '$110,000.00', status: 'Draft' },
]

export default function BillingPage() {
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Invoices & Billing</h1>
                    <p className="text-slate-600">Manage client invoices, track payments, and generate financial reports.</p>
                </div>
                <button className="px-6 py-2.5 bg-secondary text-white font-bold rounded-full hover:bg-primary transition-colors flex items-center gap-2 shadow-sm">
                    <Plus className="w-5 h-5" /> Create Invoice
                </button>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Outstanding Balance</h3>
                    <p className="text-3xl font-bold text-slate-900">$20,750</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Overdue</h3>
                    <p className="text-3xl font-bold text-red-600">$8,250</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Draft Invoices</h3>
                    <p className="text-3xl font-bold text-slate-900">1</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium mb-2">Paid This Month</h3>
                    <p className="text-3xl font-bold text-green-600">$45,000</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Invoice</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Client</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Date Issued</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Due Date</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Amount</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-xs uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((inv) => (
                                <tr key={inv.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <Receipt className="w-5 h-5 text-slate-400 group-hover:text-secondary" />
                                            <span className="font-bold text-slate-900 group-hover:text-secondary">{inv.id}</span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 font-medium text-slate-700">{inv.client}</td>
                                    <td className="py-4 px-6 text-slate-500">{inv.date}</td>
                                    <td className="py-4 px-6 text-slate-500">{inv.due}</td>
                                    <td className="py-4 px-6 font-bold text-slate-900">{inv.amount}</td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full 
                                            ${inv.status === 'Paid' ? 'bg-green-100 text-green-700' :
                                                inv.status === 'Overdue' ? 'bg-red-100 text-red-700' :
                                                    inv.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                                                        'bg-slate-100 text-slate-600'}`}>
                                            {inv.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
