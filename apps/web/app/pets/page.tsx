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
      <h1 style={{ margin: "8px 0 14px", fontSize: 30 }}>Pets</h1>
      <p style={{ marginTop: 0, color: "#b8c2e8" }}>
        Browse available pets from our shelters.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 14,
          marginTop: 16,
        }}
      >
        {pets.map((p) => (
          <Link
            key={p.id}
            href={`/pets/${p.id}`}
            style={{
              textDecoration: "none",
              color: "#eaf0ff",
              padding: 14,
              borderRadius: 16,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              <div style={{ fontWeight: 800 }}>{p.name}</div>
              <span
                style={{
                  fontSize: 12,
                  padding: "4px 8px",
                  borderRadius: 999,
                  background:
                    p.status === "AVAILABLE"
                      ? "rgba(54, 211, 153, 0.18)"
                      : "rgba(255, 181, 71, 0.18)",
                  border:
                    p.status === "AVAILABLE"
                      ? "1px solid rgba(54, 211, 153, 0.35)"
                      : "1px solid rgba(255, 181, 71, 0.35)",
                  color: p.status === "AVAILABLE" ? "#6ef2c4" : "#ffd59a",
                }}
              >
                {p.status}
              </span>
            </div>
            <div style={{ marginTop: 8, color: "#b8c2e8" }}>
              {p.species}
              {p.breed ? ` · ${p.breed}` : ""} · {p.shelter.name}
            </div>
            {p.ageMonths !== null ? (
              <div style={{ marginTop: 4, color: "#b8c2e8", fontSize: 13 }}>
                Age: {formatAgeMonths(p.ageMonths)}
              </div>
            ) : null}
            {p.description ? (
              <div style={{ marginTop: 10, color: "#d6ddff", fontSize: 13 }}>
                {p.description}
              </div>
            ) : null}
          </Link>
        ))}
      </div>

      {pets.length === 0 ? (
        <div
          style={{
            marginTop: 16,
            padding: 14,
            borderRadius: 14,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "#b8c2e8",
          }}
        >
          No published available pets yet. Add shelters first, then pets from{" "}
          <Link href="/admin/shelters">Admin → Shelters</Link> and{" "}
          <Link href="/admin/pets">Admin → Pets</Link>.
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

