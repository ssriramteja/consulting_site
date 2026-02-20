"use client";

import { useState } from 'react';
import { MoreHorizontal, Paperclip, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const defaultColumns = [
    { id: 'todo', title: 'Backlog', color: 'bg-slate-200' },
    { id: 'in_progress', title: 'In Progress', color: 'bg-blue-200' },
    { id: 'review', title: 'Review', color: 'bg-orange-200' },
    { id: 'done', title: 'Completed', color: 'bg-green-200' }
];

const initialTasks = [
    { id: 1, column: 'in_progress', title: 'Cloud Infrastructure Setup', tags: ['Backend'], comments: 3, attachments: 1, dueDate: 'Oct 15' },
    { id: 2, column: 'in_progress', title: 'Data Warehouse Migration', tags: ['Data'], comments: 5, attachments: 2, dueDate: 'Oct 18' },
    { id: 3, column: 'review', title: 'Security Audit & Compliance', tags: ['Security'], comments: 1, attachments: 4, dueDate: 'Oct 12' },
    { id: 4, column: 'todo', title: 'API Integration Testing', tags: ['QA'], comments: 0, attachments: 0, dueDate: 'Oct 22' },
    { id: 5, column: 'done', title: 'Requirements Gathering', tags: ['Strategy'], comments: 8, attachments: 3, dueDate: 'Oct 01' },
];

export default function KanbanBoard() {
    const [tasks, setTasks] = useState(initialTasks);

    // Simple manual move function for demo purposes (usually covered by drag and drop libraries like dnd-kit)
    const moveTask = (taskId: number, currentColumn: string) => {
        const colIndex = defaultColumns.findIndex(c => c.id === currentColumn);
        if (colIndex < defaultColumns.length - 1) {
            const nextCol = defaultColumns[colIndex + 1].id;
            setTasks(tasks.map(t => t.id === taskId ? { ...t, column: nextCol } : t));
        }
    };

    return (
        <div className="flex gap-6 overflow-x-auto pb-4 custom-scrollbar min-h-[600px]">
            {defaultColumns.map(col => (
                <div key={col.id} className="min-w-[320px] bg-slate-50/50 p-4 rounded-2xl flex flex-col h-full border border-slate-100">
                    <div className="flex justify-between items-center mb-6 px-2">
                        <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${col.color}`}></div>
                            <h3 className="font-bold text-slate-900">{col.title}</h3>
                            <span className="text-xs font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
                                {tasks.filter(t => t.column === col.id).length}
                            </span>
                        </div>
                        <button className="text-slate-400 hover:text-slate-900 transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-grow space-y-4">
                        {tasks.filter(t => t.column === col.id).map(task => (
                            <motion.div
                                layoutId={`task-${task.id}`}
                                key={task.id}
                                className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow group"
                                onClick={() => moveTask(task.id, task.column)}
                            >
                                <div className="flex gap-2 mb-3">
                                    {task.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-600 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="font-bold text-slate-900 mb-4">{task.title}</h4>
                                <div className="flex items-center justify-between text-slate-400 text-sm">
                                    <div className="flex items-center gap-4">
                                        {task.comments > 0 && (
                                            <div className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                                                <MessageSquare className="w-4 h-4" /> {task.comments}
                                            </div>
                                        )}
                                        {task.attachments > 0 && (
                                            <div className="flex items-center gap-1.5 hover:text-secondary transition-colors">
                                                <Paperclip className="w-4 h-4" /> {task.attachments}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                                        <Clock className="w-4 h-4" /> {task.dueDate}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
