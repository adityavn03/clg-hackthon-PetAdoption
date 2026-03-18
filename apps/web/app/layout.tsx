import Link from "next/link";
import type { ComponentProps } from "react";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { SiteWrapper } from "../components/SiteWrapper";
import { Toaster } from "react-hot-toast";

function NavLink(props: ComponentProps<typeof Link>) {
  return <Link {...props} />;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans selection:bg-brand-primary/20 selection:text-brand-primary">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Toaster position="top-right" />
          <SiteWrapper>
            {children}
          </SiteWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}