"use client";

import { useState } from "react";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section style={{ position: "relative", minHeight: "100vh", background: "var(--off-white)" }}>
      {/* Geometric Red Backgrounds */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "45vh",
        background: "linear-gradient(135deg, var(--red) 0%, var(--red) 100%)",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute", top: "45vh", left: 0, width: "100%", height: "100px",
        background: "linear-gradient(to bottom right, var(--red) 50%, transparent 50.1%)",
        zIndex: 0,
      }} />

      {/* Floating Dot Grid */}
      <div style={{
        position: "absolute", top: "15%", right: "10%",
        display: "grid", gridTemplateColumns: "repeat(8, 6px)", gap: 6, opacity: 0.4,
        zIndex: 0,
      }}>
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--white)" }} />
        ))}
      </div>

      <div style={{ padding: "120px 5% 80px", position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto" }}>
        <div className="reveal" style={{ marginBottom: 60, textAlign: "center" }}>
          <span className="section-rule" style={{ background: "var(--white)", margin: "0 auto 20px" }} />
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", fontWeight: 800, lineHeight: 1.15, color: "var(--white)", marginBottom: 20 }}>
            Get in Touch with Talenopia
          </h1>
          <p style={{ fontSize: "1rem", lineHeight: 1.78, color: "rgba(255,255,255,0.8)", maxWidth: 640, margin: "0 auto" }}>
            Whether you&apos;re looking to scale your team, explore augmentation options, or discuss specific requirements—we&apos;re here.
          </p>
        </div>

        <div className="contact-grid" style={{
          background: "var(--white)",
          boxShadow: "0 24px 48px rgba(0,0,0,0.06)",
          borderRadius: "24px",
          padding: "50px",
          marginTop: "-20px"
        }}>
        {/* Contact Info */}
        <div className="reveal">
          <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--red)", marginBottom: 20 }}>
            Contact Information
          </div>
          {[
            { label: "Email", value: "info@talenopia.com" },
            { label: "Website", value: "www.talenopia.com" },
            { label: "Careers", value: "careers@talenopia.com" },
          ].map((m) => (
            <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 0", borderBottom: "1px solid var(--gray-mid)" }}>
              <div style={{ width: 6, height: 6, flexShrink: 0, background: "var(--red)", borderRadius: "50%" }} />
              <div>
                <label style={{ fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--text-muted)", display: "block" }}>{m.label}</label>
                <p style={{ fontSize: "0.88rem", fontWeight: 600, marginTop: 2, color: "var(--text)" }}>{m.value}</p>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 36 }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--red)", marginBottom: 14 }}>
              We Can Help With
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["IT Staff Augmentation", "Non-IT Augmentation", "Specialized Talent", "Engagement Models", "Enterprise Staffing", "SMB Staffing"].map((tag) => (
                <span
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  style={{
                    fontSize: "0.7rem",
                    padding: "6px 16px",
                    border: "1px solid var(--gray-mid)",
                    cursor: "pointer",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    borderRadius: "99px",
                    background: selectedTags.includes(tag) ? "var(--black)" : "var(--white)",
                    color: selectedTags.includes(tag) ? "var(--white)" : "var(--text)",
                    borderColor: selectedTags.includes(tag) ? "var(--black)" : "var(--gray-mid)",
                    transition: "all var(--transition)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="reveal">
          <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--red)", marginBottom: 20 }}>
            Send a Message
          </div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div className="form-row-2">
              <FormField label="Full Name *" type="text" placeholder="Your full name" required />
              <FormField label="Company Name *" type="text" placeholder="Your company" required />
            </div>
            <div className="form-row-2">
              <FormField label="Business Email *" type="email" placeholder="you@company.com" required />
              <FormField label="Phone Number *" type="tel" placeholder="+1 234 567 8900" required />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--black)" }}>Requirement Type</label>
              <select style={{ padding: "14px 16px", border: "1.5px solid var(--gray-mid)", borderRadius: "12px", fontFamily: "inherit", fontSize: "0.88rem", outline: "none", background: "var(--white)", color: "var(--text)", transition: "all var(--transition)" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--black)"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(0,0,0,0.03)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--gray-mid)"; e.currentTarget.style.boxShadow = "none"; }}>
                <option value="">Select a category</option>
                <option>IT Staff Augmentation</option>
                <option>Non-IT Staff Augmentation</option>
                <option>Specialized Talent</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--black)" }}>Message *</label>
              <textarea
                placeholder="Tell us about your requirements, team size, timeline..."
                required
                style={{ padding: "14px 16px", border: "1.5px solid var(--gray-mid)", borderRadius: "12px", fontFamily: "inherit", fontSize: "0.88rem", outline: "none", background: "var(--white)", resize: "vertical", minHeight: 120, color: "var(--text)", transition: "all var(--transition)" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--black)"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(0,0,0,0.03)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--gray-mid)"; e.currentTarget.style.boxShadow = "none"; }}
              />
            </div>
            <button type="submit" className="btn btn-dark" style={{ alignSelf: "flex-start", padding: "16px 40px", borderRadius: "12px" }}>
              Submit Request →
            </button>
            {submitted && (
              <div style={{ display: "block", padding: "18px 24px", background: "#f0fff4", border: "1.5px solid #2d9e5f", color: "#1e7a48", fontSize: "0.88rem", fontWeight: 600, marginTop: 8 }}>
                ✓ Thank you! Your request has been submitted. We&apos;ll reach out within 1 business day.
              </div>
            )}
          </form>
        </div>
      </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: 80px;
          align-items: start;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 600px) {
          .form-row-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FormField({ label, type, placeholder, required }: { label: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--black)" }}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        style={{ padding: "14px 16px", border: "1.5px solid var(--gray-mid)", borderRadius: "12px", fontFamily: "inherit", fontSize: "0.88rem", outline: "none", background: "var(--white)", color: "var(--text)", transition: "all var(--transition)" }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--black)"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(0,0,0,0.03)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "var(--gray-mid)"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}
