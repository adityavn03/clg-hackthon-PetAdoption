import Link from "next/link";

export default function AdminHome() {
  return (
    <main>
      <h1 style={{ margin: "8px 0 14px", fontSize: 30 }}>Admin</h1>
      <p style={{ marginTop: 0, color: "#b8c2e8" }}>
        Manage pets and review adoption applications.
      </p>

      <div style={{ display: "grid", gap: 12, marginTop: 16, maxWidth: 640 }}>
        <Link
          href="/admin/shelters"
          style={{
            textDecoration: "none",
            color: "#eaf0ff",
            padding: 14,
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div style={{ fontWeight: 800 }}>Shelters</div>
          <div style={{ color: "#b8c2e8", marginTop: 6 }}>
            Create/manage shelters and addresses.
          </div>
        </Link>
        <Link
          href="/admin/pets"
          style={{
            textDecoration: "none",
            color: "#eaf0ff",
            padding: 14,
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div style={{ fontWeight: 800 }}>Pets</div>
          <div style={{ color: "#b8c2e8", marginTop: 6 }}>
            Create, update, and delete pets.
          </div>
        </Link>
        <Link
          href="/admin/applications"
          style={{
            textDecoration: "none",
            color: "#eaf0ff",
            padding: 14,
            borderRadius: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div style={{ fontWeight: 800 }}>Applications</div>
          <div style={{ color: "#b8c2e8", marginTop: 6 }}>
            Review applications and update status.
          </div>
        </Link>
      </div>
    </main>
  );
}
