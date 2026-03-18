"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, LogOut, Shield, User as UserIcon } from "lucide-react";
import { ThemeToggle } from "../ThemeToggle";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Pets", href: "/pets" },
  { name: "Apply", href: "/apply" },
  { name: "Dashboard", href: "/dashboard" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Fetch user status
    fetch("/api/auth/me")
      .then(res => res.ok ? res.json() : null)
      .then(data => data?.authenticated ? setUser(data.user) : setUser(null));

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
    router.refresh();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-800" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-accent-purple flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform">
            <Heart size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white font-outfit uppercase">
            Pet <span className="text-brand-primary">Adoption</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-bold transition-colors hover:text-brand-primary ${
                pathname === link.href 
                  ? "text-brand-primary" 
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <div className="flex items-center gap-6">
              {/* Role Badge */}
              <div className={`hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${user.role === 'ADMIN' ? 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400' : 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary'}`}>
                {user.role === 'ADMIN' ? <Shield size={12} /> : <UserIcon size={12} />}
                {user.role}
              </div>

              <div className="flex items-center gap-4">
                <Link 
                  href={user.role === "ADMIN" ? "/admin" : "/apply"}
                  className="flex items-center gap-2 text-sm font-extrabold text-gray-700 dark:text-gray-200 hover:text-brand-primary transition-colors uppercase tracking-tight"
                >
                  {user.role === "ADMIN" ? (
                    <>
                      <Shield size={16} className="text-purple-500" />
                      Admin Panel
                    </>
                  ) : (
                    <>
                      <Heart size={16} className="text-brand-primary" />
                      Apply for Pet
                    </>
                  )}
                </Link>
                <div className="w-px h-4 bg-gray-200 dark:bg-gray-800" />
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-all font-bold text-xs flex items-center gap-2 uppercase tracking-widest"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-brand-primary transition-all">
                Log In
              </Link>
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-black shadow-lg hover:shadow-brand-primary/20 transition-all"
                >
                  Join Now
                </motion.button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 dark:text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-black ${
                    pathname === link.href 
                      ? "text-brand-primary" 
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-4">
                {user ? (
                  <>
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                          <UserIcon size={24} />
                       </div>
                       <div>
                          <p className="font-black text-gray-900 dark:text-white">{user.username}</p>
                          <p className="text-sm text-gray-500">{user.role}</p>
                       </div>
                    </div>
                    <button 
                      onClick={() => { handleLogout(); setIsOpen(false); }}
                      className="w-full py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-bold flex items-center justify-center gap-2"
                    >
                      <LogOut size={20} />
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <button className="w-full py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-bold">
                        Log In
                      </button>
                    </Link>
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      <button className="w-full py-4 rounded-2xl bg-brand-primary text-white text-lg font-bold shadow-xl">
                        Join Now
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
