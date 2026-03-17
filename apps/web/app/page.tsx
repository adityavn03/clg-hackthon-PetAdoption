import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h1 style={{ margin: "8px 0 6px", fontSize: 38, lineHeight: 1.1 }}>
        Find your next best friend
      </h1>
      <p style={{ margin: 0, color: "#b8c2e8", maxWidth: 70 + "ch" }}>
        Browse available pets, view details, and submit an adoption application.
      </p>

      <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link
          href="/pets"
          style={{
            display: "inline-block",
            padding: "10px 14px",
            borderRadius: 12,
            background: "linear-gradient(135deg, #5b7cfa, #9b6bff)",
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          View pets
        </Link>
        <Link
          href="/admin"
          style={{
            display: "inline-block",
            padding: "10px 14px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "#eaf0ff",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Admin dashboard
        </Link>
      </div>

      <section
        style={{
          marginTop: 26,
          padding: 18,
          borderRadius: 16,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <h2 style={{ margin: 0, fontSize: 18 }}>Quick links</h2>
        <div style={{ marginTop: 10, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link href="/pets" style={{ color: "#c7d2ff" }}>
            /pets
          </Link>
          <Link href="/apply" style={{ color: "#c7d2ff" }}>
            /apply
          </Link>
          <Link href="/admin/pets" style={{ color: "#c7d2ff" }}>
            /admin/pets
          </Link>
          <Link href="/admin/applications" style={{ color: "#c7d2ff" }}>
            /admin/applications
          </Link>
        </div>
      </section>
    </main>
  );
}