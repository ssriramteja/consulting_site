import { Users as UsersIcon, Award, UserPlus, Mail, Phone, Calendar } from "lucide-react"

const teamMembers = [
    { name: 'Sarah Jenkins', role: 'Enterprise Architect', department: 'Cloud', workload: 85, projects: 3, status: 'Active' },
    { name: 'Mike Cho', role: 'Senior Developer', department: 'Software Dev', workload: 100, projects: 2, status: 'Over Capacity' },
    { name: 'Dr. Emily Ross', role: 'Lead Data Scientist', department: 'AI / ML', workload: 60, projects: 4, status: 'Active' },
    { name: 'Tom Hardy', role: 'Security Analyst', department: 'Cybersecurity', workload: 40, projects: 1, status: 'Available' },
    { name: 'Anna Schmidt', role: 'Project Manager', department: 'Strategy', workload: 90, projects: 6, status: 'Active' },
]

export default function TeamManagementPage() {
    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Team Management</h1>
                    <p className="text-slate-600">Monitor consultant workloads, assignments, and utilization rates.</p>
                </div>
                <button className="px-6 py-2.5 bg-primary-dark font-bold text-white rounded-full hover:bg-primary transition-colors flex items-center gap-2 shadow-sm">
                    <UserPlus className="w-5 h-5" /> Add Member
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-secondary rounded-xl flex items-center justify-center">
                        <UsersIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Total Staff</p>
                        <p className="text-2xl font-bold text-slate-900">24 Active</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Avg Utilization</p>
                        <p className="text-2xl font-bold text-slate-900">78.5%</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Upcoming Leave</p>
                        <p className="text-2xl font-bold text-slate-900">3 Members</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h2 className="text-xl font-bold text-slate-900">Consultant Directory & Workload</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="bg-white p-6 border border-slate-200 rounded-2xl hover:shadow-md transition-shadow relative overflow-hidden group">
                            {member.status === 'Over Capacity' && (
                                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] uppercase font-bold tracking-wider py-1 px-3 rounded-bl-xl">
                                    OverCapacity
                                </div>
                            )}
                            {member.status === 'Available' && (
                                <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] uppercase font-bold tracking-wider py-1 px-3 rounded-bl-xl">
                                    Bench
                                </div>
                            )}
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center text-xl font-bold text-slate-600">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                                    <p className="text-slate-500 text-sm">{member.role}</p>
                                    <p className="text-secondary text-xs uppercase tracking-widest font-bold mt-1">{member.department}</p>
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-slate-600">Current Workload</span>
                                    <span className={`text-sm font-bold ${member.workload >= 100 ? 'text-red-600' : member.workload < 50 ? 'text-green-600' : 'text-slate-900'}`}>{member.workload}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${member.workload >= 100 ? 'bg-red-500' : member.workload < 50 ? 'bg-green-500' : 'bg-blue-500'}`}
                                        style={{ width: `${Math.min(member.workload, 100)}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-sm font-medium text-slate-500 pt-4 border-t border-slate-100 mt-4">
                                <span>{member.projects} Active Projects</span>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-colors">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
