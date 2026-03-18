"use client";

export function PetSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm animate-pulse">
      <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800" />
      <div className="p-6 space-y-4">
        <div className="flex justify-between">
          <div className="h-8 w-1/2 bg-gray-200 dark:bg-gray-800 rounded-lg" />
          <div className="h-6 w-1/4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        </div>
        <div className="flex gap-4">
          <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
          <div className="h-4 w-1/4 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        </div>
        <div className="h-12 w-full bg-gray-200 dark:bg-gray-800 rounded-xl" />
      </div>
    </div>
  );
}

export function PetGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[...Array(8)].map((_, i) => (
        <PetSkeleton key={i} />
      ))}
    </div>
  );
}
