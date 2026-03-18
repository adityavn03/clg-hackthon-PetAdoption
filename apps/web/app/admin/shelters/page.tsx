"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "../../../components/admin/AdminLayout";
import { Home, Plus, Trash2, MapPin, Globe, Phone, Shield } from "lucide-react";
import { motion } from "framer-motion";

type Shelter = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
};

export default function AdminSheltersPage() {
  const [shelters, setShelters] = useState<Shelter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    phone: "",
    email: "",
    website: "",
  });

  async function refresh() {
    setLoading(true);
    try {
      const res = await fetch("/api/shelters");
      const data = await res.json();
      setShelters(data);
    } catch (e) {
      setError("Failed to sync shelters");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  async function createShelter(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/shelters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to create shelter");
      setForm({ name: "", slug: "", description: "", phone: "", email: "", website: "" });
      refresh();
    } catch (err: any) {
      setError(err.message);
    }
  }

  async function deleteShelter(id: string) {
    if (!confirm("Delete shelter? This may fail if pets are linked.")) return;
    await fetch(`/api/shelters/${id}`, { method: "DELETE" });
    refresh();
  }

  return (
    <AdminLayout title="Shelter Management">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Creation Form */}
        <div className="lg:col-span-1">
           <div className="bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 p-8 shadow-sm h-fit sticky top-28">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg">
                    <Plus size={20} />
                 </div>
                 <h2 className="text-lg font-black text-gray-900 dark:text-white uppercase tracking-tight font-outfit">Add Shelter</h2>
              </div>

              <form onSubmit={createShelter} className="space-y-4">
                 <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Name</label>
                    <input 
                       required
                       value={form.name}
                       onChange={(e) => setForm({...form, name: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, '-')})}
                       className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all"
                    />
                 </div>
                 <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Slug</label>
                    <input 
                       required
                       value={form.slug}
                       onChange={(e) => setForm({...form, slug: e.target.value})}
                       className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all"
                    />
                 </div>
                 <button 
                   type="submit"
                   className="w-full py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-xs uppercase tracking-widest shadow-xl hover:scale-105 transition-all mt-4"
                 >
                    Register Shelter
                 </button>
              </form>
           </div>
        </div>

        {/* Shelters List */}
        <div className="lg:col-span-2 space-y-6">
           {shelters.map((s, i) => (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={s.id} 
                className="bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 p-8 shadow-sm flex items-center justify-between group"
              >
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-600 shadow-inner">
                       <Home size={32} />
                    </div>
                    <div>
                       <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight mb-1">{s.name}</h3>
                       <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                          <span className="flex items-center gap-1"><MapPin size={12} /> {s.slug}</span>
                          {s.website && <span className="flex items-center gap-1"><Globe size={12} /> Website</span>}
                       </div>
                    </div>
                 </div>
                 <button 
                   onClick={() => deleteShelter(s.id)}
                   className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100"
                 >
                    <Trash2 size={20} />
                 </button>
              </motion.div>
           ))}
           {shelters.length === 0 && (
              <div className="py-20 text-center bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800">
                 <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">No shelters registered yet</p>
                 <Shield size={48} className="text-gray-200 mx-auto" />
              </div>
           )}
        </div>
      </div>
    </AdminLayout>
  );
}
