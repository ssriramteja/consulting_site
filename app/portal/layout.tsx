import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function PortalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession()

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/portal")
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <div className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center z-10">
                <div className="font-bold text-slate-900">Client Portal</div>
                <div className="flex gap-4 items-center">
                    <span className="text-sm font-medium text-slate-600">{session.user?.name}</span>
                    <a href="/api/auth/signout" className="text-sm text-secondary hover:underline">Sign Out</a>
                </div>
            </div>
            <div className="flex-grow p-8">
                {children}
            </div>
        </div>
    )
}
