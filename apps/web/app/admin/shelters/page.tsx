"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Address = {
  id: string;
  line1: string;
  line2: string | null;
  city: string;
  state: string | null;
  postal: string | null;
  country: string;
};

type Shelter = {
  id: string;
  name: string;
  slug: string;
  email: string | null;
  phone: string | null;
  website: string | null;
  address: Address | null;
  createdAt: string;
};

export default function AdminSheltersPage() {
  const [shelters, setShelters] = useState<Shelter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    slug: "",
    email: "",
    phone: "",
    website: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal: "",
    country: "IN",
  });

  const canCreate = useMemo(() => form.name.trim() && form.slug.trim(), [form]);

  async function refresh() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/shelters", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load shelters");
      setShelters((await res.json()) as Shelter[]);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load shelters");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
  }, []);

  async function createShelter(e: React.FormEvent) {
    e.preventDefault();
    if (!canCreate) return;
    setError("");
    const res = await fetch("/api/shelters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        slug: form.slug,
        email: form.email || undefined,
        phone: form.phone || undefined,
        website: form.website || undefined,
        address: form.line1 || form.city ? {
          line1: form.line1,
          line2: form.line2 || undefined,
          city: form.city,
          state: form.state || undefined,
          postal: form.postal || undefined,
          country: form.country || "IN",
        } : undefined,
      }),
    });
    if (!res.ok) {
      const j = (await res.json().catch(() => null)) as { error?: string } | null;
      setError(j?.error ?? "Failed to create shelter");
      return;
    }
    setForm({
      name: "",
      slug: "",
      email: "",
      phone: "",
      website: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      postal: "",
      country: "IN",
    });
    await refresh();
  }

  async function deleteShelter(id: string) {
    const ok = confirm("Delete this shelter? (soft delete)");
    if (!ok) return;
    const res = await fetch(`/api/shelters/${id}`, { method: "DELETE" });
    if (!res.ok) {
      setError("Failed to delete shelter");
      return;
    }
    await refresh();
  }

  return (
    <main>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <div>
          <h1 style={{ margin: "8px 0 10px", fontSize: 30 }}>Admin · Shelters</h1>
          <p style={{ marginTop: 0, color: "#b8c2e8" }}>
            Create shelters first. Pets must belong to a shelter.
          </p>
        </div>
        <div style={{ alignSelf: "flex-start" }}>
          <Link href="/admin" style={{ color: "#c7d2ff" }}>
            ← Admin home
          </Link>
        </div>
      </div>

      <section style={styles.panel}>
        <h2 style={styles.h2}>Create shelter</h2>
        <form onSubmit={createShelter} style={{ display: "grid", gap: 10 }}>
          <div style={styles.row2}>
            <input
              style={styles.input}
              placeholder="Shelter name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
            />
            <input
              style={styles.input}
              placeholder="slug (unique, e.g. city-shelter)"
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
              required
            />
          </div>
          <div style={styles.row3}>
            <input
              style={styles.input}
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
            <input
              style={styles.input}
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            />
            <input
              style={styles.input}
              placeholder="Website (optional)"
              value={form.website}
              onChange={(e) =>
                setForm((f) => ({ ...f, website: e.target.value }))
              }
            />
          </div>

          <div style={{ color: "#b8c2e8", fontSize: 13, marginTop: 6 }}>
            Address (optional)
          </div>
          <div style={styles.row2}>
            <input
              style={styles.input}
              placeholder="Line 1"
              value={form.line1}
              onChange={(e) => setForm((f) => ({ ...f, line1: e.target.value }))}
            />
            <input
              style={styles.input}
              placeholder="City"
              value={form.city}
              onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
            />
          </div>
          <div style={styles.row3}>
            <input
              style={styles.input}
              placeholder="State"
              value={form.state}
              onChange={(e) => setForm((f) => ({ ...f, state: e.target.value }))}
            />
            <input
              style={styles.input}
              placeholder="Postal"
              value={form.postal}
              onChange={(e) => setForm((f) => ({ ...f, postal: e.target.value }))}
            />
            <input
              style={styles.input}
              placeholder="Country"
              value={form.country}
              onChange={(e) =>
                setForm((f) => ({ ...f, country: e.target.value }))
              }
            />
          </div>

          <button style={styles.primary} type="submit" disabled={!canCreate}>
            Create
          </button>
        </form>
      </section>

      <section style={{ marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>All shelters</h2>
          <button style={styles.secondary} onClick={() => void refresh()}>
            Refresh
          </button>
        </div>

        {error ? <div style={styles.error}>{error}</div> : null}
        {loading ? (
          <div style={{ color: "#b8c2e8", marginTop: 10 }}>Loading…</div>
        ) : (
          <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
            {shelters.map((s) => (
              <div key={s.id} style={styles.panel}>
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
                      {s.name}{" "}
                      <span style={{ color: "#b8c2e8", fontWeight: 700 }}>
                        · {s.slug}
                      </span>
                    </div>
                    <div style={{ color: "#b8c2e8", marginTop: 6, fontSize: 13 }}>
                      id: <code style={styles.code}>{s.id}</code>
                    </div>
                    {s.address ? (
                      <div style={{ color: "#b8c2e8", marginTop: 6, fontSize: 13 }}>
                        {s.address.line1}, {s.address.city}{" "}
                        {s.address.state ? `(${s.address.state})` : ""}
                      </div>
                    ) : null}
                  </div>

                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <button style={styles.danger} onClick={() => void deleteShelter(s.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {shelters.length === 0 ? (
              <div style={{ color: "#b8c2e8" }}>No shelters yet.</div>
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
  row3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
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
  primary: {
    padding: "12px 14px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "linear-gradient(135deg, #5b7cfa, #9b6bff)",
    color: "white",
    fontWeight: 900,
    cursor: "pointer",
    opacity: 1,
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

