"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

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
      <section className="relative min-h-[100vh] grid lg:grid-cols-[1.3fr_1fr] pt-[64px] overflow-hidden hero-section bg-[#F4F2EE]">
        <style dangerouslySetInnerHTML={{__html: `
          .hero-section::before {
            content: '';
            position: absolute; top: 0; left: 0;
            width: 65%; height: 100%;
            background: #C01C1C;
            clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
            z-index: 0;
          }
          .hero-section::after {
            content: '';
            position: absolute; top: 120px; right: 60px;
            width: 220px; height: 160px;
            background-image: radial-gradient(circle, #C01C1C 1.5px, transparent 1.5px);
            background-size: 18px 18px;
            opacity: 0.25;
            z-index: 1;
          }
          @media (max-width: 1024px) {
            .hero-section::before {
               width: 100%; clip-path: polygon(0 0,100% 0,100% 45%,0 55%);
            }
          }
          .hero-card {
            animation: slideUp .8s cubic-bezier(.16,1,.3,1) both;
          }
          .hero-heading {
            animation: slideUp .8s .1s cubic-bezier(.16,1,.3,1) both;
          }
          .hero-body {
            animation: slideUp .8s .2s cubic-bezier(.16,1,.3,1) both;
          }
          .hero-actions {
            animation: slideUp .8s .3s cubic-bezier(.16,1,.3,1) both;
          }
          .stat-card {
            animation: slideUp .8s cubic-bezier(.16,1,.3,1) both;
          }
          .stat-card:nth-child(1) { animation-delay: .15s; border-left-color: #C01C1C; }
          .stat-card:nth-child(2) { animation-delay: .25s; border-left-color: #ddd; }
          .stat-card:nth-child(3) { animation-delay: .35s; border-left-color: #ddd; }
          .stat-card:nth-child(4) { animation-delay: .45s; }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce {
            0%,100%{ transform: translateX(-50%) translateY(0); }
            50%    { transform: translateX(-50%) translateY(8px); }
          }
        `}} />

        {/* Left Main Card */}
        <div className="relative z-[2] flex items-center px-[24px] lg:px-[64px] py-[100px] lg:py-[80px]">
          <div className="w-full max-w-[650px] hero-card mx-auto lg:ml-0 lg:mr-auto pl-0 lg:pl-[40px]">
            <div className="flex items-center gap-[12px] text-[11px] font-[600] tracking-[2px] uppercase text-white mb-[28px] before:content-[''] before:block before:w-[28px] before:h-[2px] before:bg-white">
              Resource Augmentation Specialists
            </div>

            <h1 className="font-[family-name:var(--font-barlow-condensed)] font-[900] text-[clamp(48px,5vw,72px)] leading-[1.0] tracking-[-1px] text-white hero-heading mb-0">
              Enterprise-Ready<br/>Talent.<br/>
              <span className="text-[#111]">Deployed When<br/>You Need It.</span>
            </h1>

            <div className="w-[36px] h-[3px] bg-white my-[28px]" />

            <p className="text-[16px] leading-[1.75] text-white/90 mb-[36px] hero-body font-[family-name:var(--font-barlow)]">
              Talenopia helps enterprises and growing businesses scale with hyper-specialized IT and non-IT professionals — without long hiring cycles, hidden costs, or rigid contracts.
            </p>

            <div className="flex gap-[16px] flex-wrap hero-actions">
              <Link href="/contact" className="bg-[#111] text-white py-[14px] px-[32px] font-[family-name:var(--font-barlow-condensed)] font-[700] text-[14px] tracking-[2px] uppercase rounded-[2px] transition-all hover:bg-black hover:-translate-y-[2px]">
                Hire Talent
              </Link>
              <Link href="/contact" className="bg-transparent text-white py-[14px] px-[32px] font-[family-name:var(--font-barlow-condensed)] font-[700] text-[14px] tracking-[2px] uppercase border-[2px] border-white rounded-[2px] transition-all hover:bg-white hover:text-[#C01C1C] hover:-translate-y-[2px]">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>

        {/* Right Stats Cards */}
        <div className="relative z-[2] flex flex-row flex-wrap lg:flex-col justify-center gap-[12px] lg:gap-[16px] p-[24px] lg:py-[80px] lg:pr-[48px] lg:pl-[80px] max-w-[500px] mx-auto lg:mx-0 w-full">
          <div className="bg-white py-[28px] px-[36px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-l-[4px] border-transparent transition-all hover:translate-x-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] stat-card flex-[1_1_140px] lg:flex-none">
            <div className="text-[10px] font-[600] tracking-[2px] uppercase text-[#8a8a8a] mb-[8px]">Clients Served</div>
            <div className="font-[family-name:var(--font-barlow-condensed)] font-[900] text-[40px] text-[#C01C1C] leading-[1]">
              <Counter target={500} suffix="+" />
            </div>
          </div>
          
          <div className="bg-white py-[28px] px-[36px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-l-[4px] border-transparent transition-all hover:translate-x-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] stat-card flex-[1_1_140px] lg:flex-none">
            <div className="text-[10px] font-[600] tracking-[2px] uppercase text-[#8a8a8a] mb-[8px]">Talent Coverage</div>
            <div className="font-[family-name:var(--font-barlow-condensed)] font-[900] text-[28px] pt-[6px] text-[#C01C1C] leading-[1]">IT & Non-IT</div>
          </div>

          <div className="bg-white py-[28px] px-[36px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-l-[4px] border-transparent transition-all hover:translate-x-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] stat-card flex-[1_1_140px] lg:flex-none">
            <div className="text-[10px] font-[600] tracking-[2px] uppercase text-[#8a8a8a] mb-[8px]">Engagement Models</div>
            <div className="font-[family-name:var(--font-barlow-condensed)] font-[900] text-[40px] text-[#C01C1C] leading-[1]">4+</div>
          </div>

          <div className="bg-[#C01C1C] py-[28px] px-[36px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] border-l-[4px] border-transparent transition-all hover:translate-x-[6px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] stat-card flex-[1_1_140px] lg:flex-none">
            <div className="text-[10px] font-[600] tracking-[2px] uppercase text-white/70 mb-[8px]">Hidden Costs</div>
            <div className="font-[family-name:var(--font-barlow-condensed)] font-[900] text-[40px] text-white leading-[1]">0%</div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[8px] z-10 animate-[bounce_2s_infinite]">
          <span className="text-[10px] tracking-[2px] uppercase text-[#8a8a8a]">Scroll</span>
          <div className="w-[18px] h-[18px] border-r-[2px] border-b-[2px] border-[#C01C1C] rotate-45" />
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

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: 1,
          background: "var(--gray-mid)",
          border: "1px solid var(--gray-mid)",
        }}>
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
      <section className="reveal" style={{ padding: "88px 5%", background: "var(--black-mid)" }}>
        <span className="section-rule" style={{ display: "block" }} />
        <div style={{ fontSize: "0.63rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", marginBottom: 14 }}>
          How It Works
        </div>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800, lineHeight: 1.18, color: "var(--white)", marginBottom: 64 }}>
          A Simple, Enterprise-Friendly Process
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          borderLeft: "1px solid var(--black-soft)",
        }}>
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
      <div className="reveal" style={{ background: "var(--red)", padding: "100px 5%" }}>
        <div style={{ maxWidth: 640 }}>
          <span className="section-rule" style={{ background: "var(--white)" }} />
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--white)", marginBottom: 16, lineHeight: 1.2 }}>
            Ready to Build Your Team with Confidence?
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.5)", marginBottom: 36, maxWidth: 480, lineHeight: 1.7 }}>
            Whether you&apos;re expanding rapidly or filling critical skill gaps, Talenopia
            delivers the talent you need — without friction.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
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

function Counter({ target, suffix = "" }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        let c = 0;
        const step = target / 60;
        const tick = () => {
          c = Math.min(c + step, target);
          setCount(Math.floor(c));
          if (c < target) requestAnimationFrame(tick);
        };
        tick();
        obs.unobserve(el);
      });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}
