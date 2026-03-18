"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, Loader2, ArrowRight, Heart, Shield, User as UserIcon, Sparkles } from "lucide-react";

type Role = "USER" | "ADMIN";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/";
  
  const [role, setRole] = useState<Role>("USER");
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Redirect based on role
      if (data.role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push(from === "/" ? "/pets" : from);
      }
      
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
      {/* Dynamic Background Blobs */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-blob transition-colors duration-1000 ${is_admin ? "bg-purple-500/10" : "bg-brand-primary/10"}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] animate-blob animation-delay-2000 transition-colors duration-1000 ${is_admin ? "bg-red-500/10" : "bg-accent-purple/10"}`} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <motion.div 
              animate={{ 
                rotate: is_admin ? 360 : 0,
                scale: [1, 1.1, 1]
              }}
              className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-700 ${is_admin ? "bg-gradient-to-br from-purple-600 to-red-600" : "bg-gradient-to-br from-brand-primary to-accent-purple"}`}
            >
              {is_admin ? <Shield size={28} /> : <Heart size={28} fill="currentColor" />}
            </motion.div>
          </Link>
          <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white font-outfit uppercase mb-2">
            {is_admin ? "Admin Portal" : "Member Login"}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {is_admin ? "Secure access for shelter management" : "Welcome back to the pet community"}
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800">
          
          {/* Role Toggle */}
          <div className="flex p-1.5 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-8 relative">
            <motion.div 
              layoutId="role-bg"
              className={`absolute inset-y-1.5 rounded-xl shadow-lg transition-colors duration-500 ${is_admin ? "bg-purple-600 left-1/2 right-1.5" : "bg-brand-primary left-1.5 right-1/2"}`}
            />
            <button 
              onClick={() => setRole("USER")}
              className={`relative z-10 flex-1 py-3 flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest transition-colors duration-300 ${!is_admin ? "text-white" : "text-gray-500"}`}
            >
              <UserIcon size={16} />
              User
            </button>
            <button 
              onClick={() => setRole("ADMIN")}
              className={`relative z-10 flex-1 py-3 flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest transition-colors duration-300 ${is_admin ? "text-white" : "text-gray-500"}`}
            >
              <Shield size={16} />
              Admin
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${is_admin ? "text-purple-400" : "text-brand-primary/50"}`} />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@example.com"
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none transition-all text-gray-900 dark:text-white font-medium ${is_admin ? "focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500" : "focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">
                Password
              </label>
              <div className="relative group">
                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${is_admin ? "text-purple-400" : "text-brand-primary/50"}`} />
                <input
                  required
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 outline-none transition-all text-gray-900 dark:text-white font-medium ${is_admin ? "focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500" : "focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"}`}
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
              className={`w-full py-4 rounded-2xl text-white font-black text-lg shadow-xl flex items-center justify-center gap-2 group transition-all disabled:opacity-50 ${is_admin ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-900 dark:bg-white dark:text-gray-900"}`}
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  {is_admin ? "Access Dashboard" : "Log In"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          <div className="mt-8 text-center pt-8 border-t border-gray-100 dark:border-gray-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
              Don't have an account?{" "}
              <Link href="/signup" className={`font-black hover:underline underline-offset-4 transition-colors ${is_admin ? "text-purple-600" : "text-brand-primary"}`}>
                Sign up free
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
          <Sparkles size={12} className={is_admin ? "text-purple-400" : "text-brand-primary"} />
          {is_admin ? "Only authorized shelter staff" : "Adopt your dream pet today"}
          <Sparkles size={12} className={is_admin ? "text-purple-400" : "text-brand-primary"} />
        </motion.div>
      </motion.div>
    </main>
  );
}

import { Suspense } from "react";

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <Loader2 className="w-12 h-12 animate-spin text-brand-primary" />
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
