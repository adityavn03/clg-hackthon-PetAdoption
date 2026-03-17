import Link from "next/link";
import type { ComponentProps } from "react";

function NavLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          background: "#0b1020",
          color: "#eaf0ff",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "24px 16px 64px",
          }}
        >
          <header
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <NavLink
              href="/"
              style={{
                color: "#eaf0ff",
                textDecoration: "none",
                fontWeight: 800,
                letterSpacing: 0.3,
              }}
            >
              Pet Adoption
            </NavLink>
            <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <NavLink href="/pets" style={{ color: "#c7d2ff" }}>
                Pets
              </NavLink>
              <NavLink href="/apply" style={{ color: "#c7d2ff" }}>
                Apply
              </NavLink>
              <NavLink href="/admin" style={{ color: "#c7d2ff" }}>
                Admin
              </NavLink>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}