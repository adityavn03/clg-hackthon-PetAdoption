"use client";

export function AdminSkeleton() {
  return (
     <div className="space-y-8 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-100 dark:bg-gray-800 rounded-[2rem]" />
           ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 h-[400px] bg-gray-100 dark:bg-gray-800 rounded-[2rem]" />
           <div className="h-[400px] bg-gray-100 dark:bg-gray-800 rounded-[2rem]" />
        </div>
        <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-[2rem]" />
     </div>
  );
}
