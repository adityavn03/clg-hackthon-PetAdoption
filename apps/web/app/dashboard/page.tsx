"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Inbox,
  Calendar,
  ShieldCheck,
  Smartphone,
  Mail
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "../../components/ImageWithFallback";

export default function UserDashboard() {
  const [apps, setApps] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    try {
      const [userRes, appsRes] = await Promise.all([
        fetch("/api/auth/me"),
        fetch("/api/applications")
      ]);
      
      const userData = await userRes.json();
      const appsData = await appsRes.json();
      
      if (userData.authenticated) {
        setUser(userData.user);
        // Filter apps for the current user
        setApps(appsData.filter((a: any) => a.userId === userData.user.id));
      }
    } catch (err) {
      console.error("Dashboard sync failed", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
    // Simple polling for "real-time" data consistency
    const interval = setInterval(refresh, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <div className="w-16 h-16 rounded-3xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shadow-inner">
                    <Heart size={32} fill="currentColor" />
                 </div>
                 <div>
                    <h1 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter font-outfit">My Dashboard</h1>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Welcome back, {user?.username}</p>
                 </div>
              </div>
           </div>
           
           <div className="flex gap-4">
              <StatsMini label="Apps" value={apps.length} color="text-brand-primary" />
              <StatsMini label="Approved" value={apps.filter(a => a.status === 'APPROVED').length} color="text-green-500" />
           </div>
        </div>

        {/* Applications Section */}
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-black uppercase tracking-tight text-gray-900 dark:text-white">Active Applications</h2>
              <Link href="/pets" className="text-xs font-black text-brand-primary uppercase tracking-widest hover:underline">Apply for more pets →</Link>
           </div>

           <div className="grid grid-cols-1 gap-6">
              <AnimatePresence mode="popLayout">
                 {apps.length > 0 ? (
                    apps.map((app, i) => (
                       <motion.div
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          key={app.id}
                          className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group"
                       >
                          {/* Success Celebration Background */}
                          {app.status === 'APPROVED' && (
                             <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent pointer-events-none" />
                          )}

                          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
                             <div className="flex items-center gap-6 flex-1">
                                <div className="w-24 h-24 rounded-3xl overflow-hidden relative">
                                   <ImageWithFallback 
                                      src={app.pet?.media?.[0]?.url} 
                                      alt={app.pet?.name} 
                                      className="w-full h-full object-cover"
                                   />
                                   <div className={`absolute inset-0 border-4 rounded-3xl ${
                                      app.status === 'APPROVED' ? 'border-green-500/50' : 'border-transparent'
                                   }`} />
                                </div>
                                <div className="space-y-1">
                                   <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tighter leading-none">{app.pet?.name}</h3>
                                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{app.pet?.breed || app.pet?.species}</p>
                                   <div className="flex items-center gap-4 mt-2">
                                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                         app.status === 'APPROVED' ? 'bg-green-500/10 text-green-600' :
                                         app.status === 'REJECTED' ? 'bg-red-500/10 text-red-600' :
                                         'bg-orange-500/10 text-orange-600'
                                      }`}>
                                         {app.status}
                                      </span>
                                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                         <Calendar size={12} />
                                         Applied {new Date(app.createdAt).toLocaleDateString()}
                                      </span>
                                   </div>
                                </div>
                             </div>

                             <div className="w-full lg:w-auto flex flex-col gap-3">
                                {app.status === 'APPROVED' ? (
                                   <div className="bg-green-500 text-white px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-green-500/20">
                                      <ShieldCheck size={20} />
                                      <span className="font-black text-sm uppercase tracking-widest">Adoption Confirmed! 🎉</span>
                                   </div>
                                ) : (
                                   <Link href={`/pets/${app.petId}`} className="w-full">
                                      <button className="w-full lg:w-48 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white font-black text-xs uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                                         View Profile
                                         <ChevronRight size={16} />
                                      </button>
                                   </Link>
                                )}
                             </div>
                          </div>
                       </motion.div>
                    ))
                 ) : (
                    <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="py-20 text-center bg-gray-50/50 dark:bg-gray-900/50 rounded-[3rem] border-2 border-dashed border-gray-100 dark:border-gray-800"
                    >
                       <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-3xl flex items-center justify-center text-gray-300 mx-auto mb-4 shadow-sm">
                          <Inbox size={32} />
                       </div>
                       <p className="text-gray-400 font-black uppercase tracking-widest text-sm">No active applications currently</p>
                       <Link href="/pets">
                          <button className="mt-6 px-8 py-3 rounded-2xl bg-brand-primary text-white font-black text-xs uppercase tracking-widest shadow-xl">Start Browsing Pets</button>
                       </Link>
                    </motion.div>
                 )}
              </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
}

function StatsMini({ label, value, color }: { label: string, value: number, color: string }) {
  return (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 px-6 py-4 rounded-[2rem] shadow-sm">
       <div className={`text-2xl font-black ${color} leading-none font-outfit`}>{value}</div>
       <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">{label}</div>
    </div>
  );
}
