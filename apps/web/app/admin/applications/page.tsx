"use client";

import { useEffect, useMemo, useState } from "react";
import { AdminLayout } from "../../../components/admin/AdminLayout";
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Eye, 
  Mail,
  Phone,
  ArrowRight,
  Shield,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";

type Application = {
  id: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string | null;
  applicantAddress: string | null;
  message: string | null;
  status: "SUBMITTED" | "IN_REVIEW" | "APPROVED" | "REJECTED" | "WITHDRAWN";
  createdAt: string;
  pet: { id: string; name: string; species: string; breed: string | null };
  shelter: { id: string; name: string };
};

export default function AdminApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"ALL" | Application["status"]>("ALL");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return apps.filter((a) => {
      const matchesFilter = filter === "ALL" || a.status === filter;
      const matchesSearch = a.applicantName.toLowerCase().includes(search.toLowerCase()) || 
                           a.pet.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [apps, filter, search]);

  async function refresh() {
    setLoading(true);
    try {
      const res = await fetch("/api/applications");
      const data = await res.json();
      setApps(data);
    } catch (e) {
      setError("Failed to sync applications");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  async function updateStatus(id: string, status: Application["status"]) {
    const promise = fetch(`/api/applications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    toast.promise(promise, {
      loading: `Updating application to ${status}...`,
      success: (res) => {
         if (!res.ok) throw new Error("Failed to update");
         refresh();
         return `Application ${status === 'APPROVED' ? 'Approved 🎉' : status.toLowerCase()}`;
      },
      error: "Failed to update status",
    });
  }

  return (
    <AdminLayout title="Adoption Applications">
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <div className="flex items-center gap-4 w-full md:w-auto">
           <div className="relative flex-1 md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search by name or pet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium shadow-sm transition-all"
              />
           </div>
           <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-4 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none text-sm font-black uppercase tracking-widest text-gray-500 hover:text-purple-500 transition-all shadow-sm"
           >
              <option value="ALL">All Status</option>
              <option value="SUBMITTED">Submitted</option>
              <option value="IN_REVIEW">In Review</option>
              <option value="APPROVED">Approved</option>
              <option value="REJECTED">Rejected</option>
           </select>
        </div>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filtered.map((app, i) => (
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.05 }}
             key={app.id} 
             className="bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 p-8 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all group overflow-hidden relative"
           >
              {/* Status Side Border */}
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                 app.status === 'APPROVED' ? 'bg-green-500' :
                 app.status === 'REJECTED' ? 'bg-red-500' :
                 app.status === 'IN_REVIEW' ? 'bg-blue-500' : 'bg-orange-500'
              }`} />

              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
                 <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-purple-600 shadow-sm">
                          <FileText size={24} />
                       </div>
                       <div>
                          <h3 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight leading-none mb-1">{app.applicantName}</h3>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Submitted on {new Date(app.createdAt).toLocaleDateString()}</p>
                       </div>
                       <span className={`ml-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          app.status === 'APPROVED' ? 'bg-green-500/10 text-green-600' :
                          app.status === 'REJECTED' ? 'bg-red-500/10 text-red-600' :
                          app.status === 'IN_REVIEW' ? 'bg-blue-500/10 text-blue-600' : 'bg-orange-500/10 text-orange-600'
                       }`}>
                          {app.status}
                       </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-gray-50 dark:border-gray-800">
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Contact Info</p>
                          <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                             <Mail size={14} className="text-purple-500/50" />
                             {app.applicantEmail}
                          </div>
                          {app.applicantPhone && (
                             <div className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300">
                                <Phone size={14} className="text-purple-500/50" />
                                {app.applicantPhone}
                             </div>
                          )}
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Target Pet</p>
                          <Link href={`/pets/${app.pet.id}`}>
                             <div className="flex items-center gap-2 text-xs font-black text-purple-600 uppercase hover:underline">
                                <Shield size={14} />
                                {app.pet.name} ({app.pet.breed || app.pet.species})
                             </div>
                          </Link>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Shelter</p>
                          <p className="text-xs font-bold text-gray-700 dark:text-gray-300">{app.shelter.name}</p>
                       </div>
                    </div>

                    {app.message && (
                       <div className="pt-4">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Message</p>
                          <p className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed italic">
                             "{app.message}"
                          </p>
                       </div>
                    )}
                 </div>

                 <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-48 pt-6 lg:pt-0">
                    {app.status !== 'APPROVED' && (
                       <button 
                         onClick={() => updateStatus(app.id, 'APPROVED')}
                         className="flex-1 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-black text-xs uppercase tracking-widest shadow-lg shadow-green-500/20 transition-all flex items-center justify-center gap-2"
                       >
                          <CheckCircle2 size={16} />
                          Approve
                       </button>
                    )}
                    {app.status !== 'REJECTED' && (
                       <button 
                         onClick={() => updateStatus(app.id, 'REJECTED')}
                         className="flex-1 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-red-500 font-black text-xs uppercase tracking-widest hover:bg-red-50 transition-all flex items-center justify-center gap-2"
                       >
                          <XCircle size={16} />
                          Reject
                       </button>
                    )}
                    {app.status === 'SUBMITTED' && (
                       <button 
                         onClick={() => updateStatus(app.id, 'IN_REVIEW')}
                         className="flex-1 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                       >
                          <Clock size={16} />
                          Mark Review
                       </button>
                    )}
                 </div>
              </div>
           </motion.div>
        ))}
        {filtered.length === 0 && (
           <div className="py-20 text-center bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 mx-auto mb-4">
                 <FileText size={32} />
              </div>
              <p className="text-sm font-black text-gray-400 uppercase tracking-widest">No applications found</p>
           </div>
        )}
      </div>
    </AdminLayout>
  );
}
