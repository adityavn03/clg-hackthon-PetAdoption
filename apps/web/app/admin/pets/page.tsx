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
  isPublished: boolean;
  description: string | null;
  shelter: { id: string; name: string };
  createdAt: string;
};

export default function AdminPetsPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [shelters, setShelters] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [filter, setFilter] = useState<"ALL" | Pet["status"]>("ALL");

  const [form, setForm] = useState({
    name: "",
    species: "DOG",
    breed: "",
    ageMonths: "",
    shelterId: "",
    isPublished: true,
    description: "",
    imageUrl: "",
  });

  const filtered = useMemo(() => {
    if (filter === "ALL") return pets;
    return pets.filter((p) => p.status === filter);
  }, [pets, filter]);

  async function refresh() {
    setLoading(true);
    setError("");
    try {
      const [petsRes, sheltersRes] = await Promise.all([
        fetch("/api/pets", { cache: "no-store" }),
        fetch("/api/shelters", { cache: "no-store" }),
      ]);
      if (!sheltersRes.ok) throw new Error("Failed to load shelters");
      const sheltersData = (await sheltersRes.json()) as {
        id: string;
        name: string;
      }[];
      setShelters(sheltersData);

      const res = petsRes;
      if (!res.ok) throw new Error("Failed to load pets");
      const data = (await res.json()) as Pet[];
      setPets(data);
      setForm((f) => ({
        ...f,
        shelterId: f.shelterId || sheltersData[0]?.id || "",
      }));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load pets");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
  }, []);

  async function createPet(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      if (!form.shelterId) throw new Error("Create a shelter first");
      const res = await fetch("/api/pets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          species: form.species,
          breed: form.breed || undefined,
          ageMonths: form.ageMonths === "" ? undefined : Number(form.ageMonths),
          shelterId: form.shelterId,
          isPublished: form.isPublished,
          description: form.description || undefined,
          imageUrl: form.imageUrl || undefined,
        }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(j?.error ?? "Failed to create pet");
      }
      setForm({
        name: "",
        species: "DOG",
        breed: "",
        ageMonths: "",
        shelterId: form.shelterId,
        isPublished: true,
        description: "",
        imageUrl: "",
      });
      await refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to create pet");
    }
  }

  async function setStatus(petId: string, status: Pet["status"]) {
    setError("");
    const res = await fetch(`/api/pets/${petId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) {
      setError("Failed to update status");
      return;
    }
    await refresh();
  }

  async function setPublished(petId: string, isPublished: boolean) {
    setError("");
    const res = await fetch(`/api/pets/${petId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isPublished }),
    });
    if (!res.ok) {
      setError("Failed to update publish state");
      return;
    }
    await refresh();
  }

  async function deletePet(petId: string) {
    setError("");
    const ok = confirm("Delete this pet?");
    if (!ok) return;
    const res = await fetch(`/api/pets/${petId}`, { method: "DELETE" });
    if (!res.ok) {
      setError("Failed to delete pet");
      return;
    }
    await refresh();
  }

  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <h1 style={{ margin: "8px 0 10px", fontSize: 30 }}>Admin · Pets</h1>
          <p style={{ marginTop: 0, color: "#b8c2e8" }}>
            Create pets and manage availability.
          </p>
        </div>
        <div style={{ alignSelf: "flex-start" }}>
          <Link href="/admin" style={{ color: "#c7d2ff" }}>
            ← Admin home
          </Link>
        </div>
      </div>

      <section style={styles.panel}>
        <h2 style={styles.h2}>Create pet</h2>
        <form onSubmit={createPet} style={{ display: "grid", gap: 10 }}>
          <div style={styles.row2}>
            <select
              style={styles.select}
              value={form.shelterId}
              onChange={(e) => setForm((f) => ({ ...f, shelterId: e.target.value }))}
              required
              aria-label="Shelter"
            >
              <option value="" disabled>
                Select shelter…
              </option>
              {shelters.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            <select
              style={styles.select}
              value={form.species}
              onChange={(e) =>
                setForm((f) => ({ ...f, species: e.target.value as Pet["species"] }))
              }
              aria-label="Species"
            >
              <option value="DOG">DOG</option>
              <option value="CAT">CAT</option>
              <option value="OTHER">OTHER</option>
            </select>
          </div>
          <div style={styles.row2}>
            <input
              style={styles.input}
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
            />
            <input
              style={styles.input}
              placeholder="Breed (optional)"
              value={form.breed}
              onChange={(e) => setForm((f) => ({ ...f, breed: e.target.value }))}
            />
          </div>
          <div style={styles.row2}>
            <input
              style={styles.input}
              placeholder="Age in months (optional)"
              inputMode="numeric"
              value={form.ageMonths}
              onChange={(e) =>
                setForm((f) => ({ ...f, ageMonths: e.target.value }))
              }
            />
            <input
              style={styles.input}
              placeholder="Image URL (optional)"
              value={form.imageUrl}
              onChange={(e) =>
                setForm((f) => ({ ...f, imageUrl: e.target.value }))
              }
            />
          </div>
          <label style={{ color: "#b8c2e8", fontSize: 13, display: "flex", gap: 10, alignItems: "center" }}>
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => setForm((f) => ({ ...f, isPublished: e.target.checked }))}
            />
            Published (visible on /pets)
          </label>
          <textarea
            style={{ ...styles.input, minHeight: 80, resize: "vertical" }}
            placeholder="Description (optional)"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
          />
          <button style={styles.primary} type="submit">
            Create
          </button>
        </form>
        {shelters.length === 0 ? (
          <div style={{ marginTop: 10, color: "#ffd59a" }}>
            No shelters found. Create one at{" "}
            <Link href="/admin/shelters" style={{ color: "#c7d2ff" }}>
              Admin → Shelters
            </Link>
            .
          </div>
        ) : null}
      </section>

      <section style={{ marginTop: 14 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 18 }}>All pets</h2>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <label style={{ color: "#b8c2e8", fontSize: 13 }}>Filter</label>
            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value as "ALL" | Pet["status"])
              }
              style={styles.select}
            >
              <option value="ALL">All</option>
              <option value="AVAILABLE">AVAILABLE</option>
              <option value="RESERVED">RESERVED</option>
              <option value="ADOPTED">ADOPTED</option>
              <option value="ARCHIVED">ARCHIVED</option>
            </select>
            <button style={styles.secondary} onClick={() => void refresh()}>
              Refresh
            </button>
          </div>
        </div>

        {error ? <div style={styles.error}>{error}</div> : null}
        {loading ? (
          <div style={{ color: "#b8c2e8", marginTop: 10 }}>Loading…</div>
        ) : (
          <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
            {filtered.map((p) => (
              <div key={p.id} style={styles.panel}>
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
                      {p.name}{" "}
                      <span style={{ color: "#b8c2e8", fontWeight: 600 }}>
                        · {p.species}
                        {p.breed ? ` · ${p.breed}` : ""}
                        {p.ageMonths !== null ? ` · ${p.ageMonths}m` : ""}
                        · {p.shelter.name}
                      </span>
                    </div>
                    <div style={{ color: "#b8c2e8", marginTop: 6, fontSize: 13 }}>
                      id: <code style={styles.code}>{p.id}</code>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <Link href={`/pets/${p.id}`} style={{ color: "#c7d2ff" }}>
                      View
                    </Link>
                    <label style={{ color: "#b8c2e8", fontSize: 13, display: "flex", gap: 8, alignItems: "center" }}>
                      <input
                        type="checkbox"
                        checked={p.isPublished}
                        onChange={(e) => void setPublished(p.id, e.target.checked)}
                      />
                      Published
                    </label>
                    <select
                      value={p.status}
                      onChange={(e) =>
                        void setStatus(p.id, e.target.value as Pet["status"])
                      }
                      style={styles.select}
                      aria-label="Set status"
                    >
                      <option value="AVAILABLE">AVAILABLE</option>
                      <option value="RESERVED">RESERVED</option>
                      <option value="ADOPTED">ADOPTED</option>
                      <option value="ARCHIVED">ARCHIVED</option>
                    </select>
                    <button style={styles.danger} onClick={() => void deletePet(p.id)}>
                      Delete
                    </button>
                  </div>
                </div>
                {p.description ? (
                  <div style={{ marginTop: 10, color: "#d6ddff", lineHeight: 1.55 }}>
                    {p.description}
                  </div>
                ) : null}
              </div>
            ))}
            {filtered.length === 0 ? (
              <div style={{ color: "#b8c2e8" }}>No pets.</div>
            ) : null}
          </div>
        )}
      </section>
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
  h2: { margin: "0 0 10px", fontSize: 18 },
  row2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 10,
  },
  input: {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.25)",
    color: "#eaf0ff",
    outline: "none",
  },
  select: {
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.25)",
    color: "#eaf0ff",
  },
  primary: {
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "linear-gradient(135deg, #5b7cfa, #9b6bff)",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
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
  danger: {
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,120,120,0.25)",
    background: "rgba(255,120,120,0.12)",
    color: "#ffd1d1",
    fontWeight: 900,
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
  code: {
    padding: "2px 6px",
    borderRadius: 8,
    background: "rgba(0,0,0,0.35)",
    border: "1px solid rgba(255,255,255,0.10)",
  },
};

