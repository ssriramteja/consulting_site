import { getServerSession } from "next-auth/next"
import { Search, Upload, FileText, Download, MoreVertical, File } from "lucide-react"

const documents = [
    { id: 1, name: "Project_Proposal_v2.pdf", type: "PDF", size: "2.4 MB", date: "Oct 12, 2026", status: "Approved" },
    { id: 2, name: "Architecture_Diagram_FINAL.png", type: "Image", size: "4.1 MB", date: "Oct 10, 2026", status: "Approved" },
    { id: 3, name: "Q3_Services_Invoice_0842.pdf", type: "Invoice", size: "850 KB", date: "Oct 05, 2026", status: "Pending Payment" },
    { id: 4, name: "Security_Audit_Report.docx", type: "Document", size: "1.2 MB", date: "Sep 28, 2026", status: "Under Review" },
    { id: 5, name: "MSA_Innovative_IT_Signed.pdf", type: "Contract", size: "3.5 MB", date: "Sep 15, 2026", status: "Executed" },
]

export default async function DocumentsPage() {
    const session = await getServerSession()

    return (
        <div className="max-w-6xl mx-auto flex flex-col h-full">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Secure Documents</h1>
                    <p className="text-slate-600">Access and share project files, contracts, and invoices.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-2.5 bg-primary-dark font-bold text-white rounded-full hover:bg-primary transition-colors flex items-center gap-2 shadow-sm">
                        <Upload className="w-5 h-5" /> Upload File
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <div className="relative w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search documents..."
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/50 transition-all font-medium"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select className="px-4 py-2 rounded-lg border border-slate-200 text-slate-600 font-medium focus:outline-none">
                            <option>All Types</option>
                            <option>Contracts</option>
                            <option>Invoices</option>
                            <option>Reports</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-slate-100">
                                <th className="py-4 px-6 font-bold text-slate-500 text-sm uppercase tracking-wider">File Name</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-sm uppercase tracking-wider">Date Modified</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-sm uppercase tracking-wider">Size</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-sm uppercase tracking-wider">Status</th>
                                <th className="py-4 px-6 font-bold text-slate-500 text-sm uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map(doc => (
                                <tr key={doc.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors group">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-secondary flex items-center justify-center">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{doc.name}</p>
                                                <p className="text-sm font-medium text-slate-500">{doc.type}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-slate-600 font-medium">{doc.date}</td>
                                    <td className="py-4 px-6 text-slate-500 font-medium">{doc.size}</td>
                                    <td className="py-4 px-6">
                                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full 
                                            ${doc.status === 'Approved' || doc.status === 'Executed' ? 'bg-green-100 text-green-700' :
                                                doc.status === 'Pending Payment' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-blue-100 text-blue-700'}`}>
                                            {doc.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-slate-400 hover:text-secondary hover:bg-secondary/10 rounded-lg transition-colors">
                                                <Download className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {documents.length === 0 && (
                    <div className="p-16 text-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                            <File className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">No documents found</h3>
                        <p className="text-slate-500 max-w-sm mx-auto">Upload files to share them securely with our consulting team.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
