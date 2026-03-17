import Link from "next/link";

export default async function Home() {
  return (
    <main className="animate-fadeUp">
      <section className="hero">
        <div className="heroContent">
          <h1>
            Adopt with <span>confidence.</span>
          </h1>
          <p>
            A warm, modern pet adoption experience: browse beautifully created listings,
            view details, and submit applications. Finding your new best friend has never been easier.
          </p>

          <div className="heroActions">
            <Link href="/pets" className="btn btnPrimary">
              Browse Pets
            </Link>
            <Link href="/apply" className="btn btnSecondary">
              Apply Now
            </Link>
          </div>
        </div>
        
        <div className="heroImageContainer">
          <div className="heroImageBlob" />
          {/* We use a beautiful golden retriever puppy image from unsplash to showcase the UI design */}
          <img 
            src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=800&auto=format&fit=crop" 
            alt="Happy Golden Retriever Puppy" 
            className="heroImage"
            style={{ borderRadius: 'var(--radius-lg)' }}
          />
        </div>
      </section>

      <section>
        <h2 className="sectionTitle">Everything you <span>need</span></h2>
        <div className="bentoGrid">
          <Link href="/admin/shelters" className="bentoCard">
            <div className="bentoIconContainer">
              🏠
            </div>
            <div className="bentoTitle">Create Shelter</div>
            <div className="bentoDescription">
              Start by setting up your shelter profile with essential details and contact information.
            </div>
            <span style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>Get Started →</span>
          </Link>
          
          <Link href="/admin/pets" className="bentoCard">
            <div className="bentoIconContainer">
              🐕
            </div>
            <div className="bentoTitle">Add Pets</div>
            <div className="bentoDescription">
              Publish rich profiles for animals that need a home, complete with photos and personality traits.
            </div>
            <span style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>Get Started →</span>
          </Link>
          
          <Link href="/admin/applications" className="bentoCard">
            <div className="bentoIconContainer">
              📝
            </div>
            <div className="bentoTitle">Review Applications</div>
            <div className="bentoDescription">
              Manage incoming adoption requests from loving families through a simple dashboard.
            </div>
            <span style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>Get Started →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}