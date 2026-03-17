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
      <Link href="/pets" style={{ color: "#c7d2ff" }}>
        ← Back to pets
      </Link>

      <div
        style={{
          marginTop: 14,
          padding: 18,
          borderRadius: 18,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.1 }}>{pet.name}</h1>
          <span
            style={{
              alignSelf: "flex-start",
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 999,
              background:
                pet.status === "AVAILABLE"
                  ? "rgba(54, 211, 153, 0.18)"
                  : "rgba(255, 181, 71, 0.18)",
              border:
                pet.status === "AVAILABLE"
                  ? "1px solid rgba(54, 211, 153, 0.35)"
                  : "1px solid rgba(255, 181, 71, 0.35)",
              color: pet.status === "AVAILABLE" ? "#6ef2c4" : "#ffd59a",
            }}
          >
            {pet.status}
          </span>
        </div>

        <div style={{ marginTop: 8, color: "#b8c2e8" }}>
          <strong style={{ color: "#eaf0ff" }}>Shelter:</strong> {pet.shelter.name}
        </div>
        <div style={{ marginTop: 6, color: "#b8c2e8" }}>
          <strong style={{ color: "#eaf0ff" }}>Species:</strong> {pet.species}
        </div>
        {pet.breed ? (
          <div style={{ marginTop: 6, color: "#b8c2e8" }}>
            <strong style={{ color: "#eaf0ff" }}>Breed:</strong> {pet.breed}
          </div>
        ) : null}
        {pet.ageMonths !== null ? (
          <div style={{ marginTop: 6, color: "#b8c2e8" }}>
            <strong style={{ color: "#eaf0ff" }}>Age:</strong>{" "}
            {formatAgeMonths(pet.ageMonths)}
          </div>
        ) : null}

        {pet.media.length ? (
          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            {pet.media
              .filter((m) => m.kind === "IMAGE")
              .slice(0, 3)
              .map((m) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={m.id}
                  src={m.url}
                  alt={pet.name}
                  style={{
                    width: "100%",
                    maxHeight: 360,
                    objectFit: "cover",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(0,0,0,0.25)",
                  }}
                />
              ))}
          </div>
        ) : null}
        {pet.description ? (
          <p style={{ marginTop: 12, color: "#d6ddff", lineHeight: 1.6 }}>
            {pet.description}
          </p>
        ) : null}

        <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            href={applyHref}
            style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 12,
              background: "linear-gradient(135deg, #5b7cfa, #9b6bff)",
              color: "white",
              textDecoration: "none",
              fontWeight: 800,
              opacity: pet.status === "AVAILABLE" ? 1 : 0.5,
              pointerEvents: pet.status === "AVAILABLE" ? "auto" : "none",
            }}
          >
            Apply to adopt
          </Link>
          <Link href="/admin/pets" style={{ color: "#c7d2ff" }}>
            Manage pets (admin)
          </Link>
        </div>
      </div>
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

