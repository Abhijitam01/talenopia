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

export default function CareersClient() {
  return (
    <div className="bg-white">
      {/* ───── HERO ───── */}
      <section className="bg-[#0a0a0a] text-white pt-28 pb-20 px-[4%] text-center relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18vw] text-white/[0.02] pointer-events-none whitespace-nowrap select-none">
          TALENOPIA
        </div>

        <motion.div
           initial="hidden"
           animate="visible"
           variants={staggerContainer}
           className="relative z-10 max-w-4xl mx-auto"
        >
           <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-6">
             <span className="text-[0.63rem] font-bold tracking-[0.2em] uppercase text-[var(--red)]">
               Careers at Talenopia
             </span>
           </motion.div>

           <motion.h1
             variants={fadeInUp}
             className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.93] mb-6"
           >
             Build Your Career<br />
             with <span className="text-[var(--red)]">Purpose</span>
           </motion.h1>

           <motion.p
             variants={fadeInUp}
             className="text-[0.97rem] leading-[1.78] text-white/50 max-w-xl mx-auto mb-10"
           >
             At Talenopia, great work happens when talented people are aligned with meaningful opportunities. If you value quality, accountability, and continuous learning—we&apos;d like to hear from you.
           </motion.p>

           <motion.div variants={fadeInUp}>
              <Link
                href="mailto:careers@talenopia.com"
                className="bg-[var(--red)] text-white px-8 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-[var(--red-dark)] transition-all hover:-translate-y-0.5 shadow-lg shadow-red-900/20 inline-flex items-center gap-2 group"
              >
                Send Your Profile
                 <span className="w-4 h-[1px] bg-white relative transition-all group-hover:w-6">
                  <span className="absolute right-0 -top-[3px] border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-white" />
                </span>
              </Link>
           </motion.div>
        </motion.div>
      </section>

      {/* ───── WHY / ROLES ───── */}
      <section className="bg-white py-24 px-[4%]">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
           {/* Why Work With Us */}
           <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
           >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-[1.5px] bg-[var(--red)]" />
                <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[var(--red)]">
                  Why Work with Us
                </span>
              </div>
              <h2 className="font-serif text-[2.6rem] text-[#0a0a0a] mb-5">
                Long-Term <em className="italic text-[var(--red)]">Professional</em> Relationships
              </h2>
              <div className="w-10 h-[3px] bg-[var(--red)] mb-10" />
              
              <div className="flex flex-col gap-[1px] bg-[#dedbd6] border border-[#dedbd6]">
                {[
                  { icon: "◈", title: "IT & Non-IT Opportunities", text: "Wide range of roles across technology and business functions for diverse professionals." },
                  { icon: "★", title: "Enterprise Exposure", text: "Work with leading organizations and high-growth business environments globally." },
                  { icon: "✓", title: "Clear Role Expectations", text: "Defined responsibilities, professional engagement, and clear accountability." },
                  { icon: "♦", title: "Performance-Based Growth", text: "Long-term associations built on performance, alignment, and mutual respect." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="p-6 bg-white flex items-start gap-4 hover:bg-[#f8f7f5] transition-colors"
                  >
                     <div className="w-8 h-8 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center shrink-0 text-xs">
                       {item.icon}
                     </div>
                     <div>
                       <h4 className="text-[0.83rem] font-bold text-[#0a0a0a] mb-1">{item.title}</h4>
                       <p className="text-[0.78rem] text-[#555] leading-relaxed">{item.text}</p>
                     </div>
                  </motion.div>
                ))}
              </div>
           </motion.div>

           {/* Roles Grid */}
           <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
           >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-[1.5px] bg-[var(--red)]" />
                <span className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[var(--red)]">
                  Who We Work With
                </span>
              </div>
              <h2 className="font-serif text-[1.4rem] text-[#0a0a0a] mb-5">
                Professionals Across Domains
              </h2>
              <div className="w-10 h-[3px] bg-[var(--red)] mb-10" />

              <div className="grid grid-cols-2 gap-2">
                 {[
                   "Software Development", "Cloud (AWS/Azure/GCP)", "DevOps & Automation",
                   "AI / Machine Learning", "Cybersecurity", "Blockchain",
                   "Operations & Business", "Marketing & Growth", "Compliance & Risk",
                   "Data Engineering"
                 ].map((role, i) => (
                    <div
                      key={i}
                      className="p-4 border border-[#dedbd6] text-[0.8rem] font-semibold text-[#1a1917] hover:bg-[#0a0a0a] hover:text-white hover:border-[#0a0a0a] transition-all cursor-default flex items-center gap-2 group"
                    >
                      <span className="text-[var(--red)] text-[0.62rem] group-hover:text-white transition-colors">▸</span>
                      {role}
                    </div>
                 ))}
              </div>
              <p className="text-[0.74rem] text-[#888580] mt-4">
                Opportunities vary based on client requirements and availability.
              </p>
           </motion.div>
        </div>
      </section>

      {/* ───── APPLICATION STEPS ───── */}
      <section className="bg-[#f2f1ef] py-24 px-[4%]">
         <div className="max-w-3xl mx-auto">
            <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="text-center mb-12"
            >
               <div className="text-[0.63rem] font-bold tracking-[0.22em] uppercase text-[var(--red)] mb-3">How to Apply</div>
               <h2 className="font-serif text-[1.75rem] text-[#0a0a0a] mb-5">Ready to Join Us?</h2>
               <div className="w-10 h-[3px] bg-[var(--red)] mx-auto" />
            </motion.div>

            <div className="flex flex-col gap-2.5">
               {[
                 { num: "1", title: "Prepare Your Profile", text: "Updated resume, primary skill set, years of experience, and preferred role type (IT / Non-IT)." },
                 { num: "2", title: "Share Your Availability", text: "Let us know your availability and preferred engagement type (full-time, part-time, contract)." },
                 { num: "3", title: "Send Your Application", text: "Email your profile to careers@talenopia.com with a brief introduction about yourself." },
                 { num: "4", title: "We'll Reach Out", text: "Our team reviews your details and reaches out if there's a suitable match for your profile." }
               ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-5 p-6 bg-white border border-[#dedbd6] hover:border-[var(--red)] transition-colors"
                  >
                     <div className="font-display text-[1.4rem] text-[var(--red)] leading-none shrink-0 w-8 pt-1">
                       {step.num}
                     </div>
                     <div>
                        <h4 className="text-[0.86rem] font-bold text-[#0a0a0a] mb-1">{step.title}</h4>
                        <p className="text-[0.78rem] text-[#555]">{step.text}</p>
                     </div>
                  </motion.div>
               ))}
            </div>

            <div className="text-center mt-12">
               <Link
                 href="mailto:careers@talenopia.com"
                 className="bg-[#0a0a0a] text-white px-10 py-4 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-[var(--red)] transition-all inline-flex items-center gap-2"
               >
                 careers@talenopia.com
               </Link>
               <p className="text-[0.76rem] text-[#888580] mt-4">
                 We value professionalism, commitment, and expertise.
               </p>
            </div>
         </div>
      </section>

      {/* ───── CTA ───── */}
      <div className="bg-[var(--red)] py-20 px-[4%] text-center border-t border-[var(--red)]/20">
         <motion.h2
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="font-display text-[clamp(1.8rem,4vw,3.2rem)] text-white leading-tight mb-8"
         >
           Believe in Delivering Quality Work? Let&apos;s Talk.
         </motion.h2>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
         >
           <Link
             href="mailto:careers@talenopia.com"
             className="border border-white text-[var(--red)] bg-white px-8 py-3.5 text-[0.75rem] font-bold tracking-[0.12em] uppercase hover:bg-white/90 transition-all inline-flex items-center gap-2"
           >
             Email Your Profile
           </Link>
         </motion.div>
      </div>
    </div>
  );
}
