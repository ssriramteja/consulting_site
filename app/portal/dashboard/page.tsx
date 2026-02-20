import { getServerSession } from "next-auth/next"
import { adminDb } from "@/lib/firebase-admin"
import { CheckCircle2, Clock, FileText, Calendar } from "lucide-react"

export const dynamic = 'force-dynamic';

export default async function PortalDashboard() {
    const session = await getServerSession()

    // In a real app we'd fetch projects strictly for the logged-in client via session user ID.
    // For this demo, we can just grab all projects or seed a fake one.
    const projectsRef = adminDb.collection("projects")
    const snapshot = await projectsRef.where("clientId", "==", (session?.user as any)?.id || "").get()

    let projects: any[] = []
    snapshot.forEach((doc: any) => {
        projects.push({ id: doc.id, ...doc.data() })
    })

    if (projects.length === 0 && session?.user?.email === "client@example.com") {
        // Create demo project
        const newProject = {
            name: "Cloud Migration Phase 1",
            description: "Migrating core services to AWS",
            status: "IN_PROGRESS",
            progress: 65,
            clientId: (session.user as any)?.id || "demo-id"
        }
        const docRef = await projectsRef.add(newProject)
        projects = [{ id: docRef.id, ...newProject }]
    }

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Welcome back, {session?.user?.name}</h1>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-secondary rounded-xl flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Active Projects</p>
                        <p className="text-2xl font-bold text-slate-900">{projects.length}</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Pending Documents</p>
                        <p className="text-2xl font-bold text-slate-900">2</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-sm font-medium">Next Meeting</p>
                        <p className="text-lg font-bold text-slate-900">Tomorrow, 10 AM</p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Projects</h2>
            <div className="space-y-6">
                {projects.map(project => (
                    <div key={project.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
                                <p className="text-slate-600">{project.description}</p>
                            </div>
                            <span className="px-4 py-1.5 bg-slate-100 text-slate-700 text-sm font-bold rounded-full uppercase tracking-wider">
                                {project.status.replace("_", " ")}
                            </span>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-slate-600">Project Progress</span>
                                <span className="text-sm font-bold text-secondary">{project.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-3">
                                <div
                                    className="bg-secondary h-3 rounded-full transition-all duration-1000"
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button className="px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-bold rounded-full transition-colors">
                                View Details
                            </button>
                            <button className="px-6 py-2 border border-slate-200 hover:border-secondary hover:text-secondary text-slate-600 text-sm font-bold rounded-full transition-all">
                                Project Assets
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
