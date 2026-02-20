import { getServerSession } from "next-auth/next"
import Scheduler from "@/components/ui/Scheduler"

export default async function MeetingsPage() {
    const session = await getServerSession()

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Schedule a Consultation</h1>
            <p className="text-slate-600 mb-12">Select a time to speak with your dedicated enterprise strategy team.</p>

            <Scheduler />
        </div>
    )
}
