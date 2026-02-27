"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesClient() {
  return (
    <div className="bg-white">
      {/* ───── HERO ───── */}
      <section className="bg-[#f8f7f5] border-b border-[#dedbd6] pt-28 pb-16 px-[4%]">
        <motion.div
           initial="hidden"
           animate="visible"
           variants={staggerContainer}
        >
           <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
             <span className="w-6 h-[1.5px] bg-[var(--red)]" />
             <span className="text-[0.63rem] font-bold tracking-[0.2em] uppercase text-[var(--red)]">
               What We Do
             </span>
           </motion.div>

           <motion.h1
             variants={fadeInUp}
             className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.93] text-[#0a0a0a] mb-6"
           >
             Resource <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #0a0a0a" }}>Augmentation</span><br />
             Services for Scale
           </motion.h1>

           <motion.div variants={fadeInUp} className="w-12 h-[3px] bg-[var(--red)] mb-8" />
           
           <motion.p
             variants={fadeInUp}
             className="text-[0.93rem] leading-[1.78] text-[#555] max-w-lg"
           >
             Flexible, transparent, and enterprise-ready resource augmentation across IT and non-IT domains. We deliver professionals who integrate seamlessly and deliver from day one.
           </motion.p>
        </motion.div>
      </section>

      {/* ───── IT AUGMENTATION ───── */}
      <section className="bg-[#f2f1ef] py-20 px-[4%]">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
           >
              <span className="inline-block text-[0.58rem] font-bold tracking-[0.2em] uppercase bg-[var(--red)] text-white px-3 py-1 mb-4">
                01 — IT Augmentation
              </span>
              <h2 className="font-serif text-[1.65rem] text-[#0a0a0a] mb-3">
                Access Specialized Technology Talent — On Demand
              </h2>
              <div className="text-[0.92rem] font-medium text-[#888580] mb-5">
                IT Staff Augmentation
              </div>
              <p className="text-[0.93rem] text-[#555] leading-[1.78] mb-6">
                Our IT staff augmentation helps organizations scale technical teams with precision. Skilled professionals contribute immediately across development, infrastructure, and emerging technology domains.
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Software Developers", "Cloud Engineers", "DevOps Specialists", "AI / ML Engineers",
                  "Cybersecurity Experts", "Data Engineers", "Blockchain Devs", "Enterprise IT"
                ].map((tag, i) => (
                  <span key={i} className="text-[0.68rem] font-semibold px-2.5 py-1 bg-white border border-[#dedbd6] text-[#555]">
                    {tag}
                  </span>
                ))}
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#0a0a0a] p-10 md:p-12 relative group"
           > 
              <div className="text-[0.63rem] font-bold tracking-[0.2em] uppercase text-[var(--red)] mb-4">Why IT Augmentation?</div>
              <h3 className="text-[1.05rem] font-bold text-white mb-6">Scale Technical Teams with Precision</h3>
              
              <div className="space-y-4">
                 {[
                   "Scale without long-term hiring commitments",
                   "Access niche expertise on demand",
                   "Resources vetted for technical maturity",
                   "Enterprise-grade compliance readiness",
                   "Seamless workflow integration from day one"
                 ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/[0.07] last:border-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--red)] mt-1.5 shrink-0" />
                      <div className="text-[0.82rem] text-white/45">{item}</div>
                    </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* ───── NON-IT AUGMENTATION ───── */}
      <section className="bg-white py-20 px-[4%]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#f5f5f5] p-12 text-center flex flex-col items-center justify-center min-h-[400px] border border-[#f2f1ef] order-2 lg:order-1"
           >
              <div className="text-[3.2rem] mb-4">🏢</div>
              <div className="text-[0.63rem] font-bold tracking-[0.2em] uppercase text-[var(--red)] mb-3">Dual Capability</div>
              <p className="text-[0.86rem] text-[#555] leading-[1.68] max-w-xs">
                 Technology-driven initiatives and core business operations under a single, consistent engagement model.
              </p>
           </motion.div>

           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
             className="order-1 lg:order-2"
           >
              <span className="inline-block text-[0.58rem] font-bold tracking-[0.2em] uppercase bg-[var(--red)] text-white px-3 py-1 mb-4">
                02 — Non-IT Augmentation
              </span>
              <h2 className="font-serif text-[1.65rem] text-[#0a0a0a] mb-3">
                Strengthen Business Operations with Trusted Professionals
              </h2>
              <div className="text-[0.92rem] font-medium text-[#888580] mb-5">
                Non-IT Staff Augmentation
              </div>
              <p className="text-[0.93rem] text-[#555] leading-[1.78] mb-6">
                Beyond technology roles, Talenopia supports organizations with non-IT resource augmentation to ensure smooth business operations and scalable support functions under a unified model.
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Operations", "Marketing & Growth", "Compliance", 
                  "Governance", "Business Support", "Admin Specialists"
                ].map((tag, i) => (
                  <span key={i} className="text-[0.68rem] font-semibold px-2.5 py-1 bg-[#f8f7f5] border border-[#dedbd6] text-[#555]">
                    {tag}
                  </span>
                ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* ───── SPECIALIZED TALENT ───── */}
      <section className="bg-[#f2f1ef] py-20 px-[4%]">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInUp}
           className="mb-10"
        >
           <span className="inline-block text-[0.58rem] font-bold tracking-[0.2em] uppercase bg-[var(--red)] text-white px-3 py-1 mb-4">
              03 — Specialized Talent
           </span>
           <h2 className="font-serif text-[1.65rem] text-[#0a0a0a] mb-2">
              Hyper-Specialized Expertise for High-Impact Needs
           </h2>
           <div className="text-[0.92rem] font-medium text-[#888580] mb-6">
              Niche AI/ML, Blockchain, Cloud, Cybersecurity
           </div>
           <p className="text-[0.93rem] text-[#555] max-w-2xl leading-[1.6]">
              Talenopia maintains focused pipelines of specialists who understand modern enterprise environments—not generic profiles from broad candidate pools.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1 p-7 bg-white border border-[#dedbd6] hover:shadow-lg transition-all"
            >
               <div className="text-3xl mb-4">🤖</div>
               <h3 className="font-bold text-[#0a0a0a] mb-2">AI &amp; ML</h3>
               <p className="text-[0.8rem] text-[#555] leading-relaxed">Deep learning, NLP, computer vision, MLOps specialists for AI-driven product development.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 p-7 bg-[#0a0a0a] text-white hover:shadow-lg transition-all"
            >
               <div className="text-3xl mb-4">☁️</div>
               <h3 className="font-bold text-white mb-2">Cloud Native</h3>
               <p className="text-[0.8rem] text-white/50 leading-relaxed">AWS, Azure, GCP certified engineers for multi-cloud architecture and migration projects.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 p-7 bg-white border border-[#dedbd6] hover:shadow-lg transition-all"
            >
               <div className="text-3xl mb-4">🔐</div>
               <h3 className="font-bold text-[#0a0a0a] mb-2">Cybersecurity</h3>
               <p className="text-[0.8rem] text-[#555] leading-relaxed">SOC analysts, pen testers, and compliance experts for enterprise security posture.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-1 p-7 bg-[var(--red)] text-white hover:shadow-lg transition-all"
            >
               <div className="text-3xl mb-4">⛓️</div>
               <h3 className="font-bold text-white mb-2">Blockchain</h3>
               <p className="text-[0.8rem] text-white/80 leading-relaxed">Smart contract, DApp, and Web3 developers for decentralized application projects.</p>
            </motion.div>
        </div>
      </section>

       {/* ───── ENGAGEMENT MODELS ───── */}
       <section className="bg-[#f8f7f5] py-24 px-[4%]">
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeInUp}
          >
             <div className="flex items-center gap-3 mb-4">
               <span className="w-7 h-[1.5px] bg-[var(--red)]" />
               <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[var(--red)]">
                 04 — Engagement Models
               </span>
             </div>
             <h2 className="font-serif text-[2.6rem] text-[#0a0a0a] mb-5">
               Flexible Structures. <em className="italic text-[var(--red)]">Complete Transparency.</em>
             </h2>
             <div className="w-10 h-[3px] bg-[var(--red)] mb-8" />
             <p className="text-[0.93rem] leading-[1.78] text-[#555] max-w-lg mb-12">
               Multiple engagement models to suit different business requirements while maintaining clarity and control. No hidden charges. No unnecessary complexity.
             </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-[#dedbd6] border border-[#dedbd6]">
             {[
               { icon: "T&M", title: "Time & Material", text: "Pay-as-you-go talent. No fixed bids, no scope lock-ins. Expert resources billed hourly or daily for exact work performed." },
               { icon: "◎", title: "Monthly Dedicated", text: "Ideal for long-term capacity needs. Consistent availability and deeper team integration for sustained delivery." },
               { icon: "▣", title: "Fixed Resources", text: "Stable, committed resources aligned to defined responsibilities and long-term organizational requirements." },
             ].map((item, i) => (
                <div key={i} className="bg-white p-8 hover:bg-[#f8f7f5] transition-colors group">
                   <h3 className="text-[0.82rem] font-bold text-[#0a0a0a] mb-2 flex items-center gap-2">
                      <span className="text-[var(--red)] text-xs">{item.icon}</span> {item.title}
                   </h3>
                   <p className="text-[0.76rem] text-[#555] leading-[1.65] group-hover:text-[#333] transition-colors">
                      {item.text}
                   </p>
                </div>
             ))}
             <div className="bg-white p-8 hover:bg-[#f8f7f5] transition-colors group">
                <h3 className="text-[0.82rem] font-bold text-[#0a0a0a] mb-2 flex items-center gap-2">
                   <span className="text-[var(--red)] text-xs">↻</span> Replacement Support
                </h3>
                <p className="text-[0.76rem] text-[#555] leading-[1.65] group-hover:text-[#333] transition-colors">
                   Subject to availability, ensuring continuity and confidence throughout long-term engagements.
                </p>
             </div>
          </div>
       </section>
      
       {/* ───── CTA ───── */}
       <div className="bg-white py-20 px-[4%]">
        <div className="bg-[var(--red)] py-16 px-10 flex flex-wrap items-center justify-between gap-10 rounded-sm">
           <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] text-white leading-tight max-w-xl">
             Let&apos;s Discuss Your Resource Requirements
           </h2>
           <Link
             href="/contact"
             className="bg-white text-[var(--red)] px-8 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-gray-100 transition-all inline-flex items-center gap-2"
           >
             Connect with Us
              <ArrowRight className="w-4 h-4 ml-1" />
           </Link>
        </div>
      </div>
    </div>
  );
}
