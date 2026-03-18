"use client";

import { motion } from "framer-motion";

export function ApplicationsChart() {
  const data = [45, 62, 53, 84, 75, 92, 110];
  const max = Math.max(...data);
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm h-full">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest font-outfit">Application Trends</h3>
          <p className="text-xs text-gray-500 font-bold">New submissions this week</p>
        </div>
        <div className="text-right">
           <span className="text-2xl font-black text-purple-600 font-outfit">+24%</span>
        </div>
      </div>

      <div className="flex items-end justify-between h-48 gap-2">
        {data.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
            <div className="relative w-full flex flex-col justify-end h-full">
               <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(val / max) * 100}%` }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-lg shadow-lg shadow-purple-500/10 group-hover:to-red-400 transition-all cursor-pointer relative"
               >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {val}
                  </div>
               </motion.div>
            </div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PetStatusChart() {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm h-full flex flex-col">
       <div className="mb-8">
          <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest font-outfit">Pet Distribution</h3>
          <p className="text-xs text-gray-500 font-bold">Status breakdown</p>
       </div>
       
       <div className="flex-1 flex items-center justify-center relative">
          <svg viewBox="0 0 36 36" className="w-48 h-48 transform -rotate-90">
             <circle 
                cx="18" cy="18" r="15.915" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="3" 
                className="text-gray-100 dark:text-gray-800"
              />
              <motion.circle 
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray: "70 100" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                cx="18" cy="18" r="15.915" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeDashoffset="0"
                className="text-purple-600"
              />
              <motion.circle 
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray: "20 100" }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                cx="18" cy="18" r="15.915" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeDashoffset="-70"
                className="text-blue-500"
              />
              <motion.circle 
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray: "10 100" }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                cx="18" cy="18" r="15.915" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeDashoffset="-90"
                className="text-orange-500"
              />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
             <span className="text-3xl font-black text-gray-900 dark:text-white font-outfit">84%</span>
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Available</span>
          </div>
       </div>

       <div className="mt-8 space-y-2">
          <LegendItem color="bg-purple-600" label="Available" value="84" />
          <LegendItem color="bg-blue-500" label="Reserved" value="12" />
          <LegendItem color="bg-orange-500" label="Adopted" value="4" />
       </div>
    </div>
  );
}

function LegendItem({ color, label, value }: { color: string, label: string, value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
         <div className={`w-2 h-2 rounded-full ${color}`} />
         <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-xs font-bold text-gray-900 dark:text-white">{value}%</span>
    </div>
  );
}
