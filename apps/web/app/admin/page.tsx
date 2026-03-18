"use client";

import { useEffect, useState } from "react";
import { AdminLayout } from "../../components/admin/AdminLayout";
import { StatCard } from "../../components/admin/StatCard";
import { ApplicationsChart, PetStatusChart } from "../../components/admin/Charts";
import { AdminSkeleton } from "../../components/admin/AdminSkeleton";
import { 
  Dog, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  ArrowRight,
  User,
  Plus
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [recentApps, setRecentApps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [petsRes, appsRes] = await Promise.all([
          fetch("/api/pets"),
          fetch("/api/applications")
        ]);
        
        const pets = await petsRes.json();
        const apps = await appsRes.json();

        setStats({
          totalPets: pets.length,
          availablePets: pets.filter((p: any) => p.status === "AVAILABLE").length,
          totalApps: apps.length,
          approvedApps: apps.filter((a: any) => a.status === "APPROVED").length,
        });

        setRecentApps(apps.slice(0, 5));
      } catch (err) {
        console.error("Failed to fetch dashboard data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <AdminLayout title="Dashboard"><AdminSkeleton /></AdminLayout>;

  return (
    <AdminLayout title="Dashboard Overview">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard 
          label="Total Pets" 
          value={stats?.totalPets || 0} 
          icon={Dog} 
          color="text-purple-600"
          trend={{ value: 12, isUp: true }}
        />
        <StatCard 
          label="Available" 
          value={stats?.availablePets || 0} 
          icon={CheckCircle} 
          color="text-green-500"
          trend={{ value: 2, isUp: true }}
        />
        <StatCard 
          label="Applications" 
          value={stats?.totalApps || 0} 
          icon={FileText} 
          color="text-blue-500"
          trend={{ value: 5, isUp: false }}
        />
        <StatCard 
          label="Approved" 
          value={stats?.approvedApps || 0} 
          icon={AlertCircle} 
          color="text-orange-500"
          trend={{ value: 8, isUp: true }}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Charts */}
        <div className="lg:col-span-2">
           <ApplicationsChart />
        </div>
        <div className="lg:col-span-1">
           <PetStatusChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest font-outfit">Recent Applications</h3>
              <Link href="/admin/applications" className="text-xs font-black text-purple-600 uppercase hover:underline flex items-center gap-1">
                 View All <ArrowRight size={14} />
              </Link>
           </div>

           <div className="space-y-4">
              {recentApps.map((app, i) => (
                 <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={app.id} 
                    className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-purple-500/30 transition-all group"
                 >
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-purple-500 transition-colors">
                          <User size={18} />
                       </div>
                       <div>
                          <p className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-tight leading-none mb-1">{app.applicantName}</p>
                          <p className="text-[10px] font-bold text-gray-500 uppercase">Applying for {app.pet?.name || "Pet"}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="hidden sm:block text-right">
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Status</p>
                          <span className={`text-[10px] font-black uppercase ${
                             app.status === 'APPROVED' ? 'text-green-500' : 
                             app.status === 'REJECTED' ? 'text-red-500' : 'text-orange-500'
                          }`}>
                             {app.status}
                          </span>
                       </div>
                       <div className="w-8 h-8 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:text-purple-500 transition-all cursor-pointer">
                          <ArrowRight size={14} />
                       </div>
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
           <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[2rem] p-8 text-white shadow-xl shadow-purple-500/20 relative overflow-hidden">
              <div className="relative z-10">
                 <h3 className="text-lg font-black uppercase tracking-tight font-outfit mb-2">Need to list a pet?</h3>
                 <p className="text-purple-100 text-sm font-medium mb-6 opacity-80 leading-relaxed">Expand your shelter's reach and find loving homes faster with our pro tools.</p>
                 <Link href="/admin/pets">
                    <button className="w-full py-4 rounded-2xl bg-white text-purple-700 font-black text-sm uppercase tracking-widest shadow-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                       <Plus size={18} />
                       Add New Pet
                    </button>
                 </Link>
              </div>
              <Dog className="absolute -right-4 -bottom-4 opacity-10 rotate-12" size={160} />
           </div>

           <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3 text-orange-500">
                 <Clock size={20} />
                 <span className="text-xs font-black uppercase tracking-widest">Pending Approvals</span>
              </div>
              <h4 className="text-4xl font-black text-gray-900 dark:text-white font-outfit">{stats?.totalApps - stats?.approvedApps || 0}</h4>
              <p className="text-[10px] font-bold text-gray-500 uppercase leading-relaxed">Applications awaiting review from your team.</p>
              <Link href="/admin/applications">
                 <button className="text-xs font-black text-purple-600 uppercase hover:underline">View Queue</button>
              </Link>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
}
