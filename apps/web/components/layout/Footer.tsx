"use client";

import Link from "next/link";
import { Heart, Instagram, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-accent-purple flex items-center justify-center text-white shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-black tracking-tight text-gray-900 dark:text-white font-outfit uppercase">
                Pet <span className="text-brand-primary">Adoption</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Our mission is to help every animal find a loving forever home. We connect shelters with passionate adopters through a seamless, modern platform.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
                <Github size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium">Home</Link></li>
              <li><Link href="/pets" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium">Browse Pets</Link></li>
              <li><Link href="/apply" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium">Application Portal</Link></li>
              <li><Link href="/admin" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium">Shelter Dashboard</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium">Adoption Guide</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium">Shelter Partners</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium">Success Stories</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors text-sm font-medium">Donation Programs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-gray-900 dark:text-white mb-6">
              Get in touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400 text-sm font-medium">
                <Mail size={16} />
                hello@petadoption.com
              </li>
              <li className="pt-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-900 dark:text-white mb-2">Subscribe to our newsletter</p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 text-xs w-full focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    />
                    <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap">Join</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 dark:text-gray-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} Pet Adoption Platform. Built for real impacts.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-500 dark:text-gray-500 hover:text-brand-primary transition-colors text-xs font-medium">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-500 hover:text-brand-primary transition-colors text-xs font-medium">Terms of Service</Link>
            <Link href="#" className="text-gray-500 dark:text-gray-500 hover:text-brand-primary transition-colors text-xs font-medium">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
