import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { LayoutDashboard, Users, CreditCard, Clock, Settings, Briefcase, Sparkles } from "lucide-react"
import Link from "next/link"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession()

    // RBAC: Only allow ADMIN and CONSULTANT roles to access the admin area
    if (!session || (session.user as any)?.role === "CLIENT") {
        redirect("/api/auth/signin?callbackUrl=/admin/crm")
    }

    const navigation = [
        { name: 'CRM Dashboard', href: '/admin/crm', icon: LayoutDashboard },
        { name: 'Team Management', href: '/admin/team', icon: Users },
        { name: 'Invoices & Billing', href: '/admin/billing', icon: CreditCard },
        { name: 'Time Tracking', href: '/admin/time', icon: Clock },
        { name: 'Project Admin', href: '/admin/projects', icon: Briefcase },
        { name: 'AI & Automation', href: '/admin/ai', icon: Sparkles },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-slate-900 text-slate-300 flex flex-col transition-all">
                <div className="h-16 flex items-center px-6 font-bold text-white text-lg border-b border-slate-800">
                    Admin Console
                </div>
                <div className="flex-grow py-6 px-4 space-y-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
                        >
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="font-medium text-sm">{item.name}</span>
                        </Link>
                    ))}
                </div>
                <div className="p-4 border-t border-slate-800 mb-16">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-secondary font-bold text-xs uppercase">
                            {session.user?.name?.slice(0, 2) || 'AD'}
                        </div>
                        <div className="flex-grow min-w-0">
                            <p className="text-sm font-bold text-white truncate">{session.user?.name}</p>
                            <p className="text-xs text-slate-500 truncate">{(session.user as any)?.role}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0">
                    <h1 className="text-xl font-bold text-slate-900 truncate">Innovative IT Enterprise Portal</h1>
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold ring-1 ring-green-600/20">System Online</span>
                        <a href="/api/auth/signout" className="text-slate-500 hover:text-secondary transition-colors">Sign Out</a>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto bg-slate-50 p-8 custom-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    )
}
