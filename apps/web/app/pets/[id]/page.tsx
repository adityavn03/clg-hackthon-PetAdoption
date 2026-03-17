import { prisma } from "@repo/db/client";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function PetDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pet = await prisma.pet.findFirst({
    where: { id, deletedAt: null, isPublished: true },
    include: { shelter: true, media: { orderBy: { sortOrder: "asc" } } },
  });
  if (!pet) return notFound();

  const applyHref = `/apply?petId=${encodeURIComponent(pet.id)}`;

  return (
    <main>
      <div className="row" style={{ marginTop: 18 }}>
        <Link href="/pets" className="btn">
          ← Back
        </Link>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href={applyHref} className="btn btnPrimary">
            Apply
          </Link>
          <Link href="/admin/pets" className="btn">
            Admin
          </Link>
        </div>
      </div>

      <section className="panel" style={{ marginTop: 14, overflow: "hidden" }}>
        {pet.media[0]?.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="thumb" src={pet.media[0].url} alt={pet.name} style={{ height: 320 }} />
        ) : (
          <div className="thumb" aria-hidden="true" style={{ height: 320 }} />
        )}

        <div style={{ padding: 16 }}>
          <div className="cardTitleRow">
            <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.1 }}>{pet.name}</h1>
            <span className={pet.status === "AVAILABLE" ? "badge badgeOk" : "badge badgeWarn"}>
              {pet.status}
            </span>
          </div>

          <div className="cardMeta" style={{ marginTop: 10 }}>
            Shelter: <span style={{ color: "var(--text)" }}>{pet.shelter.name}</span>
            {" · "}
            {pet.species}
            {pet.breed ? ` · ${pet.breed}` : ""}
            {pet.ageMonths !== null ? ` · ${formatAgeMonths(pet.ageMonths)}` : ""}
          </div>

          {pet.description ? (
            <p className="cardText" style={{ marginBottom: 0 }}>
              {pet.description}
            </p>
          ) : null}

          <div className="heroActions" style={{ marginTop: 14 }}>
            <Link
              href={applyHref}
              className={"btn btnPrimary"}
              style={{
                opacity: pet.status === "AVAILABLE" ? 1 : 0.5,
                pointerEvents: pet.status === "AVAILABLE" ? "auto" : "none",
              }}
            >
              Apply to adopt
            </Link>
            <Link href="/apply" className="btn">
              Open application form
            </Link>
          </div>
        </div>
      </section>
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

