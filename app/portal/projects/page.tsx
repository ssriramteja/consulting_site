import { getServerSession } from "next-auth/next"
import KanbanBoard from "@/components/ui/KanbanBoard"

export default async function ProjectsPage() {
    const session = await getServerSession()

    return (
        <div className="max-w-[1400px] h-full flex flex-col mx-auto">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Project Tracker</h1>
                    <p className="text-slate-600">Real-time status of your active deliverables and sprints.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-2 bg-white border border-slate-200 font-bold text-slate-700 rounded-full hover:border-secondary hover:text-secondary transition-colors shadow-sm">
                        Filter
                    </button>
                    <button className="px-6 py-2 bg-primary-dark font-bold text-white rounded-full hover:bg-primary transition-colors shadow-sm">
                        Request New Feature
                    </button>
                </div>
            </div>

            <div className="flex-grow">
                <KanbanBoard />
            </div>
        </div>
    )
}
