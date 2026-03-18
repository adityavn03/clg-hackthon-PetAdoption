"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart, Search, ShieldCheck, Zap, Star } from "lucide-react";
import { Section, SectionHeader } from "../components/layout/Section";
import { ProcessIllustration } from "../components/ProcessIllustration";

const STEPS = [
  {
    icon: <Search className="w-6 h-6 text-brand-primary" />,
    title: "Find Your Buddy",
    desc: "Browse through hundreds of verified listings from trusted local shelters."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-accent-purple" />,
    title: "Apply Online",
    desc: "Submit your application securely through our platform in just a few clicks."
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-secondary" />,
    title: "Bring Them Home",
    desc: "Once approved, finalize the adoption and start your new life together."
  }
];

const FEATURES = [
  { title: "Verified Shelters", desc: "We only partner with registered, ethical organizations." },
  { title: "Secure Payments", desc: "Safe handling of adoption fees and donations." },
  { title: "Health Records", desc: "Complete medical history for every pet listed." },
  { title: "Community Support", desc: "Join thousands of successful adoptive families." },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-gray-950">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-black uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              Now Live in 50+ Cities
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white leading-[0.9] mb-8 font-outfit uppercase">
              Find Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-accent-purple to-brand-secondary">Perfect</span> <br />
              Companion.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed font-medium">
              The world's most trusted platform for pet adoption. We make the journey of finding your best friend seamless, secure, and joyful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pets">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black text-lg shadow-xl hover:shadow-brand-primary/20 transition-all flex items-center justify-center gap-2 group"
                >
                  Browse Listings
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/apply">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-800 font-black text-lg shadow-lg"
                >
                  Apply Now
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-gray-950 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-gray-500">
                <span className="text-gray-900 dark:text-white">2,000+</span> pets adopted this month
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1583512676605-934799136f83?q=80&w=800&auto=format&fit=crop" 
                alt="Happy Dog" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-primary flex items-center justify-center text-white shadow-lg">
                <Heart fill="white" size={24} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-gray-400">Adopted Today</p>
                <p className="text-lg font-black text-gray-900 dark:text-white uppercase">Buddy the Golden</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* How it Works */}
      <Section className="bg-gray-50 dark:bg-gray-900/50">
        <SectionHeader 
          centered 
          title={<>Adoption Process <span className="text-brand-primary">Simplified.</span></>}
          subtitle="We've streamlined every step so you can focus on what matters: welcoming your new companion."
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-brand-primary/10">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase font-outfit tracking-tight">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Features Grid */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <ProcessIllustration />
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 dark:text-white leading-tight mb-8 font-outfit uppercase">
              A Platform Built for <span className="text-brand-primary">Real</span> Impact.
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 dark:text-white uppercase text-sm mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-gray-900 to-black text-white shadow-2xl">
              <div className="flex items-center gap-2 text-accent-yellow mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg italic font-medium leading-relaxed mb-6">
                "Our experience was absolutely amazing. Within a week of applying, we were matched with Bella. The platform made everything so clear and stressful-free."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700" />
                <div>
                  <p className="text-sm font-black">Sarah & Mark Jenkins</p>
                  <p className="text-xs text-gray-400">Adopted Bella (Labrador)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pb-32">
        <div className="relative rounded-[3rem] bg-brand-primary overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-[80px] -ml-40 -mb-40" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8 font-outfit uppercase">
              Ready to meet your brand <span className="underline decoration-white/30 decoration-8 underline-offset-8">new</span> best friend?
            </h2>
            <p className="text-xl text-white/90 font-medium mb-12">
              Browse thousands of loving pets in your local area and start your adoption journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/pets">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-2xl bg-white text-gray-900 font-black text-xl shadow-2xl hover:bg-gray-50 transition-colors"
                >
                  Find a Pet
                </motion.button>
              </Link>
              <Link href="/apply">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-2xl bg-gray-900 text-white font-black text-xl shadow-2xl"
                >
                  Apply Now
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}