"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function AboutClient() {
  return (
    <div className="bg-white">
      {/* ───── HERO ───── */}
      <section style={{
        minHeight: "100vh",
        display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
        background: "var(--off-white)", padding: "120px 5% 80px"
      }}>
        {/* Geometric Red Backgrounds */}
        <div style={{
          position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%",
          background: "linear-gradient(135deg, var(--red) 0%, var(--red) 35%, transparent 35.1%, transparent 100%)",
          zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", left: "-10%", width: "120%", height: "40%",
          background: "linear-gradient(135deg, transparent 0%, transparent 60%, var(--red) 60.1%, var(--red) 100%)",
          zIndex: 0, opacity: 0.9,
        }} />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full max-w-7xl mx-auto">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="bg-white/95 p-10 shadow-2xl backdrop-blur-sm border border-white/20 rounded-md relative z-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[var(--red)]" />
              <span className="text-[0.66rem] font-bold tracking-[0.22em] uppercase text-[var(--red)]">
                About Talenopia
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-[var(--text)] mb-6"
            >
              Building Teams That <br/>
              <span className="text-[var(--red)]">Power</span> Business Growth
            </motion.h1>

             <motion.div variants={fadeInUp} className="w-12 h-[3px] bg-[var(--red)] mb-8" />

            <motion.p
              variants={fadeInUp}
              className="text-[1rem] leading-[1.75] font-medium text-[var(--text-light)] max-w-lg mb-10"
            >
              A modern resource augmentation company helping enterprises and growing businesses scale with confidence—exactly when it&apos;s needed, without the friction of traditional hiring.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link href="/contact" className="btn btn-primary">
                Connect with Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-4 relative z-10"
          >
            <div className="p-8 bg-white/95 border border-white/20 shadow-xl backdrop-blur-sm">
               <h3 className="text-[0.8rem] tracking-[0.15em] uppercase text-[var(--red)] mb-3 font-bold">
                 Who We Are
               </h3>
               <p className="text-[0.9rem] font-medium text-[var(--text-light)] leading-[1.7]">
                 At Talenopia, resource augmentation should be simple, transparent, and outcome-driven. Our approach is built around understanding your business objectives, team dynamics, and operational standards. Every professional we deploy is selected for technical competence, cultural alignment, and professional reliability.
               </p>
            </div>
            
            <div className="p-8 bg-[var(--red)] border border-red-500/30 shadow-xl text-white">
               <h3 className="text-[0.8rem] tracking-[0.15em] uppercase text-white/80 mb-3 font-bold">
                 What We Stand For
               </h3>
               <p className="text-[0.9rem] font-medium text-white/90 leading-[1.7]">
                 Precision, transparency, and trust. Talenopia was created to address common challenges—long hiring cycles, unclear pricing, and limited flexibility. We operate with hyper-specialized talent pools, quick onboarding, transparent pricing, and flexible engagement structures aligned to real business needs.
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── EXPERTISE ───── */}
      <section className="py-24 px-[4%] bg-white">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-[1.5px] bg-[var(--red)]" />
            <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[var(--red)]">
              Our Expertise
            </span>
          </div>
          <h2 className="font-serif text-[clamp(1.7rem,3.2vw,2.6rem)] text-[#0a0a0a] mb-5">
            Specialized Talent Across <em className="italic text-[var(--red)]">IT &amp; Non-IT</em>
          </h2>
          <div className="w-10 h-[3px] bg-[var(--red)] mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
           {/* IT Specializations */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--red)] transition-all duration-500 group-hover:w-full" />
            <div className="text-3xl mb-4">💻</div>
            <h3 className="font-bold text-[0.97rem] mb-2 text-[#0a0a0a]">IT Specializations</h3>
            <p className="text-[0.83rem] text-[#555] leading-relaxed mb-6">
              Deep expertise across the full technology spectrum for enterprise-grade requirements and innovation initiatives.
            </p>
            <div className="space-y-2">
              {[
                "Cloud Engineering (AWS, Azure, GCP)",
                "DevOps and Cloud-Native Technologies",
                "AI / Machine Learning & Data Engineering",
                "Cybersecurity & Compliance",
                "Blockchain & Emerging Tech",
                "Software Development & Architecture"
              ].map((item, i) => (
                 <div key={i} className="flex items-start gap-2 text-[0.82rem] text-[#555] pb-2 border-b border-[#f2f1ef] last:border-0">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--red)] mt-1.5 shrink-0" />
                   {item}
                 </div>
              ))}
            </div>
          </motion.div>

           {/* Non-IT Functions */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-6 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--red)] transition-all duration-500 group-hover:w-full" />
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="font-bold text-[0.97rem] mb-2 text-[#0a0a0a]">Non-IT Functions</h3>
            <p className="text-[0.83rem] text-[#555] leading-relaxed mb-6">
              Enabling both technology initiatives and core business operations under a unified engagement model.
            </p>
            <div className="space-y-2">
              {[
                "Operations & Process Support",
                "Marketing & Growth Functions",
                "Compliance & Governance",
                "Business & Administrative Support",
                "Functional Specialist Roles"
              ].map((item, i) => (
                 <div key={i} className="flex items-start gap-2 text-[0.82rem] text-[#555] pb-2 border-b border-[#f2f1ef] last:border-0">
                   <div className="w-1.5 h-1.5 rounded-full bg-[var(--red)] mt-1.5 shrink-0" />
                   {item}
                 </div>
              ))}
            </div>
          </motion.div>
          
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-[var(--red)] p-8 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden md:min-h-[220px]"
          >
             <div className="inline-block bg-white/20 text-white text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3">
              Global
            </div>
            <div className="font-display text-[3.8rem] leading-none text-white mb-1">
              World<span className="text-[1.3rem]">-class</span>
            </div>
            <div className="text-[0.66rem] tracking-[0.15em] uppercase text-white/60">
              Talent Standards
            </div>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-4 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--red)] transition-all duration-500 group-hover:w-full" />
            <div className="inline-block bg-[var(--red)] text-white text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3">
              Pricing
            </div>
            <div className="font-display text-[3.8rem] leading-none text-[#0a0a0a] mb-1">
              0<span className="text-[var(--red)]">%</span>
            </div>
            <div className="text-[0.66rem] tracking-[0.15em] uppercase text-[#888580]">
              Hidden Costs. Ever.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
          >
             <div className="absolute top-0 left-0 w-0 h-[3px] bg-[var(--red)] transition-all duration-500 group-hover:w-full" />
              <div className="w-12 h-12 flex items-center justify-center bg-[#f2f1ef] text-xl mb-5 rounded-sm">♦</div>
              <h3 className="font-bold text-[0.97rem] mb-2 text-[#0a0a0a]">Relationship-Driven</h3>
              <p className="text-[0.83rem] text-[#555] leading-relaxed">
                Long-term value over short-term placements. We build partnerships, not just fill seats.
              </p>
          </motion.div>
        </div>
      </section>

      {/* ───── VISION / MISSION ───── */}
      <section className="py-20 px-[4%] bg-[#f2f1ef]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
             <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[var(--red)]">Vision &amp; Mission</span>
          </div>
          <h2 className="font-serif text-[2.6rem] text-[#0a0a0a] mb-5">Our North Star</h2>
          <div className="w-10 h-[3px] bg-[var(--red)] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-2.5 max-w-6xl mx-auto">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#f8f7f5] border border-[#dedbd6] p-12"
           >
              <div className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[var(--red)] mb-4">Our Vision</div>
              <h2 className="font-serif text-[1.45rem] text-[#0a0a0a] mb-6">Empowering Growth Through People and Possibilities</h2>
              <div className="w-10 h-[3px] bg-[var(--red)] mb-6" />
              <p className="text-[0.88rem] text-[#555] leading-[1.75]">
                To become the most trusted partner for organizations seeking agility, expertise, and innovation by enabling access to world-class talent, when and where it&apos;s needed most.
              </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[var(--red)] p-12"
           >
              <div className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-white/70 mb-4">Our Mission</div>
              <h2 className="font-serif text-[1.45rem] text-white mb-6">Bridging Talent Gaps with Confidence</h2>
              <div className="w-10 h-[3px] bg-white/30 mb-6" />
              <p className="text-[0.88rem] text-white/80 leading-[1.75]">
                To bridge the talent gap by delivering skilled, reliable, and adaptable professionals who integrate seamlessly into our clients&apos; vision—helping them scale faster, innovate smarter, and achieve more.
              </p>
           </motion.div>
        </div>
      </section>

      {/* ───── APPROACH ───── */}
      <section className="py-24 px-[4%] bg-white">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
        >
           <div className="flex items-center gap-3 mb-4">
             <span className="w-7 h-[1.5px] bg-[var(--red)]" />
             <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[var(--red)]">
               Our Approach
             </span>
           </div>
           <h2 className="font-serif text-[2.6rem] text-[#0a0a0a] mb-5">
             Designed for Enterprises <em className="italic text-[var(--red)]">and</em> Growing Businesses
           </h2>
           <div className="w-10 h-[3px] bg-[var(--red)] mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {[
            { num: "01", title: "Clear Processes", text: "From requirement discussion to onboarding—every step is defined, transparent, and client-controlled." },
            { num: "02", title: "Professional Accountability", text: "Every resource backed by clear engagement structures with defined expectations and performance standards." },
            { num: "03", title: "Compliance-Aware", text: "All professionals selected with enterprise compliance, governance, and regulatory standards in mind." },
            { num: "04", title: "Long-Term Collaboration", text: "We aim to be a strategic partner, not a one-time vendor. Relationships built on trust and performance." },
            { num: "05", title: "Flexible Capacity", text: "Scale teams, adjust capacity, and maintain cost control without unnecessary contractual rigidity." }
          ].map((item, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-9 border border-[#dedbd6] hover:bg-[#0a0a0a] hover:border-[#0a0a0a] transition-all duration-300 group"
             >
                <div className="font-display text-[3.5rem] leading-none text-black/5 mb-[-6px] transition-colors group-hover:text-white/5">
                  {item.num}
                </div>
                <h3 className="text-[0.92rem] font-bold text-[#0a0a0a] mb-2 transition-colors group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-[0.8rem] text-[#555] leading-[1.65] transition-colors group-hover:text-white/50">
                  {item.text}
                </p>
             </motion.div>
          ))}
          
           <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="p-9 border border-[#dedbd6] hover:bg-[#0a0a0a] hover:border-[#0a0a0a] transition-all duration-300 group"
             >
                <div className="font-display text-[3.5rem] leading-none text-black/5 mb-[-6px] transition-colors group-hover:text-white/5">
                  06
                </div>
                <h3 className="text-[0.92rem] font-bold text-[#0a0a0a] mb-2 transition-colors group-hover:text-white">
                  Partner, Not Vendor
                </h3>
                <p className="text-[0.8rem] text-[#555] leading-[1.65] transition-colors group-hover:text-white/50">
                  Resources function as an extension of your internal teams—not external suppliers.
                </p>
             </motion.div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <div className="bg-[var(--red)] py-20 px-[4%] text-center">
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight mb-8"
        >
          Let&apos;s Build Something Strong Together
        </motion.h2>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
         >
           <Link
             href="/contact"
             className="bg-white text-[var(--red)] px-8 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-gray-100 transition-all inline-flex items-center gap-2"
           >
             Connect with Us
           </Link>
         </motion.div>
      </div>
    </div>
  );
}
