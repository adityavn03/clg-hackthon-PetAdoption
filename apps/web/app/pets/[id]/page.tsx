import { prisma } from "@repo/db/client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Share2, Heart, Award, ShieldCheck, HelpCircle } from "lucide-react";
import { ImageGallery } from "../../../components/pets/details/ImageGallery";
import { PetInfo } from "../../../components/pets/details/PetInfo";
import { ActionButtons } from "../../../components/pets/details/ActionButtons";
import { SimilarPets } from "../../../components/pets/details/SimilarPets";

export default async function PetDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pet = await prisma.pet.findFirst({
    where: { id, deletedAt: null, isPublished: true },
    include: { 
      shelter: true, 
      media: { orderBy: { sortOrder: "asc" } } 
    },
  });

  if (!pet) return notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pb-20">
      {/* Premium Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-20">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 blur-[120px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-purple/20 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 relative z-10">
        {/* Navigation / Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/pets" 
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-brand-primary transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:bg-brand-primary/10 group-transition-all">
               <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Registry
          </Link>

          <div className="flex items-center gap-2">
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Profile ID:</span>
             <code className="text-[10px] font-bold text-brand-primary bg-brand-primary/5 px-2 py-1 rounded-lg">
                {pet.id.slice(0, 8)}...
             </code>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          {/* Left: Image Gallery (Span 7) */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 h-fit">
            <ImageGallery images={pet.media} petName={pet.name} />
            
            {/* Desktop Quick Trust Info */}
            <div className="hidden lg:grid grid-cols-3 gap-6 mt-12 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2.5rem] border border-white/20 dark:border-gray-800/20 p-8 shadow-sm">
               <TrustPoint icon={Award} title="Premium" subtitle="Certified Breed" />
               <TrustPoint icon={ShieldCheck} title="Verified" subtitle="Health Checked" />
               <TrustPoint icon={HelpCircle} title="Support" subtitle="24/7 Assistance" />
            </div>
          </div>

          {/* Right: Pet Info & Actions (Span 5) */}
          <div className="lg:col-span-5 space-y-10">
            <PetInfo pet={pet} />
            <ActionButtons petId={pet.id} isAvailable={pet.status === 'AVAILABLE'} />

            {/* Adoption Process Card */}
            <div className="p-8 rounded-[2.5rem] bg-gray-900 dark:bg-gray-800 text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
               <h3 className="text-xl font-black uppercase tracking-tight font-outfit mb-6">Adoption Process</h3>
               <div className="space-y-6">
                  <ProcessStep number="01" title="Submit Application" text="Tell us about yourself and your home environment." />
                  <ProcessStep number="02" title="Personal Interview" text="Connect with the shelter staff for a quick chat." />
                  <ProcessStep number="03" title="Home Visit (Virtual)" text="A quick look at where your new friend will live." />
                  <ProcessStep number="04" title="Meet the Pet" text="Final meeting to ensure a perfect match." />
               </div>
            </div>
          </div>
        </div>

        {/* Similar Pets Section */}
        <SimilarPets species={pet.species} currentId={pet.id} />
      </main>
    </div>
  );
}

function TrustPoint({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) {
  return (
     <div className="text-center space-y-2">
        <div className="mx-auto w-10 h-10 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
           <Icon size={20} />
        </div>
        <div>
           <p className="text-[10px] font-black uppercase tracking-widest text-gray-900 dark:text-white leading-none mb-1">{title}</p>
           <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400 leading-none">{subtitle}</p>
        </div>
     </div>
  )
}

function ProcessStep({ number, title, text }: { number: string, title: string, text: string }) {
  return (
     <div className="flex gap-4">
        <div className="text-2xl font-black font-outfit text-brand-primary/40 leading-none">{number}</div>
        <div className="space-y-1">
           <p className="text-xs font-black uppercase tracking-widest text-white leading-none">{title}</p>
           <p className="text-[10px] font-bold text-gray-400 leading-normal">{text}</p>
        </div>
     </div>
  )
}
