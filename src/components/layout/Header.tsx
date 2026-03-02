"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TalenopiaLogo } from "@/components/ui/TalenopiaLogo";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        height: "var(--nav-h)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5%",
        background: "rgba(255,255,255,0.98)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--gray-mid)",
        boxShadow: isScrolled ? "0 1px 12px rgba(0,0,0,0.07)" : "none",
        transition: "box-shadow 0.3s ease",
      }}>

        {/* Logo */}
        <TalenopiaLogo iconSize={38} variant="dark" />

        {/* Desktop nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none", margin: 0, padding: 0 }}
          className="desktop-nav">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em",
                    textTransform: "uppercase", textDecoration: "none",
                    color: isActive ? "var(--red)" : "var(--text)",
                    transition: "color var(--transition)",
                  }}
                  className={`nav-link-underline${isActive ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              style={{
                fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none",
                background: "var(--red)", color: "var(--white)",
                padding: "9px 20px",
                display: "inline-block",
                transition: "background var(--transition)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--red-dark)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--red)"; }}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Hamburger / X toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="hamburger-btn"
          aria-label="Toggle menu"
          style={{
            display: "none", flexDirection: "column", gap: 5, cursor: "pointer",
            background: "none", border: "none", padding: 4,
            width: 28, height: 28, position: "relative",
          }}
        >
          <span style={{
            display: "block", width: 22, height: 2, background: "var(--text)",
            position: "absolute", left: 3, top: isMobileMenuOpen ? 13 : 7,
            transition: "all 0.3s ease",
            transform: isMobileMenuOpen ? "rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block", width: 22, height: 2, background: "var(--text)",
            position: "absolute", left: 3, top: 13,
            opacity: isMobileMenuOpen ? 0 : 1,
            transition: "opacity 0.2s ease",
          }} />
          <span style={{
            display: "block", width: 22, height: 2, background: "var(--text)",
            position: "absolute", left: 3, top: isMobileMenuOpen ? 13 : 19,
            transition: "all 0.3s ease",
            transform: isMobileMenuOpen ? "rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile menu with slide animation */}
      <div style={{
        position: "fixed", top: "var(--nav-h)", left: 0, right: 0,
        background: "var(--white)", display: "flex", flexDirection: "column",
        padding: "20px 5%", gap: 18, boxShadow: "0 4px 20px rgba(0,0,0,0.1)", zIndex: 999,
        borderTop: "1px solid var(--gray-mid)",
        transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-120%)",
        opacity: isMobileMenuOpen ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease",
        pointerEvents: isMobileMenuOpen ? "auto" : "none",
      }}>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}
            style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", color: pathname === link.href ? "var(--red)" : "var(--text)" }}
            onClick={() => setIsMobileMenuOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact"
          style={{ background: "var(--red)", color: "var(--white)", padding: "11px 20px", textAlign: "center", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
          onClick={() => setIsMobileMenuOpen(false)}>
          Contact Us
        </Link>
      </div>

      {/* Responsive grid helpers */}
      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        .intro-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .why-inner {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 72px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .intro-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-inner   { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}
      </style>
    </>
  );
}
