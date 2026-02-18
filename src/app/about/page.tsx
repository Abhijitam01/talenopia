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

export default function About() {
  return (
    <div className="bg-white">
      {/* ───── HERO ───── */}
      <section className="bg-[#0a0a0a] text-white pt-24 pb-20 px-[4%]">
        <div className="relative overflow-hidden grid lg:grid-cols-2 gap-20 items-center min-h-[70vh]">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none hero-noise" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(200,16,46,0.15)_0%,transparent_70%)] pointer-events-none blur-3xl opacity-60" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1.5px] bg-[#c8102e]" />
              <span className="text-[0.63rem] font-bold tracking-[0.2em] uppercase text-[#c8102e]">
                About Talenopia
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.93] mb-6"
            >
              Building Teams That <span className="text-[#c8102e]">Power</span> Business Growth
            </motion.h1>

             <motion.div variants={fadeInUp} className="w-12 h-[3px] bg-[#c8102e] mb-8" />

            <motion.p
              variants={fadeInUp}
              className="text-[0.97rem] leading-[1.78] text-white/50 max-w-lg mb-10"
            >
              A modern resource augmentation company helping enterprises and growing businesses scale with confidence—exactly when it's needed, without the friction of traditional hiring.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="bg-[#c8102e] text-white px-8 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-[#a00d24] transition-all hover:-translate-y-0.5 shadow-lg shadow-red-900/20 inline-flex items-center gap-2 group"
              >
                Connect with Us
                 <span className="w-4 h-[1px] bg-white relative transition-all group-hover:w-6">
                  <span className="absolute right-0 -top-[3px] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-white" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col gap-2.5 relative z-10"
          >
            <div className="p-8 bg-white/[0.04] border border-white/[0.07] hover:border-[#c8102e]/40 hover:bg-[#c8102e]/5 transition-all duration-300">
               <h3 className="text-[0.72rem] tracking-[0.15em] uppercase text-[#c8102e] mb-2 font-bold">
                 Who We Are
               </h3>
               <p className="text-[0.86rem] text-white/50 leading-[1.68]">
                 At Talenopia, resource augmentation should be simple, transparent, and outcome-driven. Our approach is built around understanding your business objectives, team dynamics, and operational standards. Every professional we deploy is selected for technical competence, cultural alignment, and professional reliability.
               </p>
            </div>
            
            <div className="p-8 bg-white/[0.04] border border-white/[0.07] hover:border-[#c8102e]/40 hover:bg-[#c8102e]/5 transition-all duration-300">
               <h3 className="text-[0.72rem] tracking-[0.15em] uppercase text-[#c8102e] mb-2 font-bold">
                 What We Stand For
               </h3>
               <p className="text-[0.86rem] text-white/50 leading-[1.68]">
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
            <span className="w-7 h-[1.5px] bg-[#c8102e]" />
            <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[#c8102e]">
              Our Expertise
            </span>
          </div>
          <h2 className="font-serif text-[clamp(1.7rem,3.2vw,2.6rem)] text-[#0a0a0a] mb-5">
            Specialized Talent Across <em className="italic text-[#c8102e]">IT & Non-IT</em>
          </h2>
          <div className="w-10 h-[3px] bg-[#c8102e] mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
           {/* IT Specializations */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 border border-[#dedbd6] p-8 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
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
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-1.5 shrink-0" />
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
            className="md:col-span-6 bg-[#0a0a0a] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
          >
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="font-bold text-[0.97rem] mb-2 text-white">Non-IT Functions</h3>
            <p className="text-[0.83rem] text-white/50 leading-relaxed mb-6">
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
                 <div key={i} className="flex items-start gap-2 text-[0.82rem] text-white/50 pb-2 border-b border-white/10 last:border-0">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-1.5 shrink-0" />
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
            className="md:col-span-4 bg-[#c8102e] p-8 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden md:min-h-[220px]"
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
            <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
            <div className="inline-block bg-[#c8102e] text-white text-[0.6rem] font-bold tracking-[0.12em] uppercase px-2.5 py-1 mb-3">
              Pricing
            </div>
            <div className="font-display text-[3.8rem] leading-none text-[#0a0a0a] mb-1">
              0<span className="text-[#c8102e]">%</span>
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
             <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#c8102e] transition-all duration-500 group-hover:w-full" />
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
             <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[#c8102e]">Vision & Mission</span>
          </div>
          <h2 className="font-serif text-[2.6rem] text-[#0a0a0a] mb-5">Our North Star</h2>
          <div className="w-10 h-[3px] bg-[#c8102e] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-2.5 max-w-6xl mx-auto">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#f8f7f5] border border-[#dedbd6] p-12"
           >
              <div className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[#c8102e] mb-4">Our Vision</div>
              <h2 className="font-serif text-[1.45rem] text-[#0a0a0a] mb-6">Empowering Growth Through People and Possibilities</h2>
              <div className="w-10 h-[3px] bg-[#c8102e] mb-6" />
              <p className="text-[0.88rem] text-[#555] leading-[1.75]">
                To become the most trusted partner for organizations seeking agility, expertise, and innovation by enabling access to world-class talent, when and where it's needed most.
              </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#c8102e] p-12"
           >
              <div className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-white/70 mb-4">Our Mission</div>
              <h2 className="font-serif text-[1.45rem] text-white mb-6">Bridging Talent Gaps with Confidence</h2>
              <div className="w-10 h-[3px] bg-white/30 mb-6" />
              <p className="text-[0.88rem] text-white/80 leading-[1.75]">
                To bridge the talent gap by delivering skilled, reliable, and adaptable professionals who integrate seamlessly into our clients' vision—helping them scale faster, innovate smarter, and achieve more.
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
             <span className="w-7 h-[1.5px] bg-[#c8102e]" />
             <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[#c8102e]">
               Our Approach
             </span>
           </div>
           <h2 className="font-serif text-[2.6rem] text-[#0a0a0a] mb-5">
             Designed for Enterprises <em className="italic text-[#c8102e]">and</em> Growing Businesses
           </h2>
           <div className="w-10 h-[3px] bg-[#c8102e] mb-12" />
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
               className="p-9 border border-[#0a0a0a] bg-[#0a0a0a] transition-all duration-300"
             >
                <div className="font-display text-[3.5rem] leading-none text-white/5 mb-[-6px]">
                  06
                </div>
                <h3 className="text-[0.92rem] font-bold text-white mb-2">
                  Partner, Not Vendor
                </h3>
                <p className="text-[0.8rem] text-white/45 leading-[1.65]">
                  Resources function as an extension of your internal teams—not external suppliers.
                </p>
             </motion.div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <div className="bg-[#c8102e] py-20 px-[4%] text-center">
        <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="font-display text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight mb-8"
        >
          Let's Build Something Strong Together
        </motion.h2>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
         >
           <Link
             href="/contact"
             className="bg-white text-[#c8102e] px-8 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-gray-100 transition-all inline-flex items-center gap-2"
           >
             Connect with Us
           </Link>
         </motion.div>
      </div>
    </div>
  );
}
