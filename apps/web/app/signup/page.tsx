"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, User as UserIcon, Loader2, ArrowRight, Heart, Shield, Sparkles } from "lucide-react";

type Role = "USER" | "ADMIN";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("USER");
  const [form, setForm] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, role }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Signup failed");
      }

      router.push(role === "ADMIN" ? "/admin" : "/pets");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const is_admin = role === "ADMIN";

  return (
    <main className="min-h-[90vh] flex items-center justify-center p-4 relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-700">
      {/* Background Blobs */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-blob transition-all duration-1000 ${is_admin ? "bg-purple-500/10" : "bg-brand-secondary/10"}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-blob animation-delay-2000 transition-all duration-1000 ${is_admin ? "bg-red-500/10" : "bg-accent-purple/10"}`} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <motion.div 
              animate={{ rotate: is_admin ? 360 : 0 }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-700 ${is_admin ? "bg-gradient-to-br from-purple-600 to-red-600" : "bg-gradient-to-br from-brand-secondary to-brand-primary"}`}
            >
              {is_admin ? <Shield size={28} /> : <Heart size={28} fill="currentColor" />}
            </motion.div>
          </Link>
          <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white font-outfit uppercase mb-2 leading-none">
            {is_admin ? "Shelter Registration" : "Create Account"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {is_admin ? "Help pets find their forever homes" : "Join our community of pet lovers"}
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800">
          
          {/* Role Selection Tabs */}
          <div className="flex p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-8 relative">
            <motion.div 
              layoutId="role-bg-signup"
              className={`absolute inset-y-1.5 rounded-xl shadow-lg transition-colors duration-500 ${is_admin ? "bg-purple-600 left-1/2 right-1.5" : "bg-brand-secondary left-1.5 right-1/2"}`}
            />
            <button 
              onClick={() => setRole("USER")}
              className={`relative z-10 flex-1 py-3 flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest transition-colors duration-300 ${!is_admin ? "text-white" : "text-gray-500"}`}
            >
              <UserIcon size={16} />
              Adopter
            </button>
            <button 
              onClick={() => setRole("ADMIN")}
              className={`relative z-10 flex-1 py-3 flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest transition-colors duration-300 ${is_admin ? "text-white" : "text-gray-500"}`}
            >
              <Shield size={16} />
              Shelter
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">
                Username
              </label>
              <div className="relative group">
                <UserIcon className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${is_admin ? "text-purple-400" : "text-brand-secondary/50"}`} />
                <input
                  required
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  placeholder="janesmith"
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none transition-all text-gray-900 dark:text-white font-medium ${is_admin ? "focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500" : "focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary"}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${is_admin ? "text-purple-400" : "text-brand-secondary/50"}`} />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none transition-all text-gray-900 dark:text-white font-medium ${is_admin ? "focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500" : "focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary"}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">
                Password
              </label>
              <div className="relative group">
                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${is_admin ? "text-purple-400" : "text-brand-secondary/50"}`} />
                <input
                  required
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none transition-all text-gray-900 dark:text-white font-medium ${is_admin ? "focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500" : "focus:ring-2 focus:ring-brand-secondary/20 focus:border-brand-secondary"}`}
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 text-red-600 dark:text-red-400 text-sm font-bold"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className={`w-full py-4 rounded-2xl text-white font-black text-lg shadow-xl flex items-center justify-center gap-2 group transition-all disabled:opacity-50 ${is_admin ? "bg-purple-600 hover:bg-purple-700 shadow-purple-500/10" : "bg-gray-900 dark:bg-white dark:text-gray-900"}`}
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  {is_admin ? "Register Shelter" : "Get Started"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Already have an account?{" "}
              <Link href="/login" className={`font-black hover:underline underline-offset-4 transition-colors ${is_admin ? "text-purple-600" : "text-brand-secondary"}`}>
                Log in instead
              </Link>
            </p>
          </div>
        </div>
        
        {/* Role Hint */}
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-6 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400"
        >
          <Sparkles size={12} className={is_admin ? "text-purple-400" : "text-brand-secondary"} />
          {is_admin ? "Access administrative tools" : "Your journey begins here"}
          <Sparkles size={12} className={is_admin ? "text-purple-400" : "text-brand-secondary"} />
        </motion.div>
      </motion.div>
    </main>
  );
}
