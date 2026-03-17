import { prisma } from "@repo/db/client";
import Link from "next/link";

export default async function PetsPage() {
  const pets = await prisma.pet.findMany({
    where: { deletedAt: null, isPublished: true, status: "AVAILABLE" },
    orderBy: { createdAt: "desc" },
    include: { shelter: true, media: { orderBy: { sortOrder: "asc" } } },
  });

  return (
    <main>
      <div className="row" style={{ marginTop: 18 }}>
        <div>
          <h1 className="h1">Available pets</h1>
          <p className="muted" style={{ margin: 0 }}>
            Only published listings that are currently available.
          </p>
        </div>
        <Link href="/admin/pets" className="btn">
          Manage pets (admin)
        </Link>
      </div>

      <div className="grid gridCards" style={{ marginTop: 16 }}>
        {pets.map((p) => (
          <Link
            key={p.id}
            href={`/pets/${p.id}`}
            className="card"
          >
            {p.media[0]?.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="thumb" src={p.media[0].url} alt={p.name} />
            ) : (
              <div className="thumb" aria-hidden="true" />
            )}
            <div className="cardBody">
              <div className="cardTitleRow">
                <div className="cardTitle">{p.name}</div>
                <span className="badge badgeOk">{p.status}</span>
              </div>
              <div className="cardMeta">
                {p.species}
                {p.breed ? ` · ${p.breed}` : ""} · {p.shelter.name}
                {p.ageMonths !== null ? ` · ${formatAgeMonths(p.ageMonths)}` : ""}
              </div>
              {p.description ? <div className="cardText">{p.description}</div> : null}
            </div>
          </Link>
        ))}
      </div>

      {pets.length === 0 ? (
        <div className="panel" style={{ marginTop: 16 }}>
          No published available pets yet. Add shelters first, then pets from{" "}
          <Link href="/admin/shelters" className="btn btnPrimary" style={{ marginLeft: 8 }}>
            Admin · Shelters
          </Link>{" "}
          <Link href="/admin/pets" className="btn" style={{ marginLeft: 8 }}>
            Admin · Pets
          </Link>
        </div>
      ) : null}
    </main>
  );
}

function formatAgeMonths(months: number): string {
  const m = Math.max(0, Math.floor(months));
  if (m < 12) return `${m} months`;
  const years = Math.floor(m / 12);
  const rem = m % 12;
  return rem === 0 ? `${years} years` : `${years}y ${rem}m`;
}

