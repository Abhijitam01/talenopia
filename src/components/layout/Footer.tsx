"use client";

import Link from "next/link";
import { TalenopiaLogo } from "@/components/ui/TalenopiaLogo";

export function Footer() {
  return (
    <footer style={{ background: "var(--black)", borderTop: "1px solid var(--black-soft)" }}>
      {/* Top grid */}
      <div className="footer-grid" style={{ padding: "56px 5% 48px" }}>

        {/* Brand */}
        <div>
          <TalenopiaLogo iconSize={32} variant="light" gap={10} />
          <span style={{ display: "block", marginTop: 8 }} />
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.7, maxWidth: 240 }}>
            A resource augmentation firm built for organizations that value agility, precision, and trust.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18, paddingBottom: 10, borderBottom: "1px solid var(--black-soft)" }}>
            Navigation
          </div>
          {[
            { href: "/", label: "Home" }, { href: "/about", label: "About" },
            { href: "/services", label: "Services" }, { href: "/careers", label: "Careers" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <FooterLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Services */}
        <div>
          <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18, paddingBottom: 10, borderBottom: "1px solid var(--black-soft)" }}>
            Services
          </div>
          {["IT Augmentation", "Non-IT Augmentation", "Specialized Talent", "Engagement Models"].map((svc) => (
            <FooterLink key={svc} href="/services" label={svc} />
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18, paddingBottom: 10, borderBottom: "1px solid var(--black-soft)" }}>
            Contact
          </div>
          {[
            { label: "info@talenopia.com", href: "mailto:info@talenopia.com" },
            { label: "careers@talenopia.com", href: "mailto:careers@talenopia.com" },
            { label: "www.talenopia.com", href: "#" },
          ].map((item) => (
            <FooterLink key={item.label} href={item.href} label={item.label} />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--black-soft)", padding: "18px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.04em" }}>
          © {new Date().getFullYear()} Talenopia. All rights reserved.
        </span>
        <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.04em" }}>
          Utopia of Talent Sourcing
        </span>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.4fr;
          gap: 40px;
        }
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 540px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} style={{ display: "block", fontSize: "0.78rem", color: "rgba(255,255,255,0.42)", textDecoration: "none", marginBottom: 8, transition: "color 0.25s ease" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--red)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.42)"; }}>
      {label}
    </Link>
  );
}
