import { CheckCircle2, Link2, ShieldAlert, Key, Zap } from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="max-w-[1000px] mx-auto space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Platform Settings</h1>
                    <p className="text-slate-600">Configure integrations, security parameters, and application preferences.</p>
                </div>
                <button className="px-6 py-2.5 bg-primary-dark font-bold text-white rounded-full hover:bg-primary transition-colors shadow-sm">
                    Save Changes
                </button>
            </div>

            {/* Security Settings */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                    <ShieldAlert className="w-6 h-6 text-secondary" />
                    <h2 className="text-xl font-bold text-slate-900">Security & Access</h2>
                </div>

                <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 border border-slate-100 rounded-xl bg-slate-50">
                        <div>
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <Key className="w-4 h-4 text-slate-400" /> Multi-Factor Authentication (MFA)
                            </h4>
                            <p className="text-sm text-slate-500 mt-1">Require MFA for all Admin and Consultant roles.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                        </label>
                    </div>

                    <div className="flex justify-between items-center p-4 border border-slate-100 rounded-xl bg-slate-50">
                        <div>
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                Role-Based Access Control (RBAC) <CheckCircle2 className="w-4 h-4 text-green-500" />
                            </h4>
                            <p className="text-sm text-slate-500 mt-1">Enforced strict boundaries between Client, Consultant, and Admin data.</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">Active</span>
                    </div>
                </div>
            </div>

            {/* API Integrations */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <Link2 className="w-6 h-6 text-secondary" />
                    <h2 className="text-xl font-bold text-slate-900">API Integrations</h2>
                </div>
                <p className="text-sm text-slate-600 mb-8 max-w-2xl">
                    Connect internal tools to the platform to synchronize data automatically across your consulting ecosystem.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { name: 'Slack', desc: 'Alerts for new leads & project milestones', connected: true, icon: 'bg-indigo-50 text-indigo-500' },
                        { name: 'Jira Software', desc: 'Sync engineering tasks with Client Portal', connected: true, icon: 'bg-blue-50 text-blue-500' },
                        { name: 'Google Workspace', desc: 'Calendar scheduling & doc sharing', connected: true, icon: 'bg-red-50 text-red-500' },
                        { name: 'QuickBooks Online', desc: 'Automate invoice generation', connected: false, icon: 'bg-green-50 text-green-500' },
                        { name: 'HubSpot CRM', desc: 'Two-way sync for lead data', connected: false, icon: 'bg-orange-50 text-orange-500' },
                        { name: 'n8n Workflow', desc: 'Custom enterprise automations', connected: true, icon: 'bg-slate-50 text-slate-700 font-bold tracking-tighter' }
                    ].map((app, idx) => (
                        <div key={idx} className="flex flex-col p-5 border border-slate-200 rounded-2xl hover:border-secondary transition-colors relative group">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${app.icon}`}>
                                    {app.name === 'n8n Workflow' ? 'n8n' : <Zap className="w-6 h-6" />}
                                </div>
                                {app.connected ? (
                                    <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                                        <CheckCircle2 className="w-3 h-3" /> Connected
                                    </span>
                                ) : (
                                    <button className="text-xs font-bold text-slate-600 hover:text-secondary hover:underline transition-all">
                                        Connect
                                    </button>
                                )}
                            </div>
                            <h4 className="font-bold text-slate-900 mb-1">{app.name}</h4>
                            <p className="text-sm text-slate-500">{app.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
