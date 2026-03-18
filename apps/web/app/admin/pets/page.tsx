"use client";

import { useEffect, useMemo, useState } from "react";
import { AdminLayout } from "../../../components/admin/AdminLayout";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  CheckCircle, 
  XCircle,
  Eye,
  ArrowUpDown,
  Dog,
  Shield
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Pet = {
  id: string;
  name: string;
  species: "DOG" | "CAT" | "OTHER";
  breed: string | null;
  ageMonths: number | null;
  status: "AVAILABLE" | "RESERVED" | "ADOPTED" | "ARCHIVED";
  isPublished: boolean;
  description: string | null;
  shelter: { id: string; name: string };
  createdAt: string;
};

export default function AdminPetsPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [shelters, setShelters] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [filter, setFilter] = useState<"ALL" | Pet["status"]>("ALL");
  const [search, setSearch] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    species: "DOG",
    breed: "",
    ageMonths: "",
    shelterId: "",
    isPublished: true,
    description: "",
    imageUrl: "",
  });

  const filtered = useMemo(() => {
    return pets.filter((p) => {
      const matchesFilter = filter === "ALL" || p.status === filter;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                           p.breed?.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [pets, filter, search]);

  async function refresh() {
    setLoading(true);
    try {
      const [petsRes, sheltersRes] = await Promise.all([
        fetch("/api/pets"),
        fetch("/api/shelters"),
      ]);
      const petsData = await petsRes.json();
      const sheltersData = await sheltersRes.json();
      setPets(petsData);
      setShelters(sheltersData);
      if (sheltersData.length > 0 && !form.shelterId) {
        setForm(f => ({ ...f, shelterId: sheltersData[0].id }));
      }
    } catch (e) {
      setError("Failed to sync data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { refresh(); }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/pets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          ageMonths: form.ageMonths === "" ? undefined : Number(form.ageMonths),
        }),
      });
      if (!res.ok) throw new Error("Creation failed");
      setShowCreateModal(false);
      setForm({
        name: "",
        species: "DOG",
        breed: "",
        ageMonths: "",
        shelterId: shelters[0]?.id || "",
        isPublished: true,
        description: "",
        imageUrl: "",
      });
      refresh();
    } catch (err: any) {
      setError(err.message);
    }
  }

  async function updateStatus(id: string, status: Pet["status"]) {
    await fetch(`/api/pets/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    refresh();
  }

  async function deletePet(id: string) {
    if (!confirm("Are you sure?")) return;
    await fetch(`/api/pets/${id}`, { method: "DELETE" });
    refresh();
  }

  return (
    <AdminLayout title="Pets Management">
      {/* Search & Actions Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <div className="flex items-center gap-4 w-full md:w-auto">
           <div className="relative flex-1 md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search pets..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium shadow-sm transition-all"
              />
           </div>
           <button className="p-3 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-500 hover:text-purple-500 transition-all shadow-sm">
              <Filter size={18} />
           </button>
        </div>

        <button 
          onClick={() => setShowCreateModal(true)}
          className="w-full md:w-auto px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-sm uppercase tracking-widest shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 transition-all"
        >
           <Plus size={18} />
           List New Pet
        </button>
      </div>

      {/* Stats Cards Small */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
         <StatsMini label="Available" value={pets.filter(p => p.status === 'AVAILABLE').length} color="text-green-500" bg="bg-green-500/10" />
         <StatsMini label="Adopted" value={pets.filter(p => p.status === 'ADOPTED').length} color="text-purple-500" bg="bg-purple-500/10" />
         <StatsMini label="Reserved" value={pets.filter(p => p.status === 'RESERVED').length} color="text-blue-500" bg="bg-blue-500/10" />
         <StatsMini label="Total" value={pets.length} color="text-gray-500" bg="bg-gray-500/10" />
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <table className="w-full text-left">
           <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
                 <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Pet Info</th>
                 <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Shelter</th>
                 <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Status</th>
                 <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Identity</th>
                 <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-right">Actions</th>
              </tr>
           </thead>
           <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {filtered.map((pet) => (
                 <motion.tr 
                    layout
                    key={pet.id} 
                    className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/10 transition-colors"
                 >
                    <td className="px-6 py-4">
                       <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-purple-600 font-black relative overflow-hidden group">
                             {pet.species === 'DOG' ? <Dog size={24} /> : <div className="text-xl">🐱</div>}
                          </div>
                          <div>
                             <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight">{pet.name}</p>
                             <p className="text-[10px] font-bold text-gray-500 uppercase">{pet.breed || pet.species} · {pet.ageMonths || '?'}m</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-6 py-4">
                       <p className="text-xs font-bold text-gray-700 dark:text-gray-300">{pet.shelter.name}</p>
                    </td>
                    <td className="px-6 py-4">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          pet.status === 'AVAILABLE' ? 'bg-green-500/10 text-green-600' :
                          pet.status === 'ADOPTED' ? 'bg-purple-500/10 text-purple-600' :
                          'bg-orange-500/10 text-orange-600'
                       }`}>
                          {pet.status}
                       </span>
                    </td>
                    <td className="px-6 py-4">
                       <code className="text-[10px] font-bold text-gray-400 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded opacity-50 group-hover:opacity-100 transition-opacity">
                          {pet.id.slice(0, 8)}...
                       </code>
                    </td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Link href={`/pets/${pet.id}`}>
                             <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-purple-600 transition-all">
                                <Eye size={16} />
                             </button>
                          </Link>
                          <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-600 transition-all">
                             <Edit2 size={16} />
                          </button>
                          <button 
                            onClick={() => deletePet(pet.id)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-red-500 transition-all"
                          >
                             <Trash2 size={16} />
                          </button>
                       </div>
                    </td>
                 </motion.tr>
              ))}
           </tbody>
        </table>
        {filtered.length === 0 && (
           <div className="py-20 text-center">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 mx-auto mb-4">
                 <Search size={32} />
              </div>
              <p className="text-sm font-black text-gray-400 uppercase tracking-widest">No pets found matching your criteria</p>
           </div>
        )}
      </div>

      {/* Creation Modal */}
      <AnimatePresence>
         {showCreateModal && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
               <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowCreateModal(false)}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
               />
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="w-full max-w-2xl bg-white dark:bg-gray-950 rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden"
               >
                  <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/20">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                           <Plus size={20} />
                        </div>
                        <h2 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight">List New Pet</h2>
                     </div>
                     <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <XCircle size={24} />
                     </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto max-h-[70vh]">
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Pet Name</label>
                           <input 
                              required
                              value={form.name}
                              onChange={(e) => setForm({...form, name: e.target.value})}
                              placeholder="e.g. Buddy"
                              className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Species</label>
                           <select 
                              value={form.species}
                              onChange={(e) => setForm({...form, species: e.target.value as any})}
                              className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all"
                           >
                              <option value="DOG">DOG</option>
                              <option value="CAT">CAT</option>
                              <option value="OTHER">OTHER</option>
                           </select>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Breed</label>
                           <input 
                              value={form.breed}
                              onChange={(e) => setForm({...form, breed: e.target.value})}
                              placeholder="e.g. Golden Retriever"
                              className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Age (Months)</label>
                           <input 
                              type="number"
                              value={form.ageMonths}
                              onChange={(e) => setForm({...form, ageMonths: e.target.value})}
                              placeholder="e.g. 12"
                              className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all"
                           />
                        </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Shelter</label>
                        <select 
                           value={form.shelterId}
                           onChange={(e) => setForm({...form, shelterId: e.target.value})}
                           className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all"
                        >
                           {shelters.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                        </select>
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Image URL</label>
                        <input 
                           value={form.imageUrl}
                           onChange={(e) => setForm({...form, imageUrl: e.target.value})}
                           placeholder="https://images.unsplash.com/..."
                           className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all"
                        />
                     </div>

                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Description</label>
                        <textarea 
                           value={form.description}
                           onChange={(e) => setForm({...form, description: e.target.value})}
                           placeholder="Tell us about the pet..."
                           className="w-full px-5 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 text-sm font-medium transition-all min-h-[120px]"
                        />
                     </div>

                     <div className="pt-4 flex gap-4">
                        <button 
                           type="button"
                           onClick={() => setShowCreateModal(false)}
                           className="flex-1 py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-black text-sm uppercase tracking-widest transition-all"
                        >
                           Cancel
                        </button>
                        <button 
                           type="submit"
                           className="flex-[2] py-4 rounded-2xl bg-purple-600 text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-purple-500/20 hover:bg-purple-700 transition-all"
                        >
                           Publish Listing
                        </button>
                     </div>
                  </form>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
    </AdminLayout>
  );
}

function StatsMini({ label, value, color, bg }: { label: string, value: number, color: string, bg: string }) {
  return (
     <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex items-center justify-between">
        <div>
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
           <p className={`text-xl font-black ${color} font-outfit uppercase tracking-tighter`}>{value}</p>
        </div>
        <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center opacity-80`}>
           <Shield size={18} className={color} />
        </div>
     </div>
  )
}
