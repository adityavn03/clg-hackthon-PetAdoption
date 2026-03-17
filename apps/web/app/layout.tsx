import Link from "next/link";
import type { ComponentProps } from "react";
import "./globals.css";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="container">
          <header className="topbar">
            <NavLink href="/" className="brand">
              <div className="brandMark" aria-hidden="true" />
              Pet Adoption
            </NavLink>
            <nav className="nav">
              <NavLink href="/pets">Pets</NavLink>
              <NavLink href="/apply">Apply</NavLink>
              <NavLink href="/admin">Admin</NavLink>
            </nav>
          </header>

          {children}
        </div>

        <footer className="footerContainer">
          <div className="footerLogo">
            🐾 Pet Adoption
          </div>
          <div className="footerLinks">
            <Link href="/pets">Browse Pets</Link>
            <Link href="/apply">Apply</Link>
            <Link href="/admin">Admin Dashboard</Link>
          </div>
          <div className="footerText">
            Built with Next.js + Prisma · Pet Adoption Demo App
          </div>
        </footer>
      </body>
    </html>
  );
}