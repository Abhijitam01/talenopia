"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Code, Cloud, Database, Shield, Smartphone, LineChart } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="hero-section">
        <style dangerouslySetInnerHTML={{__html: `
          .hero-section {
            position: relative;
            min-height: calc(100vh - var(--nav-h));
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: #111113;
            background-image: 
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 60px 60px;
            padding: 5rem 1rem 3rem;
            text-align: center;
          }
          .hero-content {
            position: relative;
            z-index: 2;
            max-width: 900px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-pill {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 99px;
            padding: 6px 6px 6px 16px;
            margin-bottom: 2rem;
            backdrop-filter: blur(8px);
          }
          .hero-pill-tag {
            background: rgba(196, 30, 30, 0.2);
            color: #C41E1E;
            font-size: 0.65rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            padding: 4px 10px;
            border-radius: 99px;
          }
          .hero-pill-text {
            color: rgba(255,255,255,0.8);
            font-size: 0.8rem;
            font-weight: 500;
            padding-right: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .hero-h1 {
            font-family: var(--font-barlow-condensed, 'Barlow Condensed', sans-serif);
            font-weight: 800;
            font-size: clamp(3.2rem, 7vw, 6.5rem);
            line-height: 1.05;
            letter-spacing: -0.01em;
            margin-bottom: 1.5rem;
            color: #fff;
          }
          .hero-h1 .text-red {
            color: #C41E1E;
          }
          .hero-sub {
            font-family: var(--font-barlow, 'Barlow', sans-serif);
            font-size: 1.05rem;
            color: rgba(255,255,255,0.65);
            line-height: 1.7;
            max-width: 700px;
            margin-bottom: 3rem;
          }
          .hero-ctas {
            display: flex; gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          .hero-btn-red {
            background: #C41E1E; color: #fff; border: none;
            padding: 0.9rem 2.2rem; border-radius: 99px;
            font-family: var(--font-barlow-condensed, 'Barlow Condensed', sans-serif);
            font-weight: 700; font-size: 1rem;
            letter-spacing: 0.05em; text-transform: uppercase;
            cursor: pointer; transition: background 0.2s;
            text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          }
          .hero-btn-red:hover { background: #a01818; }
          .hero-btn-outline {
            background: #fff; color: #111;
            border: none;
            padding: 0.9rem 2.2rem; border-radius: 99px;
            font-family: var(--font-barlow-condensed, 'Barlow Condensed', sans-serif);
            font-weight: 700; font-size: 1rem;
            letter-spacing: 0.05em; text-transform: uppercase;
            cursor: pointer; transition: all 0.2s;
            text-decoration: none; display: inline-flex; align-items: center;
          }
          .hero-btn-outline:hover { background: #e5e5e5; }
          
          /* Floating Icons */
          .floating-icons {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
          }
          .float-icon {
            position: absolute;
            width: 70px; height: 70px;
            background: rgba(255,255,255,0.03);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 20px;
            display: flex; align-items: center; justify-content: center;
            backdrop-filter: blur(8px);
            animation: float 6s ease-in-out infinite;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }
          .float-icon svg { width: 32px; height: 32px; color: #C41E1E; opacity: 0.9; }
          .float-1 { top: 15%; left: 15%; animation-delay: 0s; }
          .float-2 { top: 20%; right: 15%; animation-delay: 1s; }
          .float-3 { top: 55%; left: 8%; animation-delay: 2s; }
          .float-4 { top: 60%; right: 10%; animation-delay: 3s; }
          .float-5 { bottom: 12%; left: 25%; animation-delay: 4s; }
          .float-6 { bottom: 16%; right: 28%; animation-delay: 5s; }

          @media (max-width: 1200px) {
            .float-1 { left: 8%; }
            .float-2 { right: 8%; }
            .float-3 { left: 4%; }
            .float-4 { right: 5%; }
            .float-5 { left: 18%; }
            .float-6 { right: 20%; }
          }
          @media (max-width: 900px) {
            .hero-h1 { font-size: clamp(2.8rem, 6vw, 4rem); }
            .float-icon { width: 50px; height: 50px; border-radius: 14px; }
            .float-icon svg { width: 24px; height: 24px; }
            .float-5, .float-6 { display: none; }
          }
          @media (max-width: 640px) {
            .floating-icons { display: none; }
            .hero-ctas { flex-direction: column; width: 100%; }
            .hero-btn-red, .hero-btn-outline { width: 100%; justify-content: center; }
          }

          /* animations */
          .hero-content > * {
            animation: heroFadeUp 1s cubic-bezier(.16,1,.3,1) both;
          }
          .hero-content > *:nth-child(1) { animation-delay: 0s; }
          .hero-content > *:nth-child(2) { animation-delay: .1s; }
          .hero-content > *:nth-child(3) { animation-delay: .2s; }
          .hero-content > *:nth-child(4) { animation-delay: .3s; }
          
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(30px) scale(0.98); }
            to   { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}} />

        {/* Floating Icons Background */}
        <div className="floating-icons">
          <div className="float-icon float-1"><Code /></div>
          <div className="float-icon float-2"><Cloud /></div>
          <div className="float-icon float-3"><Database /></div>
          <div className="float-icon float-4"><Shield /></div>
          <div className="float-icon float-5"><Smartphone /></div>
          <div className="float-icon float-6"><LineChart /></div>
        </div>

        {/* CONTENT */}
        <div className="hero-content">
          <div className="hero-pill">
            <span className="hero-pill-tag">Specialists</span>
            <span className="hero-pill-text">Resource Augmentation <span style={{ opacity: 0.5 }}>&rarr;</span></span>
          </div>

          <h1 className="hero-h1">
            Enterprise-Ready <span className="text-red">Talent</span>.<br />
            Deployed When You <span className="text-red">Need It</span>.
          </h1>

          <p className="hero-sub">
            Talenopia helps enterprises and growing businesses scale faster with hyper-specialized IT and non-IT professionals—without long hiring cycles, hidden costs, or rigid contracts.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="hero-btn-red">Hire Talent &rarr;</Link>
            <Link href="/services" className="hero-btn-outline">Talk to an Expert</Link>
          </div>
        </div>
      </section>

      {/* Thin section separator */}
      <div style={{ height: 1, background: "var(--gray-mid)" }} />

      {/* ════════════════════════════════════════
          WHO WE ARE  (intro)
      ════════════════════════════════════════ */}
      <section style={{ padding: "88px 5%", background: "var(--off-white)" }}>
        <div className="intro-inner">
          <div className="reveal">
            <span className="section-rule" />
            <div style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 14 }}>
              Who We Are
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, lineHeight: 1.18, color: "var(--text)", marginBottom: 28 }}>
              Your Partner in Modern{" "}
              <br />Resource Augmentation
            </h2>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.78, color: "var(--text-light)", marginBottom: 14, maxWidth: 560 }}>
              Talenopia is a resource augmentation firm built for organizations that
              value agility, precision, and trust. We enable enterprises and SMBs to
              extend their teams with skilled professionals who integrate seamlessly.
            </p>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.78, color: "var(--text-light)", marginBottom: 32, maxWidth: 560 }}>
              From IT specialists to non-IT professionals — ready-to-deploy resources
              aligned to your technical, cultural, and compliance requirements.
            </p>
            <Link href="/about" className="btn btn-outline-dark">About Us →</Link>
          </div>

          {/* Two overlapping info boxes */}
          <div className="reveal reveal-delay-1" style={{ position: "relative", height: 320 }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 56,
              padding: "28px 30px",
              background: "var(--black)", color: "var(--white)",
              borderLeft: "2px solid var(--red)",
            }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--red)", marginBottom: 10 }}>What We Offer</div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>
                Flexible access to vetted professionals across technical and functional
                roles — scaling teams without long-term commitments.
              </p>
            </div>
            <div style={{
              position: "absolute", bottom: 0, right: 0, left: 56,
              padding: "28px 30px",
              background: "var(--black-mid)", color: "var(--white)",
              borderLeft: "2px solid rgba(255,255,255,0.12)",
              borderTop: "none",
            }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 10 }}>Our Advantage</div>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "rgba(255,255,255,0.5)" }}>
                Maintain full control over scope, cost, and delivery — whether you need
                a single expert or a dedicated team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thin section separator */}
      <div style={{ height: 1, background: "var(--gray-mid)" }} />

      {/* ════════════════════════════════════════
          CORE SPECIALIZATION CARDS
      ════════════════════════════════════════ */}
      <section style={{ padding: "88px 5%", background: "var(--white)" }}>
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 52 }}>
          <span className="section-rule" />
          <div style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 14 }}>
            Core Specialization
          </div>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, lineHeight: 1.18, color: "var(--text)" }}>
            Hyper-Specialized Talent Pools
          </h2>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .spec-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
            background: var(--gray-mid);
            border: 1px solid var(--gray-mid);
          }
          @media (max-width: 900px) {
            .spec-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 560px) {
            .spec-grid { grid-template-columns: 1fr; }
          }
        `}} />

        <div className="spec-grid">
          {[
            { title: "AI / ML Engineers", desc: "Machine learning specialists and AI engineers for enterprise-grade deployments and innovation pipelines." },
            { title: "Cloud Engineers", desc: "Certified professionals across AWS, Azure, and GCP to architect, migrate, and manage cloud environments." },
            { title: "DevOps & Cloud-Native", desc: "CI/CD, containerization, infrastructure-as-code, and modern delivery specialists." },
            { title: "Cybersecurity Professionals", desc: "Security analysts, architects, and compliance specialists to protect your digital environment." },
            { title: "Software Engineers", desc: "Full-stack, backend, and frontend engineers who contribute immediately across your tech stack." },
            { title: "Non-IT Resources", desc: "Operations, compliance, and business function professionals to strengthen your support fabric." },
          ].map((card, i) => (
            <SpecCard key={i} title={card.title} desc={card.desc} delay={i % 3} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESS  (dark background with layered tone)
      ════════════════════════════════════════ */}
      <section className="reveal process-section" style={{ padding: "88px 5%", background: "var(--black-mid)" }}>
        <style dangerouslySetInnerHTML={{__html: `
          .process-section { padding: 88px 5%; }
          .process-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            border-left: 1px solid var(--black-soft);
          }
          @media (max-width: 900px) {
            .process-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 540px) {
            .process-section { padding: 60px 5%; }
            .process-grid {
              grid-template-columns: 1fr;
              border-left: none;
            }
          }
        `}} />
        <span className="section-rule" style={{ display: "block" }} />
        <div style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 14 }}>
          How It Works
        </div>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, lineHeight: 1.18, color: "var(--white)", marginBottom: 64 }}>
          A Simple, Enterprise-Friendly Process
        </h2>

        <div className="process-grid">
          {[
            { num: "01", title: "Requirement Alignment", desc: "We understand your goals, timelines, and skill expectations before anything else." },
            { num: "02", title: "Talent Shortlisting", desc: "Receive curated profiles from our pre-vetted talent pool — no generic resumes." },
            { num: "03", title: "Interview & Selection", desc: "You interview and select resources that fit your team dynamics and culture." },
            { num: "04", title: "Onboarding & Integration", desc: "Smooth onboarding with minimal disruption to your existing workflow." },
          ].map((step, i) => (
            <ProcessStep key={i} num={step.num} title={step.title} desc={step.desc} />
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY TALENOPIA
      ════════════════════════════════════════ */}
      <section style={{ padding: "88px 5%", background: "var(--gray)" }}>
        <div className="why-inner">
          <div className="reveal">
            <span className="section-rule" />
            <div style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 14 }}>
              Why Talenopia
            </div>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, lineHeight: 1.18, color: "var(--text)", marginBottom: 20 }}>
              Built for Long-Term Partnerships
            </h2>
            <p style={{ fontSize: "0.92rem", lineHeight: 1.78, color: "var(--text-light)", maxWidth: 480 }}>
              Organizations choose Talenopia because we focus on reliability, clarity,
              and outcomes. We don&apos;t just provide resources — we build partnerships
              designed to last.
            </p>
          </div>

          <div className="reveal reveal-delay-1" style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--gray-mid)" }}>
            {[
              { title: "Quick Onboarding", text: "Without compromising quality or cultural alignment." },
              { title: "Cultural & Compliance Fit", text: "Every resource aligned to your standards and environment." },
              { title: "Enterprise-Grade Standards", text: "Rigorous evaluation beyond just technical skills." },
              { title: "Transparent Pricing", text: "No hidden charges. No unnecessary complexity." },
              { title: "Relationship-Driven Model", text: "Long-term value built on performance and mutual respect." },
            ].map((point, i) => (
              <WhyPoint key={i} title={point.title} text={point.text} idx={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA STRIP  (pre-footer red background)
      ════════════════════════════════════════ */}
      <div className="reveal cta-strip" style={{ background: "var(--red)", padding: "100px 5%" }}>
        <style dangerouslySetInnerHTML={{__html: `
          .cta-strip-btns {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 12px;
          }
          @media (max-width: 540px) {
            .cta-strip { padding: 72px 5%; }
            .cta-strip-btns {
              flex-direction: column;
              width: 100%;
            }
            .cta-strip-btns a {
              width: 100%;
              text-align: center;
              justify-content: center;
            }
          }
        `}} />
        <div style={{ maxWidth: 640 }}>
          <span className="section-rule" style={{ background: "var(--white)" }} />
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--white)", marginBottom: 16, lineHeight: 1.2 }}>
            Ready to Build Your Team with Confidence?
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.5)", marginBottom: 36, maxWidth: 480, lineHeight: 1.7 }}>
            Whether you&apos;re expanding rapidly or filling critical skill gaps, Talenopia
            delivers the talent you need — without friction.
          </p>
          <div className="cta-strip-btns">
            <Link href="/contact" className="btn btn-dark">Get in Touch</Link>
            <Link href="/services" className="btn btn-outline" style={{ background: "transparent", borderColor: "rgba(255,255,255,0.4)" }}>View Services</Link>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────── */

function SpecCard({ title, desc, delay }: { title: string; desc: string; delay: number }) {
  const delayClass = delay === 1 ? "reveal-delay-1" : delay === 2 ? "reveal-delay-2" : "";
  return (
    <div className={`reveal ${delayClass}`}
      style={{
        padding: "44px 32px",
        background: "var(--white)",
        borderLeft: "2px solid transparent",
        cursor: "default",
        transition: "border-color var(--transition), background var(--transition)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderLeftColor = "var(--red)";
        el.style.background = "var(--off-white)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderLeftColor = "transparent";
        el.style.background = "var(--white)";
      }}
    >
      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: 14 }}>{title}</h3>
      <p style={{ fontSize: "0.95rem", color: "var(--text-light)", lineHeight: 1.65 }}>{desc}</p>
    </div>
  );
}

function ProcessStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div style={{
      padding: "44px 32px",
      borderRight: "1px solid var(--black-soft)",
      transition: "background var(--transition)",
      cursor: "default",
    }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = ""; }}
    >
      <div style={{ fontSize: "3.2rem", fontWeight: 800, lineHeight: 1, color: "var(--red)", marginBottom: 20, opacity: 0.9 }}>{num}</div>
      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}>{desc}</p>
    </div>
  );
}

function WhyPoint({ title, text, idx }: { title: string; text: string; idx: number }) {
  return (
    <div style={{
      display: "flex", gap: 16, alignItems: "flex-start",
      padding: "18px 20px",
      background: "var(--white)",
      transition: "background var(--transition)",
      cursor: "default",
    }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--off-white)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--white)"; }}
    >
      <div style={{ width: 24, height: 24, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "0.62rem", fontWeight: 800, color: "var(--red)", letterSpacing: "0.05em" }}>0{idx}</span>
      </div>
      <div>
        <h4 style={{ fontSize: "0.83rem", fontWeight: 700, color: "var(--text)", marginBottom: 3 }}>{title}</h4>
        <p style={{ fontSize: "0.78rem", color: "var(--text-light)", lineHeight: 1.55 }}>{text}</p>
      </div>
    </div>
  );
}

