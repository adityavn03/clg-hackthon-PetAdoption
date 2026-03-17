"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Pet = {
  id: string;
  name: string;
  species: "DOG" | "CAT" | "OTHER";
  breed: string | null;
  ageMonths: number | null;
  status: "AVAILABLE" | "RESERVED" | "ADOPTED" | "ARCHIVED";
};

type Application = {
  id: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string | null;
  applicantAddress: string | null;
  message: string | null;
  status: "SUBMITTED" | "IN_REVIEW" | "APPROVED" | "REJECTED" | "WITHDRAWN";
  createdAt: string;
  pet: Pet;
  shelter: { id: string; name: string; slug: string };
  user: { id: string; username: string } | null;
};

export default function AdminApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<"ALL" | Application["status"]>("ALL");

  const filtered = useMemo(() => {
    if (filter === "ALL") return apps;
    return apps.filter((a) => a.status === filter);
  }, [apps, filter]);

  async function refresh() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/applications", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load applications");
      const data = (await res.json()) as Application[];
      setApps(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load applications");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
  }, []);

  async function setStatus(
    appId: string,
    status: Application["status"]
  ): Promise<void> {
    setError("");
    const res = await fetch(`/api/applications/${appId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) {
      setError("Failed to update application");
      return;
    }
    await refresh();
  }

  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <h1 style={{ margin: "8px 0 10px", fontSize: 30 }}>
            Admin · Applications
          </h1>
          <p style={{ marginTop: 0, color: "#b8c2e8" }}>
            Review adoption applications and update status.
          </p>
        </div>
        <div style={{ alignSelf: "flex-start" }}>
          <Link href="/admin" style={{ color: "#c7d2ff" }}>
            ← Admin home
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          marginTop: 12,
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <label style={{ color: "#b8c2e8", fontSize: 13 }}>Filter</label>
          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value as "ALL" | Application["status"])
            }
            style={styles.select}
          >
            <option value="ALL">All</option>
            <option value="SUBMITTED">SUBMITTED</option>
            <option value="IN_REVIEW">IN_REVIEW</option>
            <option value="APPROVED">APPROVED</option>
            <option value="REJECTED">REJECTED</option>
            <option value="WITHDRAWN">WITHDRAWN</option>
          </select>
        </div>
        <button style={styles.secondary} onClick={() => void refresh()}>
          Refresh
        </button>
      </div>

      {error ? <div style={styles.error}>{error}</div> : null}
      {loading ? (
        <div style={{ color: "#b8c2e8", marginTop: 10 }}>Loading…</div>
      ) : (
        <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
          {filtered.map((a) => (
            <div key={a.id} style={styles.panel}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div style={{ fontWeight: 900 }}>
                    {a.applicantName}{" "}
                    <span style={{ color: "#b8c2e8", fontWeight: 600 }}>
                      · {a.applicantEmail}
                      {a.applicantPhone ? ` · ${a.applicantPhone}` : ""}
                    </span>
                  </div>
                  <div style={{ color: "#b8c2e8", marginTop: 6, fontSize: 13 }}>
                    Pet:{" "}
                    <Link href={`/pets/${a.pet.id}`} style={{ color: "#c7d2ff" }}>
                      {a.pet.name}
                    </Link>{" "}
                    <span style={{ color: "#b8c2e8" }}>
                      ({a.pet.species}
                      {a.pet.breed ? ` · ${a.pet.breed}` : ""}
                      {a.pet.ageMonths !== null ? ` · ${a.pet.ageMonths}m` : ""})
                    </span>
                  </div>
                  <div style={{ color: "#b8c2e8", marginTop: 6, fontSize: 13 }}>
                    Shelter: {a.shelter.name}
                  </div>
                  <div style={{ color: "#b8c2e8", marginTop: 6, fontSize: 13 }}>
                    Address: {a.applicantAddress ?? "—"}
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <select
                    value={a.status}
                    onChange={(e) =>
                      void setStatus(
                        a.id,
                        e.target.value as Application["status"]
                      )
                    }
                    style={styles.select}
                    aria-label="Set application status"
                  >
                    <option value="SUBMITTED">SUBMITTED</option>
                    <option value="IN_REVIEW">IN_REVIEW</option>
                    <option value="APPROVED">APPROVED</option>
                    <option value="REJECTED">REJECTED</option>
                    <option value="WITHDRAWN">WITHDRAWN</option>
                  </select>
                  <span style={badgeStyle(a.status)}>{a.status}</span>
                </div>
              </div>

              {a.message ? (
                <div style={{ marginTop: 10, color: "#d6ddff", lineHeight: 1.55 }}>
                  {a.message}
                </div>
              ) : null}
            </div>
          ))}
          {filtered.length === 0 ? (
            <div style={{ color: "#b8c2e8" }}>No applications.</div>
          ) : null}
        </div>
      )}
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  panel: {
    padding: 14,
    borderRadius: 16,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.10)",
  },
  select: {
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.25)",
    color: "#eaf0ff",
  },
  secondary: {
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.08)",
    color: "#eaf0ff",
    fontWeight: 800,
    cursor: "pointer",
  },
  error: {
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    background: "rgba(255,181,71,0.14)",
    border: "1px solid rgba(255,181,71,0.30)",
    color: "#ffd59a",
  },
};

function badgeStyle(status: Application["status"]): React.CSSProperties {
  const base: React.CSSProperties = {
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.10)",
  };
  if (status === "APPROVED") {
    return {
      ...base,
      background: "rgba(54, 211, 153, 0.18)",
      border: "1px solid rgba(54, 211, 153, 0.35)",
      color: "#6ef2c4",
    };
  }
  if (status === "REJECTED") {
    return {
      ...base,
      background: "rgba(255,120,120,0.12)",
      border: "1px solid rgba(255,120,120,0.25)",
      color: "#ffd1d1",
    };
  }
  if (status === "IN_REVIEW") {
    return {
      ...base,
      background: "rgba(91, 124, 250, 0.16)",
      border: "1px solid rgba(91, 124, 250, 0.30)",
      color: "#c7d2ff",
    };
  }
  if (status === "WITHDRAWN") {
    return {
      ...base,
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.12)",
      color: "#b8c2e8",
    };
  }
  return {
    ...base,
    background: "rgba(255,181,71,0.14)",
    border: "1px solid rgba(255,181,71,0.30)",
    color: "#ffd59a",
  };
}

